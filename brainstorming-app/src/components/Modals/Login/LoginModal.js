import React, { useState } from 'react';
import styles from './Login.module.css';

function Login({ closeModal }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [wrongInput, setWrongInput] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      setIsProcessing(true);
      const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      console.log(response.body);
      if (response.status === 401){
        setIsProcessing(false);
        setIsLoading(false);
        setWrongInput(true);
        return;
      }
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      setSuccess(true);
      //const jsonData = await response.json();
      //process data
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
    console.log({ email, password });
  }
  return (
    <div className={styles.modalOverlay}>
      <div className={`${styles.modal} card`}>
        <div className="card-header">
          <h2 className="card-title">Login</h2>
        </div>
        <div className={`${isProcessing ? styles.hidden : styles.shown} card-body`}>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input type="email" id="email" name="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password:</label>
              <input type="password" id="password" name="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            <div className={`${wrongInput ? styles.shown : styles.hidden} mb-3`}>
              <h1>Wrong password or email</h1>
            </div>
          </form>
        </div>
        <div className={`${isLoading ? styles.shown : styles.hidden} card-body`}>
          <h1>Sending...</h1>
        </div>
        <div className={`${error ? styles.shown : styles.hidden} card-body`}>
          <h1>There was an error please try again later.</h1>
        </div>
        <div className={`${success ? styles.shown : styles.hidden} card-body`}>
          <h1>Welcome!</h1>
        </div>
        <div className="card-footer text-end">
          <button onClick={closeModal} className="btn btn-secondary">Close</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
