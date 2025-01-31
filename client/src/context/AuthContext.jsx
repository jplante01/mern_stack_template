import { createContext, useContext, useState, useEffect } from 'react';
import { demoStorage } from '../utils/demoStorage';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [isDemo, setIsDemo] = useState(
    localStorage.getItem('isDemo') === 'true'
  );

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  useEffect(() => {
    localStorage.setItem('isDemo', isDemo);
  }, [isDemo]);

  const login = (userData, authToken) => {
    setUser(userData);
    setToken(authToken);
    setIsDemo(false);
  };

  const enableDemoMode = () => {
    setUser(null);
    setToken(null);
    setIsDemo(true);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    setIsDemo(false);
    localStorage.removeItem('token');
    localStorage.removeItem('isDemo');
    demoStorage.clearTasks();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isDemo,
        login,
        logout,
        enableDemoMode,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
