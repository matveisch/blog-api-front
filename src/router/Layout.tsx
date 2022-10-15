import React from 'react';
import {Outlet} from "react-router-dom";

import Header from "../components/header/Header";

const Layout = () => {
    return (
        <>
            <Header />
            <main className="main-screen">
                <Outlet />
            </main>
        </>
    );
};

export default Layout;