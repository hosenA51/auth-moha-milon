import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet/>
        </div>
    );
};

export default Root;