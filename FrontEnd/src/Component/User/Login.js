import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { login } from "../../actions/UserAction";
import { useDispatch, useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toast } from 'bootstrap';
import './Login.css';

const Login = ({ history }) => {

    const dispatch = useDispatch();
    const [loginEmail, setLoginEmail] = useState("");
    const [loginpassword, setLoginPassword] = useState("");
    const [loginError, setLoginError] = useState(null);
    const { error } = useSelector((state) => state.user);

    const toastElement = document.getElementById('liveToast');
    const toast = new Toast(toastElement);

    const toastElementError = document.getElementById('liveToastError');
    const Errortoast = new Toast(toastElementError);

    const loginSubmit = (e) => {
        e.preventDefault();
        dispatch(login(loginEmail, loginpassword, history, toast));
    };

    useEffect(() => {
        if (error) {
            setLoginError(error)
            Errortoast.show()
        }
    }, [error])
    return (
        <div class="container">
            <div class="toast-container position-fixed bottom-0 end-0 p-3">
                <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header bg-success-subtle text-dark-emphasis">
                        <strong class="me-auto">Info</strong>
                        <small>Just now</small>
                        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div class="toast-body bg-success-subtle text-dark-emphasis">
                        You have logged in successful!
                    </div>
                </div>
            </div>

            <div class="toast-container position-fixed bottom-0 end-0 p-3">
                <div id="liveToastError" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header bg-danger text-white">
                        <strong class="me-auto">Log In Error</strong>
                        <small>Just now</small>
                        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div class="toast-body bg-danger text-white">
                        {loginError}
                    </div>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-xl-10 col-lg-12 col-md-9">
                    <div class="card o-hidden border-0 shadow-lg my-5">
                        <div class="card-body p-0">
                            <div class="row">
                                <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                <div class="col-lg-6">
                                    <div class="p-5">
                                        <div class="text-center">
                                            <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                        </div>
                                        <form class="user" onSubmit={loginSubmit}>
                                            <div class="form-group">
                                                <input required type="email" class="form-control form-control-user"
                                                    id="exampleInputEmail" aria-describedby="emailHelp"
                                                    placeholder="Enter Email Address..." value={loginEmail} onChange={e => setLoginEmail(e.target.value)}></input>
                                            </div>
                                            <div class="form-group">
                                                <input required type="password" class="form-control form-control-user"
                                                    id="exampleInputPassword" placeholder="Password" value={loginpassword} onChange={e => setLoginPassword(e.target.value)}></input>
                                            </div>
                                            <div class="form-group">
                                                <div class="custom-control custom-checkbox small">
                                                    <input type="checkbox" class="custom-control-input" id="customCheck"></input>
                                                    <label class="custom-control-label" for="customCheck">Remember
                                                        Me</label>
                                                </div>
                                            </div>
                                            <button type='submit' class="btn btn-primary btn-user btn-block" id="liveToastBtn">
                                                Login
                                            </button>
                                            <hr></hr>
                                            <a disabled href="#" class="btn btn-google btn-user btn-block">
                                                <i class="fab fa-google fa-fw"></i> Login with Google
                                            </a>
                                            <a disabled href="#" class="btn btn-facebook btn-user btn-block">
                                                <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                            </a>
                                        </form>
                                        <hr></hr>
                                        <div class="text-center">
                                            <a class="small" href="#">Forgot Password?</a>
                                        </div>
                                        <div class="text-center">
                                            <Link class="small" to="/signUp">Create an Account!</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;