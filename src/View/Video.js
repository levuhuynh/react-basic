import { useParams } from "react-router-dom";
import "./YoutubeSearch.scss";
import logo from "../youtubelogo.png";

const Video = () => {

    let { id } = useParams();

    return (
        <>
            <img src={logo} />
            <div className="video-container">
                <iframe width="1024" height="576"
                    src={`https://www.youtube.com/embed/${id}`}
                    title={id}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
            </div>
        </>
    )
}
export default Video;
