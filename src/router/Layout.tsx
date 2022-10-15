import React, {useState} from 'react';
import {Outlet} from "react-router-dom";

import Header from "../components/header/Header";
import Login from "../components/login/Login";

const Layout = () => {
    const [login, setLogin] = useState(false);

    return (
        <>
            <Header setLogin={setLogin}/>
            <main className="main-screen relative">
                <Outlet />
                <Login login={login} setLogin={setLogin}/>
            </main>
        </>
    );
};

export default Layout;