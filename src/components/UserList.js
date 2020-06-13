import React, { useEffect, useState } from 'react';
import '../App.css'


const UserList = (props) => {
    let [responseData, setResponseData] = useState([]);

    const handleRedirect = (event) => {
        props.updateEdit(event)
    }

    return (
        <div>
            <div className="tab-pane fade show active">
                <table className="table" cellSpacing="0" cellPadding="0">
                    <thead>

                        <tr>
                            <th>Employee Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    {
                        props.responseData.map((data, index) => (
                            <tbody>
                                <tr>
                                    <td ><a className="list-link" href="#" onClick={() => { handleRedirect(index) }}>{data.id}</a></td>
                                    <td><a className="list-link" href="#" onClick={() => { handleRedirect(index) }}>{data.first_name}</a></td>
                                    <td>
                                        <a className="list-link" href="#" onClick={() => { handleRedirect(index) }}>{data.last_name}</a></td>
                                    <td>
                                        <a className="list-link" href="#" onClick={() => { handleRedirect(index) }}>{data.email}</a></td>
                                </tr>
                            </tbody>
                        ))
                    }
                </table>

            </div>
        </div >
    )
}
export default UserList;