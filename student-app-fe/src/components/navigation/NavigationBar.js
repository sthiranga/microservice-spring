import React from 'react';
import {Link} from 'react-router-dom';

class NavigationBar extends React.Component{

    render(){
        return(
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/">Student App</a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li className="active"><Link to='/'>Home</Link></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to='/registration'><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                                <li><Link to='/login'><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    };
}

export default NavigationBar;