import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
import React from 'react';
class ChildComponent extends React.Component {
    state = {
        firstName: "",
        lastName: ""
    }
    handleChangFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleChangLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();// ngăn không cho submit refresh lại trang
        alert('get data success');
        console.log('Data:', this.state);

    }
    render() {
        return (
            <>
                <div>Child Component: {this.props.name}</div>
            </>
        )
    }
}
export default ChildComponent;