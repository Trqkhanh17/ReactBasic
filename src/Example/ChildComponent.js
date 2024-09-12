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
        console.log('<<CheckProps:', this.props);
        // let name = this.props.name;
        // let age = this.props.age;
        // let school = this.props.school;
        let { name, infor } = this.props;
        let result;
        return (
            <>
                <div>Name - {name}</div>
                <div className='job=lists'>
                    {
                        result = infor.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.id} - {item.title} - {item.salary}
                                </div>)
                        })

                    }
                    {console.log('<<CheckArr:', result)}

                </div>
            </>
        )
    }
}
export default ChildComponent;