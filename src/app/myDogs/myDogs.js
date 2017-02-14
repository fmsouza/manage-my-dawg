import React from 'react';
import { connect } from 'react-redux';

class MyDogs extends React.Component {

    componentWillMount() {
        console.log("Entered in my dogs view", this.props);
    }

    render() {
        return (
            <div>
                <h1>View my dogs</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(MyDogs);