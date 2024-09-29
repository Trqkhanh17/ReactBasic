import React from "react";
import { ToastContainer, toast } from 'react-toastify';
class AddTodos extends React.Component {
    state = {
        title: '',
    }
    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
        console.log(this.state.title);

    }
    handleOnClickAdd = () => {
        if (!this.state.title || this.state.title.trim() === "") {
            toast.warning('Vui Lòng Nhập Dữ Liệu')
            return;
        }
        else {
            let Todos = {
                id: Math.floor(Math.random() * 10000),
                title: this.state.title
            }
            this.props.addNewTodos(Todos);
            this.setState({
                title: ''
            })
        }
    }
    render() {
        let { title } = this.state;
        return (
            <div className="Add-Todos">
                <input type="text" value={title} onChange={(event) => this.handleOnChangeTitle(event)} />
                <button type="button" className="Btn-Add" onClick={() => this.handleOnClickAdd()}>Add</button>
            </div>
        )
    }
}
export default AddTodos;