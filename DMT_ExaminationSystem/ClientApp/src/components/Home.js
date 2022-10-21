import React, { Component, useState, useEffect } from "react";
import "./styles/Home.css";


export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <div class="templatemo-flex-row">
                    <div>
                        <img src={require("./styles/images/background.png")}></img>
                    </div>
                    <div class="templatemo-content col-1 light-gray-bg">

                        <div class="templatemo-content-container">
                            <div class="templatemo-flex-row flex-content-row">
                                <div class="templatemo-content-widget white-bg col-2">
                                    <h2 class="templatemo-inline-block">About Department</h2>
                                    <p>Through team work of motivated staff and modern technology executing the rules and regulations entrusted by the Motor Traffic Act and others in an efficient manner for highest public appreciation</p>
                                    <p>We at Department of Motor Traffic abide by the Motor Traffic Act of Sri Lanka always strive to meet and exceed our Customer expectations, developing and supporting our colleagues to deliver our promise and never compromise social obligations as a responsive public service organization. </p>
                                    <p>Our aim is to live up to our VISION and MISSION with relentless focus on monitoring the organizational objectives, continual improvement of systems, standards and risk based thinking pattern as per ISO 9001:2015 requirements while meeting regulatory and other relevant requirements for our service offerings</p>
                                </div>
                            </div>
                            <div class="">
                                <div class="card col-sm-6 float-left">
                                    <div class="row ">

                                        <div class="col-sm-9">
                                            <div class="card-block">
                                                <h4 class="card-title">Our Vision</h4>
                                                <p>A responsive organization aspiring towards excellence through standardized, technologically – driven processes to govern motor traffic regulation.</p>
                                                <a href="#" class="btn btn-primary btn-sm">Read More</a>
                                            </div>
                                        </div>

                                        <div class="col-sm-3">
                                            <img class="d-block w-100" src={require("./styles/images/vision.png")} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="card col-sm-6 float-right">
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <img class="d-block w-100" src={require("./styles/images/mission.png")} alt="" />
                                        </div>
                                        <div class="col-sm-9">
                                            <div class="card-block">
                                                <h4 class="card-title">Our Mission</h4>
                                                <p>Executing the rules and regulations entrusted by the motor traffic Act and other legislation in an efficient manner through teamwork, and the use of modern technology to create a responsive government organization.</p>
                                                <br />
                                                <a href="#" class="btn btn-primary btn-sm float-right">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card col-sm-6  float-left">
                                <div class="row ">

                                    <div class="col-sm-9">
                                        <div class="card-block">
                                            <h4 class="card-title">Our Values</h4>
                                            <p>High Public Appreciation through Organization</p>

                                            <p>Efficiency and Effectiveness through Processes</p>

                                            <p>Customer Satisfaction through Services</p>

                                            <p>Employee Motivation through Teamwork</p>
                                            <a href="#" class="btn btn-primary btn-sm">Read More</a>
                                        </div>
                                    </div>

                                    <div class="col-sm-3">
                                        <img class="d-block w-100" src={require("./styles/images/values.jpg")} alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <footer class="text-right">
                            <p>Copyright &copy; 2084 Company Name
                                | Design: Template Mo</p>
                        </footer>
                    </div>
                </div>
            </div>

        );
    }
}