import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/pages/Navbar';
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';
import Services from './components/pages/Services/Services';
import SignUp from './components/pages/SignUp/SignUp';
import Products from './components/pages/Products/Products';


function App() {
  return (
    <Router>
      <Navbar />
      <switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' exact component={Services} />
        <Route path='/products' exact component={Products} />
        <Route path='/sign-up' exact component={SignUp} />
      </switch>
      <Footer />
    </Router>
  );
}

export default App;
