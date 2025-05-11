import { Routes, Route, Link } from 'react-router-dom';
import './admin.css';
import AdminHome from './AdminHome';
import AddEmployee from './AddEmployee';
import ViewEmployees from './ViewEmployees';
import ViewUsers from './ViewUsers';
import AddJob from './AddJob';
import ViewJobs from './ViewJobs';
import AdminLogin from './AdminLogin';
import { useAuth } from '../contextapi/AuthContext';

export default function AdminNavBar() {
  const { setIsAdminLoggedIn } = useAuth();

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
  };

  const navStyles = {
    background: "linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)",
    color: "#fff",
    padding: "0.5rem 2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    height: "64px"
  };

  const logoStyles = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    background: "linear-gradient(45deg, #fff, #e3f2fd)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 2px 4px rgba(0,0,0,0.1)",
    flex: "0 0 auto"
  };

  const navCenterStyles = {
    flex: 1,
    display: "flex",
    justifyContent: "center",
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
    fontWeight: 500,
    fontSize: "1rem",
  };

  const logoutContainerStyles = {
    flex: "0 0 auto",
    display: "flex",
    alignItems: "center"
  };

  const logoutStyles = {
    ...linkStyles,
    backgroundColor: "rgba(255,255,255,0.1)",
    marginLeft: "1rem",
  };

  return (
    <div>
      <nav style={navStyles}>
        <div style={logoStyles}>Admin Panel</div>
        <div style={navCenterStyles}>
          <ul style={navListStyles}>
            <li><Link style={linkStyles} to="/adminhome">Home</Link></li>
            <li><Link style={linkStyles} to="/addemployee">AddHRManager</Link></li>
            <li><Link style={linkStyles} to="/viewemployees">ViewHRManagers</Link></li>
            <li><Link style={linkStyles} to="/viewusers">ViewEmployees</Link></li>
            <li><Link style={linkStyles} to="/addjob">AddTask</Link></li>
            <li><Link style={linkStyles} to="/viewjobs">ViewTasks</Link></li>
          </ul>
        </div>
        <div style={logoutContainerStyles}>
          <Link style={logoutStyles} to="/adminlogin" onClick={handleLogout}>Logout</Link>
        </div>
      </nav>

      <div style={{ marginTop: "80px", padding: "2rem" }}>
        <Routes>
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/addemployee" element={<AddEmployee />} />
          <Route path="/viewemployees" element={<ViewEmployees />} />
          <Route path="/viewusers" element={<ViewUsers />} />
          <Route path="/addjob" element={<AddJob />} />
          <Route path="/viewjobs" element={<ViewJobs />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
        </Routes>
      </div>
    </div>
  );
}
