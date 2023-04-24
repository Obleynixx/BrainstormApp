import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../assets/logo.png';
import LoginModal from '../Modals/Login/LoginModal.js';
import RegisterModal from '../Modals/Register/RegisterModal.js';

function Navbar() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const openLoginModal = () => {
    setShowLoginModal(true);
    setShowRegisterModal(false);
  };

  const openRegisterModal = () => {
    setShowRegisterModal(true);
    setShowLoginModal(false);
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  const closeRegisterModal = () => {
    setShowRegisterModal(false);
  };
  return (
    <>
      <nav className={`${styles['custom-navbar']} ${styles.navbar} navbar navbar-expand-lg navbar-light bg-light`}>
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
              <li className="nav-item">
                <NavLink exact to="/brainstorm" activeClassName="navbar-link-active" className="nav-link">
                  Brainstorm Tool
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/board" activeClassName="navbar-link-active" className="nav-link">
                  Board
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/about" activeClassName="navbar-link-active" className="nav-link">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
          <button className={`btn btn-primary ${styles['login-button']}`} onClick={openRegisterModal}>Register</button>
          <button className={`btn btn-primary ${styles['login-button']}`} onClick={openLoginModal}>Login</button>
        </div>

      </nav>
      {showLoginModal && <LoginModal closeModal={closeLoginModal} />}
      {showRegisterModal && <RegisterModal closeModal={closeRegisterModal} />}

    </>

  );
}

export default Navbar;
