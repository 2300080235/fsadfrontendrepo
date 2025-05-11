import { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';

export default function ViewPostedJobs() {
  const [jobs, setJobs] = useState([]);
  const employee = JSON.parse(sessionStorage.getItem('employee'));

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`${config.url}/employee/jobs/${employee.id}`);
        setJobs(response.data);
      } catch (error) {
        setJobs([]);
      }
    };
    if (employee && employee.id) fetchJobs();
  }, [employee]);

  const wrapperStyles = {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    boxSizing: "border-box",
    background: "none",
    margin: 0,
  };

  const containerStyles = {
    maxWidth: "1200px",
    width: "100%",
    background: "#fff",
    padding: "2.5rem",
    borderRadius: "15px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
    margin: "20px 0",
    position: "relative",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 6px 25px rgba(0,0,0,0.15)",
    },
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
    marginTop: "2rem",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  };

  const thStyles = {
    backgroundColor: "#1a237e",
    color: "#fff",
    padding: "1rem",
    textAlign: "left",
    fontWeight: "500",
    fontSize: "0.95rem",
    borderBottom: "2px solid #3949ab",
  };

  const tdStyles = {
    padding: "1rem",
    borderBottom: "1px solid #e0e0e0",
    color: "#37474f",
    fontSize: "0.95rem",
  };

  const trStyles = {
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  };

  const emptyMessageStyles = {
    textAlign: "center",
    padding: "2rem",
    color: "#666",
    fontSize: "1.1rem",
    fontStyle: "italic",
  };

  return (
    <div style={wrapperStyles}>
      <div style={containerStyles}>
        <h3 style={titleStyles}>My Posted Tasks</h3>  
        <table style={tableStyles}>
          <thead>
            <tr>
              <th style={thStyles}>Job ID</th>
              <th style={thStyles}>Title</th>
              <th style={thStyles}>Description</th>
              <th style={thStyles}>Department</th>
              <th style={thStyles}>Category</th>
              <th style={thStyles}>Group Id</th>
              <th style={thStyles}>Salary</th>
            </tr>
          </thead>
          <tbody>
            {jobs.length > 0 ? (
              jobs.map(job => (
                <tr key={job.id} style={trStyles}>
                  <td style={tdStyles}>{job.id}</td>
                  <td style={tdStyles}>{job.title}</td>
                  <td style={tdStyles}>{job.description}</td>
                  <td style={tdStyles}>{job.location}</td>
                  <td style={tdStyles}>{job.category}</td>
                  <td style={tdStyles}>{job.vacancies}</td>
                  <td style={tdStyles}>{job.salary}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" style={emptyMessageStyles}>
                  No jobs posted yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
