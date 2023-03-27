import React from 'react';
import './App.css';
import HeaderComponent from './components/header';
import Jumbotron from './components/jumbotron';
import StatSection from './components/statisticSection';


function App() {
  return (
    <>
     <HeaderComponent />
     <Jumbotron />
     <StatSection />
    </>
  );
}

export default App;
