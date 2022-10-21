import React, { Component, useState } from "react";
import { Route, Routes } from "react-router-dom";
import SessionManager from "./helpers/SessionManager";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Layout } from "./components/Layout";
import "../src/components/styles/custom.css";

import { AddEditQuestions } from "./components/admin/AddEditQuestions";
import { AdminDashboard } from "./components/admin/AdminDashboard";
import { ExamResults } from "./components/admin/ExamResults";
import { SetExamination } from "./components/admin/SetExamination";
import { ViewExam } from "./components/admin/ViewExam";

import { StudentDashboard } from "./components/student/StudentDashboard";
import { Exam } from "./components/student/Exam";
import { ExamSchedule } from "./components/student/ExamSchedule";

import { Logout } from "./components/Logout";

export default class App extends Component {
    static displayName = App.name;
    isAdmin = SessionManager.getUserType()

    render() {
        return (
            <Layout>
                <Routes>
                    <Route path="admin-dashboard" element={<AdminDashboard />} />
                    <Route path="exam-result" element={<ExamResults />} />
                    <Route path="add-questions" element={<AddEditQuestions />} />
                    <Route path="exam-schedule" element={<SetExamination />} />
                    <Route path="view-exam" element={<ViewExam />} />
                    <Route path="logout" element={<Logout />} />
                    <Route path="student-dashboard" element={<StudentDashboard />} />
                    <Route path="exams" element={<Exam />} />
                    <Route path="exam-schedule" element={<ExamSchedule />} />
                    <Route path="logout" element={<Logout />} />
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<Login />} />
            </Routes>
        </Layout>
        )
}
}
