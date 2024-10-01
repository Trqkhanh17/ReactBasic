import React from "react";
import { withRouter } from 'react-router';
import color from "../views/HOC/color";
import logo from '../../src/assets/images/logochanel.jpg'
import { connect } from "react-redux";
import '../styles/home.scss'
import { type } from "@testing-library/user-event/dist/type";
class HomeCoponent extends React.Component {
    handleDelete = (user) => {
        this.props.DeleteUserRedux(user);
    }
    handleAddUserReDux = (user) => {
        this.props.AddUsersRedux();
    }
    render() {
        console.log(this.props.dataRedux);
        let dataRedux = this.props.dataRedux;

        return (
            <>
                <div>
                    <img src={logo} style={{ marginTop: 20 }} />
                </div>
                <div>This is Home Page King</div>
                <div className="text-gradient">
                    {dataRedux && dataRedux.length > 0 &&
                        dataRedux.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    id: {item.id} name: {item.name}
                                    <span onClick={() => this.handleDelete(item)}>X</span> <></>
                                </div>
                            )
                        })
                    }
                    <button onClick={() => this.handleAddUserReDux()}>Add New</button>
                </div>
            </>

        )
    }
}
const mapStateToProps = (state) => {
    return { dataRedux: state.users }
}
const mapDispatchToProps = (dispatch) => {
    return {
        DeleteUserRedux: (user) => dispatch({ type: 'DELETE_USER', payload: user }),
        AddUsersRedux: () => dispatch({ type: 'CREATE_USER' }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(color(HomeCoponent));