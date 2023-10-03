import "./App.css";
import Home from "./components/landing_page/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Job from "./components/job/Job";
import Post from "./components/job_post/Post";
import Review from "./components/review/Review";
import Dashboard from "./components/dashboard/Dashboard";
import RegisterEmployee from "./components/auth/RegisterEmployee";
import LoginEmployee from "./components/auth/LoginEmployee";
import DashboardEmployee from "./components/dashboard/DashboardEmployee";
import ApplyForm from "./components/job/ApplyForm";
import ApplicationReview from "./components/job/ApplicationReview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-e" element={<LoginEmployee />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signup-e" element={<RegisterEmployee />} />
        <Route path="/jobs" element={<Job />} />
        <Route path="/post" element={<Post />} />
        <Route path="/apply" element={<ApplyForm />} />
        <Route path="/review" element={<Review />} />
        <Route path="/review-application" element={<ApplicationReview />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard-e" element={<DashboardEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
