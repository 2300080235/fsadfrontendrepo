import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';

export default function ViewJobs() {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get(`${config.url}/admin/jobs`);
      setJobs(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch jobs: ' + err.message);
    }
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

  return (
    <div style={wrapperStyles}>
      <h3 style={titleStyles}>All Tasks</h3>
      {error ? (
        <p style={errorStyles}>{error}</p>
      ) : jobs.length === 0 ? (
        <p style={noDataStyles}>No Job Data Found</p>
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
              <th style={thStyles}>Posted By (Employee ID)</th>
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
                <td style={tdStyles}>{job.postedBy && job.postedBy.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
