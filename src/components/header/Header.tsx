import React, {Dispatch, SetStateAction} from 'react';

import './Header.css';
import createPost from '../../images/edit-button.png';
import signIn from '../../images/signin-button.png';
import {Link} from "react-router-dom";

interface Props {
    setLogin: Dispatch<SetStateAction<boolean>>;
}

const Header = (props: Props) => {
    function handleClick(e: { preventDefault: () => void; }) {
        e.preventDefault();
        props.setLogin(true);
    }

    return (
        <header id="header">
            <Link to="/" ><h1>Blog</h1></Link>
            <div id="buttons">
                {localStorage.getItem('token') ? <a href=""><img src={createPost} alt=""/></a> : ''}
                {localStorage.getItem('token') ? <h2>Hello, {localStorage.getItem('user')}</h2> : <a href="" onClick={handleClick}><img src={signIn} alt=""/></a>}
            </div>
        </header>
    );
};

export default Header;