import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';

export default function AdminHome() {
  const [userCount, setUserCount] = useState(0);
  const [employeeCount, setEmployeeCount] = useState(0);
  const [jobCount, setJobCount] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const userRes = await axios.get(`${config.url}/admin/usercount`);
        const employeeRes = await axios.get(`${config.url}/admin/employeecount`);
        const jobRes = await axios.get(`${config.url}/admin/jobcount`);
        setUserCount(userRes.data);
        setEmployeeCount(employeeRes.data);
        setJobCount(jobRes.data);
        setError('');
      } catch (error) {
        setError('Failed to fetch dashboard data: ' + error.message);
        console.error("Error fetching counts:", error);
      }
    };
    fetchCounts();
  }, []);

  const wrapperStyles = {
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
    marginTop: "120px"
  };

  const titleStyles = {
    textAlign: "center",
    color: "#1a237e",
    fontSize: "2.5rem",
    fontWeight: "600",
    marginBottom: "3rem",
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "-10px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "80px",
      height: "4px",
      background: "linear-gradient(90deg, #1a237e, #3949ab)",
      borderRadius: "2px"
    }
  };

  const statsContainerStyles = {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    marginTop: "40px",
    flexWrap: "wrap"
  };

  const statCardStyles = {
    backgroundColor: "#fff",
    borderRadius: "15px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    padding: "30px",
    width: "250px",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 25px rgba(0,0,0,0.15)"
    }
  };

  const statTitleStyles = {
    marginBottom: "15px",
    color: "#333",
    fontSize: "1.2rem",
    fontWeight: "500"
  };

  const statValueStyles = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    margin: "0"
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

  return (
    <div style={wrapperStyles}>
      <h2 style={titleStyles}>Admin Dashboard</h2>
      {error ? (
        <p style={errorStyles}>{error}</p>
      ) : (
        <div style={statsContainerStyles}>
          <div style={statCardStyles}>
            <h3 style={statTitleStyles}>Total Employees</h3>
            <p style={{...statValueStyles, color: "#1a237e"}}>{userCount}</p>
          </div>
          <div style={statCardStyles}>
            <h3 style={statTitleStyles}>Total HR Managers</h3>
            <p style={{...statValueStyles, color: "#2e7d32"}}>{employeeCount}</p>
          </div>
          <div style={statCardStyles}>
            <h3 style={statTitleStyles}>Total Tasks</h3>
            <p style={{...statValueStyles, color: "#c62828"}}>{jobCount}</p>
          </div>
        </div>
      )}
    </div>
  );
}