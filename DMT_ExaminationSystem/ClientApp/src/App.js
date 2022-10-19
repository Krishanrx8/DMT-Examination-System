import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import SessionManager from './helpers/SessionManager';
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { List } from "./components/List";
import { ExamSchedule } from "./components/student/ExamSchedule";
import { Layout } from './components/Layout';
import './custom.css';
import { Questions } from './components/Questions';
import { AddEdit } from './components/AddEdit';

export default class App extends Component {
  static displayName = App.name;

  render() {
      return(
      SessionManager.getToken() ? (
        <Layout>
            <Routes>
              <Route exact path='/home' element={<Home />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='/questions' element={<Questions />} />
                <Route path='/exam-schedules' element={<ExamSchedule/>} />
                <Route path='/student-details' element={<List />} />
                <Route path='/student-details/edit/:id' element={<AddEdit />} />
                <Route path='/student-details/add' element={<AddEdit />} />
            </Routes>
        </Layout>

      ) : (
    <>
        <Layout>
            <Routes>
                <Route path={'/', "/login"} element={<Login/>} />
                <Route path='/student-details' element={<List />}></Route>
                <Route path='/questions' element={<Questions />} />
                <Route path='/exam-schedules' element={<ExamSchedule />} />
                <Route path='/student-details' element={<List />} />
                <Route path='/student-details/edit/:id' element={<AddEdit />} />
                <Route path='/student-details/add' element={<AddEdit />} />
            </Routes>
        </Layout>
    </>
)
);
}
}
