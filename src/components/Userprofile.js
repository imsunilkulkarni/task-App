import React, { useState, useEffect } from "react";
import '../App.css'
import UserList from "./UserList"



const Userprofile = (props) => {

    const [user, setUser] = useState(props.resp)
    const [submit, submitUser] = useState(props.resp)
    const [updateid, id] = useState(props.resp.id)
    const [updatefirst_name, first_name] = useState(props.resp.first_name)
    const [updatelast_name, last_name] = useState(props.resp.last_name)
    const [updateemail, email] = useState(props.resp.email)


    useEffect(() => { setUser(props.resp) }, [props])
    useEffect(() => { id(props.resp.id) }, [props])
    useEffect(() => { first_name(props.resp.first_name) }, [props])
    useEffect(() => { last_name(props.resp.last_name) }, [props])
    useEffect(() => { email(props.resp.email) }, [props])



    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Here is your Employee Id--> ${updateid}`);
        console.log(`Your First Name--> ${updatefirst_name}`);
        console.log(`Your last Name--> ${updatelast_name}`);
        console.log(`Use your email chit chat ---> ${updateemail}`);
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <div className="profile-main">
                        <div className="profile-container">
                            <label>Employee Id</label>
                            <input type="text" className="text-line" value={updateid} onChange={event => id(event.target.value)} />
                        </div>
                        <div className="profile-container">
                            <label>First Name</label>
                            <input type="text" className="text-line" value={updatefirst_name} onChange={event => first_name(event.target.value)} />
                        </div>
                        <div className="profile-container">
                            <label>Last Name</label>
                            <input type="text" className="text-line" value={updatelast_name} onChange={event => last_name(event.target.value)} />
                        </div>
                        <div className="profile-container">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="text-line" value={updateemail} onChange={event => email(event.target.value)} />
                        </div>
                    </div>
                    <div className="profile-btn">
                        <button className="btn btn-secondary">Submit</button>
                    </div>
                    {/* {
                        submit === 0 ?
                            <div>
                                <span>Submitted Succesfully!!!</span>
                            </div> : false
                    } */}

                </div>
            </form>
        </div>
    )
}
Userprofile.defaultProps = {
    resp: {
        id: "",
        first_name: "",
        last_name: "",
        email: ""
    }
}



export default Userprofile;