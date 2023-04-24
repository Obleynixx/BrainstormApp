import React from 'react';
import styles from './Register.module.css';

function Register({ closeModal }) {


  return (
    <div className={styles.modalOverlay}>
    <div className={`${styles.modal} card`}>
      <div className="card-header">
        <h2 className="card-title">Login</h2>
      </div>
      <div className="card-body">
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" id="email" name="email" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password:</label>
            <input type="password" id="password" name="password" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Confirm Password:</label>
            <input type="password" id="password" name="password" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
      <div className="card-footer text-end">
        <button onClick={closeModal} className="btn btn-secondary">Close</button>
      </div>
    </div>
  </div>
  );
}

export default Register;
