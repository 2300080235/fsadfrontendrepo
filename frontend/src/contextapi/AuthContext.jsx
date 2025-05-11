import { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const AuthContext = createContext();

// Provider component to manage login states and user data
export function AuthProvider({ children }) {
  // Load initial state from localStorage or default to false/null
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
    return localStorage.getItem('isAdminLoggedIn') === 'true';
  });

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(() => {
    return localStorage.getItem('isUserLoggedIn') === 'true';
  });

  const [isEmployeeLoggedIn, setIsEmployeeLoggedIn] = useState(() => {
    return localStorage.getItem('isEmployeeLoggedIn') === 'true';
  });

  const [user, setUser] = useState(() => {
    const storedUser = sessionStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('isAdminLoggedIn', isAdminLoggedIn);
    localStorage.setItem('isUserLoggedIn', isUserLoggedIn);
    localStorage.setItem('isEmployeeLoggedIn', isEmployeeLoggedIn);
  }, [isAdminLoggedIn, isUserLoggedIn, isEmployeeLoggedIn]);

  // Update user data when sessionStorage changes
  useEffect(() => {
    const handleStorageChange = () => {
      const storedUser = sessionStorage.getItem('user');
      setUser(storedUser ? JSON.parse(storedUser) : null);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAdminLoggedIn,
        setIsAdminLoggedIn,
        isUserLoggedIn,
        setIsUserLoggedIn,
        isEmployeeLoggedIn,
        setIsEmployeeLoggedIn,
        user,
        setUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to access the context
export const useAuth = () => useContext(AuthContext);
