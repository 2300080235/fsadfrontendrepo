import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';
import { useAuth } from '../contextapi/AuthContext';

export default function ViewAppliedJobs() {
  const [applications, setApplications] = useState([]);
  const [error, setError] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    if (user && user.id) {
      console.log('User ID:', user.id);
      fetchApplications();
    }
  }, [user]);

  const fetchApplications = async () => {
    try {
      const response = await axios.get(`${config.url}/user/appliedjobs/${user.id}`);
      console.log('Fetched applications:', response.data);
      setApplications(response.data);
      setError('');
    } catch (err) {
      console.error('Error fetching applications:', err);
      setError('Failed to fetch applications: ' + err.message);
    }
  };

  const handleQuitJob = async () => {
    try {
      console.log('Attempting to quit job:', selectedJobId);
      console.log('User ID:', user.id);
      const response = await axios.post(`${config.url}/user/quitjob`, {
        job: { id: selectedJobId },
        user: { id: user.id },
        status: 'quit'
      });

      console.log('Quit job response:', response.data);
      if (response.data) {
        console.log('Successfully quit job:', response.data);
        setShowConfirmation(false);
        setSelectedJobId(null);
        fetchApplications();
      }
    } catch (err) {
      console.error('Error quitting job:', err);
      alert('Failed to quit job: ' + err.message);
      setShowConfirmation(false);
      setSelectedJobId(null);
    }
  };

  const openQuitConfirmation = (jobId) => {
    console.log('Opening quit confirmation for job:', jobId);
    setSelectedJobId(jobId);
    setShowConfirmation(true);
  };

  const wrapperStyles = {
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
    marginTop: "120px"
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

  const statusStyles = {
    padding: "4px 8px",
    borderRadius: "4px",
    fontSize: "0.9rem",
    fontWeight: "500"
  };

  const getStatusStyle = (status) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return { ...statusStyles, background: "#fff3e0", color: "#e65100" };
      case 'accepted':
        return { ...statusStyles, background: "#e8f5e9", color: "#2e7d32" };
      case 'rejected':
        return { ...statusStyles, background: "#ffebee", color: "#c62828" };
      case 'quit':
        return { ...statusStyles, background: "#f5f5f5", color: "#616161" };
      default:
        return { ...statusStyles, background: "#f5f5f5", color: "#616161" };
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
    minWidth: '300px',
    maxWidth: '400px'
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

  const quitButtonStyles = {
    background: "linear-gradient(135deg, #c62828 0%, #d32f2f 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "8px 16px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(198,40,40,0.2)"
    }
  };

  const warningIconStyles = {
    color: '#c62828',
    fontSize: '3rem',
    marginBottom: '1rem'
  };

  const warningTextStyles = {
    color: '#c62828',
    fontWeight: '500',
    marginBottom: '0.5rem'
  };

  const infoTextStyles = {
    color: '#666',
    fontSize: '0.9rem',
    marginTop: '0.5rem',
    lineHeight: '1.5'
  };

  return (
    <div style={wrapperStyles}>
      <h3 style={titleStyles}>My Tasks Applications</h3>
      {error ? (
        <p style={errorStyles}>{error}</p>
      ) : applications.length === 0 ? (
        <p style={noDataStyles}>No Applications Found</p>
      ) : (
        <table style={tableStyles}>
          <thead>
            <tr>
              <th style={thStyles}>Task Title</th>
              <th style={thStyles}>Company</th>
              <th style={thStyles}>Department</th>
              <th style={thStyles}>Emp Id</th>
              <th style={thStyles}>Status</th>
              <th style={thStyles}>Action</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application) => {
              console.log('Rendering application:', application);
              return (
                <tr key={application.id} style={trStyles}>
                  <td style={tdStyles}>{application.job.title}</td>
                  <td style={tdStyles}>{application.job.postedBy.companyName}</td>
                  <td style={tdStyles}>{application.job.location}</td>
                  <td style={tdStyles}>{application.job.salary}</td>
                  <td style={tdStyles}>
                    <span style={getStatusStyle(application.status)}>
                      {application.status}
                    </span>
                  </td>
                  <td style={tdStyles}>
                    {application.status.toLowerCase() === 'accepted' && (
                      <button 
                        style={quitButtonStyles}
                        onClick={() => openQuitConfirmation(application.job.id)}
                      >
                        Quit Task
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

      {showConfirmation && (
        <>
          <div style={overlayStyles} onClick={() => setShowConfirmation(false)} />
          <div style={confirmationDialogStyles}>
            <div style={warningIconStyles}>⚠️</div>
            <h3 style={warningTextStyles}>Confirm Job Quit</h3>
            <p>Are you absolutely sure you want to quit this job?</p>
            <p style={infoTextStyles}>
              This action cannot be undone. You will need to apply again if you want to return to this position.
              Please make sure you have completed any necessary handover procedures before quitting.
            </p>
            <div style={buttonContainerStyles}>
              <button 
                style={quitButtonStyles}
                onClick={handleQuitJob}
              >
                Yes, Quit Job
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
