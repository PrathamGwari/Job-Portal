
const initialState = {
    selectedLanguage: "",
    jobData: [],
    selectedJobId: '2673851112',
    applicationDetails: {
        name: '',
        email: '',
        cv: '',
        resume: {}
    },
    isAuthenticated: false,
}
const rootReducer = (state = initialState, action)=>{
    console.log(action.type);
    if(action.type === 'CHANGE_LANGUAGE'){
        console.log('changing to ' + action.type);
        return {
            ...state,
            selectedLanguage: action.newLanguage
        }
    } else if(action.type === 'CHANGE_JOB_DATA'){
        console.log('changing data');
        console.log(action.payload);
        return {
            ...state,
            jobData: action.payload
        }
    } else if(action.type === 'SELECT_JOB_ID'){
        console.log('changing id ... ')
        return {
            ...state,
            selectedJobId: action.payload
        }
    } else if(action.type === 'SUBMIT_APPLICATION'){
        return {
            ...state,
            applicationDetails: action.payload
        }
    } else if(action.type === 'CHANGE_AUTH'){
        console.log('changing auth value to ' + action.payload);
        return {
            ...state,
            isAuthenticated: action.payload
        }
    }
    return state;
}

export default rootReducer;