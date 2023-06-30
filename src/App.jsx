import React, { useContext } from 'react';

import Todo from './Components/Todo';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SettingsForm from './Components/SettingsForm';
import Auth from './Components/Auth';
import { When } from 'react-if';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContext } from './Context/Auth';

export default function App() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <>
      <Router>
        <Header />
        <When condition={isLoggedIn}>
          <Auth capability="read">
            <p>I can read!</p>
          </Auth>
          <Auth capability="create">
            <p>I can create!</p>
          </Auth>
          <Auth capability="update">
            <p>I can update!</p>
          </Auth>
          <Auth capability="delete">
            <p>I can delete!</p>
          </Auth>
          <Routes>
            <Route path="/" element={<Todo />}></Route>
            <Route path="/settings" element={<SettingsForm />}></Route>
          </Routes>
        </When>
        <Footer />
      </Router>
    </>
  );
}
