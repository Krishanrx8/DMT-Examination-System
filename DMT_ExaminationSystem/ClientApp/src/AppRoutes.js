import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { StudentDetails } from "./components/StudentDetails";
import { ExamSchedule } from "./components/ExamSchedule";


const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
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
    }
];

export default AppRoutes;
