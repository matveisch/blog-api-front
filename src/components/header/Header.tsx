import React from 'react';

import './Header.css';
import createPost from '../../images/edit-button.png';
import signIn from '../../images/signin-button.png';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header id="header">
            <Link to="/" ><h1>Blog</h1></Link>
            <div id="buttons">
                <a href=""><img src={createPost} alt=""/></a>
                <a href=""><img src={signIn} alt=""/></a>
            </div>
        </header>
    );
};

export default Header;