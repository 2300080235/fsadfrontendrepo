import { useEffect, useState } from 'react';
import { useAuth } from '../contextapi/AuthContext';

export default function UserProfile() {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (user) {
      setProfile(user);
    }
  }, [user]);

  const wrapperStyles = {
    minHeight: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)',
    paddingTop: '80px',
    position: 'relative',
    overflow: 'hidden',
    boxSizing: 'border-box',
  };

  const floatingSVGStyles = {
    position: 'absolute',
    opacity: 0.1,
    zIndex: 0,
    animation: 'float 6s ease-in-out infinite',
  };

  const cardStyles = {
    background: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '24px',
    boxShadow: '0 8px 32px rgba(26, 35, 126, 0.1)',
    padding: '3rem',
    minWidth: '400px',
    maxWidth: '500px',
    width: '100%',
    textAlign: 'center',
    position: 'relative',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transform: 'translateY(0)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 12px 40px rgba(26, 35, 126, 0.15)',
    },
  };

  const titleStyles = {
    color: '#1a237e',
    fontSize: '2.5rem',
    fontWeight: 700,
    marginBottom: '2rem',
    letterSpacing: '0.5px',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-10px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '60px',
      height: '4px',
      background: 'linear-gradient(90deg, #2196f3, #1976d2)',
      borderRadius: '2px',
    },
  };

  const fieldContainerStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1.5rem',
    marginTop: '2rem',
  };

  const fieldStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    padding: '1rem',
    borderRadius: '12px',
    background: 'rgba(33, 150, 243, 0.05)',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'rgba(33, 150, 243, 0.1)',
      transform: 'translateX(5px)',
    },
  };

  const fieldLabel = {
    color: '#1976d2',
    fontWeight: 600,
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  };

  const fieldValue = {
    color: '#333',
    fontWeight: 500,
    fontSize: '1.1rem',
  };

  const editButtonStyles = {
    marginTop: '2rem',
    background: 'linear-gradient(135deg, #2196f3 0%, #1976d2 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: '12px',
    padding: '12px 32px',
    fontSize: '1.1rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(33, 150, 243, 0.2)',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 16px rgba(33, 150, 243, 0.3)',
    },
    '&:disabled': {
      background: '#ccc',
      cursor: 'not-allowed',
      transform: 'none',
      boxShadow: 'none',
    },
  };

  const keyframes = `
    @keyframes float {
      0% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(5deg); }
      100% { transform: translateY(0px) rotate(0deg); }
    }
  `;

  if (!profile) {
    return (
      <div style={wrapperStyles}>
        <style>{keyframes}</style>
        <div style={cardStyles}>Loading profile...</div>
      </div>
    );
  }

  return (
    <div style={wrapperStyles}>
      <style>{keyframes}</style>
      
      {/* Floating SVGs */}
      <svg style={{...floatingSVGStyles, top: '10%', left: '10%'}} width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#1a237e">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
      
      <svg style={{...floatingSVGStyles, top: '20%', right: '15%', animationDelay: '1s'}} width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#1976d2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
      
      <svg style={{...floatingSVGStyles, bottom: '15%', left: '20%', animationDelay: '2s'}} width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#2196f3">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 6v6l4 2"></path>
      </svg>

      <div style={cardStyles}>
        <div style={titleStyles}>Employee Profile</div>
        <div style={fieldContainerStyles}>
          {[
            { label: 'Name', value: profile.name },
            { label: 'Gender', value: profile.gender },
            { label: 'Date of Birth', value: profile.dob },
            { label: 'Email', value: profile.email },
            { label: 'Username', value: profile.username },
            { label: 'Mobile No', value: profile.mobileno },
            { label: 'Location', value: profile.location },
          ].map((field, index) => (
            <div key={index} style={fieldStyles}>
              <span style={fieldLabel}>{field.label}</span>
              <span style={fieldValue}>{field.value}</span>
            </div>
          ))}
        </div>
        <button style={editButtonStyles} disabled>Edit Profile</button>
      </div>
    </div>
  );
}
