// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { ButtonStyled } from './components/request-button/Button';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <ButtonStyled />
      </header>
    </div>
  );
}

export default App;
