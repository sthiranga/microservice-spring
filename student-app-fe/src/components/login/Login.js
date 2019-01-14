import React from 'react';
import InputWidget from '../common/widgets/InputWidget';
import {Link} from 'react-router-dom';

export class Login extends React.Component{

    constructor(props, context){
        super(props, context);
        this.state = {
            username: "",
            password: ""
        }
        this.onClickLogin = this.onClickLogin.bind(this);
    }

    onChange = (event)=> {
        const name = event.target.name;
        this.setState({[name]: event.target.value});
    };

    onClickLogin = ()=> {
        const {username, password} = this.state;
        if(username && password) {
            this.props.callLogin(this.state.username, this.state.password);
        }else{
            this.props.callLoginError('Username and password are mandatory');
        }
    };

    render(){
        const {username, password} = this.state;
        const error = this.props.error;
        return(
            <div className="container">
                <h2>Sign in</h2>
                {error &&
                <div className="alert alert-danger">
                    {error}
                </div> }

                <InputWidget type="text" name="username" label="Username" onChange={this.onChange} placeholder="Username" value={username}/>
                <InputWidget type="password" name="password" label="Password" onChange={this.onChange} placeholder="Password" value={password}/>

                <button type="button" className="btn btn-primary" onClick={this.onClickLogin}>
                    <span>Sign In</span>
                </button>
            </div>
        );
    }
}
