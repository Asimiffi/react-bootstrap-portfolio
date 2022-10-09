import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';


const navbar = () => {
    return (
    <div>
        <nav className="navbar navbar-expand-sm navbar-extended navbar-light">
        <div className="container-fluid">
            <a className="navbar-brand" style={{color:'white'}} href="#">ASIM <span style={{color:'#EFC139'}}> IFTIKHAR</span></a>
            <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" style={{color:'white'}} href="/">Home</a>
              </li>
              <li className="nav-item">
              <Link to="/#about-me"  style={{color:'white'}} className="nav-link">Experience</Link>
              </li>
              <li className="nav-item">
              <Link to="/#portfolio"  style={{color:'white'}} className="nav-link">Portfolio</Link>
              </li>
              <li className="nav-item">
              <Link to="/#expectations"  style={{color:'white'}} className="nav-link">Expectations</Link>
              </li>
            </ul>
           </div>
        </div>
        </nav>
    </div>
    )
}

export default navbar
