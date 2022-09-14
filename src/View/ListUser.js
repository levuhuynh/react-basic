import { Link } from "react-router-dom";
import useFetch from "../customize/fetch";
import './ListUser.scss';
import { useState } from "react";

const ListUser = () => {
    const [page, setPage] = useState("1")
    const { data: dataUsers, isLoading, isError }
        = useFetch(`https://reqres.in/api/users?page=${page}`, false);
    const [active, setActive] = useState("1");

    let dataPage = [];

    let newData = dataUsers.data
    let totalPages = dataUsers.total_pages

    for (var i = 0; i < totalPages; i++) {
        dataPage = [...dataPage, i + 1]
    }
    // console.log('data: ', dataPage)

    const pageChange = (event) => {
        let value = event.target.value
        setPage(value)
        setActive(event.target.id)
    }

    return (
        <>
            <div className="user-container">
                <div className="user-title">
                    List users
                </div>

                <div className="user-content">
                    {isLoading === false && isError === false && newData && newData.length > 0 &&
                        newData.map((item, index) => {
                            return (
                                < div className="child" key={item.id} style={{ cursor: 'pointer' }
                                }>
                                    <Link to={`/user/${item.id}`} style={{ textDecoration: "none", color: "black" }}>
                                        {index + 1} - {item.first_name} - {item.last_name}</Link>
                                </div>
                            )
                        }
                        )
                    }
                    {isLoading === false && isError === false && newData && newData.length > 0 &&
                        dataPage.map(item => {
                            return (
                                <button type="button" id={item} key={item} value={item}
                                    className={active === String(item) ? "active" : ""}
                                    onClick={(event) => pageChange(event)}>{item}</button>
                            )
                        })
                    }
                    {isLoading === true && <div>Loading... </div>}
                    {isError === true && <div>Something wrong...</div>}
                </div>
            </div>
        </>
    )
}

export default ListUser;