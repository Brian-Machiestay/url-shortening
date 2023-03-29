import React from 'react';
import './App.css';
import HeaderComponent from './components/header';
import Jumbotron from './components/jumbotron';
import StatSection from './components/statisticSection';
import Boost from './components/boost';
import Footer from './components/footer';


function App() {
  return (
    <>
     <HeaderComponent />
     <Jumbotron />
     <StatSection />
     <Boost />
     <Footer />
    </>
  );
}

export default App;
