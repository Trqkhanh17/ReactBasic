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
        ],
        editTodos: {}
    }
    addNewTodos = (todos) => {
        this.setState({
            ListTodos: [...this.state.ListTodos, todos]
        })
        toast.success("Thêm Thành Công!")
    }
    handleDeleteTodos = (todos) => {
        let currentTodos = this.state.ListTodos;
        currentTodos = currentTodos.filter(item => item.id !== todos.id);
        this.setState({
            ListTodos: currentTodos
        })
        toast.success('Xoa Thanh Cong');
    }
    handleEditTodos = (todos) => {
        let { editTodos, ListTodos } = this.state;
        let isEmptyObj = Object.keys(editTodos).length === 0;

        // Nếu đang ở chế độ Edit, nhấn nút Save để lưu thay đổi
        if (isEmptyObj === false && editTodos.id === todos.id) {
            if (!editTodos.title || editTodos.title.trim() === "") {
                toast.warning("Vui Long Nhap Du Lieu Can Thay Doi");
                return;
            }
            let ListTodosCopy = [...ListTodos];
            let objIndex = ListTodosCopy.findIndex((item => item.id === todos.id));
            ListTodosCopy[objIndex].title = editTodos.title;

            this.setState({
                ListTodos: ListTodosCopy,
                editTodos: {}  // Clear trạng thái edit sau khi lưu
            });
            toast.success('Update Todos Succeed!');
            return;
        }

        // Nếu đang ở chế độ bình thường, nhấn nút Edit để chuyển sang chế độ chỉnh sửa
        this.setState({
            editTodos: todos  // Cập nhật todos cần chỉnh sửa vào state
        });
    }
    handleOnChangeEditTodos = (event) => {
        let editTodosCopy = { ...this.state.editTodos };
        editTodosCopy.title = event.target.value;
        this.setState({
            editTodos: editTodosCopy
        })
    }
    render() {
        let { ListTodos, editTodos } = this.state;
        let isEmptyObj = Object.keys(editTodos).length === 0;
        console.log('check: ', isEmptyObj);

        return (
            <div className="List-Todos-Container">
                <AddTodos addNewTodos={this.addNewTodos} />
                <div className="List-Todos-Content">
                    {ListTodos && ListTodos.length > 0 &&
                        ListTodos.map((item, index) => {
                            return (
                                <>
                                    <p>
                                        Todos App
                                    </p>
                                    <div className="Todos-child" key={item.id}>
                                        {isEmptyObj === true ? <span>
                                            {index + 1} - {item.title}
                                        </span>
                                            :
                                            <>
                                                {editTodos.id === item.id ?
                                                    <span>
                                                        {index + 1} - <input value={editTodos.title} onChange={(event) => this.handleOnChangeEditTodos(event)} />
                                                    </span>
                                                    :
                                                    <span>
                                                        {index + 1} - {item.title}
                                                    </span>
                                                }

                                            </>
                                        }
                                        <button className="Btn-Edit" onClick={() => this.handleEditTodos(item)}>
                                            {isEmptyObj === false && editTodos.id === item.id ? 'Save' : 'Edit'}
                                        </button>
                                        <button className="Btn-Delete" onClick={() => this.handleDeleteTodos(item)}>Delete</button>
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