import React from 'react';
import logo from './logo.png';

// Styles
import './style.css';

class Topbar extends React.Component {
    constructor (props) {
        super (props)
    }

    render(){
        return (
            <nav id='navbar'>
                <img alt='Logo' src={logo} />
                <button id='btn' onClick={this.props.fetchData}>Fetch Data</button>
            </nav>
        );
    }
}

export default Topbar;
