import './style.css'; 

export default function Home() {
  return (
    <div className="home-container" style={{
      minHeight: '100vh',
      width: '100vw',
      margin: 0,
      padding: 0,
      background: 'linear-gradient(135deg, rgba(30,64,175,0.9), rgba(37,99,235,0.9)), url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80) center/cover no-repeat fixed',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '60px',
        animation: 'fadeIn 1s ease-in',
        width: '100%',
        maxWidth: '1200px',
        padding: '0 20px'
      }}>
        <h1 style={{
          color: 'white',
          fontSize: '3.5rem',
          marginBottom: '20px',
          textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
        }}>
          Employee Management System
        </h1>
        <p style={{
          color: 'white',
          fontSize: '1.2rem',
          maxWidth: '600px',
          margin: '0 auto',
          textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
        }}>
          Streamline your workforce management with our comprehensive solution
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        width: '100%',
        maxWidth: '1200px',
        padding: '0 20px',
        marginBottom: '40px'
      }}>
        <div className="admin-section" style={{
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '12px',
          padding: '30px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s ease',
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <h3 style={{
            color: 'var(--primary-color)',
            fontSize: '1.5rem',
            marginBottom: '20px',
            textAlign: 'center'
          }}>Admin</h3>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            flex: 1
          }}>
            <li style={{ marginBottom: '12px' }}>Admin Login</li>
            <li style={{ marginBottom: '12px' }}>Add HR Manager</li>
            <li style={{ marginBottom: '12px' }}>View/Delete HR Manager</li>
            <li style={{ marginBottom: '12px' }}>View</li>
            <li style={{ marginBottom: '12px' }}>View/Delete Employees</li>
            <li style={{ marginBottom: '12px' }}>View All Tasks</li>
          </ul>
        </div>

        <div className="employee-section" style={{
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '12px',
          padding: '30px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s ease',
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <h3 style={{
            color: 'var(--primary-color)',
            fontSize: '1.5rem',
            marginBottom: '20px',
            textAlign: 'center'
          }}>HR Manager</h3>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            flex: 1
          }}>
            <li style={{ marginBottom: '12px' }}>HR Manager Login</li>
            <li style={{ marginBottom: '12px' }}>Post Task</li>
            <li style={{ marginBottom: '12px' }}>View Tasks</li>
            <li style={{ marginBottom: '12px' }}>View Applications</li>
          </ul>
        </div>

        <div className="user-section" style={{
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '12px',
          padding: '30px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s ease',
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <h3 style={{
            color: 'var(--primary-color)',
            fontSize: '1.5rem',
            marginBottom: '20px',
            textAlign: 'center'
          }}>Employee</h3>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            flex: 1
          }}>
            <li style={{ marginBottom: '12px' }}>Registration</li>
            <li style={{ marginBottom: '12px' }}>Employee Login</li>
            <li style={{ marginBottom: '12px' }}>View Tasks</li>
            <li style={{ marginBottom: '12px' }}>Apply for Tasks</li>
            <li style={{ marginBottom: '12px' }}>View Applied Tasks</li>
          </ul>
        </div>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          .admin-section:hover,
          .employee-section:hover,
          .user-section:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          }

          @media (max-width: 768px) {
            h1 {
              font-size: 2.5rem;
            }
            
            .home-container {
              padding: 20px;
            }

            .grid {
              grid-template-columns: 1fr;
            }
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
