import React, { useContext, useEffect, useState } from "react";
import Header from "../header/Header";
import Footer from "../Footer";
import Input from "./Input";
import { useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import axios from "../../api/axios";
import { ToastContainer, toast } from "react-toastify";

const Review = () => {
  const { state } = useLocation();
  const job = state;

  const [catagory, setCatagory] = useState("Information Technology");
  const [position, setPostion] = useState("");
  const [skills, setSkills] = useState("");
  const [location, setLocation] = useState("Addis Ababa, Ethiopia");
  const [jobtype, setJobtype] = useState("");
  const [salary, setSalary] = useState("");
  const [details, setDetails] = useState("");
  const [experience, setExperience] = useState("");
  const [timeline, setTimeline] = useState("");
  const [user, setUser] = useState(null);
  const [shift, setShift] = useState("");
  const [education, setEducation] = useState("High School Diploma");
  const { getUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = async () => {
    const data = {
      category: catagory,
      employer_id: String(user.user.id),
      required_position: position,
      skills: skills,
      location: location,
      job_type: jobtype,
      details: details,
      experience: experience,
      education: education,
      salary: salary,
      shift: shift,
      timeline: timeline,
    };

    console.log(job);
    await axios.put(`/api/jobs/${job.id}`, data).then((res) => {
      if (res.status == 200) {
        toast.success("Successfully Confirmed", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/jobs");
      }
    });
  };

  useEffect(() => {
    setCatagory(job.category);
    setDetails(job.details);
    setEducation(job.education);
    setExperience(job.experience);
    setJobtype(job.job_type);
    setPostion(job.required_position);
    setShift(job.shift);
    setSkills(job.skills);
    setTimeline(job.timeline);
    setSalary(job.salary);
    setLocation(job.location);
    setUser(getUser);
  }, []);

  return (
    <>
      <Header />
      <div className="justify-center items-center flex flex-col gap-10 h-auto bg-secondaryLightBackground pt-16">
        <div className="job-progress flex flex-col gap-2 w-[700px] border-t pt-16 border-borderbg">
          <div className="bg-white h-[10px] rounded-3xl shadow">
            <div className="bg-primary h-[10px]  rounded-3xl"></div>
          </div>
        </div>
        <div className="review-container h-auto items-center flex flex-col gap-8 w-[800px]">
          <div className="flex flex-col gap-4 w-[700px]">
            <h1 className="text-3xl">Review The Post</h1>
            <p>Job Details</p>
          </div>
          <div className="input-containe flex flex-col gap-7">
            <Input name={"Catagory"} val={catagory} setVal={setCatagory} />
            <Input
              name={"Required Position"}
              val={position}
              setVal={setPostion}
            />
            <Input name={"Skills Required"} val={skills} setVal={setSkills} />
            <Input name={"Work Location"} val={location} setVal={setLocation} />
            <Input name={"Job Type"} val={jobtype} setVal={setJobtype} />
            <Input name={"Salary"} val={salary} setVal={setSalary} />
            <Input
              name={"Hiring timeline"}
              val={timeline}
              setVal={setTimeline}
            />
            <Input
              name={"Expreiance Level"}
              val={experience}
              setVal={setExperience}
            />
            <Input
              name={"Education Level"}
              val={education}
              setVal={setEducation}
            />
            <Input name={"Shift/Schedule"} val={shift} setVal={setShift} />
            <Input name={"Job Description"} val={details} setVal={setDetails} />
          </div>

          <hr
            style={{
              background: "black",
              color: "gray",
              borderColor: "gray",
              height: "1px",
              width: "100%",
            }}
          />
          <div className="p-10">
            <button
              onClick={handleClick}
              className="border p-2 rounded-full w-[170px] text-white font-bold bg-primary"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Review;
