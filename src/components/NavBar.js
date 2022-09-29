import React from 'react';
import './NavBar.scss';
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <div> 
        <nav>
        <ul className="NavStyle" >
          <Link to="projects" spy={true} smooth={true} offset={0} duration={500}>
            <li>Projects.</li>
          </Link>
          <Link to="about" spy={true} smooth={true} offset={-50} duration={500}>
            <li>About.</li>
          </Link>
          <Link to="future" spy={true} smooth={true} offset={-50} duration={500}>
            <li>Future.</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar