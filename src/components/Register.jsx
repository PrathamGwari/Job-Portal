import React from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import './components.css'

function Register(props) {

    const registerUser = ()=>{
        const email = document.getElementById('email-input').value;
        const password = document.getElementById('password-input').value;
        
        Cookies.set(email, password);
        props.changeAuth(true);
    }
    return (
        <>
            <div className="p-5 my-5 form-container shadow">
                <div className="display-6"><b>REGISTER</b></div>
                <input className='form-control my-4 py-3' type="email" placeholder='Email' id='email-input'/>
                <input className='form-control my-4 py-3' type="password" placeholder='Password' id='password-input'/>
                <button className='form-control btn btn-lg btn-success my-4' onClick={registerUser}>Register</button>
                {/* <Link to="/login"><button className='form-control btn btn-lg btn-dark my-2'>Login</button></Link> */}
            </div>  
        </>
    )
}
const mapDispatchToState = (dispatch)=>{
    return{
        changeAuth: (val)=>{ dispatch({type:'CHANGE_AUTH', payload: val}) }
    }
}
export default connect(null, mapDispatchToState)(Register)
