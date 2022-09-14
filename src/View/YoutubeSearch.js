import "./YoutubeSearch.scss";
import axios from 'axios';
import { useState, useEffect } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import logo from "../youtubelogo.png";

const YoutubeSearch = () => {

    const [video, setVideo] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {

    })

    const handleSearchYoutube = async () => {
        let res = await axios({
            method: "GET",
            url: 'https://www.googleapis.com/youtube/v3/search',
            params: {

                part: 'snippet',
                maxResults: 10,
                key: 'AIzaSyCwcx3pN4yhhFiDYVmBVsWJ5IzEI5TxWkE',
                type: 'video',
                q: query
            }
        }
        )
        console.log('check res yt: ', res)
        if (res && res.data && res.data.items) {
            let raw = res.data.items;
            let result = [];
            console.log("check raw: ", raw)
            if (raw && raw.length > 0) {
                raw.map(item => {
                    let object = {};
                    object.id = item.id.videoId;
                    object.title = item.snippet.title;
                    object.createdAt = item.snippet.publishedAt;
                    object.author = item.snippet.channelTitle;
                    object.description = item.snippet.description;

                    result.push(object)
                })
            }
            setVideo(result)
            console.log('check result: ', result)
        }

    }

    return (
        <div className="youtube-search-container">
            <img src={logo} style={{ marginBottom: "20px", height: "80px" }} />
            <div className="yt-search"></div>
            <input type="text" placeholder="Search videos"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />
            <button type="button" onClick={handleSearchYoutube}>Search</button>
            {video && video.length > 0 &&
                video.map(item => {
                    return (
                        <div className="yt-result" key={item.id}>
                            <div className="left">
                                <iframe width="100%" height="300px"
                                    src={`https://www.youtube.com/embed/${item.id}`}
                                    title={item.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                            </div>
                            <div className="right">
                                <div className="title">
                                    <Link to={`/Secret/${item.id}`} style={{ textDecoration: "none", color: (160, 0, 255), cursor: "pointer" }}>
                                        {item.title}
                                    </Link>
                                </div>
                                <div className="created-at">
                                    Created at: {moment(item.createdAt).format('DD-MM-YYYY HH:mm:ss A')}
                                </div>
                                <div className="author">
                                    Author: {item.author}
                                </div>
                                <div className="description">
                                    {item.description}
                                </div>
                            </div>

                        </div>
                    )
                })

            }

        </div >
    )
}

export default YoutubeSearch;