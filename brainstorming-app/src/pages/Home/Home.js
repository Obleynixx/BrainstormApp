import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar.js';
import styles from './Home.module.css';
import logo from '../../assets/logo.png';
import { Button } from 'react-bootstrap';

function Home() {
  return (
    <div className={`${styles["landing-page"]}`}>
      <Navbar />
      <header className={`${styles["landing-header"]}`}>
        <img src={logo} alt="Logo" className={`${styles["logo"]} d-inline-block`} />
        <h1>Welcome to IdeaSpark!</h1>
      </header>
      <main className={`${styles["landing-main"]}`}>
        <p>Unlock your creativity with ease. Our app is your go-to tool for building and organizing ideas, one block at a time! </p>

        <NavLink exact to="/brainstorm" activeClassName="navbar-link-active" className="nav-link">
          <Button variant="primary">Start Now!</Button>
        </NavLink>
      </main>
    </div>
  );
}

export default Home;
