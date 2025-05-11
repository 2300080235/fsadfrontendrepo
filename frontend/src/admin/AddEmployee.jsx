import { useState } from 'react';
import axios from 'axios';
import config from '../config';

export default function AddHRManager() {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    dob: '',
    email: '',
    username: '',
    password: '',
    mobileno: '',
    companyName: '',
    companyLocation: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
  };

  const handleCase = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.toUpperCase()});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/admin/addemployee`, formData);
      if (response.status === 200) {
        setMessage(response.data);
        setFormData({
          name: '',
          gender: '',
          dob: '',
          email: '',
          username: '',
          password: '',
          mobileno: '',
          companyName: '',
          companyLocation: ''
        });
      }
    } catch (error) {
      setMessage("");
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
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
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

  const selectStyles = {
    ...inputStyles,
    appearance: "none",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%2337474f' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 1rem center",
    paddingRight: "2.5rem",
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
        <h3 style={titleStyles}>Add HR Manager</h3>
        {message ? (
          <p style={successMessageStyles}>{message}</p>
        ) : error ? (
          <p style={errorMessageStyles}>{error}</p>
        ) : null}
        
        <form onSubmit={handleSubmit}>
          <div style={formGroupStyles}>
            <label style={labelStyles}>Full Name</label>
            <div style={{ position: "relative" }}>
              <svg style={iconStyles} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <input type="text" id="name" value={formData.name} onChange={handleChange} onKeyUp={handleCase} required style={inputStyles} />
            </div>
          </div>

          <div style={formGroupStyles}>
            <label style={labelStyles}>Gender</label>
            <select id="gender" value={formData.gender} onChange={handleChange} required style={selectStyles}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div style={formGroupStyles}>
            <label style={labelStyles}>Date of Birth</label>
            <div style={{ position: "relative" }}>
              <svg style={iconStyles} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <input type="date" id="dob" value={formData.dob} onChange={handleChange} required style={inputStyles} />
            </div>
          </div>

          <div style={formGroupStyles}>
            <label style={labelStyles}>Email</label>
            <div style={{ position: "relative" }}>
              <svg style={iconStyles} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <input type="email" id="email" value={formData.email} onChange={handleChange} required style={inputStyles} />
            </div>
          </div>

          <div style={formGroupStyles}>
            <label style={labelStyles}>Username</label>
            <div style={{ position: "relative" }}>
              <svg style={iconStyles} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <input type="text" id="username" value={formData.username} onChange={handleChange} required style={inputStyles} />
            </div>
          </div>

          <div style={formGroupStyles}>
            <label style={labelStyles}>Password</label>
            <div style={{ position: "relative" }}>
              <svg style={iconStyles} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <input type="password" id="password" value={formData.password} onChange={handleChange} required style={inputStyles} />
            </div>
          </div>

          <div style={formGroupStyles}>
            <label style={labelStyles}>Mobile No</label>
            <div style={{ position: "relative" }}>
              <svg style={iconStyles} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <input type="number" id="mobileno" value={formData.mobileno} onChange={handleChange} required style={inputStyles} />
            </div>
          </div>

          <div style={formGroupStyles}>
            <label style={labelStyles}>Company Name</label>
            <div style={{ position: "relative" }}>
              <svg style={iconStyles} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
              <input type="text" id="companyName" value={formData.companyName} onChange={handleChange} required style={inputStyles} />
            </div>
          </div>

          <div style={formGroupStyles}>
            <label style={labelStyles}>Company Location</label>
            <div style={{ position: "relative" }}>
              <svg style={iconStyles} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <input type="text" id="companyLocation" value={formData.companyLocation} onChange={handleChange} required style={inputStyles} />
            </div>
          </div>

          <button type="submit" style={buttonStyles}>Add HR Manager</button>
        </form>
      </div>
    </div>
  );
}