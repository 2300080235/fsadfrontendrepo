import { useState } from 'react';
import axios from 'axios';
import config from '../config';

export default function PostJob() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    category: '',
    vacancies: '',
    salary: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const employee = JSON.parse(sessionStorage.getItem('employee'));

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const jobData = {
        ...formData,
        postedBy: { id: employee.id }
      };
      const response = await axios.post(`${config.url}/employee/addjob`, jobData);
      if (response.status === 200) {
        setMessage(response.data);
        setFormData({
          title: '',
          description: '',
          location: '',
          category: '',
          vacancies: '',
          salary: ''
        });
      }
    } catch (error) {
      setMessage('');
      setError(error.response ? error.response.data : "An unexpected error occurred.");
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
        <h3 style={titleStyles}>Post a Task</h3>
        {message ? (
          <p style={successMessageStyles}>{message}</p>
        ) : error ? (
          <p style={errorMessageStyles}>{error}</p>
        ) : null}
        
        <form onSubmit={handleSubmit}>
          <div style={formGroupStyles}>
            <label style={labelStyles}>Title</label>
            <div style={{ position: "relative" }}>
              <svg style={iconStyles} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 7h-7m0 0v7m0-7l7 7m-7-7H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-7"></path>
              </svg>
              <input
                type="text"
                id="title"
                value={formData.title}
                onChange={handleChange}
                required
                style={inputStyles}
                placeholder="Enter Task title"
              />
            </div>
          </div>

          <div style={formGroupStyles}>
            <label style={labelStyles}>Description</label>
            <div style={{ position: "relative" }}>
              <svg style={iconStyles} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              <textarea
                id="description"
                value={formData.description}
                onChange={handleChange}
                required
                style={textareaStyles}
                placeholder="Enter Task description"
              />
            </div>
          </div>

          <div style={formGroupStyles}>
            <label style={labelStyles}>Department</label>
            <div style={{ position: "relative" }}>
              <svg style={iconStyles} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <input
                type="text"
                id="location"
                value={formData.location}
                onChange={handleChange}
                required
                style={inputStyles}
                placeholder="Enter Department"
              />
            </div>
          </div>

          <div style={formGroupStyles}>
            <label style={labelStyles}>Category</label>
            <div style={{ position: "relative" }}>
              <svg style={iconStyles} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
              <input
                type="text"
                id="category"
                value={formData.category}
                onChange={handleChange}
                required
                style={inputStyles}
                placeholder="Enter job category"
              />
            </div>
          </div>

          <div style={formGroupStyles}>
            <label style={labelStyles}>Group Id </label>
            <div style={{ position: "relative" }}>
              <svg style={iconStyles} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <input
                type="number"
                id="vacancies"
                value={formData.vacancies}
                onChange={handleChange}
                required
                min="1"
                style={inputStyles}
                placeholder="Enter number of Group id"
              />
            </div>
          </div>

          <div style={formGroupStyles}>
            <label style={labelStyles}>Emp Id</label>
            <div style={{ position: "relative" }}>
              <svg style={iconStyles} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
              <input
                type="number"
                id="salary"
                value={formData.salary}
                onChange={handleChange}
                required
                min="0"
                style={inputStyles}
                placeholder="Enter Emp Id"
              />
            </div>
          </div>

          <button type="submit" style={buttonStyles}>Post Task</button>
        </form>
      </div>
    </div>
  );
}
