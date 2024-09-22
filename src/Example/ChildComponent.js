import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
import React from 'react';
import './Demo.scss'
class ChildComponent extends React.Component {
    state = {
        show: false,
    }
    // handleChangFirstName = (event) => {
    //     this.setState({
    //         firstName: event.target.value
    //     })
    // }
    // handleChangLastName = (event) => {
    //     this.setState({
    //         lastName: event.target.value
    //     })
    // }
    handleSubmit = (event) => {
        event.preventDefault();// ngăn không cho submit refresh lại trang
    }
    handleShowHide = () => {
        this.setState({
            show: !this.state.show
        })
    }
    handleOnClickDelete = (job) => {
        this.props.deleteAJob(job);
    }
    render() {
        //console.log('<<CheckProps:', this.props);
        // let name = this.props.name;
        // let age = this.props.age;
        // let school = this.props.school;
        let { infor } = this.props;
        let { show } = this.state;
        let result;
        return (
            <>
                {show !== true ?
                    <>
                        <div><button className='Btn-Show' onClick={() => this.handleShowHide()}>Show</button></div>
                    </>
                    :
                    <>
                        <div className='joblists'>
                            {
                                result = infor.map((item, index) => {
                                    if (item.salary >= 1000) {
                                        return (
                                            <div key={item.id}>
                                                {item.id} - {item.title} - {item.salary} $ <></>
                                                <span onClick={() => this.handleOnClickDelete(item)}>X</span>
                                            </div>)
                                    }
                                })

                            }
                            {/* {console.log('<<CheckArr:', result)} */}
                        </div>
                        <div><button className='Btn-Hide' onClick={() => this.handleShowHide()}>Hide</button></div>
                    </>
                }
            </>
        )
    }
}
export default ChildComponent;
