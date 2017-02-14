import React from 'react';
import { connect } from 'react-redux';

class Users extends React.Component {

    componentWillMount() {
        console.log("Entered in users view", this.props);
    }

    render() {
        return (
            <div>
                <h1>View all Users</h1>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        token: state.login.token
    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);