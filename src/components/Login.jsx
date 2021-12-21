import React from 'react'
import Cookies from 'js-cookie';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import './components.css'

function Login(props) {
    const login = ()=>{
        const emailInput = document.getElementById('email-input').value;
        const passwordInput = document.getElementById('password-input').value;
 
        console.log(`${passwordInput} ${Cookies.get(emailInput)} login: ${passwordInput === Cookies.get(emailInput)}`);

        if(passwordInput === Cookies.get(emailInput)){
            props.changeAuth(true);
            console.log(props);
        }
        else {
            alert('Wrong user id password or you have not registered.');
        }
    }
    return (
        <>
            <div className="p-5 my-5 form-container shadow">
                <div className="display-4"><b>LOGIN</b></div>
                <input className='form-control my-4 py-3' type="email" placeholder='Email' id='email-input'/>
                <input className='form-control my-4 py-3' type="password" placeholder='Password' id='password-input'/>
                <button className='form-control btn btn-lg btn-success mt-2 mb-4' onClick={login}>Login</button>
                <div className="heading-1 text-center">Don't have an account?</div>
                <Link to="/register"><button className='form-control btn btn-lg btn-dark my-2'>Register</button></Link>
            </div>  
        </>
    )
}
const mapDispatchToProps = (dispatch)=>{
    return {
        changeAuth: (val)=>{ dispatch({type: 'CHANGE_AUTH', payload: val}) }
    }
}
export default connect(null, mapDispatchToProps)(Login)
