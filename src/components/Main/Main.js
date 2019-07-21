import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Main extends Component {
    render() {
        return(
            <>
            <Link to='/feelings' />
            <h1>Getting Started</h1>
            </>
        );
    }


}
export default Main;