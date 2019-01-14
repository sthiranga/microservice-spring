import React from 'react';
import {Link} from 'react-router-dom';
import NavigationBar from './navigation/NavigationBar';

class Home extends React.Component{

    render(){
        return(
            <div>
                <NavigationBar/>
                <div className="container">
                    <h3>Collapsible Navbar</h3>
                    <p>In this example, the navigation bar is hidden on small screens and replaced by a button in the top right corner (try to re-size this window).</p>
                        <p>Only when the button is clicked, the navigation bar will be displayed.</p>
                </div>
            </div>
        )
    };
}

export default Home;