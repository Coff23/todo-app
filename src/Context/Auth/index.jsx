import React, { useEffect, useState } from 'react'
import testUsers from './lib/user'
import jwt_decode from 'jwt-decode'
import cookie from 'react-cookies';
import axios from 'axios';

export const AuthContext = React.createContext()

export default function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    let cookieToken = cookie.load('auth');
    validateToken(cookieToken);
  }, []);

  const validateToken = token => {
    try {
      let validUser = jwt_decode(token)
      if (validUser) {
        cookie.save('auth',token);
        setIsLoggedIn(true)
        setUser(validUser)

      }
    } catch (err) {
      setError(err)
      setIsLoggedIn(false)

    }
  }

  // const login = (username, password) => {
  //   let user = testUsers[username]
  //   if (user && password === user.password) {
  //     try {
  //       validateToken(user.token)
  //     } catch (err) {
  //       console.error('ERROR VALIDATING', err)
  //     }
  //   }
  // }

  // USING API to sign in now instead of the users.js
  const login = async (username, password) => {
    let config = {
      baseURL: 'https://api-js401.herokuapp.com',
      url: '/signin',
      method: 'post',
      auth: { username, password }
    }

    let response = await axios(config);
    console.log('RESPONSE FROM AXIOS--------------', response.data);
    let token = response.data.token;

    if (token) {
      try {
        validateToken(token);
      } catch (error) {
        setError(error);
        console.log('Login Error', error);
      }
    }
  };

  const logout = () => {
    setUser({})
    setIsLoggedIn(false)
    cookie.remove('auth');
  }

  const can = capability => {
    return user?.capabilities?.includes(capability)
  }

  const values = {
    isLoggedIn,
    user,
    error,
    login,
    logout,
    can,
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
