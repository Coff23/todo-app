import React from 'react';

import Todo from './Components/Todo';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SettingsForm from './Components/SettingsForm';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Todo />}></Route>
            <Route path="/settings" element={<SettingsForm />}></Route>
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}
