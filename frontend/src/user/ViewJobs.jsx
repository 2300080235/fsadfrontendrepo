import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';
import { useAuth } from '../contextapi/AuthContext';

export default function ViewTasks() {
  const [jobs, setJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      setError('Please log in to view jobs');
      setLoading(false);
      return;
    }
    fetchJobs();
    fetchAppliedJobs();
  }, [user]);

  const fetchJobs = async () => {
    try {
      const response = await axios.get(`${config.url}/user/jobs`);
      setJobs(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch jobs: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchAppliedJobs = async () => {
    if (!user || !user.id) return;
    try {
      const response = await axios.get(`${config.url}/user/appliedjobs/${user.id}`);
      setAppliedJobs(response.data);
    } catch (err) {
      console.error('Failed to fetch applied jobs:', err);
    }
  };

  const handleApply = async () => {
    if (!user || !user.id) {
      alert('Please log in to apply for jobs');
      return;
    }

    try {
      // Check if job has vacancies
      const job = jobs.find(j => j.id === selectedJobId);
      if (job.vacancies <= 0) {
        alert('Sorry, this job has no vacancies left.');
        setShowConfirmation(false);
        return;
      }

      // Create job application data
      const jobApplication = {
        job: { id: selectedJobId },
        user: { id: user.id },
        applicationDate: new Date().toISOString().split('T')[0],
        status: 'pending'
      };

      // Apply for the job
      const response = await axios.post(`${config.url}/user/applyjob`, jobApplication);

      if (response.data) {
        alert('Successfully applied for the job!');
        setJobs(jobs.map(job => 
          job.id === selectedJobId 
            ? { ...job, vacancies: job.vacancies - 1 }
            : job
        ));
        fetchAppliedJobs();
        setShowConfirmation(false);
      }
    } catch (err) {
      alert('Failed to apply for job: ' + err.message);
      setShowConfirmation(false);
    }
  };

  const openApplyConfirmation = (jobId) => {
    setSelectedJobId(jobId);
    setShowConfirmation(true);
  };

  const hasActiveApplication = () => {
    return appliedJobs.some(app =>
      app.status.toLowerCase() === 'pending' || app.status.toLowerCase() === 'accepted'
    );
  };

  const isJobApplied = (jobId) => {
    // Returns true if the user has any application for this job
    return appliedJobs.some(app => app.job.id === jobId);
  };

  const getJobStatus = (jobId) => {
    const application = appliedJobs.find(app => app.job.id === jobId);
    if (application) {
      return application.status.charAt(0).toUpperCase() + application.status.slice(1);
    }
    return null;
  };

  const getButtonStyles = (jobId) => {
    if (isJobApplied(jobId)) {
      return {
        ...applyButtonStyles,
        background: "linear-gradient(135deg, #78909c 0%, #607d8b 100%)",
        cursor: "default"
      };
    }
    return applyButtonStyles;
  };

  const wrapperStyles = {
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)",
    paddingTop: "80px",
    boxSizing: "border-box",
  };

  const titleStyles = {
    textAlign: "center",
    color: "#1a237e",
    fontSize: "2rem",
    fontWeight: "600",
    marginBottom: "2rem",
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "-10px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "60px",
      height: "3px",
      background: "linear-gradient(90deg, #1a237e, #3949ab)",
      borderRadius: "2px"
    }
  };

  const tableStyles = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
    background: "#fff",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
  };

  const thStyles = {
    background: "linear-gradient(135deg, #1a237e 0%, #3949ab 100%)",
    color: "#fff",
    padding: "15px",
    textAlign: "left",
    fontWeight: "500",
    fontSize: "0.95rem"
  };

  const tdStyles = {
    padding: "15px",
    borderBottom: "1px solid #eee",
    color: "#333",
    fontSize: "0.9rem"
  };

  const trStyles = {
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#f5f5f5"
    }
  };

  const applyButtonStyles = {
    background: "linear-gradient(135deg, #2196f3 0%, #1976d2 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "8px 16px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(33,150,243,0.2)"
    }
  };

  const errorStyles = {
    textAlign: "center",
    fontSize: "1.1rem",
    fontWeight: "500",
    color: "#c62828",
    padding: "20px",
    background: "#ffebee",
    borderRadius: "8px",
    marginTop: "20px"
  };

  const noDataStyles = {
    textAlign: "center",
    fontSize: "1.1rem",
    fontWeight: "500",
    color: "#666",
    padding: "20px",
    background: "#f5f5f5",
    borderRadius: "8px",
    marginTop: "20px"
  };

  const confirmationDialogStyles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
    zIndex: 1000,
    textAlign: 'center',
    minWidth: '300px'
  };

  const overlayStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 999
  };

  const buttonContainerStyles = {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    marginTop: '1.5rem'
  };

  const confirmButtonStyles = {
    background: "linear-gradient(135deg, #2196f3 0%, #1976d2 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "8px 16px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(33,150,243,0.2)"
    }
  };

  const cancelButtonStyles = {
    background: '#f5f5f5',
    color: '#333',
    border: '1px solid #ddd',
    borderRadius: '4px',
    padding: '8px 16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    "&:hover": {
      backgroundColor: '#e0e0e0',
      transform: 'translateY(-2px)'
    }
  };

  if (loading) {
    return (
      <div style={wrapperStyles}>
        <p style={noDataStyles}>Loading jobs...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div style={wrapperStyles}>
        <p style={errorStyles}>Please log in to view jobs</p>
      </div>
    );
  }

  return (
    <div style={wrapperStyles}>
      <h3 style={titleStyles}>All Tasks</h3>
      {error ? (
        <p style={errorStyles}>{error}</p>
      ) : jobs.length === 0 ? (
        <p style={noDataStyles}>No Jobs Available</p>
      ) : (
        <table style={tableStyles}>
          <thead>
            <tr>
              <th style={thStyles}>ID</th>
              <th style={thStyles}>Title</th>
              <th style={thStyles}>Description</th>
              <th style={thStyles}>Location</th>
              <th style={thStyles}>Category</th>
              <th style={thStyles}>Group Number</th>
              <th style={thStyles}>Salary</th>
              <th style={thStyles}>Action</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id} style={trStyles}>
                <td style={tdStyles}>{job.id}</td>
                <td style={tdStyles}>{job.title}</td>
                <td style={tdStyles}>{job.description}</td>
                <td style={tdStyles}>{job.location}</td>
                <td style={tdStyles}>{job.category}</td>
                <td style={tdStyles}>{job.vacancies}</td>
                <td style={tdStyles}>{job.salary}</td>
                <td style={tdStyles}>
                  <button
                    style={isJobApplied(job.id) ? {
                      ...applyButtonStyles,
                      background: "linear-gradient(135deg, #78909c 0%, #607d8b 100%)",
                      cursor: "default"
                    } : applyButtonStyles}
                    onClick={() => openApplyConfirmation(job.id)}
                    disabled={job.vacancies <= 0 || isJobApplied(job.id)}
                  >
                    {isJobApplied(job.id) ? 'Applied' : 'Apply'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {showConfirmation && (
        <>
          <div style={overlayStyles} onClick={() => setShowConfirmation(false)} />
          <div style={confirmationDialogStyles}>
            <h3>Confirm Application</h3>
            <p>Are you sure you want to apply for this job?</p>
            <div style={buttonContainerStyles}>
              <button 
                style={confirmButtonStyles}
                onClick={handleApply}
              >
                Yes, Apply
              </button>
              <button 
                style={cancelButtonStyles}
                onClick={() => setShowConfirmation(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
