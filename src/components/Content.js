import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer';
import Content from './Routers'

export default function Main() {
  return (

    <div>
      <Header />
      <Router>
        <div className="layout">
        <Sidebar/>
          <div className="column2">
          <Content/>
          </div>
        </div>
      </Router>
      <Footer />
    </div>
  );
}
