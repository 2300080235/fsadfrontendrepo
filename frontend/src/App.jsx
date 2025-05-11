import { BrowserRouter } from "react-router-dom";
import MainNavBar from "./main/MainNavBar";
import AdminNavBar from "./admin/AdminNavBar";
import UserNavBar from "./user/UserNavBar";
import EmployeeNavBar from "./employee/EmployeeNavBar";
import { AuthProvider, useAuth } from "./contextapi/AuthContext";

function AppContent() {
  const { isAdminLoggedIn, isUserLoggedIn, isEmployeeLoggedIn } = useAuth();

  return (
    <div>
      <BrowserRouter>
        {isAdminLoggedIn ? (
          <AdminNavBar />
        ) : isUserLoggedIn ? (
          <UserNavBar />
        ) : isEmployeeLoggedIn ? (
          <EmployeeNavBar />
        ) : (
          <MainNavBar />
        )}
      </BrowserRouter>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
