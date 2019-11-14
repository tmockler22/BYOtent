import React from 'react';
import { Link } from 'react-router-dom';

const navBar = ({currentUser, logout}) => {
  
  const display = currentUser ? (
    <nav>
      <p>Welcome, {currentUser.username}</p>
      <button onClick={logout}>Log out</button>
    </nav>
  ):(
    <nav className="session-links">
        <Link to='/signup' className="signup-link">Sign up</Link>
        <Link to='/login' className="login-link">Log in</Link>
    </nav>
  )
  return (<div> { display } </div>)
}

export default navBar;

