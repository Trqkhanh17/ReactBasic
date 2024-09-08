import React from 'react';
class MyComponent extends React.Component {
    state = {
        name: ""
    }
    handleOnChangName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleOnClick = () => {
        alert(this.state.name);
    }
    render() {
        return (
            <>
                <div className='first'>
                    <input value={this.state.name} type='text'
                        onChange={(event) => this.handleOnChangName(event)} />
                    My name is {this.state.name} and I am GOAT!!
                </div>
                <div className='second'><button onClick={() => this.handleOnClick()}>Click Here</button></div>
            </>
        )
    }
}
export default MyComponent;