import React from 'react'
import './components.css'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

function Application(props) {
    const {jobData} = props;

    const submitApplicationOnClick = async ()=>{
        console.log('submitting');
        if(document.getElementById('resume-input').files.length !== 0){
            const details = {
                name: document.getElementById('name-input').value,
                email: document.getElementById('email-input').value,
                cv: document.getElementById('cv-input').value,
                resume: document.getElementById('resume-input').files[0]
            }
            props.submitApplication(details);
        }
        else {
            alert('Please fill all details');
        }
        console.log(props);
    }
    return (
        <div>
            <div className="conatiner-md-fluid p-md-3 shadow job-application-container">
                <div className="row px-md-5 px-2 px-md-0">
                    <div className="col-lg-6 mt-1 px-5">
                        <div className="row d-flex align-items-center">
                            <div className="col-sm-4">
                                <img className='d-none d-sm-inline-block img-fluid border border-dark shadow' width="180rem" src={`https://logo.clearbit.com/${jobData[0].company.display_name}.com`} alt="company logo" />
                            </div>
                            <div className="col-sm-8">
                                <div className="display-6 px-2 mb-3">
                                    <b>{jobData[0].title}</b>
                                </div>
                                <div className='px-2 mb-3'>
                                    {`${jobData[0].location.area[0] === undefined ? '' : jobData[0].location.area[0]}${jobData[0].location.area[1] === undefined ? '' : ', '+jobData[0].location.area[1]}${jobData[0].location.area[2] === undefined ? '' : ', '+jobData[0].location.area[2]}`}
                                </div>
                                <div className="px-2">Job ID: {jobData[0].id}</div>
                            </div>
                        </div>
                        <div className="display-6 my-3">Job Description</div>
                        <p>{jobData[0].description}</p>
                    </div>

                    <div className="col-lg-6 px-5 mt-1">
                        <div className="display-6">
                            <b>Please fill your details</b>
                        </div>
                        <div className="row mb-4">
                            <input className='form-control my-4' type="text" placeholder='Name' id='name-input'/>
                            <input className='form-control my-1' type="email" placeholder='Email' id='email-input'/>
                        </div>
                        <div className="row my-4">
                            <textarea type="text" className='form-control text-area mb-4' placeholder='Cover Letter' id='cv-input'/>
                            <input className='form-control mb-4' type="file" id='resume-input'/>
                            <Link to="/jobs/submit"><div className="btn btn-dark" onClick={submitApplicationOnClick}>Submit</div></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapPropsToState = (state)=>{
    return {
        jobData: state.jobData,
    }
}
const mapDispatchToState = (dispatch)=>{
    return{
        submitApplication: (details)=>{dispatch({type: 'SUBMIT_APPLICATION', payload: details})},
    }
}
export default connect(mapPropsToState, mapDispatchToState)(Application)
