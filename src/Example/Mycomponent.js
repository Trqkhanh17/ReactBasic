import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
import React from 'react';
import ChildComponent from './ChildComponent';
class MyComponent extends React.Component {
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
        console.log(this.state);
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(event) => this.handleChangFirstName(event)} /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={(event) => this.handleChangLastName(event)} /><br /><br />
                    <input
                        type="submit"
                        value="Submit"
                        onClick={(event) => this.handleSubmit(event)} />
                </form>
                <ChildComponent name={'child one'} />
                <ChildComponent name={'child two'} />
                <ChildComponent name={'child three'} />
            </>
        )
    }
}
export default MyComponent;