import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';
class MyComponent extends React.Component {
    state = {
        arrJobs: [
            {
                id: 1,
                title: 'Developer',
                salary: '10000'
            },
            {
                id: 2,
                title: 'Tester',
                salary: '1000'
            },
        ]
    }
    addNewInfor = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
        console.log('<<check Infor: ', job);

    }
    render() {
        return (
            <>
                <ChildComponent infor={this.state.arrJobs} />
                <AddComponent addNewInfor={this.addNewInfor} />
            </>
        )
    }
}
export default MyComponent;