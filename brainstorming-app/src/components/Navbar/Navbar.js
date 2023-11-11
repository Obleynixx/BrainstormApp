import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../assets/logo.png';
import LoginModal from '../Modals/Login/LoginModal.js';
import useIsDesktop from '../Hooks/UserIsDesktop/useIsDesktop.js';

function Navbar() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const openLoginModal = () => {
    setShowLoginModal(true);
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  const isDesktop = useIsDesktop();

  return (
    <>
      <nav className={`${styles['custom-navbar']} ${styles.navbar} navbar navbar-expand-md navbar-light bg-light`}>
        <div className="container-fluid">
          <a className={`${styles['navbar-brand']} navbar-brand`} href="/">
            <img src={logo} alt="Logo" className="d-inline-block" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className={`${styles['navbar-nav']} navbar-nav`}>
              <li className="nav-item">
                <NavLink exact to="/" activeClassName="navbar-link-active" className="nav-link">
                  Home
                </NavLink>
              </li>
              {isDesktop ? (
                <NavLink exact to="/board" activeClassName="navbar-link-active" className="nav-link">
                  Board
                </NavLink>
              ) : (
                <NavLink exact to="/brainstorm" activeClassName="navbar-link-active" className="nav-link">
                  Brainstorm Tool
                </NavLink>
              )}
              <li className="nav-item">
                <NavLink exact to="/about" activeClassName="navbar-link-active" className="nav-link">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
          <button className={`btn btn-primary ${styles['login-button']}`} onClick={openLoginModal}>Login</button>
        </div>

      </nav>
      {showLoginModal && <LoginModal closeModal={closeLoginModal} />}

    </>

  );
}

export default Navbar;
