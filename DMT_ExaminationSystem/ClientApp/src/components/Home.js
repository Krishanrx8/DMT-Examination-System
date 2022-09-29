import React, { Component, useState, useEffect } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        
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
                            
                        </tbody>
                    </table>
                </div>
            );
        }
}