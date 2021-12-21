import React from 'react'
import { useEffect } from 'react';
import {connect} from 'react-redux'
import './components.css'
import axios from 'axios';
import Job from './Job';

function Home(props) {
    const {selectedLanguage, jobData} = props;
 
    const handleClick = (e)=>{
        fetchData(e.target.innerText);
        props.changeLanguage(e.target.innerText);
    }
    const key = '2fe167e36019a87d22742cad8aa5468b'
    const id  = 'b6808b2a'
    const fetchData = async (keyword)=>{
        const res = await axios.get(`https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=${id}&app_key=${key}&results_per_page=20&what=${keyword}`, {
            headers:{
                "Accept": "application/json"
            }
        });
        await props.changeData(res.data.results);
        console.log(jobData)
    }

    useEffect(()=>{
        if(selectedLanguage !== ''){
            fetchData(selectedLanguage);
        }
    }, [])
    

    return (
        <>
            <div className="container main-container mt-2">
                <div className="row">
                    <div className="col-md-4">
                        <span className='my-3 text-start heading'>Please select one language</span>
                        <div className=" container row px-5 language-container mb-5">
                            <div className="language-name-container bg-dark text-light my-2 py-1" onClick={handleClick}>Java</div>
                            <div className="language-name-container bg-dark text-light my-2 py-1" onClick={handleClick}>Javascript</div>
                            <div className="language-name-container bg-dark text-light my-2 py-1" onClick={handleClick}>Python</div>
                            <div className="language-name-container bg-dark text-light my-2 py-1" onClick={handleClick}>PHP</div>
                            <div className="language-name-container bg-dark text-light my-2 py-1" onClick={handleClick}>C#</div>
                            <div className="language-name-container bg-dark text-light my-2 py-1" onClick={handleClick}>C++</div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <span className='my-3 px-5 heading'>{selectedLanguage === "" ? 'Select a programming language' : `Showing jobs for ${selectedLanguage}`}</span>
                        <div className="job-container">
                            {jobData.map((job)=>{
                                return <Job id={job.id} title={job.title} companyName={job.company.display_name} location={`${job.location.area[0]}, ${job.location.area[1]}, ${job.location.area[2]}`} />
                            })}
                        </div>
                    </div>

                </div>
            </div>  
        </>
    )
}

const mapStateToProps = (state)=>{
    return {
        selectedLanguage: state.selectedLanguage,
        jobData: state.jobData,  
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        changeLanguage : (newLanguage) =>{ dispatch({type: 'CHANGE_LANGUAGE', newLanguage: newLanguage})},
        changeData: (newData) =>{ dispatch({type: 'CHANGE_JOB_DATA', payload: newData})},
        selectJobId: (id) =>{ dispatch({type:'SELECT_JOB_ID', payload: id})}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
