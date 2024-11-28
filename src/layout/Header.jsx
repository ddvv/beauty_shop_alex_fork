import search from '../../public/assets/img/search.svg';
import account from '../../public/assets/img/account.svg';
import cart from '../../public/assets/img/cart.svg';
import '../styles/header.css';
import Modal from '../components/Modal/Modal';
import { useState } from 'react';

function Header() {
    const [modalActive, setModalActive] = useState(false); 

    const handleModalOpen = () => {
        setModalActive(true);
    };

    const handleModalClose = () => {
        setModalActive(false); 
    };

    return (
        <>
            <header className="header">
                <div className="header-container">
                    <h3 className="title">Bloom <span>Beauty</span></h3>
                    <nav className="header-nav">
                        <a href="/">SHOP ALL</a>
                        <a href="/">BESTSELLERS</a>
                        <a href="/">COLLECTION</a>
                        <a href="/">ABOUT US</a>
                        <a href="/">BLOG</a>
                    </nav>
                    <div className="icons">
                        <div className="icon-item">
                            <img src={search} alt="search" />
                            <span>SEARCH</span>
                        </div>
                        <div className="icon-item" onClick={handleModalOpen}>
                            <img src={account} alt="account" />
                            <span>ACCOUNT</span>
                        </div>
                        <div className="icon-item">
                            <img src={cart} alt="cart" />
                            <span>CART</span>
                        </div>
                    </div>
                </div>
            </header>
            {modalActive && <Modal onClose={handleModalClose} />}
        </>
    );
}

export default Header;
