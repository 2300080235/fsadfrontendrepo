import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function EmployeeHome() {
  const [employee, setEmployee] = useState("");
  const [stats, setStats] = useState({
    tasksCompleted: 8,
    pendingTasks: 2,
    upcomingDeadlines: 1
  });
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmployee = sessionStorage.getItem('employee');
    if (storedEmployee) {
      setEmployee(JSON.parse(storedEmployee));
    }
    // Simulate fetching stats (replace with real fetch if needed)
    setStats({
      tasksCompleted: 8,
      pendingTasks: 2,
      upcomingDeadlines: 1
    });
  }, []);

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
    flexDirection: "column",
  };

  const containerStyles = {
    background: "#fff",
    borderRadius: "15px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    padding: "2.5rem 3rem",
    textAlign: "center",
    maxWidth: "400px",
    width: "100%",
    marginBottom: "2rem",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const titleStyles = {
    color: "#1a237e",
    fontSize: "2rem",
    fontWeight: "600",
    marginBottom: "1rem",
    textAlign: "center",
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

  const dashboardCardStyles = {
    background: "#fff",
    borderRadius: "15px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    padding: "2rem",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const buttonStyles = {
    background: "linear-gradient(135deg, #1a237e 0%, #3949ab 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontWeight: "600",
    margin: "0 0.75rem 0.75rem 0",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(26,35,126,0.2)",
    },
    "&:active": {
      transform: "translateY(0)",
    },
  };

  return (
    <div style={wrapperStyles}>
      <div style={containerStyles}>
        <h3 style={titleStyles}>
          Welcome, {employee.name}!
        </h3>
        <p style={{ color: '#334155', fontSize: '1.1rem' }}>
          Here is your HR Manager dashboard overview.
        </p>
      </div>
      <div style={{
        width: '100%',
        maxWidth: '900px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '2rem',
        marginBottom: '2rem'
      }}>
        <div style={dashboardCardStyles}>
          <h4 style={{ color: '#1e40af', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Tasks Completed</h4>
          <p style={{ color: '#334155', fontSize: '2rem', fontWeight: 'bold' }}>{stats.tasksCompleted}</p>
        </div>
        <div style={dashboardCardStyles}>
          <h4 style={{ color: '#1e40af', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Pending Tasks</h4>
          <p style={{ color: '#334155', fontSize: '2rem', fontWeight: 'bold' }}>{stats.pendingTasks}</p>
        </div>
        <div style={dashboardCardStyles}>
          <h4 style={{ color: '#1e40af', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Upcoming Deadlines</h4>
          <p style={{ color: '#334155', fontSize: '2rem', fontWeight: 'bold' }}>{stats.upcomingDeadlines}</p>
        </div>
      </div>
      <div style={{
        display: 'flex',
        gap: '1.5rem',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginBottom: '2rem'
      }}>
        <button style={buttonStyles}
        onClick={() => navigate('/viewPostedjobs')}
        >
          View Tasks
        </button>
        <button style={{
          backgroundColor: 'white',
          color: '#1e40af',
          border: '2px solid #1e40af',
          padding: '0.75rem 1.5rem',
          borderRadius: '8px',
          fontSize: '1rem',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}>
          Update Profile
        </button>
      </div>
      <style>{`
        body { margin: 0; padding: 0; overflow-x: hidden; }
      `}</style>
    </div>
  );
}