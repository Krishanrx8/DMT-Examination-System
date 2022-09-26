import React, { Component, useState, useEffect } from 'react';

export class Home extends Component {
    static displayName = Home.name;
    static EmployeelistFun = () => {
        const [employeeslist, setemployees] = useState(null)
        useEffect(() => {
            getemployees()
        }, [])
        const getemployees = () => {
            fetch('http://restapi.adequateshop.com/api/Metadata/GetEmployees%22')
                .then(res => res.json())
                .then(
                    (result) => {
                        setemployees(result)
                    },
                    (error) => {
                        setemployees(null);
                    }
                )

        }
        if (!employeeslist) return (<div>No Record Found</div>)

        
            return (
                <div>
                    <h2>Employees List Funcational Component </h2>
                    <table className="table" >
                        <thead>
                            <tr>
                                <th>Employee Id</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>City</th>
                                <th>ZipCode</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employeeslist.map(emp => (
                                <tr key={emp.Id}>
                                    <td>{emp.Id}</td>
                                    <td>{emp.Name}</td>
                                    <td>{emp.Address}</td>
                                    <td>{emp.City}</td>
                                    <td>{emp.ZipCode}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        }
    }
