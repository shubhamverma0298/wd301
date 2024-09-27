import HomePage from './pages/HomePage';
import TaskListPage from './pages/TaskListPage';
import Layout from "./Layout";
import TaskDetailsPage from './pages/TaskDetailsPage';
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signin from "./pages/Signin";
import { Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from './pages/Notfound';
//import ReactPlayground from './ReactPlayground';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/signin" replace />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    element: (
      <ProtectedRoute>
      <Layout />
    </ProtectedRoute>
    ),
    children: [
      {
        path: "home",
        element:<HomePage />
      },
      {
        path: "tasks",
        element:<TaskListPage />
      },
      {
        path: "tasks/:id",
        element:<TaskDetailsPage />
      },
    ]
  },
  {
    path: "/notfound",
    element: <NotFound />,
  },
  {
    path: "*",
    element: <Navigate to="/notfound" replace />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
);
}

export default App

//<ReactPlayground />
