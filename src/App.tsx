import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Ministries from './components/Ministries';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Ministries />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;