import {React, useEffect} from 'react'
import { connect } from 'react-redux'
import axios from 'axios';
import { Link } from 'react-router-dom';

function JobDescription(props) {
    const {selectedJobId, jobData} = props;
    const fetchData = async ()=>{
        console.log(props);
        const key = '2fe167e36019a87d22742cad8aa5468b'
        const id  = 'b6808b2a'
        const res = await axios.get(`https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=${id}&app_key=${key}&results_per_page=1&what_and=${selectedJobId}`, {
            headers:{
                "Accept": "application/json"
            }
        });
        
        // console.log(res.data.results);
        props.changeData(res.data.results);
        console.log(jobData[0]);
    }

    useEffect(() => {
        fetchData();
    }, [])
    
    return (
        <>
            <div className="container my-5">
                <div className="row d-flex align-items-center">
                    <div className="col-sm-4">
                        <img className='d-none d-sm-inline-block img-fluid border border-dark shadow' width="180rem" src={`https://logo.clearbit.com/${jobData[0].company.display_name}.com`} alt="company logo" />
                    </div>
                    <div className="col-sm-8">
                        <div className="display-5 px-2 mb-3">
                            <b>{jobData[0].title}</b>
                        </div>
                        <div className='px-2 mb-3'>
                            {`${jobData[0].location.area[0] === undefined ? '' : jobData[0].location.area[0]} ${jobData[0].location.area[1] === undefined ? '' : ','+jobData[0].location.area[1]} ${jobData[0].location.area[2] === undefined ? '' : ','+jobData[0].location.area[2]}`}
                        </div>
                        <div className="px-2">Job ID: {jobData[0].id}</div>
                    </div>
                </div>
                
                <div className="display-3 my-5">Job Description</div>
                <p>{jobData[0].description}</p>

                <Link to="/jobs/apply">
                    <div className="text-center my-5"><button className='btn btn-lg btn-outline-dark'>Apply</button></div>
                </Link>
                
            </div>  
        </>
    )
}
const mapStateToProps = (state)=>{
    return {
        selectedJobId: state.selectedJobId,
        jobData: state.jobData,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        selectJobId: (id) =>{ dispatch({type:'SELECT_JOB_ID', payload: id})},
        changeData: (newData) =>{ dispatch({type: 'CHANGE_JOB_DATA', payload: newData})},
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(JobDescription)
