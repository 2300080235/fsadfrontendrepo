import { useState } from 'react';
import axios from 'axios';
import config from '../config';

export default function AddTask() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    category: '',
    vacancies: '',
    salary: '',
    postedBy: '' // Employee ID
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Format the data to match backend expectations
      const jobData = {
        title: formData.title,
        description: formData.description,
        location: formData.location,
        category: formData.category,
        vacancies: parseInt(formData.vacancies),
        salary: parseFloat(formData.salary),
        postedBy: {
          id: parseInt(formData.postedBy)
        }
      };

      const response = await axios.post(`${config.url}/admin/addjob`, jobData);
      if (response.status === 200) {
        setMessage(response.data);
        setError(''); // Clear any existing error
        setFormData({
          title: '',
          description: '',
          location: '',
          category: '',
          vacancies: '',
          salary: '',
          postedBy: ''
        });
      }
    } catch (error) {
      setMessage('');
      setError(error.response?.data || "Failed to create job. Please try again.");
    }
  };

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
    maxWidth: "500px",
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

  const formGroupStyles = {
    marginBottom: "1.8rem",
    position: "relative",
    width: "100%",
  };

  const labelStyles = {
    display: "block",
    marginBottom: "0.5rem",
    color: "#37474f",
    fontSize: "0.95rem",
    fontWeight: "500",
  };

  const inputStyles = {
    width: "100%",
    height: "45px",
    padding: "0.75rem 1rem 0.75rem 2.8rem",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    fontSize: "1rem",
    transition: "all 0.3s ease",
    outline: "none",
    boxSizing: "border-box",
    "&:focus": {
      borderColor: "#1a237e",
      boxShadow: "0 0 0 2px rgba(26,35,126,0.1)",
    },
  };

  const textareaStyles = {
    ...inputStyles,
    height: "120px",
    padding: "0.75rem 1rem",
    resize: "vertical",
  };

  const buttonStyles = {
    background: "linear-gradient(135deg, #1a237e 0%, #3949ab 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "8px 16px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginTop: "1.5rem",
    fontWeight: "600",
    fontSize: "1rem",
    width: "100%",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(26,35,126,0.2)",
    },
    "&:active": {
      transform: "translateY(0)",
    },
  };

  const messageStyles = {
    textAlign: "center",
    padding: "0.75rem",
    borderRadius: "8px",
    marginBottom: "1rem",
    fontWeight: "500",
    transition: "all 0.3s ease",
  };

  const successMessageStyles = {
    ...messageStyles,
    backgroundColor: "#e8f5e9",
    color: "#2e7d32",
  };

  const errorMessageStyles = {
    ...messageStyles,
    backgroundColor: "#ffebee",
    color: "#c62828",
  };

  const iconStyles = {
    position: "absolute",
    left: "1rem",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#9e9e9e",
    transition: "color 0.3s ease",
    width: "20px",
    height: "20px",
  };

  return (
    <div style={wrapperStyles}>
      <div style={containerStyles}>
        <h3 style={titleStyles}>Add Task</h3>
        {message ? (
          <p style={successMessageStyles}>{message}</p>
        ) : error ? (
          <p style={errorMessageStyles}>{error}</p>
        ) : null}
        
        <form onSubmit={handleSubmit}>
          <div style={formGroupStyles}>
            <label style={labelStyles}>Task Title</label>
            <div style={{ position: "relative" }}>
              <svg style={iconStyles} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
              <input type="text" id="title" value={formData.title} onChange={handleChange} required style={inputStyles} />
            </div>
          </div>

          <div style={formGroupStyles}>
            <label style={labelStyles}>Description</label>
            <textarea id="description" value={formData.description} onChange={handleChange} required style={textareaStyles} />
          </div>

          <div style={formGroupStyles}>
            <label style={labelStyles}>Location</label>
            <div style={{ position: "relative" }}>
              <svg style={iconStyles} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <input type="text" id="location" value={formData.location} onChange={handleChange} required style={inputStyles} />
            </div>
          </div>

          <div style={formGroupStyles}>
            <label style={labelStyles}>Category</label>
            <div style={{ position: "relative" }}>
              <svg style={iconStyles} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
              <input type="text" id="category" value={formData.category} onChange={handleChange} required style={inputStyles} />
            </div>
          </div>

          <div style={formGroupStyles}>
            <label style={labelStyles}>Group Number</label>
            <div style={{ position: "relative" }}>
              <svg style={iconStyles} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <input type="number" id="vacancies" value={formData.vacancies} onChange={handleChange} required style={inputStyles} />
            </div>
          </div>

          <div style={formGroupStyles}>
            <label style={labelStyles}>Salary</label>
            <div style={{ position: "relative" }}>
              <svg style={iconStyles} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
              <input type="number" id="salary" value={formData.salary} onChange={handleChange} required style={inputStyles} />
            </div>
          </div>

          <div style={formGroupStyles}>
            <label style={labelStyles}>Task Assigned to (Employee ID)</label>
            <div style={{ position: "relative" }}>
              <svg style={iconStyles} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <input type="number" id="postedBy" value={formData.postedBy} onChange={handleChange} required style={inputStyles} />
            </div>
          </div>

          <button type="submit" style={buttonStyles}>Add Task</button>
        </form>
      </div>
    </div>
  );
}
