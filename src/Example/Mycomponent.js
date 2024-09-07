import React from 'react';
class MyComponent extends React.Component {
    state = {
        name: "",
        // age: 18,
        // job: 'deverloper Website',
        // skill: 'ReactJS,NodeJS,Express'
    }
    handleOnChangName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    render() {
        return (
            <>
                <div>
                    <input value={this.state.name} type='text'
                        onChange={(event) => this.handleOnChangName(event)} />
                    My name is {this.state.name} and I am GOAT!!
                </div>
                {/* <div>My age : {this.state.age}</div>
                <div>Profession: {this.state.job}</div>
                <div>skill: {this.state.skill}</div> */}
            </>
        )
    }
}
export default MyComponent;