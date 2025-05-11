import { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';

export default function ViewApplications() {
  const [applications, setApplications] = useState([]);
  const employee = JSON.parse(sessionStorage.getItem('employee'));

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get(`${config.url}/employee/applications/${employee.id}`, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });
        setApplications(response.data);
      } catch (error) {
        console.error('Error fetching applications:', error);
        setApplications([]);
      }
    };
    if (employee && employee.id) fetchApplications();
  }, [employee]);

  const updateStatus = async (applicationId, status) => {
    try {
      const response = await axios.put(`${config.url}/employee/updateapplicationstatus`, null, {
        params: { id: applicationId, status },
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      alert(response.data);
      // Refresh applications
      const res = await axios.get(`${config.url}/employee/applications/${employee.id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      setApplications(res.data);
    } catch (err) {
      console.error('Error updating status:', err);
      alert('Failed to update application status');
    }
  };

  // Rest of the JSX remains unchanged
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
  };

  const buttonStyles = {
    padding: "8px 16px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    fontWeight: "500",
    fontSize: "0.9rem",
    transition: "all 0.3s ease",
    marginRight: "8px",
  };

  const acceptButtonStyles = {
    ...buttonStyles,
    background: "linear-gradient(135deg, #2e7d32 0%, #43a047 100%)",
    color: "#fff",
  };

  const rejectButtonStyles = {
    ...buttonStyles,
    background: "linear-gradient(135deg, #c62828 0%, #d32f2f 100%)",
    color: "#fff",
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
        <h3 style={titleStyles}>Applications for My Tasks</h3>
        <table style={tableStyles}>
          <thead>
            <tr>
              <th style={thStyles}>Task ID</th>
              <th style={thStyles}>Task Title</th>
              <th style={thStyles}>User Name</th>
              <th style={thStyles}>User Email</th>
              <th style={thStyles}>Status</th>
              <th style={thStyles}>Applied Time</th>
              <th style={thStyles}>Action</th>
            </tr>
          </thead>
          <tbody>
            {applications.length > 0 ? (
              applications.map((app, index) => (
                <tr key={index} style={trStyles}>
                  <td style={tdStyles}>{app.id}</td>
                  <td style={tdStyles}>{app.job && app.job.title}</td>
                  <td style={tdStyles}>{app.user && app.user.name}</td>
                  <td style={tdStyles}>{app.user && app.user.email}</td>
                  <td style={tdStyles}>{app.status}</td>
                  <td style={tdStyles}>{app.appliedTime && new Date(app.appliedTime).toLocaleString()}</td>
                  <td style={tdStyles}>
                    <button
                      onClick={() => updateStatus(app.id, 'ACCEPTED')}
                      style={acceptButtonStyles}
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => updateStatus(app.id, 'REJECTED')}
                      style={rejectButtonStyles}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" style={emptyMessageStyles}>
                  No applications found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}