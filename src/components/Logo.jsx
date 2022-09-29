import React from 'react';
import './Logo.scss';
import {Link} from 'react-router-dom';
import Home from '../pages/Home';

function Logo() {
  return (
    
        <Link to="/" element={<Home />} >
        <h2 className='logo'>H</h2>
        </Link>
        
  )
}

export default Logo;