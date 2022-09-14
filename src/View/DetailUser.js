import { useParams, useHistory } from "react-router-dom";
import useFetch from "../customize/fetch";
import "./ListUser.scss";

const DetailUser = () => {
    let { id } = useParams();
    let history = useHistory();

    const handleBackButton = () => {
        history.push('/user')
    }

    const { data: dataUserDetail, isLoading, isError } //= useFetch('https://api.covid19api.com/country/vietnam?from=2022-05-01T00%3A00%3A00Z&to=2022-05-31T00%3A00%3A00Z')
        = useFetch(`https://reqres.in/api/users/${id}`, false)

    let newData = dataUserDetail.data;
    // console.log('user: ', newData)
    return (
        <>
            <div>Detail User with id : <b> {id} </b></div>
            {isLoading === true && <div>Loading... </div>}
            {isError === true && <div>Something wrong...</div>}
            {newData && Object.getOwnPropertyNames(newData).length > 0 &&
                <>
                    <div className="user-detail">
                        <div style={{ paddingTop: '15px' }}><b>User's name:</b> {newData.first_name} - {newData.last_name}</div>
                        <div ><b>User's email:</b> {newData.email}</div>
                    </div>
                    <div>
                        <img src={newData.avatar} style={{ padding: "10px" }} />
                    </div>
                    <div>
                        <button type="button" onClick={() => handleBackButton()}>Back</button>
                    </div>
                </>
            }
        </>
    )
}

export default DetailUser;