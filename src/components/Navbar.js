import React from 'react'
import './Navbar.css'
import Image1 from '../components/image/erenlogo.jpg'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
   
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <img src={Image1} className='logo'></img>
    <h5 classNameName="navbar-brand" href="#">Tatakae.tv</h5>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active " aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/about" className="nav-link active " aria-current="page">About</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Anime
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Shonen</a></li>
            <li><a className="dropdown-item" href="#">Seinen </a></li>
            <li><a className="dropdown-item" href="#">Shoujo</a></li>
            <li><a className="dropdown-item" href="#">Josei </a></li>
            <li><a className="dropdown-item" href="#">Kodomomuke</a></li>
          </ul>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        
        <button className="btn btn-outline-success" type="submit"> 
         <Link to="/sign" className="nav-link active" aria-current="page">Sign in</Link></button>
      </form>
    </div>
  </div>
</nav>

  )
}
