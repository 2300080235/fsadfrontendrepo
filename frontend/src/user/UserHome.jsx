import { useState, useEffect } from 'react';

export default function UserHome() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    tasksCompleted: 0,
    pendingTasks: 0,
    upcomingDeadlines: 0
  });

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      // Simulate fetching user stats
      setStats({
        tasksCompleted: 12,
        pendingTasks: 3,
        upcomingDeadlines: 2
      });
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        width: '100vw',
        margin: 0,
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)',
        overflowX: 'hidden',
        paddingTop: '80px'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #1e40af',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }} />
          <p style={{ color: '#1e40af', fontSize: '1.1rem' }}>Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div style={{
        minHeight: '100vh',
        width: '100vw',
        margin: 0,
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)',
        overflowX: 'hidden',
        paddingTop: '80px'
      }}>
        <div style={{
          background: '#fff',
          borderRadius: '18px',
          boxShadow: '0 4px 24px rgba(26,35,126,0.08)',
          padding: '2.5rem 3rem',
          textAlign: 'center',
          maxWidth: '400px',
          margin: '0 auto'
        }}>
          <h3 style={{ color: '#1e40af', fontSize: '1.5rem', marginBottom: '1rem' }}>Access Denied</h3>
          <p style={{ color: '#334155', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            Please log in to view your dashboard
          </p>
          <button
            onClick={() => window.location.href = '/userlogin'}
            style={{
              backgroundColor: '#1e40af',
              color: 'white',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              ':hover': {
                backgroundColor: '#1e3a8a',
                transform: 'translateY(-2px)'
              }
            }}
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      margin: 0,
      padding: 0,
      background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)',
      overflowX: 'hidden',
      paddingTop: '100px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem'
      }}>
        <div style={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem',
        }}>
          <div style={{
            background: '#fff',
            borderRadius: '18px',
            boxShadow: '0 4px 24px rgba(26,35,126,0.08)',
            padding: '2rem',
            textAlign: 'center',
            transition: 'transform 0.3s ease',
            ':hover': {
              transform: 'translateY(-5px)'
            }
          }}>
            <h3 style={{ color: '#1e40af', fontSize: '1.2rem', marginBottom: '1rem' }}>Tasks Completed</h3>
            <p style={{ color: '#334155', fontSize: '2.5rem', fontWeight: 'bold' }}>{stats.tasksCompleted}</p>
          </div>

          <div style={{
            background: '#fff',
            borderRadius: '18px',
            boxShadow: '0 4px 24px rgba(26,35,126,0.08)',
            padding: '2rem',
            textAlign: 'center',
            transition: 'transform 0.3s ease',
            ':hover': {
              transform: 'translateY(-5px)'
            }
          }}>
            <h3 style={{ color: '#1e40af', fontSize: '1.2rem', marginBottom: '1rem' }}>Pending Tasks</h3>
            <p style={{ color: '#334155', fontSize: '2.5rem', fontWeight: 'bold' }}>{stats.pendingTasks}</p>
          </div>

          <div style={{
            background: '#fff',
            borderRadius: '18px',
            boxShadow: '0 4px 24px rgba(26,35,126,0.08)',
            padding: '2rem',
            textAlign: 'center',
            transition: 'transform 0.3s ease',
            ':hover': {
              transform: 'translateY(-5px)'
            }
          }}>
            <h3 style={{ color: '#1e40af', fontSize: '1.2rem', marginBottom: '1rem' }}>Upcoming Deadlines</h3>
            <p style={{ color: '#334155', fontSize: '2.5rem', fontWeight: 'bold' }}>{stats.upcomingDeadlines}</p>
          </div>
        </div>

        <div style={{
          background: '#fff',
          borderRadius: '18px',
          boxShadow: '0 4px 24px rgba(26,35,126,0.08)',
          padding: '2.5rem 3rem',
          width: '100%',
          maxWidth: '800px',
          textAlign: 'center',
        }}>
          <h3 style={{ color: '#1e40af', fontSize: '2.2rem', fontWeight: 700, marginBottom: '1rem' }}>
            Welcome back, {user.name}!
          </h3>
          <p style={{ color: '#334155', fontSize: '1.1rem', marginBottom: '2rem' }}>
            Here's an overview of your current tasks and progress
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            marginTop: '2rem',
            justifyContent: 'center'
          }}>
            <button style={{
              backgroundColor: '#1e40af',
              color: 'white',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              width: '100%',
              maxWidth: '200px',
              margin: '0 auto',
              ':hover': {
                backgroundColor: '#1e3a8a',
                transform: 'translateY(-2px)'
              }
            }}>
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
              width: '100%',
              maxWidth: '200px',
              margin: '0 auto',
              ':hover': {
                backgroundColor: '#f8fafc',
                transform: 'translateY(-2px)'
              }
            }}>
              Update Profile
            </button>
          </div>
        </div>
      </div>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          body {
            margin: 0;
            padding: 0;
            overflow-x: hidden;
          }
        `}
      </style>
    </div>
  );
}