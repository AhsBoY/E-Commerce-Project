import React from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Register from '../Register/Register';
import "./login.css"

const Login = () => {
    const { signInUsingGoogle } = useAuth()
    const history = useHistory()
    const location = useLocation()
    const redirect_Uri = location.state?.from || "/"
    console.log("came from", location.state?.from)

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_Uri)
            })
    }
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name="" id="email" placeholder="Enter Your Mail" />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input className="btn btn-secondary mt-2" type="submit" value="submit" />
                </form>
                <p>New To Ema-John? <NavLink style={{ textDecoration: "none" }} to="/register">Create Account</NavLink></p>
                <div>-----------or-----------</div>
                <br />
                <button
                    className="btn-regular"
                    onClick={handleGoogleSignIn}
                >Google Sign In</button>

            </div>
        </div>
    );
};

export default Login;