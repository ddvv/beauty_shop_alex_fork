import React from "react";
import "./modal.css";
import googleImg from '../../../public/assets/img/google_img.png'
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";

const Modal = ({ onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>
                    X
                </button>
                <h2 className="modal-title">Log In</h2>
                <p className="modal-subtitle">Please enter your e-mail and password:</p>
                <div className="modal-input-group">
                    <Input placeholder="Email" type="email" />
                    <Input placeholder="Password" type="password" />
                </div>
                <Button>Log In</Button>
                <div className="modal-divider">
                    <span className="divider-line"></span>
                    <span className="divider-text">OR</span>
                    <span className="divider-line"></span>
                </div>
                <Button className="modal-google-button">
                    <img src={googleImg} alt="Google" />
                    Continue With Google
                </Button>
                <div className="modal-footer">
                    <p>Forgot your password?{" "}<a href="/" className="modal-link">Recover password</a></p>
                    <p>New to Bloom Beauty?{" "}<a href="/" className="modal-link">Create an Account</a></p>
                </div>
            </div>
        </div>
    );
};

export default Modal;
