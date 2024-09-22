import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
import React from 'react';
import ChildComponent from './childComponent';
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
    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currentJobs
        })
    }
    componentDidMount() {
        console.log('<<RUN bid mount');

    }
    componentDidUpdate(prevProps, prevState) {
        console.log('prev State: ', prevState, 'prev update State: ', this.state);

    }
    render() {
        return (
            <>
                <ChildComponent infor={this.state.arrJobs} deleteAJob={this.deleteAJob} />
                <AddComponent addNewInfor={this.addNewInfor} />
            </>
        )
    }
}
export default MyComponent;