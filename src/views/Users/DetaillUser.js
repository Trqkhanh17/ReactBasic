import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom";
import axios from "axios";
class DetailUser extends React.Component {
    state = {
        user: {}
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params.id) {
            let id = this.props.match.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`)
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })
        }
    }
    HandleBack = () => {
        this.props.history.push('/user');
    }
    render() {
        let { user } = this.state;
        let isEmptyObj = Object.keys(user).length === 0;
        return (
            <div>
                {isEmptyObj === false &&
                    <>
                        <img src={user.avatar} alt="User avatar" className="avt" />
                        <div>User name: {user.first_name} {user.last_name}</div>
                        <div>Email: {user.email}</div>
                        <div>
                            <button onClick={() => this.HandleBack()}>Back</button>
                        </div>
                    </>
                }
            </div>
        )
    }
}
export default withRouter(DetailUser);