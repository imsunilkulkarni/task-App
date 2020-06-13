import React, { useState, useEffect } from 'react'
import '../App.css'
import { Nav, NavBar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import Body from "./Body"
import logo from '../assets/images/shopping.svg'
import chain from "../assets/images/chain.svg"
import document from "../assets/images/document.svg"
import engineering from "../assets/images/engineering.svg"
import openLetter from "../assets/images/open-envelope.svg"


export const Header = () => {
    const [key, values] = useState()
    const menuBar = [
        { url: chain, src: "/chain" },
        { url: document, src: "/document" },
        { url: engineering, src: "/engineering" },
        { url: openLetter, src: "/openLetter" },
    ]
    React.useEffect = (() => {
        values(menuBar);
    })
    return (
        <div className="grid-container px-0 pl-sm-4">
            <div className="menu">
                {menuBar.map((data, index) => {
                    return (
                        <a href={data.src} className="menu-link" key={index}>
                            <div className="menu-item" >
                                <img src={data.url} alt="" />
                            </div>
                        </a>
                    )
                })
                }
            </div>
            <div className="header px-0">
                <div className="logo">
                    <a href="/home" >
                        <img src={logo} className="logo" alt="logo" />
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Header