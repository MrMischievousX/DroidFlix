import React, { useState, useEffect } from 'react'
import axios from "../axios";
import "../Css/Card.css"
import ScrollContainer from 'react-indiana-drag-scroll'
function Card({ title, fetchUrl, thumb }) {
    const [movies, setmovies] = useState([])
    const url = "https://image.tmdb.org/t/p/w500/"

    useEffect(() => {
        async function getData() {
            const res = await axios.get(fetchUrl);
            setmovies(res.data.results)
            return res;
        }
        getData();
    }, [fetchUrl])

    return (
        <div className="row">
            <h1>{title}</h1>
            <ScrollContainer className="scroll-container">
                <div className="Card_Containers">
                    {
                        movies.map((value) => {
                            return (
                                <img key={value.id} className={thumb ? "Card_Container_thumb" : "Card_Container"} src={`${url}${thumb ? value.poster_path : value.backdrop_path}`} alt={value.name} />
                            );
                        })
                    }
                </div>
            </ScrollContainer>
        </div>
    )
}

export default Card
