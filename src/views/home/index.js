import React from 'react';
import Footer from "../../components/Footer";
import "./index.css"
import Header from "../../components/Header";
import login from '../../components/login'
import Login from "../../components/login";

const Main = props => {
    return (
        <div className="Site-content">
            <div className={'main'}>
                <div className="main-content">
                    <Login/>
                </div>
            </div>
        </div>
    );
};

export default Main;
