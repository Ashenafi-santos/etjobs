import "./App.css";
import Home from "./components/landing_page/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edit from "./components/profile/Edit";
import Job from "./components/job/Job";
import Post from "./components/job_post/Post";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/jobs" element={<Job />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
