import React from 'react';
import { connect } from 'react-redux';
import './components.css'
const Navbar = (props)=>{
    const Logout = ()=>{
        props.changeAuth(false);
    }
    return (
        <>
            <nav class="navbar-light bg-light py-4 shadow">
                <div class="container">
                    <div className="row">
                        <div className="col-6"><label class="display-6 mx-0 mx-lg-5" href="">Job Portal</label></div>
                        <div className="col-6 d-flex justify-content-end"><button onClick={Logout} className='btn btn-dark'>Logout</button></div>
                    </div>
                </div>
            </nav>
        </>
    )
}
const mapDispatchToState = (dispatch)=>{
    return{
        changeAuth: (val)=>{ dispatch({type:'CHANGE_AUTH', payload: val}) }
    }
}
export default connect(null, mapDispatchToState)(Navbar)