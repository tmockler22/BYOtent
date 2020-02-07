import React from 'react';
import { Link } from 'react-router-dom';
import SearchNavBar from './nav_search_bar';

const searchNav = ({ currentUser, logout, openModal }) => {

  const display = currentUser ? (
    <nav className="logout-signup session-links">
      <Link className="login-nav-link" to="/mytrips">Trips</Link>
      <button onClick={logout} className="signup-nav-link">Log out</button>
    </nav>
  ) : (
      <nav className="login-signup session-links">
        <button className="login-nav-link" onClick={() => openModal('login')}>Log in</button>
        <button className="signup-nav-link" onClick={() => openModal('signup')}>Sign up</button>
      </nav>
    )
  return (
    <div className="navbar">
      <Link to="/"><img src={window.tentLogoURL} className="logo" /></Link>
      <SearchNavBar />
      {display}
    </div>
  )
}

export default searchNav;
