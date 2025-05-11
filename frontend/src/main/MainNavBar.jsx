import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Home from './Home';
import About from './About';
import './style.css';
import UserLogin from './../user/UserLogin';
import Register from './../user/Register';
import Contact from './Contact';
import AdminLogin from './../admin/AdminLogin';
import EmployeeLogin from '../employee/EmployeeLogin';
import NotFound from './NotFound';

export default function MainNavBar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const navStyles = {
    background: 'linear-gradient(90deg, #005bea 0%, #3a7bd5 100%)',
    boxShadow: '0 4px 16px rgba(58, 123, 213, 0.15)',
    padding: '1rem 2rem',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '0 0 18px 18px',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
  };

  const logoStyles = {
    fontSize: '1.7rem',
    fontWeight: 'bold',
    color: '#fff',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    textShadow: '1px 2px 8px #1e40af55',
    fontFamily: 'Georgia, serif',
    letterSpacing: '1.5px',
    cursor: 'pointer',
  };

  const navLinksStyles = {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: '2rem',
    alignItems: 'center',
  };

  const linkStyles = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.05rem',
    fontWeight: '500',
    transition: 'all 0.25s cubic-bezier(.25,.8,.25,1)',
    cursor: 'pointer',
    padding: '0.5rem 1.1rem',
    borderRadius: '0.5rem',
    position: 'relative',
    background: 'transparent',
    boxShadow: 'none',
    outline: 'none',
    border: 'none',
    fontFamily: 'inherit',
    letterSpacing: '0.5px',
    '&:hover': {
      color: '#2563eb',
      backgroundColor: 'rgba(255,255,255,0.18)',
      boxShadow: '0 2px 8px 0 #2563eb22',
      textDecoration: 'none',
    },
  };

  const dropdownStyles = {
    position: 'relative',
    cursor: 'pointer',
  };

  const dropdownMenuStyles = {
    position: 'absolute',
    top: '100%',
    right: 0,
    background: 'linear-gradient(90deg, #2563eb 0%, #1e40af 100%)',
    boxShadow: '0 8px 24px rgba(30, 64, 175, 0.18)',
    borderRadius: '0.7rem',
    padding: '0.5rem 0',
    minWidth: '170px',
    display: showDropdown ? 'block' : 'none',
    zIndex: 1001,
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.12)',
    marginTop: '0.5rem',
  };

  const dropdownItemStyles = {
    padding: '0.85rem 1.2rem',
    color: '#fff',
    textDecoration: 'none',
    display: 'block',
    transition: 'all 0.25s cubic-bezier(.25,.8,.25,1)',
    fontSize: '1rem',
    border: 'none',
    background: 'transparent',
    borderRadius: '0.5rem',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.18)',
      color: '#2563eb',
      boxShadow: '0 2px 8px 0 #2563eb22',
    },
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">Employee Management System</div>
        <ul className="navbar-links">
          <li><Link to="/" className="navbar-link">Home</Link></li>
          <li><Link to="/about" className="navbar-link">About</Link></li>
          <li><Link to="/register" className="navbar-link">Register</Link></li>
          <li className="navbar-dropdown">
            <span className="navbar-link" tabIndex={0}>Login ▾</span>
            <ul className="navbar-dropdown-menu">
              <li><Link to="/userlogin" className="navbar-dropdown-item">Employee</Link></li>
              <li><Link to="/employeelogin" className="navbar-dropdown-item">HR Manager</Link></li>
              <li><Link to="/adminlogin" className="navbar-dropdown-item">Admin</Link></li>
            </ul>
          </li>
          <li><Link to="/contact" className="navbar-link">Contact</Link></li>
        </ul>
      </nav>

      <div style={{ marginTop: '80px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/employeelogin" element={<EmployeeLogin />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
