// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { ButtonStyled } from './components/request-button/Button';
import { NavBar } from './components/nav-bar/NavBar';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <NavBar />
        <ButtonStyled />
      </header>
    </div>
  );
}

export default App;
