import { useEffect, useState } from "react";
import useFetch from "../customize/fetch";
import moment from "moment";

const Covid = () => {

    const today = moment().startOf('day')
    const priorDay = moment().startOf('day').subtract(30, 'days')

    const [showData, setShowData] = useState(false);

    const handleShowHide = () => {
        let res = !showData
        setShowData(res)
    }

    const { data: dataCovid, isLoading, isError } //= useFetch('https://api.covid19api.com/country/vietnam?from=2022-05-01T00%3A00%3A00Z&to=2022-05-31T00%3A00%3A00Z')
        = useFetch(`https://api.covid19api.com/country/vietnam?from=${priorDay.toISOString()}&to=${today.toISOString()}`, true)
    return (

        <div style={{ width: '100%' }}>

            <div style={{ fontSize: "30px", marginBottom: "15px" }}>Covid 19 tracking in Vietnam</div>
            {
                showData === false ?
                    <div>
                        <button onClick={() => { handleShowHide() }}>Show</button>
                    </div>
                    :
                    <>
                        <button onClick={() => { handleShowHide() }}>Hide</button>
                        <table id="customers" style={{ marginLeft: '0px' }}>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Confirmed</th>
                                    <th>Active</th>
                                    <th>Death</th>
                                    <th>Recovered</th>
                                </tr>
                            </thead>
                            <tbody>
                                {isError === false && isLoading === false && dataCovid && dataCovid.length > 0 &&
                                    dataCovid.map(item => {
                                        return (
                                            <tr key={item.ID}>
                                                <td>{item.Date}</td>
                                                <td>{item.Confirmed}</td>
                                                <td>{item.Active}</td>
                                                <td>{item.Deaths}</td>
                                                <td>{item.Recovered}</td>
                                            </tr>
                                        )
                                    })
                                }
                                {isLoading === true &&
                                    <tr>
                                        <td colSpan='5' style={{ 'textAlign': 'center' }}>Loading...</td>
                                    </tr>
                                }
                                {isError === true &&
                                    <tr>
                                        <td colSpan='5' style={{ 'textAlign': 'center' }}>Something wrong...</td>
                                    </tr>
                                }

                            </tbody>

                        </table>
                    </>
            }
        </div >
    )
}

export default Covid;