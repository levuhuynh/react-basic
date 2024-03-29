import { useParams, useHistory } from "react-router-dom";
import useFetch from "../customize/fetch";
import "./Blog.scss"

const DetailBlog = () => {
    let { id } = useParams();
    let history = useHistory();

    const { data: dataBlogDetail, isLoading, isError }
        = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false)


    const handleBackData = () => {
        history.push('/blog')
    }

    console.log("check detail:", dataBlogDetail)
    return (
        <>
            <h4>blog: {id}</h4>

            <div className="blog-detail">
                {isLoading === true && <div>Loading... </div>}
                {isError === true && <div>Something wrong...</div>}
                {dataBlogDetail && Object.getOwnPropertyNames(dataBlogDetail).length > 0 &&
                    <>
                        <div className="title">
                            {dataBlogDetail.title}
                        </div>
                        <div className="content">
                            {dataBlogDetail.body}
                        </div>
                    </>

                }


            </div>

            <button onClick={handleBackData}>
                Back
            </button>
        </>
    )
}
export default DetailBlog;