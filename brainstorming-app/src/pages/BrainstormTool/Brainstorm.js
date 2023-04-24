import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar.js';
import styles from './Brainstorm.module.css';
import logo from '../../assets/logo.png';
import wip from '../../assets/Wip.png'
import ContactUs from '../../components/Modals/ContactUs/ContactUsModal.js';
import { Button } from 'react-bootstrap';

function Brainstorm() {
    const [showContactUs, setShowContactUs] = useState(false);

  const handleOpenContactUs = () => setShowContactUs(true);
  const handleCloseContactUs = () => setShowContactUs(false);
  return (
    <div className={`${styles["landing-page"]}`}>
      <Navbar />
      <header className={`${styles["landing-header"]}`}>
      <img src={logo} alt="Logo" className={`${styles["logo"]} d-inline-block`} />
        <h1>Welcome to Brainstorm Tool!</h1>
        <img src={wip} alt="Work in Progress" className={`${styles["logo"]} d-inline-block`} />
      </header>
      <main className={`${styles["landing-main"]}`}>
        <p>Unlock your creativity with ease. Our app is your go-to tool for building and organizing ideas, one block at a time! </p>
        <Button variant="primary" onClick={handleOpenContactUs}>Contact us!</Button>
        {showContactUs && <ContactUs closeModal={handleCloseContactUs} />}
      </main>
    </div>

  );
}

export default Brainstorm;
