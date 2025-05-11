import { Routes, Route, Link } from 'react-router-dom';
import UserHome from './UserHome';
import UserLogin from './UserLogin';
import ViewJobs from './ViewJobs';
import ViewAppliedJobs from './ViewAppliedJobs';
import UserProfile from './UserProfile';
import UserPerformance from './UserPerformance';
import { useAuth } from '../contextapi/AuthContext';

export default function UserNavBar() {
  const { setIsUserLoggedIn, setUser } = useAuth();

  const handleLogout = () => {
    setIsUserLoggedIn(false);
    setUser(null);
    sessionStorage.clear();
  };

  const navStyles = {
    background: "linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)",
    color: "#fff",
    padding: "1rem 2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  };

  const logoStyles = {
    fontSize: "1.8rem",
    fontWeight: "bold",
    background: "linear-gradient(45deg, #fff, #e3f2fd)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 2px 4px rgba(0,0,0,0.1)",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
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
    padding: "0.7rem 1.2rem",
    borderRadius: "8px",
    transition: "all 0.3s ease",
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "1rem",
    fontWeight: 500,
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.1)",
      transform: "translateY(-2px)",
    },
  };

  const logoutStyles = {
    ...linkStyles,
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: "0.7rem 1.5rem",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.2)",
      transform: "translateY(-2px)",
    },
  };

  const contentStyles = {
    marginTop: "80px",
    padding: "2rem",
    minHeight: "calc(100vh - 80px)",
    background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)",
  };

  return (
    <div>
      <nav style={navStyles}>
        <div style={logoStyles}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          Employee Portal
        </div>
        <ul style={navListStyles}>
          <li>
            <Link style={linkStyles} to="/userhome">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              Home
            </Link>
          </li>
          <li>
            <Link style={linkStyles} to="/viewjobs">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              View Tasks
            </Link>
          </li>
          <li>
            <Link style={linkStyles} to="/viewappliedjobs">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
              Tasks to Be Done
            </Link>
          </li>
          <li>
            <Link style={linkStyles} to="/userprofile">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              Profile
            </Link>
          </li>
          <li>
            <Link style={linkStyles} to="/userperformance">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
              Performance
            </Link>
          </li>
          <li>
            <Link style={logoutStyles} to="/userlogin" onClick={handleLogout}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
              Logout
            </Link>
          </li>
        </ul>
      </nav>

      <div style={contentStyles}>
        <Routes>
          <Route path="/userhome" element={<UserHome />} />
          <Route path="/viewjobs" element={<ViewJobs />} />
          <Route path="/viewappliedjobs" element={<ViewAppliedJobs />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/userperformance" element={<UserPerformance />} />
          <Route path="/userlogin" element={<UserLogin />} />
        </Routes>
      </div>
    </div>
  );
}
