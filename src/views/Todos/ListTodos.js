import React from "react";
import './ListTodos.scss';
import AddTodos from './AddTodos';
import { toast } from 'react-toastify';
import Color from "../HOC/color";
import logo from '../../assets/images/logochanel.jpg'
class ListTodos extends React.Component {
    state = {
        ListTodos: [
            { id: 'todos1', title: 'Doing homework' },
            { id: 'todos2', title: 'Watching Video' },
            { id: 'todos3', title: 'Fixing Bugs' }
        ],
        editTodos: {}
    }

    addNewTodos = (todos) => {
        this.setState({
            ListTodos: [...this.state.ListTodos, todos]
        });
        toast.success("Thêm Thành Công!");
    }

    handleDeleteTodos = (todos) => {
        let currentTodos = this.state.ListTodos.filter(item => item.id !== todos.id);
        this.setState({ ListTodos: currentTodos });
        toast.success('Xóa Thành Công');
    }

    handleEditTodos = (todos) => {
        let { editTodos, ListTodos } = this.state;
        let isEmptyObj = Object.keys(editTodos).length === 0;

        if (!isEmptyObj && editTodos.id === todos.id) {
            if (!editTodos.title || editTodos.title.trim() === "") {
                toast.warning("Vui Lòng Nhập Dữ Liệu Cần Thay Đổi");
                return;
            }

            let ListTodosCopy = [...ListTodos];
            let objIndex = ListTodosCopy.findIndex(item => item.id === todos.id);
            ListTodosCopy[objIndex].title = editTodos.title;

            this.setState({
                ListTodos: ListTodosCopy,
                editTodos: {}  // Clear trạng thái edit sau khi lưu
            });
            toast.success('Cập Nhật Thành Công!');
            return;
        }

        this.setState({ editTodos: todos });
    }

    handleOnChangeEditTodos = (event) => {
        let editTodosCopy = { ...this.state.editTodos };
        editTodosCopy.title = event.target.value;
        this.setState({ editTodos: editTodosCopy });
    }

    render() {
        let { ListTodos, editTodos } = this.state;
        let isEmptyObj = Object.keys(editTodos).length === 0;

        return (
            <div className="List-Todos-Container">
                <img src={logo} />
                <p>Todos App</p>
                <AddTodos addNewTodos={this.addNewTodos} />
                <div className="List-Todos-Content">
                    {ListTodos && ListTodos.length > 0 && ListTodos.map((item, index) => (
                        <div className="Todos-child" key={item.id}>
                            {isEmptyObj ? (
                                <span>{index + 1} - {item.title}</span>
                            ) : (
                                editTodos.id === item.id ? (
                                    <span>
                                        {index + 1} - <input value={editTodos.title} onChange={this.handleOnChangeEditTodos} />
                                    </span>
                                ) : (
                                    <span>{index + 1} - {item.title}</span>
                                )
                            )}
                            <button className="Btn-Edit" onClick={() => this.handleEditTodos(item)}>
                                {isEmptyObj === false && editTodos.id === item.id ? 'Save' : 'Edit'}
                            </button>
                            <button className="Btn-Delete" onClick={() => this.handleDeleteTodos(item)}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Color(ListTodos);
