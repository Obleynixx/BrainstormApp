import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar.js';
import styles from './About.module.css';
import ContactUs from '../../components/Modals/ContactUs/ContactUsModal.js';
import { Button } from 'react-bootstrap';
import me from '../../assets/Me.jpeg'
function About() {
  const [showContactUs, setShowContactUs] = useState(false);

  const handleOpenContactUs = () => setShowContactUs(true);
  const handleCloseContactUs = () => setShowContactUs(false);
  return (
  <div className={`${styles["landing-page"]}`}>
    <Navbar />
    <div className={`${styles["landing-header"]}`}>
    <img src={me} className={`${styles['me']}`}></img>
      <h1>Welcome to the About page!</h1>
    </div>
    <p> Get to know me as I share my skills, passion, and dedication towards making a positive impact in the industry.</p>
    <p> note to self: this page should be more about the project but i can include me too</p>
    <Button variant="primary"  onClick={handleOpenContactUs}>Contact us!</Button>
    {showContactUs && <ContactUs closeModal={handleCloseContactUs} />}
  </div>
  );
}

export default About;