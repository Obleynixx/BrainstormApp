import React from 'react';
import styles from './ContactUs.module.css';

function ContactUs({ show, closeModal }) {

    return (

        <div className={styles.modalOverlay}>
            <div className={`${styles.modal} card`}>
                <div className="card-header">
                    <h2 className="card-title">Contact Us</h2>
                </div>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="email" id="email" name="email" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Name:</label>
                            <input type="text" id="text" name="name" className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="card-footer text-end">
                    <button onClick={closeModal} className="btn btn-secondary">Close</button>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
