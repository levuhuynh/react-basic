import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useFetch = (url, isCovidData) => {

    const [data, setData] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const ourRequest = axios.CancelToken.source()

        async function fetchData() {
            try {
                let res = await axios.get(url, {
                    cancelToken: ourRequest.token,
                })

                let data = res && res.data ? res.data : []
                if (data && data.length > 0 && isCovidData === true) {
                    data.map(item => {
                        item.Date = moment(item.Date).format("DD/MM/YYYY")
                        return item;
                    })
                }
                setData(data)
                setisLoading(false)
                setIsError(false)
            }
            catch (err) {
                if (axios.isCancel(err)) {
                    toast.error('Request canceled by the user');
                } else {
                    toast.error(err.message);
                    setIsError(true);
                    setisLoading(false);
                }

            }

        }
        setTimeout(() => {
            fetchData();
        }, 1000)

        return () => {
            ourRequest.cancel()
        }
    }, [url])

    return {
        data, isLoading, isError
    }
}


export default useFetch;