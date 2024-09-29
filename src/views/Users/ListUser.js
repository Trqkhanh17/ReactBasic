import axios from "axios";
import React from "react";
import './ListUser.scss'
class ListUser extends React.Component {
    state = {
        listUser: []
    }
    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=1');
        this.setState({
            listUser: res && res.data && res.data.data ? res.data.data : []
        })
        console.log('check Res:', res.data);
    }
    render() {
        let { listUser } = this.state;
        return (
            <div className="list-users-constainer">
                <div className="title">
                    feact All List Users
                </div>
                <div className="list-user-content">
                    {
                        listUser && listUser.length > 0 && listUser.map((item, index) => {
                            return (
                                <div className="child" key={item.id}>
                                    <img src={item.avatar} alt="User avatar" className="avt" />
                                    {item.id} - {item.first_name} - {item.last_name}
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}
export default ListUser