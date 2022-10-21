import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import { Link, useLocation, } from "react-router-dom";

import { userService } from "../../services/user.service";

function ExamResults() {
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
        <div className="container">
            <h5>DRIVING LICENCE EXAM RESULT SRI LANKA</h5>
            <Table className="table table-striped" hover>
                <thead>
                    <tr>
                        <th style={{ wuser_idth: "30%" }}>Name</th>
                        <th style={{ wuser_idth: "30%" }}>Email</th>
                        <th style={{ wuser_idth: "30%" }}>Phone Number</th>
                        <th style={{ wuser_idth: "10%" }}>Marks</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(user =>
                        <tr key={user.user_id}>
                            <td scope="row">{user.full_name}</td>
                            <td scope="row">{user.email}</td>
                            <td scope="row">{user.phone_number}</td>
                            <td scope="row">{user.phone_number}</td>
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
            </Table>
        </div>
    );
}

export { ExamResults };