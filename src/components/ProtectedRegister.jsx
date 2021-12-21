import React from 'react'
import { connect } from 'react-redux'
import {Route, Redirect} from 'react-router-dom'

function ProtectedRegister(props) {
    const {isAuthenticated, component: Component,...rest} = props;
    return (
        <Route
            {...rest}
            render={()=> !isAuthenticated?(
                <Component></Component>
            ):
            (
                <Redirect to="/jobs"/>
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
export default connect(mapPropsToState, mapDispatchToState)(ProtectedRegister)
