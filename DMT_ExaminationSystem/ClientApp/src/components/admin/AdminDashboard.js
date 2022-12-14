import React, { useState, useEffect, Component } from "react";
import { useHistory } from "react-router-dom";

export class AdminDashboard extends Component {

    /*  const [exam, setExam] = useState("Updating...");
      const [question, setQuestion] = useState("Updating...");
      const [user, setUser] = useState("Updating...");*/

    /* useEffect(() => {
         async function getAllExam() {
             let value = await axios.get(`${baseUrl}/exam`);
             setExam("We have total " + value.data.length + " exam");
         }
         getAllExam();
 
 
         async function getAllQuestions() {
             let value = await axios.get(`${baseUrl}/question`);
             setQuestion("We have total " + value.data.length + " question");
         }
         getAllQuestions();
 
 
         async function getAllUsers() {
             let value = await axios.get(`${baseUrl}/user`);
             setUser("We have total " + value.data.length + " user");
         }
         getAllUsers();
     })*/


    /*let history = useHistory();

    function showExam() {
        history.push("/AdminDashboard/Exam");
    }

    function showQuestions() {
        history.push("/AdminDashboard/Question");
    }

    function showUsers() {
        history.push("/AdminDashboard/StudentList");
    }*/


    render() {
        return (
            <div>
                <div class="templatemo-flex-row">
                    <div class="templatemo-sidebar">
                        <header class="templatemo-site-header">
                            <div class="square"></div>
                            <h1>Visual Admin</h1>
                        </header>
                        <div class="profile-photo-container">
                            <img src="images/profile-photo.jpg" alt="Profile Photo" class="img-responsive" />
                            <div class="profile-photo-overlay"></div>
                        </div>
                        <form class="templatemo-search-form" role="search">
                            <div class="input-group">
                                <button type="submit" class="fa fa-search"></button>
                                <input type="text" class="form-control" placeholder="Search" name="srch-term" id="srch-term" />
                            </div>
                        </form>
                        <div class="mobile-menu-icon">
                            <i class="fa fa-bars"></i>
                        </div>
                        <nav class="templatemo-left-nav">
                            <ul>
                                <li><a href="#" class="active"><i class="fa fa-home fa-fw"></i>Dashboard</a></li>
                                <li><a href="data-visualization.html"><i class="fa fa-bar-chart fa-fw"></i>Charts</a></li>
                                <li><a href="data-visualization.html"><i class="fa fa-database fa-fw"></i>Data Visualization</a></li>
                                <li><a href="maps.html"><i class="fa fa-map-marker fa-fw"></i>Maps</a></li>
                                <li><a href="manage-users.html"><i class="fa fa-users fa-fw"></i>Manage Users</a></li>
                                <li><a href="preferences.html"><i class="fa fa-sliders fa-fw"></i>Preferences</a></li>
                                <li><a href="login.html"><i class="fa fa-eject fa-fw"></i>Sign Out</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div class="templatemo-content col-1 light-gray-bg">
                        <div class="templatemo-top-nav-container">
                            <div class="row">
                                <nav class="templatemo-top-nav col-lg-12 col-md-12">
                                    <ul class="text-uppercase">
                                        <li><a href="" class="active">Admin panel</a></li>
                                        <li><a href="">Dashboard</a></li>
                                        <li><a href="">Overview</a></li>
                                        <li><a href="login.html">Sign in form</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="templatemo-content-container">
                            <div class="templatemo-flex-row flex-content-row">
                                <div class="templatemo-content-widget white-bg col-2">
                                    <i class="fa fa-times"></i>
                                    <div class="square"></div>
                                    <h2 class="templatemo-inline-block">Visual Admin Template</h2>
                                    <p>Works on all major browsers. IE 10+. Visual Admin is <a href="http://www.templatemo.com/tag/admin" target="_parent">free responsive admin template</a> for everyone. Feel free to use this template for your backend user interfaces. Please tell your friends about <a href="http://www.templatemo.com" target="_parent">templatemo.com</a> website. You may <a href="http://www.templatemo.com/contact" target="_parent">contact us</a> if you have anything to say.</p>
                                    <p>Nunc placerat purus eu tincidunt consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus nulla quis risus auctor, non placerat augue consectetur. Fusce mi lacus, semper sit amet mattis eu.</p>
                                </div>
                                <div class="templatemo-content-widget white-bg col-1 text-center">
                                    <i class="fa fa-times"></i>
                                    <h2 class="text-uppercase">Maris</h2>
                                    <h3 class="text-uppercase margin-bottom-10">Design Project</h3>
                                    <img src="images/bicycle.jpg" alt="Bicycle" class="img-circle img-thumbnail" />
                                </div>
                                <div class="templatemo-content-widget white-bg col-1">
                                    <i class="fa fa-times"></i>
                                    <h2 class="text-uppercase">Dictum</h2>
                                    <h3 class="text-uppercase">Sedvel Erat Non</h3><hr />
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"></div>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 50%;"></div>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="templatemo-flex-row flex-content-row">
                                <div class="col-1">
                                    <div class="templatemo-content-widget orange-bg">
                                        <i class="fa fa-times"></i>
                                        <div class="media">
                                            <div class="media-left">
                                                <a href="#">
                                                    <img class="media-object img-circle" src="images/sunset.jpg" alt="Sunset" />
                                                </a>
                                            </div>
                                            <div class="media-body">
                                                <h2 class="media-heading text-uppercase">Consectur Fusce Enim</h2>
                                                <p>Phasellus dapibus nulla quis risus auctor, non placerat augue consectetur.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="templatemo-content-widget white-bg">
                                        <i class="fa fa-times"></i>
                                        <div class="media">
                                            <div class="media-left">
                                                <a href="#">
                                                    <img class="media-object img-circle" src="images/sunset.jpg" alt="Sunset" />
                                                </a>
                                            </div>
                                            <div class="media-body">
                                                <h2 class="media-heading text-uppercase">Consectur Fusce Enim</h2>
                                                <p>Phasellus dapibus nulla quis risus auctor, non placerat augue consectetur.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-1">
                                    <div class="panel panel-default templatemo-content-widget white-bg no-padding templatemo-overflow-hidden">
                                        <i class="fa fa-times"></i>
                                        <div class="panel-heading templatemo-position-relative"><h2 class="text-uppercase">User Table</h2></div>
                                        <div class="table-responsive">
                                            <table class="table table-striped table-bordered">
                                                <thead>
                                                    <tr>
                                                        <td>No.</td>
                                                        <td>First Name</td>
                                                        <td>Last Name</td>
                                                        <td>Username</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1.</td>
                                                        <td>John</td>
                                                        <td>Smith</td>
                                                        <td>@jS</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2.</td>
                                                        <td>Bill</td>
                                                        <td>Jones</td>
                                                        <td>@bJ</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3.</td>
                                                        <td>Mary</td>
                                                        <td>James</td>
                                                        <td>@mJ</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4.</td>
                                                        <td>Steve</td>
                                                        <td>Bride</td>
                                                        <td>@sB</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5.</td>
                                                        <td>Paul</td>
                                                        <td>Richard</td>
                                                        <td>@pR</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="templatemo-flex-row flex-content-row templatemo-overflow-hidden">
                                <div class="col-1 templatemo-overflow-hidden">
                                    <div class="templatemo-content-widget white-bg templatemo-overflow-hidden">
                                        <i class="fa fa-times"></i>
                                        <div class="templatemo-flex-row flex-content-row">
                                            <div class="col-1 col-lg-6 col-md-12">
                                                <h2 class="text-center">Modular<span class="badge">new</span></h2>
                                                <div id="pie_chart_div" class="templatemo-chart"></div>
                                            </div>
                                            <div class="col-1 col-lg-6 col-md-12">
                                                <h2 class="text-center">Interactive<span class="badge">new</span></h2>
                                                <div id="bar_chart_div" class="templatemo-chart"></div>
                                            </div>
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
            </div>
        );
    }
}