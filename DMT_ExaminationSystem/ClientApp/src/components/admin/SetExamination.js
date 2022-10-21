import React, { useState, useEffect } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link, useLocation, } from "react-router-dom";

import { userService } from "../../services/user.service";

function SetExamination() {
    const [value, onChange] = useState(new Date());

    return (
        <div class="container">
            <div class="row">
                <div class="instructions">
                    <h1 class="text-center">Instructions</h1>
                    <p>
                        <ul>
                            <li>Any appointment can be made for the current day or for a future date.</li>
                            <li>No two appointments should overlap. If an appointment already exists for a day, a warning should be shown.</li>
                            <li>Appointments can be edited and deleted.</li>
                        </ul>
                    </p>
                </div>
            </div>
            <br />
            <div class="row">
                <div>
                    <h5>Select a Date &nbsp; Time</h5>
                    <Calendar onChange={onChange} value={value} />


                </div>
            </div>

            <div class="row">
                <div class="col offset-md-1">
                    <form id="form_create_appointment">
                        <div class="form-row">
                            <div class="col form-group">
                                <label class="required">Date</label>
                                <input class="form-control date-input" type="text" id="date" data-trigger="hover" data-toggle="popover" title="Date" data-content="You can select any date from today clicking on the number in the calendar" required />
                            </div>
                            <div class="col form-group">
                                <label>Description</label>
                                <input class="form-control" type="text" id="description" />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col form-group">
                                <label class="required">Start Time</label>
                                <input class="form-control time-input" type="text" id="start_time" required />
                            </div>
                            <div class="col form-group">
                                <label class="required">End Time</label>
                                <input class="form-control time-input" type="text" id="end_time" required />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col form-group">
                                <button type="button" class="btn btn-warning btn-block" id="clear" onclick="clear_input()">Clear Form</button>
                            </div>
                            <div class="col form-group">
                                <button type="button" class="btn btn-primary btn-block" id="submit" onclick="make_appointment()" disabled="disabled">Make Appointment</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col offset-md-1">
                    <div class="row">
                        <div class="col">
                            <h3>Appointments</h3>
                        </div>
                        <div class="col form-group">
                            <button type="button" class="btn btn-danger btn-block" id="btn_clear_storage" onclick="clear_storage()">Clear Appointments</button>
                        </div>
                    </div>
                    <table class="table table-bordered table-hover table-striped table-sm" id="appointment_list">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col" class="text-center align-middle">Date</th>
                                <th scope="col" class="text-center align-middle">Description</th>
                                <th scope="col" class="text-center align-middle">Start time</th>
                                <th scope="col" class="text-center align-middle">End time</th>
                                <th scope="col" class="text-center align-middle">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export { SetExamination };