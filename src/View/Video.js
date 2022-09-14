import { useParams } from "react-router-dom";
import "./YoutubeSearch.scss";
import logo from "../youtubelogo.png";
import { NavItem } from "react-bootstrap";

const Video = () => {

    let { id } = useParams();
    let { title } = useParams();

    return (
        <>
            <img src={logo} style={{ height: "50px" }} />
            <div className="video-container">
                <iframe width="1024" height="576"
                    src={`https://www.youtube.com/embed/${id}`}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                <div className="video-title">{title}</div>
            </div>
        </>
    )
}
export default Video;
