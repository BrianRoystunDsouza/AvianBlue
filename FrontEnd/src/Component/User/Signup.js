import React, { useState, useEffect } from 'react';
import './Login.css';
import { Link } from "react-router-dom";
import { register } from "../../actions/UserAction";
import { useDispatch, useSelector } from "react-redux";
import { Toast } from 'bootstrap';
import './Login.css';

const SignUp = ({ history }) => {
    const dispatch = useDispatch();
    const { error } = useSelector((state) => state.user);

    const [user, setUser] = useState({
        userName: "",
        password: "",
        repeatpassword: "",
        email: "",
    });
    const [loginError, setLoginError] = useState(null);

    const toastElementError = document.getElementById('liveToastErrorsignUp');
    const Errortoast = new Toast(toastElementError);

    useEffect(() => {
        if (error) {
            setLoginError(error.message || error)
            Errortoast.show()
        }
    }, [error])

    const { userName, password, email, repeatpassword } = user;

    const registerSubmit = (e) => {
        e.preventDefault();
        if (password === repeatpassword) {
            dispatch(register(userName, password, email, history));
        } else {
            setLoginError("Please make sure your password match")
            Errortoast.show()
        }
    };

    const registerDataChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    return (
        <div class="container">
            <div class="toast-container position-fixed bottom-0 end-0 p-3">
                <div id="liveToastErrorsignUp" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header bg-danger text-white">
                        <strong class="me-auto">SignUp Error</strong>
                        <small>Just now</small>
                        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div class="toast-body bg-danger text-white">
                        {loginError}
                    </div>
                </div>
            </div>
            <div class="card o-hidden border-0 shadow-lg my-5">
                <div class="card-body p-0">
                    <div class="row">
                        <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                        <div class="col-lg-7">
                            <div class="p-5">
                                <div class="text-center">
                                    <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                                </div>
                                <form class="user" onSubmit={registerSubmit}>
                                    <div class="form-group row">
                                        <div class="col-sm-6 mb-3 mb-sm-0">
                                            <input required type="text" class="form-control form-control-user" id="exampleFirstName" name='userName'
                                                placeholder="First Name" value={userName} onChange={registerDataChange}></input>
                                        </div>
                                        <div class="col-sm-6">
                                            <input type="text" class="form-control form-control-user" id="exampleLastName"
                                                placeholder="Last Name"></input>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <input required type="email" class="form-control form-control-user" id="exampleInputEmail"
                                            placeholder="Email Address" name='email' value={email} onChange={registerDataChange}></input>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-sm-6 mb-3 mb-sm-0">
                                            <input type="password" class="form-control form-control-user"
                                                id="exampleInputPassword" placeholder="Password" name='password' value={password} onChange={registerDataChange}></input>
                                        </div>
                                        <div class="col-sm-6">
                                            <input type="password" class="form-control form-control-user"
                                                id="exampleRepeatPassword" placeholder="Repeat Password" name='repeatpassword' value={repeatpassword} onChange={registerDataChange}></input>
                                        </div>
                                    </div>
                                    <button type='submit' class="btn btn-primary btn-user btn-block">
                                        Register Account
                                    </button>
                                    <hr></hr>
                                    <a href="#" class="btn btn-google btn-user btn-block">
                                        <i class="fab fa-google fa-fw"></i> Register with Google
                                    </a>
                                    <a href="#" class="btn btn-facebook btn-user btn-block">
                                        <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
                                    </a>
                                </form>
                                <hr></hr>
                                <div class="text-center">
                                    <a class="small" href="#">Forgot Password?</a>
                                </div>
                                <div class="text-center">
                                    <Link class="small" to="/login">Already have an account? Login!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SignUp;
