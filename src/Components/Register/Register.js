import React from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div>
                <h2>Register: Create Account</h2>
                <form onSubmit="">
                <input type="email" name="" id="email" placeholder="Enter Your Mail" />
                    <br />
                    <input type="password" name="" id="" placeholder="Enter Your Password" />
                    <br />
                    <input type="password" name="" id="" placeholder= "Re-enter Your Password" />
                    <br />
                    <input type="submit" value="submit" />
                </form>
                <p>Already Have An Account? <NavLink style={{textDecoration:"none"}} to = "/login">Login</NavLink></p>
                <br />
                <div>----------or----------</div>
                <button className="btn-regular">Google Sign In</button>

            </div>
        </div>
    );
};

export default Register;