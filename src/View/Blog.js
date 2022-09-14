import useFetch from "../customize/fetch";
import './Blog.scss';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import AddNewBlog from "./AddNewBlog";

const Blog = () => {

    const { data: dataBlogs, isLoading, isError }
        = useFetch(`https://jsonplaceholder.typicode.com/posts`, false);

    const [show, setShow] = useState(false);
    const [newData, setNewData] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        if (dataBlogs && dataBlogs.length > 0) {
            let data = dataBlogs.slice(0, 9)
            // console.log('check data:', newData)
            setNewData(data)
        }
    }, [dataBlogs])

    const handleAddNew = (blog) => {

        let data = newData;
        data.unshift(blog);

        setShow(false);
        setNewData(data);

    }

    const deleteBlog = (id) => {
        let data = newData;
        data = data.filter(item => item.id !== id)
        setNewData(data)
    }

    return (
        <>

            <div style={{ fontSize: "30px", marginBottom: "15px" }}>All Blogs</div>

            {
                isLoading === false && isError === false &&
                <>
                    <Button variant="primary" onClick={handleShow} style={{ backgroundColor: "white", color: "black", margin: "10px 0", borderRadius: "12px" }}>
                        + Add new blogs
                    </Button>

                    <Modal show={show} onHide={handleClose} style={{ backgroundColor: "rgb(5,5,5,0.3)" }}>
                        <Modal.Header closeButton style={{ backgroundColor: "#ffcde9", color: "rgb(160, 0, 255)" }}>
                            <Modal.Title>Add new blogs</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{ backgroundColor: "#ffcde9" }}>
                            <AddNewBlog handleAddNew={handleAddNew} />
                        </Modal.Body>
                    </Modal>
                </>
            }
            <div className="blog-container">
                {isLoading === false && isError === false && newData && newData.length > 0 && newData.map(item => {
                    return (
                        <div className='single-blog' key={item.id}>
                            <div className="title"><span>{item.title}</span>
                                <span style={{ position: "relative", float: "right", top: "-20px", right: "-10px", cursor: "pointer" }}
                                    onClick={() => deleteBlog(item.id)}
                                >[X]</span>
                            </div>
                            <div className="content">{item.body}</div>
                            <button className="button" style={{ marginTop: '5px' }}>
                                <Link to={`/blog/${item.id}`} style={{ textDecoration: "none", color: "black" }}>View detail</Link>
                            </button>
                        </div>
                    )
                })}
                {
                    isLoading === true && <div style={{ fontWeight: 'bold', fontSize: '18px' }}>Loading...</div>
                }
                {
                    isError === true && <div>Something wrong...</div>
                }
            </div>
        </>
    )
}
export default Blog;