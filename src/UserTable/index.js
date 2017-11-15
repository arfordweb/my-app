import React, { Component } from 'react';
import './index.css';

class UserTable extends Component {
  render() {
    return (<table className="user-table">
      <thead>
        <tr><th>User</th><th>Password</th><th>Role</th></tr>
      </thead>
      <tbody>
        { this.props.users && this.props.users.map(function (user) {
          return (<tr key={user.username}>
            <td>{user.username}</td><td>{user.password}</td><td>{user.role}</td>
          </tr>);
        }) }
      </tbody>
    </table>);
  }
}

export default UserTable;
