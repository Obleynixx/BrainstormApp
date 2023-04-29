import React, { useState } from 'react';
import styles from './Register.module.css';

function Register({ closeModal }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== passwordConfirm){
      //warn that the password is not equal
      return;
    }

    try {
      setIsLoading(true);
      setIsProcessing(true);
      const response = await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.status === 400){
        setIsLoading(false);
        setIsProcessing(false);
        return;
      }
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      //const jsonData = await response.json();
      setSuccess(true);
      //process data
    } catch (error) {
      setSuccess(false);
      setError(true);
    } finally {
      setIsLoading(false);
    }
    console.log({ email, password, passwordConfirm });
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={`${styles.modal} card`}>
        <div className="card-header">
          <h2 className="card-title">Register</h2>
        </div>
        <div className={`${isProcessing ? styles.hidden : styles.shown} card-body shown`}>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name:</label>
              <input type="name" id="name" name="name" className="form-control" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input type="email" id="email" name="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password:</label>
              <input type="password" id="password" name="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Confirm Password:</label>
              <input type="password" id="password" name="password" className="form-control" onChange={(e) => setPasswordConfirm(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
          </form>
        </div>
        <div className={`${isLoading ? styles.shown : styles.hidden} card-body`}>
          <h1>Submiting...</h1>
        </div>
        <div className={`${error ? styles.shown : styles.hidden} card-body`}>
          <h1>Occurred an error please try submiting again later!</h1>
        </div>
        <div className={`${success ? styles.shown : styles.hidden} card-body`}>
          <h1>You are now registered please confirm in your email/log-in</h1>
        </div>
        <div className="card-footer text-end">
          <button onClick={closeModal} className="btn btn-secondary">Close</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
