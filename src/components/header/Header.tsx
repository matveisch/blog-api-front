import React from 'react';

import './Header.css';
import createPost from '../../images/edit-button.png';
import signIn from '../../images/signin-button.png';

const Header = () => {
    return (
        <header id="header">
            <h1>Blog</h1>
            <div id="buttons">
                <a href=""><img src={createPost} alt=""/></a>
                <a href=""><img src={signIn} alt=""/></a>
            </div>
        </header>
    );
};

export default Header;