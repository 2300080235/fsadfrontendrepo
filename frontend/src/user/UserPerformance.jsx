import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';
import { useAuth } from '../contextapi/AuthContext';

export default function UserPerformance() {
  const { user } = useAuth();
  const [performance, setPerformance] = useState({
    monthlyUpdates: [],
    salary: 75000, // Fixed salary
    attendance: 0,
    totalDays: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Function to generate random performance data
  const generateRandomPerformance = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June'];
    const monthlyUpdates = months.map(month => ({
      month,
      performance: Math.floor(Math.random() * (95 - 75) + 75) // Random value between 75 and 95
    }));

    const totalDays = 25; // Assuming a month has 25 working days
    const attendance = Math.floor(Math.random() * (totalDays - 18) + 18); // Random attendance between 18 and 25 days

    return {
      monthlyUpdates,
      salary: 75000, // Keep salary constant
      attendance,
      totalDays
    };
  };

  useEffect(() => {
    const fetchPerformance = async () => {
      try {
        // Generate new random performance data on each refresh
        const performanceData = generateRandomPerformance();
        setPerformance(performanceData);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch performance data');
        setLoading(false);
      }
    };

    fetchPerformance();
  }, []); // Empty dependency array means this runs once on mount

  const wrapperStyles = {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)',
    paddingTop: '80px',
    paddingBottom: '40px',
    boxSizing: 'border-box'
  };

  const containerStyles = {
    maxWidth: '1200px',
    width: '100%',
    padding: '2rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    margin: '0 auto'
  };

  const cardStyles = {
    background: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '20px',
    padding: '2rem',
    boxShadow: '0 8px 32px rgba(26, 35, 126, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 12px 40px rgba(26, 35, 126, 0.15)'
    }
  };

  const titleStyles = {
    color: '#1a237e',
    fontSize: '1.8rem',
    fontWeight: '600',
    marginBottom: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem'
  };

  const progressBarStyles = {
    width: '100%',
    height: '12px',
    background: '#e0e0e0',
    borderRadius: '6px',
    overflow: 'hidden',
    marginTop: '1rem'
  };

  const progressFillStyles = (percentage) => ({
    width: `${percentage}%`,
    height: '100%',
    background: 'linear-gradient(90deg, #1a237e, #3949ab)',
    borderRadius: '6px',
    transition: 'width 0.5s ease'
  });

  const statValueStyles = {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#1a237e',
    marginTop: '1rem'
  };

  const statLabelStyles = {
    fontSize: '1rem',
    color: '#666',
    marginTop: '0.5rem'
  };

  const monthlyUpdateStyles = {
    marginTop: '1.5rem'
  };

  const updateItemStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.8rem 0',
    borderBottom: '1px solid #eee'
  };

  if (loading) {
    return (
      <div style={wrapperStyles}>
        <div style={cardStyles}>Loading performance data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={wrapperStyles}>
        <div style={cardStyles}>{error}</div>
      </div>
    );
  }

  return (
    <div style={wrapperStyles}>
      <div style={containerStyles}>
        {/* Monthly Performance Card */}
        <div style={cardStyles}>
          <h3 style={titleStyles}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            Monthly Performance
          </h3>
          <div style={monthlyUpdateStyles}>
            {performance.monthlyUpdates.map((update, index) => (
              <div key={index} style={updateItemStyles}>
                <span>{update.month}</span>
                <div style={{ width: '60%' }}>
                  <div style={progressBarStyles}>
                    <div style={progressFillStyles(update.performance)}></div>
                  </div>
                  <span style={{ fontSize: '0.9rem', color: '#666' }}>{update.performance}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Salary Card */}
        <div style={cardStyles}>
          <h3 style={titleStyles}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 6v6l4 2"></path>
            </svg>
            Current Salary
          </h3>
          <div style={statValueStyles}>
            ${performance.salary.toLocaleString()}
          </div>
          <div style={statLabelStyles}>Annual Salary</div>
        </div>

        {/* Attendance Card */}
        <div style={cardStyles}>
          <h3 style={titleStyles}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            Attendance
          </h3>
          <div style={statValueStyles}>
            {performance.attendance}/{performance.totalDays}
          </div>
          <div style={statLabelStyles}>Days Present / Total Days</div>
          <div style={progressBarStyles}>
            <div style={progressFillStyles((performance.attendance / performance.totalDays) * 100)}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
