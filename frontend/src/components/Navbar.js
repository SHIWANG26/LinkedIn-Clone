import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getUser, removeToken, removeUser } from '../utils/auth';

const Navbar = () => {
  const navigate = useNavigate();
  const user = getUser();

  const handleLogout = () => {
    removeToken();
    removeUser();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/feed" className="nav-logo">
          LinkedIn Clone
        </Link>
        <div className="nav-menu">
          <Link to="/feed" className="nav-link">Feed</Link>
          <Link to={`/profile/${user?.id}`} className="nav-link">Profile</Link>
          <span className="nav-user">Welcome, {user?.name}</span>
          <button onClick={handleLogout} className="btn btn-logout">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
