import React from 'react';
import './index.css';

const Header = () => {
    return (
        <div className="header">
            <span className="title"></span>
            <div className={'logo'}>
                <img src="./logo.png"/>
            </div>
            <h2 className={'title-text'}>Inversiones Agricolas LOSE</h2>
        </div>
    );
}

export default Header;