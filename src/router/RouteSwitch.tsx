import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "../App";
import Layout from "./Layout";
import SinglePost from "../components/single-post/SinglePost";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<App />}/>
                    <Route path="/:id" element={<SinglePost />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;