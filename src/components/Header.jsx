import React from 'react'
import {Link} from 'react-router-dom';

function Header({className}) {
  return (
    <section className={className}>
        <nav>
            <Link to={'/'}><h2>Home</h2></Link>
            <Link to={'/projects'}><h2>Projects</h2></Link>
            <Link to={'/aboutme'}><h2>About Me</h2></Link>
        </nav>
    </section>
  )
}

export default Header