import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="about-container" style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div className="hero-section" style={{
        textAlign: 'center',
        padding: '60px 20px',
        background: 'linear-gradient(135deg, rgba(30,64,175,0.95), rgba(37,99,235,0.95)), url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80) center/cover no-repeat',
        borderRadius: '20px',
        marginBottom: '60px',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '320px',
        width: '100%',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.3s ease'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(30,64,175,0.55)',
          zIndex: 1,
          borderRadius: '20px'
        }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h2 className="section-title" style={{ 
            color: 'white', 
            fontSize: '3rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            About Our Employee Management System
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            maxWidth: '600px', 
            margin: '20px auto',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
          }}>
            Empowering organizations with modern HR management solutions
          </p>
        </div>
      </div>

      <div className="grid grid-3" style={{ 
        gap: '30px', 
        marginBottom: '60px',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
      }}>
        <div className="card" style={{ 
          background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
          border: '1px solid rgba(37, 99, 235, 0.15)',
          borderRadius: '12px',
          padding: '20px',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          ':hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 10px 20px rgba(0,0,0,0.15)'
          }
        }}>
          <div style={{ 
            backgroundColor: 'rgba(37, 99, 235, 0.15)', 
            padding: '20px',
            borderRadius: '12px',
            marginBottom: '20px',
            transition: 'background-color 0.3s ease'
          }}>
            <h3 style={{ 
              color: '#1e40af', 
              marginBottom: '15px',
              fontSize: '1.5rem'
            }}>Our Mission</h3>
          </div>
          <p style={{ 
            lineHeight: '1.6', 
            color: '#334155', 
            fontSize: '1.1rem'
          }}>
            To streamline and enhance employee management processes, making it easier for organizations to manage their workforce effectively and efficiently through an innovative and user-friendly platform.
          </p>
        </div>

        <div className="card" style={{ 
          background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
          border: '1px solid rgba(37, 99, 235, 0.15)',
          borderRadius: '12px',
          padding: '20px',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          ':hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 10px 20px rgba(0,0,0,0.15)'
          }
        }}>
          <div style={{ 
            backgroundColor: 'rgba(37, 99, 235, 0.15)', 
            padding: '20px',
            borderRadius: '12px',
            marginBottom: '20px'
          }}>
            <h3 style={{ 
              color: '#1e40af', 
              marginBottom: '15px',
              fontSize: '1.5rem'
            }}>What We Offer</h3>
          </div>
          <ul className="feature-list" style={{ 
            fontSize: '1.1rem',
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}>
            <li style={{ 
              marginBottom: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#334155'
            }}>
              <span style={{ color: '#1e40af' }}>•</span>
              Employee Profile Management
            </li>
            <li style={{ 
              marginBottom: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#334155'
            }}>
              <span style={{ color: '#1e40af' }}>•</span>
              Attendance Tracking
            </li>
            <li style={{ 
              marginBottom: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#334155'
            }}>
              <span style={{ color: '#1e40af' }}>•</span>
              Performance Reviews
            </li>
            <li style={{ 
              marginBottom: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#334155'
            }}>
              <span style={{ color: '#1e40af' }}>•</span>
              Leave Management
            </li>
            <li style={{ 
              marginBottom: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#334155'
            }}>
              <span style={{ color: '#1e40af' }}>•</span>
              Payroll Integration
            </li>
          </ul>
        </div>

        <div className="card" style={{ 
          background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
          border: '1px solid rgba(37, 99, 235, 0.15)',
          borderRadius: '12px',
          padding: '20px',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          ':hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 10px 20px rgba(0,0,0,0.15)'
          }
        }}>
          <div style={{ 
            backgroundColor: 'rgba(37, 99, 235, 0.15)', 
            padding: '20px',
            borderRadius: '12px',
            marginBottom: '20px'
          }}>
            <h3 style={{ 
              color: '#1e40af', 
              marginBottom: '15px',
              fontSize: '1.5rem'
            }}>Our Technology</h3>
          </div>
          <p style={{ 
            lineHeight: '1.6', 
            color: '#334155', 
            fontSize: '1.1rem', 
            marginBottom: '20px' 
          }}>
            Built with modern technologies including React, Node.js, and MongoDB, our platform ensures secure and efficient employee management with real-time updates and seamless integration.
          </p>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '20px',
            marginTop: '20px'
          }}>
            <div style={{ 
              backgroundColor: 'rgba(37, 99, 235, 0.15)', 
              padding: '15px',
              borderRadius: '12px',
              display: 'inline-block',
              transition: 'transform 0.3s ease',
              ':hover': {
                transform: 'scale(1.1)'
              }
            }}>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png" 
                alt="React"
                style={{ width: '40px', height: '40px' }}
              />
            </div>
            <div style={{ 
              backgroundColor: 'rgba(37, 99, 235, 0.15)', 
              padding: '15px',
              borderRadius: '12px',
              display: 'inline-block',
              transition: 'transform 0.3s ease',
              ':hover': {
                transform: 'scale(1.1)'
              }
            }}>
              <img 
                src="https://nodejs.org/static/images/logo.svg" 
                alt="Node.js"
                style={{ width: '40px', height: '40px' }}
              />
            </div>
            <div style={{ 
              backgroundColor: 'rgba(37, 99, 235, 0.15)', 
              padding: '15px',
              borderRadius: '12px',
              display: 'inline-block',
              transition: 'transform 0.3s ease',
              ':hover': {
                transform: 'scale(1.1)'
              }
            }}>
              <img 
                src="https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png" 
                alt="MongoDB"
                style={{ width: '40px', height: '40px' }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="card" style={{ 
        marginTop: '40px', 
        textAlign: 'center',
        background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
        border: '1px solid rgba(37, 99, 235, 0.15)',
        padding: '40px',
        width: '100%',
        maxWidth: '600px',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <h3 style={{ 
          color: '#1e40af', 
          marginBottom: '20px', 
          fontSize: '1.8rem'
        }}>
          Transform Your HR Management
        </h3>
        <p style={{ 
          color: '#334155', 
          marginBottom: '30px',
          fontSize: '1.1rem',
          maxWidth: '600px',
          margin: '0 auto 30px'
        }}>
          Join hundreds of organizations that trust our platform for their employee management needs
        </p>
        <button 
          className="btn btn-primary" 
          style={{ 
            padding: '15px 40px', 
            fontSize: '1.1rem',
            backgroundColor: '#1e40af',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            ':hover': {
              backgroundColor: '#1e3a8a',
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 12px rgba(30, 64, 175, 0.3)'
            }
          }} 
          onClick={() => navigate('/adminlogin')}
        >
          Get Started Today
        </button>
      </div>

      <style>
        {`
          .card {
            transition: all 0.3s ease;
          }
          
          .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.15);
          }

          .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(30, 64, 175, 0.3);
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          .about-container {
            animation: fadeIn 0.8s ease-in;
          }
        `}
      </style>
    </div>
  );
}