import React, { useState } from "react";
import jwt_decode from 'jwt-decode';
import testUsers from './lib/user';

export const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  const validationToken = (token) => {
    try {
      let validUser = jwt_decode(token);
      console.log('validUser', validUser);
      if(validUser) {
        setUser(validUser)
        setIsLoggedIn(true);
        console.log('User logged in');
      }
    } catch (error) {
      setError(error);
      console.log(error);
    }
  }

  const login = (username, password) => {
    let user = testUsers[username];
    if(user && user.password === password) {
      try {
        validationToken(user.token);
      } catch (error) {
        setError(error);
        console.log(error);
      }
    }
  }

  const logout = () => {
    setUser({});
    setIsLoggedIn(false);
  }

  const values = {
    isLoggedIn,
    user,
    error,
    login,
    logout,
    // can,
  }
  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;