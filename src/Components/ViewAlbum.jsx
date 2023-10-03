import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'

const ViewAlbum = () => {
    const [albumData, setData] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    const getData = () => {
        axios.get("https://jsonplaceholder.typicode.com/albums").then(
            (Response) => {
                setData(Response.data)
                setIsLoading(false)
            }
        )

    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <h1>View Album</h1>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">User ID</th>
                                            <th scope="col">ID</th>
                                            <th scope="col">Title</th>
                                        </tr>
                                    </thead>
                                    {isLoading ? <div class="spinner-grow" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div> : <tbody>
                                        {albumData.map(
                                            (value, index) => {
                                                return <tr>
                                                    <th scope="row">{value.userId}</th>
                                                    <td>{value.id}</td>
                                                    <td>{value.title}</td>
                                                </tr>
                                            }
                                        )}

                                    </tbody>}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAlbum