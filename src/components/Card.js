import React, { useState, useEffect } from 'react'
import axios from "../axios";
import "../Css/Card.css"
import Info from "./Info"
import ScrollContainer from 'react-indiana-drag-scroll'
function Card({ title, fetchUrl, thumb, id }) {
    const [enable, setenable] = useState(false)
    const [movies, setmovies] = useState([])
    const url = "https://image.tmdb.org/t/p/w500"
    const [datas, setdata] = useState([])

    useEffect(() => {
        async function getData() {
            const res = await axios.get(fetchUrl);
            setmovies(res.data.results)
            return res;
        }
        getData();
    }, [fetchUrl])

    const enables = () => {
        setenable(false)
    }
    return (
        <>
            <div className="row" id={id}>
                <h1>{title}</h1>
                <ScrollContainer className="scroll-container">
                    <div className="Card_Containers" >
                        {
                            movies.map((value, i) => {
                                return (
                                    <>
                                        <img key={value.id} className={thumb ? "Card_Container_thumb" : "Card_Container"} src={`${url}${thumb ? value.poster_path : value.backdrop_path || value.poster_path}`} alt={value.title} onClick={() => {
                                            setdata(value)
                                            setenable(true)
                                        }} />
                                    </>
                                );
                            })
                        }
                    </div>
                </ScrollContainer>
            </div>
            {enable ? <Info image={datas.poster_path} title={datas?.title || datas?.original_name || datas?.titlename || datas?.name} overview={datas.overview} release={datas.release_date || datas.first_air_date} adult={datas.adult} language={datas.original_language} vote={datas.vote_average} enabling={enables} /> : ""}
        </>
    )
}

export default Card
