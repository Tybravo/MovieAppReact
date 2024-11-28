import { Outlet } from "react-router-dom";
import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import style from "../styles/layout.module.css";
import Sidebar from "../components/SideBar";

const Layout = () => {
    return(
        <>
        <div className={style.mainBackground}>
            <Header/>
            <div className={style.outLetContainer}>
                <Sidebar/>
                <Outlet/>
            </div>
            <Footer/>
        </div>
        </>
    )
}

export default Layout