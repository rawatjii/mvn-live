import React, {useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {  toast } from 'react-toastify';
import {useNavigate } from 'react-router-dom';
// import * as actionTypes from 'root/store/actions';
import * as CONFIG from 'root/config/config';
// import Loader from "common/Loader/loader";
// import {Encrypt} from 'root/config/Hash';

import './assets/css/admin.css';

import 'react-toastify/dist/ReactToastify.css';

const Login = ()=>{
    const [isLoading, setIsLoading] = useState(false);

    // const isLogin = useSelector(state=>state.user.isLogin)
    // const dispatch = useDispatch();
    const navigate = useNavigate();
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [errors, setErrors] = useState({}) 

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    // useEffect(()=>{
    //     if(isLogin){
    //         return navigate(CONFIG.ADMIN_ROOT)
    //     }
    // }, [useNavigate, useSelector])

    const loginFunc = async()=>{
        var emailVal = emailRef.current.value;
        var passwordVal = passwordRef.current.value;
        setIsLoading(true);
        try{
            setEmailError('');
            setPasswordError('');

            if (!emailVal) {
                setEmailError('Please enter your email');
                setIsLoading(false);
                throw new Error('Invalid Email and Password');
            }

            if(!passwordVal){
                setPasswordError('Please enter your password');
                setIsLoading(false);
                throw new Error('Invalid Email and Password');
            }

            // if (!CONFIG.TOKEN) {
            //     throw new Error('JWT secret not available');
            // }
       
            // const response = await fetch(CONFIG.API_URL + 'admin/login', {
            //     method:'POST',
            //     headers:{
            //         'Content-Type':'application/json'
            //     },
            //     body:JSON.stringify({
            //         email:emailVal,
            //         password:passwordVal
            //     })
            // });

            // if(!response.ok && response.status !== 200){
            //    passwordRef.current = '';
            //    setIsLoading(false);
            //     throw new Error('Invalid Email and Password');
            // }
            
            // const data = await response.json();

            // get token from api
            // const token = data.authorisation.token

            // encrypt or add character
            // const encryptToken = Encrypt(token)

            // localStorage.setItem('token', encryptToken)

            emailVal = '';
            passwordVal = '';

            setIsLoading(false);
            // dispatch(actionTypes.login())
            toast.success('Login Successful')
            return navigate(CONFIG.ADMIN_ROOT)

        }catch(err){
            setIsLoading(false);
            toast.error(err.message)
        }
    }

    const loginHandler = (e)=>{
        e.preventDefault();

        loginFunc();
    }

    if (isLoading) {
        return <Loader />; // Use the Loader component
    }
    
    return(
        <>
            <div className="admin_container login_page">
                <div className="row mx-0">
                    <div className="col-md-6 left_col">
                    </div>

                    <div className="col-md-6 right_col">
                        <div className="logo">
                            <img src={CONFIG.IMAGE_URL + 'logo.webp'} alt="logo" className="img-fluid" />
                        </div>

                        <div className="form_data">
                            <h3 className="title">Sign In</h3>
                            
                            <form id="loginForm" onSubmit={loginHandler}>
                                <div className="form-group mb-3">
                                    <label className="form-label" htmlFor="emailAddress">Email Address</label>
                                    <input ref={emailRef} type="email" className="form-control" required="" placeholder="Email or Username" />
                                    {/* {errors.email && <div className="errMsg">{errors.email}</div>} */}
                                    {emailError && <div className="errMsg">{emailError}</div>}
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="loginPassword">Password</label>
                                    <input ref={passwordRef} type="password" className="form-control" id="loginPassword" required="" placeholder="Password" />
                                    {/* {errors.password && <div className="errMsg">{errors.password}</div>} */}
                                    {passwordError && <div className="errMsg">{passwordError}</div>}
                                </div>

                                {/*<div className="row my-4">
                                    /~ <div className="col">
                                        <div className="form-check">
                                            <input id="remember-me" name="remember" className="form-check-input" type="checkbox" />
                                            <label className="form-check-label" htmlFor="remember-me">Remember Me</label>
                                        </div>
                                    </div> ~/

                                    <div className="col text-end"><a href="forgot-password-18.html">Forgot Password ?</a></div>
                                </div>*/}

                                <div className="d-grid my-4">
                                    <button className="btn btn_primary submit_btn" type="submit">Sign In</button>
                                </div>

                                {/* <p className="text-2 text-muted text-center">Not a member? <a href="register-18.html">Sign Up now</a></p> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Login;