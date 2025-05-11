import { useState } from 'react';
import axios from 'axios';
import config from '../config';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    dob: '',
    email: '',
    username: '',
    password: '',
    mobileno: '',
    location: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/user/register`, formData);
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
          location: ''
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
    alignItems: "flex-start",
    justifyContent: "center",
    padding: "20px",
    boxSizing: "border-box",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `url('/bg.jpg') no-repeat center center fixed`,
    backgroundSize: "cover",
    paddingTop: "80px",
    overflowY: "auto",
    zIndex: 1,
  };

  const containerStyles = {
    maxWidth: "500px",
    width: "100%",
    background: "rgba(30, 32, 60, 0.75)",
    padding: "3rem",
    borderRadius: "24px",
    boxShadow: "0 8px 40px 0 rgba(0,0,0,0.45), 0 1.5px 8px 0 rgba(80,0,200,0.15)",
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
    margin: "32px 0",
    backdropFilter: "blur(16px)",
    border: "1.5px solid rgba(255,255,255,0.12)",
    zIndex: 2,
  };

  const titleStyles = {
    textAlign: "center",
    color: "#fff",
    fontSize: "2.5rem",
    marginBottom: "2.5rem",
    fontWeight: "800",
    position: "relative",
    textTransform: "uppercase",
    letterSpacing: "2px",
    textShadow: "0 2px 16px #2e1a47, 0 1px 2px #000",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "-15px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "80px",
      height: "4px",
      background: "linear-gradient(90deg, #7f53ac, #647dee)",
      borderRadius: "2px",
    },
  };

  const formGroupStyles = {
    marginBottom: "2rem",
    position: "relative",
    width: "100%",
  };

  const labelStyles = {
    display: "block",
    marginBottom: "0.8rem",
    color: "#b2bfff",
    fontSize: "1.05rem",
    fontWeight: "600",
    letterSpacing: "0.5px",
    textShadow: "0 1px 4px #1a1a2e",
  };

  const inputStyles = {
    width: "100%",
    height: "50px",
    padding: "0.75rem 1rem 0.75rem 3rem",
    border: "2px solid #3a3a5a",
    borderRadius: "14px",
    fontSize: "1rem",
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
    outline: "none",
    boxSizing: "border-box",
    background: "rgba(40, 44, 80, 0.85)",
    color: "#fff",
    boxShadow: "0 1px 8px 0 rgba(80,0,200,0.08)",
    "&:focus": {
      borderColor: "#7f53ac",
      boxShadow: "0 0 0 3px rgba(100,125,222,0.18)",
      background: "rgba(60, 64, 120, 0.95)",
    },
  };

  const selectStyles = {
    ...inputStyles,
    appearance: "none",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23b2bfff' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 1rem center",
    paddingRight: "2.5rem",
  };

  const buttonStyles = {
    width: "100%",
    height: "55px",
    padding: "0.75rem",
    background: "linear-gradient(135deg, #7f53ac 0%, #647dee 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "14px",
    fontSize: "1.1rem",
    fontWeight: "700",
    cursor: "pointer",
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
    marginTop: "2rem",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    boxShadow: "0 2px 12px 0 rgba(100,125,222,0.18)",
    "&:hover": {
      transform: "translateY(-2px) scale(1.03)",
      boxShadow: "0 8px 24px 0 rgba(100,125,222,0.28)",
      background: "linear-gradient(135deg, #647dee 0%, #7f53ac 100%)",
    },
    "&:active": {
      transform: "translateY(0)",
    },
  };

  const messageStyles = {
    textAlign: "center",
    padding: "1rem",
    borderRadius: "12px",
    marginBottom: "1.5rem",
    fontWeight: "500",
    transition: "all 0.3s ease",
    fontSize: "1rem",
    boxShadow: "0 1px 8px 0 rgba(80,0,200,0.08)",
  };

  const successMessageStyles = {
    ...messageStyles,
    backgroundColor: "rgba(46, 213, 115, 0.12)",
    color: "#2ed573",
    border: "1px solid rgba(46, 213, 115, 0.18)",
    textShadow: "0 1px 4px #1a1a2e",
  };

  const errorMessageStyles = {
    ...messageStyles,
    backgroundColor: "rgba(255, 71, 87, 0.12)",
    color: "#ff4757",
    border: "1px solid rgba(255, 71, 87, 0.18)",
    textShadow: "0 1px 4px #1a1a2e",
  };

  const iconStyles = {
    position: "absolute",
    left: "1rem",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#b2bfff",
    transition: "color 0.3s ease",
    width: "22px",
    height: "22px",
    filter: "drop-shadow(0 0 4px #647dee88)",
  };

  return (
    <div style={wrapperStyles}>
      <div style={containerStyles}>
        <h3 style={titleStyles}>Employee Registration</h3>
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
              <input type="text" id="name" value={formData.name} onChange={handleChange} required style={inputStyles} />
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
            <label style={labelStyles}>Location</label>
            <div style={{ position: "relative" }}>
              <svg style={iconStyles} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <input type="text" id="location" value={formData.location} onChange={handleChange} required style={inputStyles} />
            </div>
          </div>

          <button type="submit" style={buttonStyles}>Register</button>
        </form>
      </div>
    </div>
  );
}
