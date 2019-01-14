import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import RegistrationPage from './student/RegistrationPage';
import Home from './Home';
import LoginLink from './login/LoginLink';

class App extends React.Component{
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/login' component={LoginLink}/>
                        <Route path='/registration' component={RegistrationPage}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;