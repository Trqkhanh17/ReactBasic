import React from "react";
import { withRouter } from 'react-router';
class HomeCoponent extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.history.push('/todos')
        }, 1000);
    }
    render() {
        return (
            <div>This is Home Page</div>
        )
    }
}
export default withRouter(HomeCoponent);