import React from "react";
import './ListTodos.scss'
import AddTodos from './AddTodos'
import { ToastContainer, toast } from 'react-toastify';
class ListTodos extends React.Component {
    state = {
        ListTodos: [
            {
                id: 'todos1',
                title: 'Doing homework'
            },
            {
                id: 'todos2',
                title: 'Watching Video'
            },
            {
                id: 'todos3',
                title: 'Fixing Bugs'
            }
        ]
    }
    addNewTodos = (todos) => {
        this.setState({
            ListTodos: [...this.state.ListTodos, todos]
        })
        toast.success("Thêm Thành Công!")
    }
    render() {
        let { ListTodos } = this.state;
        return (
            <div className="List-Todos-Container">
                <AddTodos addNewTodos={this.addNewTodos} />
                <div className="List-Todos-Content">
                    {ListTodos && ListTodos.length > 0 &&
                        ListTodos.map((item, index) => {
                            return (
                                <>
                                    <div className="Todos-child" key={item.id}>
                                        <span>
                                            {index + 1} - {item.title}
                                        </span>
                                        <button className="Btn-Edit">Edit</button>
                                        <button className="Btn-Delete">Delete</button>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default ListTodos;