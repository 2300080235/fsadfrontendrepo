import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config';
import { useAuth } from '../contextapi/AuthContext';

export default function UserLogin() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [captcha, setCaptcha] = useState({
    question: '',
    answer: null
  });
  const [captchaInput, setCaptchaInput] = useState('');

  const navigate = useNavigate();
  const { setIsUserLoggedIn } = useAuth();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Generate a new captcha
  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    setCaptcha({
      question: `What is ${a} + ${b}?`,
      answer: a + b
    });
    setCaptchaInput('');
  };

  // Generate captcha on mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleCaptchaChange = (e) => {
    setCaptchaInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (parseInt(captchaInput) !== captcha.answer) {
      setError('Captcha answer is incorrect. Please try again.');
      generateCaptcha();
      return;
    }
    try {
      const response = await axios.post(`${config.url}/user/login`, formData);
      if (response.status === 200) {
        setIsUserLoggedIn(true);
        sessionStorage.setItem('user', JSON.stringify(response.data));
        navigate('/userhome');
      } else {
        setMessage(response.data);
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data);
      } else {
        setError('An unexpected error occurred.');
      }
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
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "none",
  };

  const containerStyles = {
    maxWidth: "400px",
    width: "100%",
    background: "rgba(255, 255, 255, 0.85)",
    padding: "2.5rem 2rem",
    borderRadius: "18px",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
    transition: "transform 0.3s cubic-bezier(.25,.8,.25,1), box-shadow 0.3s cubic-bezier(.25,.8,.25,1)",
    margin: "20px 0",
    backdropFilter: "blur(8px)",
    border: "1px solid rgba(255,255,255,0.18)",
  };

  const titleStyles = {
    textAlign: "center",
    color: "#23395d",
    fontSize: "2.2rem",
    marginBottom: "2rem",
    fontWeight: "700",
    position: "relative",
    letterSpacing: "1px",
    fontFamily: "'Georgia', serif",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "-12px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "60px",
      height: "3px",
      background: "linear-gradient(90deg, #23395d, #406e8e)",
      borderRadius: "2px",
    },
  };

  const formGroupStyles = {
    marginBottom: "1.8rem",
    position: "relative",
    width: "100%",
  };

  const labelStyles = {
    display: "block",
    marginBottom: "0.5rem",
    color: "#23395d",
    fontSize: "1rem",
    fontWeight: "600",
    fontFamily: "'Georgia', serif",
  };

  const inputStyles = {
    width: "100%",
    height: "45px",
    padding: "0.75rem 1rem 0.75rem 2.8rem",
    border: "1.5px solid #b0b8c1",
    borderRadius: "10px",
    fontSize: "1rem",
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
    outline: "none",
    boxSizing: "border-box",
    background: "rgba(255,255,255,0.95)",
    color: "#23395d",
    fontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif",
    "&:focus": {
      borderColor: "#406e8e",
      boxShadow: "0 0 0 2px #a1c4fd55",
      background: "#f4f8fb",
    },
  };

  const buttonStyles = {
    width: "100%",
    height: "48px",
    padding: "0.75rem",
    background: "linear-gradient(90deg, #23395d 0%, #406e8e 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontSize: "1.1rem",
    fontWeight: "700",
    cursor: "pointer",
    transition: "all 0.25s cubic-bezier(.25,.8,.25,1)",
    marginTop: "1.5rem",
    letterSpacing: "1px",
    boxShadow: "0 2px 8px 0 rgba(64,110,142,0.10)",
    fontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif",
    "&:hover": {
      background: "linear-gradient(90deg, #406e8e 0%, #23395d 100%)",
      transform: "scale(1.05)",
      boxShadow: "0 6px 18px 0 rgba(64,110,142,0.18)",
    },
    "&:active": {
      transform: "scale(1)",
    },
  };

  const messageStyles = {
    textAlign: "center",
    padding: "0.75rem",
    borderRadius: "8px",
    marginBottom: "1rem",
    fontWeight: "500",
    transition: "all 0.3s ease",
    fontSize: "1rem",
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
    color: "#b0b8c1",
    transition: "color 0.3s ease",
    width: "20px",
    height: "20px",
  };

  return (
    <div style={wrapperStyles}>
      <div style={containerStyles}>
        <h3 style={titleStyles}>Employee Login</h3>
        {message ? (
          <p style={successMessageStyles}>{message}</p>
        ) : error ? (
          <p style={errorMessageStyles}>{error}</p>
        ) : null}
        
        <form onSubmit={handleSubmit}>
          <div style={formGroupStyles}>
            <label style={labelStyles}>Username</label>
            <div style={{ position: "relative" }}>
              <svg style={iconStyles} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={handleChange}
                required
                style={inputStyles}
              />
            </div>
          </div>

          <div style={formGroupStyles}>
            <label style={labelStyles}>Password</label>
            <div style={{ position: "relative" }}>
              <svg style={iconStyles} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
                style={inputStyles}
              />
            </div>
          </div>

          <div style={formGroupStyles}>
            <label style={labelStyles}>Captcha: {captcha.question}</label>
            <input
              type="text"
              value={captchaInput}
              onChange={handleCaptchaChange}
              required
              style={inputStyles}
              placeholder="Enter answer"
            />
          </div>

          <button type="submit" style={buttonStyles}>Login</button>
        </form>
      </div>
    </div>
  );
}
