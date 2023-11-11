import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar.js';
import styles from './About.module.css';
import ContactUs from '../../components/Modals/ContactUs/ContactUsModal.js';
import { Button } from 'react-bootstrap';
import brainstormingImage from '../../assets/BrainstormingWhiteboard.png'
function About() {
  const [showContactUs, setShowContactUs] = useState(false);

  const handleOpenContactUs = () => setShowContactUs(true);
  const handleCloseContactUs = () => setShowContactUs(false);
  return (
    <div className={`${styles["landing-page"]}`}>
      <Navbar />
      <div className={`${styles["landing-header"]}`}>
        <img src={brainstormingImage} alt='brainstorming on a whiteboard' className={`${styles.roundedImage}`}></img>
      </div>
      <div className={styles.textContainer}>
        <h2>Welcome to IdeaSparker</h2>
        <p class={styles.lead}>
          A convenient brainstorming tool for capturing and organizing your thoughts. Our platform is designed to help you efficiently record, visualize, and categorize your ideas, streamlining the creative process and turning those ideas into actionable plans.
        </p>
        <p class={styles.secondary}>
          IdeaSparker sets itself apart by emphasizing the essence of your ideas rather than focusing solely on design. It serves as a virtual canvas for brainstorming, allowing you to express your thoughts without the constraints of traditional design-focused tools.
        </p>
        <h3>With IdeaSparker, you can:</h3>
        <ul class={styles.list}>
          <li>Capture your ideas in various formats, such as text, images, and audio.</li>
          <li>Effortlessly organize and rearrange your thoughts using our user-friendly drag-and-drop interface.</li>
          <li>Collaborate with others in real-time for easy input and feedback gathering.</li>
          <li>Access your ideas anytime, anywhere through seamless cloud integration.</li>
        </ul>
        <p class={styles.secondary}>
          Whether you're working on a personal project, collaborating with a team, or just looking to document your ideas for future reference, IdeaSparker offers a practical solution for your brainstorming needs.
        </p>
      </div>
      <Button variant="primary" onClick={handleOpenContactUs}>Contact us!</Button>
      {showContactUs && <ContactUs closeModal={handleCloseContactUs} />}
    </div>
  );
}

export default About;