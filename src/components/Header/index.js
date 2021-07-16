import React from 'react';
import './index.css';

const Header = () => {
    return (
        <div className="header">
            <span className="title"></span>
            <div className={'logo'}>
                <img src="./logo.png"/>
            </div>
        </div>
    );
}

export default Header;