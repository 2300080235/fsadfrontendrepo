import { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";

export default function ViewEmployees() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const displayUsers = async () => {
    try {
      const response = await axios.get(`${config.url}/admin/users`);
      setUsers(response.data);
    } catch (err) {
      setError("Failed to fetch users data ... " + err.message);
    }
  };

  useEffect(() => {
    displayUsers();
  }, []);

  const deleteUser = async (uid) => {
    try {
      const response = await axios.delete(`${config.url}/admin/deleteuser?uid=${uid}`);
      alert(response.data);
      displayUsers();
    } catch (err) {
      setError("Unexpected Error Occurred... " + err.message);
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

  const deleteButtonStyles = {
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
      <h3 style={titleStyles}>View All Employees</h3>
      {error ? (
        <p style={errorStyles}>{error}</p>
      ) : users.length === 0 ? (
        <p style={noDataStyles}>No User Data Found</p>
      ) : (
        <table style={tableStyles}>
          <thead>
            <tr>
              <th style={thStyles}>ID</th>
              <th style={thStyles}>Name</th>
              <th style={thStyles}>Gender</th>
              <th style={thStyles}>DOB</th>
              <th style={thStyles}>Email</th>
              <th style={thStyles}>Username</th>
              <th style={thStyles}>Mobile No</th>
              <th style={thStyles}>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} style={trStyles}>
                <td style={tdStyles}>{user.id}</td>
                <td style={tdStyles}>{user.name}</td>
                <td style={tdStyles}>{user.gender}</td>
                <td style={tdStyles}>{user.dob}</td>
                <td style={tdStyles}>{user.email}</td>
                <td style={tdStyles}>{user.username}</td>
                <td style={tdStyles}>{user.mobileno}</td>
                <td style={tdStyles}>
                  <button 
                    style={deleteButtonStyles}
                    onClick={() => { deleteUser(user.id) }}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}