import React from 'react';
import './Spending.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faWallet, faCreditCard, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

const Spending = () => {
    return (
        <div className="monthly-spending">
            <div className="header">
                <FontAwesomeIcon icon={faLeaf} className="icon" />
                <h1>How to check your monthly spending</h1>
            </div>
            <div className="icons">
                <FontAwesomeIcon icon={faMoneyBill} className="icon" />
                <FontAwesomeIcon icon={faCreditCard} className="icon" />
                <FontAwesomeIcon icon={faWallet} className="icon" />
            </div>
        </div>
    );
};

export default Spending;