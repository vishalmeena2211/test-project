import { Route, Routes } from "react-router-dom";
import NewDashboards from "./Components/Auth/NewDash";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import Welcome from "./Components/Auth/Welcome";
import Layout from "./Components/Layout";
import ViewAllTasksPage from "./Pages/ViewAllTasksPage";
import EditTasksPage from "./Pages/EditTasksPage";
import CreateTaskPage from "./Pages/CreateTaskPage";
import HomePage from "./Pages/HomePage";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={ <NewDashboards /> }>
          <Route index element={<Welcome />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="/dashboard" element={<Layout /> }>
          <Route index element={<HomePage />} />
          <Route path="createTask" element={<CreateTaskPage />} />
          <Route path="allTasks" element={<ViewAllTasksPage />} />
          <Route path="editTasks" element={<EditTasksPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
