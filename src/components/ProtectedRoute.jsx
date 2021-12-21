import React from 'react'
import {Route} from 'react-router-dom'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import {connect} from 'react-redux'

function ProtectedRoute(props) {
    const {isAuthenticated} = props;
    console.log(props);
    const {component: Component,...rest} = props;
    return (
        <Route
            {...rest}
            render={()=> isAuthenticated?(
                <Component></Component>
            ):
            (
                <Redirect to="/login"/>
            )}
        />
    )
}
const mapPropsToState = (state)=>{
    return{
        isAuthenticated: state.isAuthenticated
    }
}
const mapDispatchToState = (dispatch)=>{
    return{
        changeAuth: (val)=>{dispatch({type: 'CHANGE_AUTH', paylod: val})}
    }
}
export default connect(mapPropsToState, mapDispatchToState)(ProtectedRoute)
