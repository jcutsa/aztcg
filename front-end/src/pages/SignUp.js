import { useRef, useState, useEffect } from "react";
import {faCheck, faTimes, faInfoCircle} from "@fortawesome/free-solid-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//regex criteria for the Username Must Start with Lower or Uppercase Letter followed by 3-23 lower/uppercase letters, numbers, hyphens or underscores 
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
//password criteria 1 lowercase 1 uppercase 1 digit and 1 special character 8-24 characters 
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

import React from 'react'

const SignUp = () => {
    const userRef = useRef();
    const errRef = useRef();
    
    const[user, setUser ] = useState('');
    const[validName, setValidName] = useState(false);
    const[userFocus, setUserFocus] = useState(false);

    const[pwd, setPwd] = useState('');
    const[validPwd, setValidPwd] = useState(false); 
    const[pwdFocus, setPwdFocus] = useState(false); 

    const [matchPwd, setMatchPwd] = useState(''); 
    const [validMatch, setValidMatch] = useState(false); 
    const [matchFocus , setMatchFocus] = useState(false); 

    const [errMsg, setErrMsg] = useState(''); 
    const [success, setSuccess] = useState(false); 

    useEffect(()=>{
        userRef.current.focus(); 

    }, [])

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result); 
        console.log(user);
        setValidName(result);
    }, [user])

    useEffect(() => {
        const result = USER_REGEX.test(pwd);
        console.log(result); 
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd; 
        setValidMatch(match);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])


  return (
    <section>
        <p ref = {errRef} className= {errMsg ? "errmsg":
        "offscreen"} aria-live="assertive">{errMsg}</p>
        <h1>Register</h1>
        <form>
            <label htmlFor="username">
                Username:
            </label>
            <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
            />
        </form>

    </section>
  )
}

export default SignUp
