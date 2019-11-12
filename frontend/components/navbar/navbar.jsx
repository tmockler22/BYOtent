import React from 'react';
import { Link } from 'react-router-dom';

const navBar = ({currentUser, logout}) => {
  
  const display = currentUser ? (
    <nav>
      <p>greetings, {currentUser.username}</p>
      <button onClick={logout}>Log out</button>
    </nav>
  ):(
    <nav>
        <Link to='/signup'>Signup</Link>
        <Link to='/login'>Login</Link>
    </nav>
  )
  return (<div> { display } </div>)
}

export default navBar;

