import { Routes, Route, Link } from 'react-router-dom';
import EmployeeHome from './EmployeeHome';
import EmployeeLogin from './EmployeeLogin';
import PostJob from './PostJob';
import ViewPostedJobs from './ViewPostedJobs';
import ViewApplications from './ViewApplications';
import { useAuth } from '../contextapi/AuthContext';

export default function EmployeeNavBar() {
  const { setIsEmployeeLoggedIn } = useAuth();

  const handleLogout = () => {
    setIsEmployeeLoggedIn(false);
    sessionStorage.clear();
  };

  const navStyles = {
    background: "linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)",
    color: "#fff",
    padding: "1rem 2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  };

  const logoStyles = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    background: "linear-gradient(45deg, #fff, #e8f5e9)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  const navListStyles = {
    listStyle: "none",
    display: "flex",
    gap: "1.5rem",
    margin: 0,
    padding: 0,
    alignItems: "center",
  };

  const linkStyles = {
    color: "#fff",
    textDecoration: "none",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    transition: "all 0.3s ease",
    position: "relative",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.1)",
      transform: "translateY(-2px)",
    },
  };

  const logoutStyles = {
    ...linkStyles,
    backgroundColor: "rgba(255,255,255,0.1)",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.2)",
    },
  };

  return (
    <div>
      <nav style={navStyles}>
        <div style={logoStyles}>HR Manger Portal</div>
        <ul style={navListStyles}>
          <li><Link style={linkStyles} to="/employeehome">Home</Link></li>
          <li><Link style={linkStyles} to="/postjob">Post Tasks</Link></li>
          <li><Link style={linkStyles} to="/viewpostedjobs">My Tasks</Link></li>
          <li><Link style={linkStyles} to="/viewapplications">Applications</Link></li>
          <li><Link style={logoutStyles} to="/employeelogin" onClick={handleLogout}>Logout</Link></li>
        </ul>
      </nav>

      <div style={{ marginTop: "80px", padding: "2rem" }}>
        <Routes>
          <Route path="/employeehome" element={<EmployeeHome />} />
          <Route path="/postjob" element={<PostJob />} />
          <Route path="/viewpostedjobs" element={<ViewPostedJobs />} />
          <Route path="/viewapplications" element={<ViewApplications />} />
          <Route path="/employeelogin" element={<EmployeeLogin />} />
        </Routes>
      </div>
    </div>
  );
}
