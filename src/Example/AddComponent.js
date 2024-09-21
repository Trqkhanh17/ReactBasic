import React from "react";

class AddComponent extends React.Component {
    state = {
        title: '',
        salary: ''
    }
    handleChangtitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleChangSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();// ngăn không cho submit refresh lại trang
        if (!this.state.title || !this.state.salary) {
            alert('Vui Long Nhap Du lieu');
            return;
        }
        else {
            console.log('Data:', this.state);
            this.props.addNewInfor({
                id: Math.floor(Math.random() * 100),
                title: this.state.title,
                salary: this.state.salary
            })
        }
        this.setState({
            title: '',
            salary: ''
        })
    }
    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">Job title:</label><br />
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={(event) => this.handleChangtitle(event)} /><br />
                    <label htmlFor="lname">salary:</label><br />
                    <input
                        type="text"
                        value={this.state.salary}
                        onChange={(event) => this.handleChangSalary(event)} />
                    <br /><br />
                    <input
                        type="submit"
                        value="Submit"
                        onClick={(event) => this.handleSubmit(event)} />
                </form>
            </>
        )
    }
}
export default AddComponent;