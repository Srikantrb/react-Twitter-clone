import React, { useState } from 'react'
import './Authform.css'

function Authform() {
    // const [loginborder,setloginborder]=useState({borderBottom: '2px solid #ffad06'})
    const [signupborder,setsignupborder]=useState({})

    const [pointerloc,setpointerloc] = useState("pointer1")

    const signupform  = document.getElementsByName('Signupform')
    const Loginform  = document.getElementsByName('Loginform')
    const loginblock = document.getElementsByName('loginblock')
    const signupblock = document.getElementsByName('signupblock')


    const loginhandler = ()=>{

    }
    const signuphandler =()=>{

    }
    const loginclickhandler =(e)=>{
        e.preventDefault()
        Loginform[0].style.left = '0px';
        signupform[0].style.left = '400px';
        // setloginborder({borderBottom :'2px solid #ffad06'})
        // setsignupborder({borderBottom :'none'})
        setpointerloc("pointer1")
         
    }
    const signupclickhandler =(e)=>{
        e.preventDefault()
        Loginform[0].style.left = '-400px';
        signupform[0].style.left = '0px';
        // setloginborder({borderBottom : 'none'})
        // setsignupborder({borderBottom :'2px solid #ffad06'})
        setpointerloc("pointer2")
    }
    return (
        <div className = "container">
            <form id= "Loginform" name ="Loginform">
                <h3>Login</h3>
                <input type = "text" placeholder = "Email"></input>
                <input type = "password" placeholder = "Password"></input>
                <div className = "btn-box">
                    <button type  ="button" id= "login" onClick = {loginhandler}>Login</button>
                </div>
            </form>
            <form id="Signupform" name="Signupform">
                <h3>Sign Up</h3>
                <input type="text" placeholder ="User Name"></input>
                <input type = "text" placeholder = "Email"></input>
                <input type = "password" placeholder = "Password"></input>
                <div className = "btn-box">
                    <button type  ="button" id= "signup" onClick = {signuphandler}>Signup</button>
                </div>
            </form>
            <div className = "navbar">
                <div name = "pointer" className = {pointerloc}></div>
                <div className = "column" name ="loginblock" id = "loginblock"
                // style = {loginborder}
                onClick = {loginclickhandler} >Login</div>
                <div className = "column" name = "signupblock" 
                style ={signupborder}
                onClick = {signupclickhandler}>SignUp</div>
            </div>
        </div>
    )
}
export default Authform
