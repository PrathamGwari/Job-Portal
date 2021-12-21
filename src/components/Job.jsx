
import './components.css'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

function Job(props) {
    const { id, title, companyName, location} = props;
    const {selectedJobId} = props;
    const imgSrc = `https://logo.clearbit.com/${companyName}.com`;
    
    const clickHandle = ()=>{
        props.selectJobId(id);
        console.log(props);
    }
    return (
        <>
            <Link to="/jobs/description">
                <div className="container px-md-5 my-2" onClick={clickHandle}>
                    <div className="row bg-dark d-flex flex-row shadow">
                        <div className="col-4 col-lg-2 d-flex justify-content-center align-items-center"><img className='company-image' src={imgSrc} alt="company logo" /></div>
                        <div className="col-8 col-lg-10 my-4 px-5">
                            <div className="row text-white mb-1 job-title">
                                {title}
                            </div>
                            <div className="row text-white job-location">
                                {companyName}
                            </div>
                            <div className="row text-white job-location">
                                {location}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}
const mapStateToProps = (state)=>{
    return {
        selectedJobId: state.selectJobId
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        selectJobId: (newId) =>{ dispatch({type:'SELECT_JOB_ID', payload: newId})}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Job)
