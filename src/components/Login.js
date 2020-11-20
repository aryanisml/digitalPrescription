import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Login = (props) => {

    const [formUserInput, setState] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setState({
            ...formUserInput,
            [id]: value
        })
    }
    // const history = useHistory();
    const handleSumbit = (event) => {
        event.preventDefault();
        loginProcess();
    }


    const loginProcess = async () => {
        const payload = {
            name: formUserInput.name,
            email: formUserInput.email,
            password: formUserInput.password
        }
        const resp = await axios.post('http://localhost:3030/api/login', payload);
        if (resp) {
            props.history.push('/app');
        }
    }


    return (
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                    <label>Name</label>
                    <input type="text" placeholder="Enter User name" id="name" value={formUserInput.name}
                        onChange={handleInputChange}  className="form-control"  />
                </div>
                <div className="form-group text-left">
                    <label>Password</label>
                    <input type="password" placeholder="Enter password" id="password" value={formUserInput.password}
                        onChange={handleInputChange} className="form-control"/>
                </div>
                <div className="form-group text-left">
                    <label>Email</label>
                    <input type="email" placeholder="Enter email" id="email" value={formUserInput.email}
                        onChange={handleInputChange} className="form-control"/>
                </div>
                <button type="submit" onClick={handleSumbit}  className="btn btn-primary">Login</button>
            </form>
            <div className="registerMessage">
                <span>Dont have an account? </span>
                <span className="loginText">Register</span> 
            </div>
        </div>
    );
}

export default Login;