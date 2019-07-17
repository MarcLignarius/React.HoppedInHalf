import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(){
  return (
    <div>
      <h1 className={'title'}>Hopped In Half Taproom</h1>
      <hr/>
      <Link to="/"><button className={'w3-button w3-white w3-border'}>Home</button></Link>
      <div className={'divider'}></div>
      <Link to="/admin"><button className={'w3-button w3-white w3-border'}>Admin</button></Link>
      <hr/>
    </div>
  );
}

export default Header;
