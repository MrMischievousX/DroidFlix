import React, { useState } from 'react'
import "../Css/Navbar.css"
import { FaSearch } from "react-icons/fa";
import image from "./droid.png";

function Navbar() {
    const [scroll, setscroll] = useState(false)
    document.addEventListener("scroll", e => {
        var scrolled = document.scrollingElement.scrollTop;
        if (scrolled > 120)
            setscroll(true)
        else
            setscroll(false)
    })
    return (
        <div className="Navbar" style={{
            backgroundColor: scroll ? "rgba(0, 0, 0, 0.8)" : "transparent"
        }}>
            <div className="Navbar_items">
                <a href="#home" > <img className="logo" src={image} alt="" /></a>
                <a href="#home" className="phone">Home</a>
                <a href="#home" className="phone">TV Shows</a>
                <a href="#home" className="phone">Movies</a>
                <a href="#home" className="phone">Recently Added</a>
                <a href="#home" className="phone">My List</a>
                <div className="Navbar_icon phone" style={{ marginTop: "-1rem" }}>
                    <input type="search" />
                    <FaSearch className="icon" />
                </div>
            </div>
        </div>
    )
}

export default Navbar
