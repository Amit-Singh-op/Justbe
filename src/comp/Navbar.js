import React from 'react'
import {Link} from 'react-router-dom';
export default function Navbar() {
    return (
   <nav>
        <div class="nav-wrapper">
         <Link href="#" className="brand-logo">Logo</Link>
         <ul id="nav-mobile" className="right hide-on-med-and-down">
         <li><Link to="/">Home</Link></li>
         <li><Link to="/about">About</Link></li>
         <li><Link to="profile">Profile</Link></li>
         </ul>
    </div>
  </nav>
    )
}
