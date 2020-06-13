import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import React, { useState, useEffect } from 'react';
import { Link, Switch, Route } from "react-router-dom";
import UserList from "./UserList";
import Userprofile from './Userprofile';
import axios from 'axios'


const Body = (props) => {

    const [key, setKey] = useState('UserList');
    const [user, setUser] = useState([])
    const [update, updateEdit] = useState([])


    React.useEffect(() => {
        axios.get('https://reqres.in/api/users?page=2')
            .then(res => {
                setUser(res.data.data)
            }).catch((err) => {
                console.log(err)
            })
    }, [])

    const editRow = (event) => {
        updateEdit(event);
        setKey("Userprofile");
    }
    return (
        <div>
            <div className="tab-container">
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}>
                    <Tab eventKey="UserList" title="UserList">
                        <UserList responseData={user} updateEdit={editRow} />
                    </Tab>
                    <Tab eventKey="Userprofile" title="Userprofile">
                        <Userprofile resp={user[update]} />
                    </Tab>
                </Tabs>
            </div>

        </div>
    );
}

export default Body;
