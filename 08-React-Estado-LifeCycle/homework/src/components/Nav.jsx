import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div className='navBar'>
      <div className='logo'>
        <img src={Logo} />
        <h1>Henry - Weather App</h1>
      </div>
      <SearchBar onSearch={onSearch}/>
    </div>
    
  );
};

export default Nav;
