import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
import React from 'react';
class ChildComponent extends React.Component {
    state = {
        show: false,
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
    handleShowHide = () => {
        this.setState({
            show: !this.state.show
        })
    }
    render() {
        //console.log('<<CheckProps:', this.props);
        // let name = this.props.name;
        // let age = this.props.age;
        // let school = this.props.school;
        let { infor } = this.props;
        let { show } = this.state;
        let check = show === true ? 'show = true' : 'show = false';
        console.log('<<check: ', check);

        let result;
        return (
            <>
                {show !== true ?
                    <>
                        <div><button onClick={() => this.handleShowHide()}>Show</button></div>
                    </>
                    :
                    <>
                        <div className='job=lists'>
                            {
                                result = infor.map((item, index) => {
                                    if (item.salary >= 1000) {
                                        return (
                                            <div key={item.id}>
                                                {item.id} - {item.title} - {item.salary} $
                                            </div>)
                                    }
                                })

                            }
                            {/* {console.log('<<CheckArr:', result)} */}
                        </div>
                        <div><button onClick={() => this.handleShowHide()}>Hide</button></div>
                    </>
                }
            </>
        )
    }
}
export default ChildComponent;
