import React from 'react';
import { connect } from 'react-redux';

class Dogs extends React.Component {

    componentWillMount() {
        console.log("Entered in dogs view", this.props);
    }

    componentWillUpdate(newProps) {
        console.log(newProps);
    }

    render() {
        return (
            <div></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dogs);