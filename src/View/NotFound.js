import { useHistory } from "react-router-dom";

const NotFound = () => {
    let history = useHistory()
    const handleBackHome = () => {
        history.push("/")
    }
    return (
        <div className="not-found-container">
            <h4>This Page Isn't Available</h4>
            <h5>The link  maybe broken, or the page have been removed. Check to see if the link you'er trying to open is correct</h5>
            <button className="back-home" onClick={handleBackHome} style={{ borderRadius: "12px", fontSize: "15px", padding: "2px 10px", backgroundColor: "rgb(220,200,255)" }}>Go to Homepage</button>
        </div>
    )
}
export default NotFound;