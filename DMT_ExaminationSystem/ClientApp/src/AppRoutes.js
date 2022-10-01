import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { StudentDetails } from "./components/StudentDetails";
import { ExamSchedule } from "./components/ExamSchedule";
import { Questions } from "./components/Questions";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/student-details',
    element: <StudentDetails />
  },
  {
    path: '/exam-schedules',
    element: <ExamSchedule />
  },
  {
    path: '/questions',
    element: <Questions />
  }
];

export default AppRoutes;
