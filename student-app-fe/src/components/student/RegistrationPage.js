import React from 'react';
import InputWidget from '../common/widgets/InputWidget';

class RegistrationPage extends React.Component {

    constructor(props, context){
        super(props, context);
        this.state = {
            firstName: "",
            lastName: ""
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange = (event)=> {
        const name = event.target.name;
        this.setState({[name]: event.target.value});
    };

    render(){
        const {firstName, lastName} = this.state;
        return(
            <div className="container">
                <h1>Student Registration</h1>
                <div>
                    <InputWidget type="text" name="firstName" label="First Name" onChange={this.onChange} placeholder="First Name" value={firstName}/>
                    <InputWidget type="text" name="lastName" label="Last Name" onChange={this.onChange} placeholder="Last Name" value={lastName}/>

                    <button>
                        <span>Register</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default RegistrationPage;