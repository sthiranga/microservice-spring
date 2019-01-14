import {login} from '../../_thunks/user.thunk';
import {loginError} from "../../_actions/user.action";
import {Login} from './Login';
import {connect} from 'react-redux';

const mapStateToProps = (state) =>{
    return{
        user: state.user.user,
        error: state.user.error
    }
};

function mapDispatchToProps(dispatch){
    return{
        callLogin: (username, password) =>{
            dispatch(login(username, password))
        },
        callLoginError: (error) =>{
            dispatch(loginError(error))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);