import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './components.css';

function SuccessfulSubmit(props) {
    const {applicationDetails} = props
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-10">
                        <span className="display-6 d-inline-block">Your Application has been successfully submitted</span>
                    </div>
                    <div className="col-2">
                        <Link to="/jobs">
                            <div className="text-end">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="auto" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                            </svg>
                            </div>
                        </Link>
                    </div>
                </div>
            
                <div className="preview-heading my-5">Below are some the details of your application</div>
                <span className="row d-block preview-heading"><b>Name: </b></span>
                <span className="row px-3 my-2 py-2 preview-content bg-light rounded-3 ">{applicationDetails.name}</span>
                <br />
                <span className="row d-block preview-heading"><b>Email: </b></span>
                <span className="row px-3 my-2 py-2 preview-content bg-light rounded-3 ">{applicationDetails.email}</span>
                <br />
                <span className="row d-block preview-heading"><b>Cover Letter: </b></span>
                <span className="row px-3 my-2 py-2 preview-content bg-light rounded-3 ">{applicationDetails.cv}</span>
                <br />
                <span className="row d-block preview-heading"><b>Resume File: </b></span>
                <span className="row px-3 my-2 py-2 preview-content bg-light rounded-3 ">{applicationDetails.resume.name}</span>
            </div>
        </div>
    )
}
const mapPropsToState = (state) =>{
    return {
        applicationDetails: state.applicationDetails
    }
}
const mapDispatchToState = (dispatch)=>{
    return{
        submitApplication: (details)=>{dispatch({type: 'SUBMIT_APPLICATION', payload: details})}
    }
}
export default connect(mapPropsToState, mapDispatchToState)(SuccessfulSubmit)
