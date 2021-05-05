import React, { useState, useEffect } from 'react'
import "../Css/Navbar.css"
import axios from "axios";
import Info from "./Info"
import { FaSearch } from "react-icons/fa";
import image from "./droid.png";

function Navbar() {
    const [scroll, setscroll] = useState(false)
    const [searchVal, setsearchVal] = useState("")
    const [enable, setenable] = useState(false)
    const [data, setdata] = useState([])
    document.addEventListener("scroll", e => {
        var scrolled = document.scrollingElement.scrollTop;
        if (scrolled > 240)
            setscroll(true)
        else
            setscroll(false)
    })

    useEffect(() => {
        if (searchVal) {
            let value = searchVal.replace(" ", "%20")
            axios.get(` https://api.themoviedb.org/3/search/movie?api_key=e057c1c54b5e1bad35cdc1d8d3152acf&language=en-US&query=${value}&page=1&include_adult=true`).then((res) => {
                setdata(res.data.results[0])
                setenable(true)
            }).catch(function (error) { console.log(error); });
        }
    }, [searchVal])

    const call = () => {
        setsearchVal(document.getElementById("myText").value)
        document.getElementById("myText").value = ""
    }
    const enabling = () => {
        setenable(false)
    }

    return (
        <>
            {enable ? <Info image={data.poster_path} title={data?.original_title} overview={data.overview} release={data.release_date} adult={data.adult} language={data.original_language} vote={data.vote_average} enabling={enabling} /> : ""}
            <div className="Navbar" style={{
                backgroundColor: scroll ? "rgba(0, 0, 0, 0.8)" : "transparent"
            }}>
                <div className="Navbar_items">
                    <a href="#home" > <img className="logo" src={image} alt="" /></a>
                    <a href="#Trending" className="phone">Trending</a>
                    <a href="#Action" className="phone">Action</a>
                    <a href="#Horror" className="phone">Horror</a>
                    <a href="#Romantic" className="phone">Romantic</a>
                    <a href="#Comedy" className="phone">Comedy</a>
                    <div className="Navbar_icon ">
                        <input id="myText" type="search" placeholder="Enter Movie Name" />
                        <FaSearch className="icon" onClick={call} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar
