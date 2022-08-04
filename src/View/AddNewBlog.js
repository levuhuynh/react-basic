import "./Blog.scss"
import { useState } from "react";
import axios from "axios";

const AddNewBlog = (props) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (event) => {
        if (!title || !content) {
            alert("Empty title or content")
            return
        }

        let data = {
            title: title,
            body: content,
            userId: 1
        }

        event.preventDefault();

        let res = await axios.post('https://jsonplaceholder.typicode.com/posts', data)
        if (res && res.data) {
            let newBlogs = res.data;
            props.handleAddNew(newBlogs)
        }


    }
    return (
        <div className="add-new-container">
            <form onSubmit={handleSubmit}>
                <div className="text-add-new">Add new blogs</div>
                <div className="input-datas">
                    <label>Title: </label>
                    <input type={'text'} value={title}
                        onChange={(event) => setTitle(event.target.value)} />
                </div>
                <div className="input-datas">
                    <label>Content: </label>
                    <input type={'text'} value={content}
                        onChange={(event) => setContent(event.target.value)} />
                </div>
                {/* <button className="btn-add-new" onClick={handleSubmit}>Submit</button> */}
                <button className="btn-add-new" type="submit">Submit</button>
            </form>
        </div>
    )
}
export default AddNewBlog;