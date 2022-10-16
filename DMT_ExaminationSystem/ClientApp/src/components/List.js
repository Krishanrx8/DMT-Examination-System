import React, { useState, useEffect } from 'react';
import { Link, useLocation,  } from 'react-router-dom';

import { userService } from '../services/user.service';

function List() {
    const match = useLocation();
    const path = match.pathname;
    const [users, setUsers] = useState(null);

    useEffect(() => {
        userService.getAll().then(x => setUsers(x));
    }, []);

    function deleteUser(user_id) {
        setUsers(users.map(x => {
            if (x.user_id === user_id) { x.isDeleting = true; }
            return x;
        }));
        userService.delete(user_id).then(() => {
            setUsers(users => users.filter(x => x.user_id !== user_id));
        });
    }

    return (
        <div>
            <h1>Users</h1>
            <Link to={`${path}/add`} className="btn btn-sm btn-success mb-2">Add User</Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th style={{ wuser_idth: '30%' }}>Name</th>
                        <th style={{ wuser_idth: '30%' }}>Email</th>
                        <th style={{ wuser_idth: '30%' }}>Phone Number</th>
                        <th style={{ wuser_idth: '10%' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(user =>
                        <tr key={user.user_id}>
                            <td>{user.full_name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone_number}</td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                                <Link to={`${path}/edit/${user.user_id}`} className="btn btn-sm btn-primary mr-1">Edit</Link>
                                <button onClick={() => deleteUser(user.user_id)} className="btn btn-sm btn-danger btn-delete-user" disabled={user.isDeleting}>
                                    {user.isDeleting
                                        ? <span className="spinner-border spinner-border-sm"></span>
                                        : <span>Delete</span>
                                    }
                                </button>
                            </td>
                        </tr>
                    )}
                    {!users &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="spinner-border spinner-border-lg align-center"></div>
                            </td>
                        </tr>
                    }
                    {users && !users.length &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="p-2">No Users To Display</div>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
}

export { List };