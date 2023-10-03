import React, { useContext, useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../header/JobHeader";
import AuthContext from "../../context/AuthContext";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const [catagory, setCatagory] = useState("Information Technology");
  const [position, setPostion] = useState("");
  const [skills, setSkills] = useState("");
  const [location, setLocation] = useState("Addis Ababa, Ethiopia");
  const [jobtype, setJobtype] = useState("Full-Time");
  const [salary, setSalary] = useState("");
  const [details, setDetails] = useState("");
  const [experience, setExperience] = useState("Entry-Level");
  const [timeline, setTimeline] = useState("1 to 7 Days");
  const [mins, setMins] = useState("");
  const [maxs, setMaxs] = useState("");
  const [user, setUser] = useState(null);
  const [pay, setPay] = useState("range");
  const [rate, setRate] = useState("per hour");
  const [fixed, setFixed] = useState("");
  const [shift, setShift] = useState("Morning (8:30am - 12:30pm)");
  const [education, setEducation] = useState("High School Diploma");
  const { getUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(getUser());
    if (!getUser()) {
      navigate("/signup");
    }

    if (getUser().user.role == "employee") {
      navigate("/jobs");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (pay === "fixed") {
      setSalary("fixed " + fixed + "K");
    } else {
      setSalary(mins + " - " + maxs + "K " + rate);
    }

    const data = {
      employer_id: `${user.user.id}`,
      category: catagory,
      required_position: position,
      skills: skills,
      location: location,
      job_type: jobtype,
      salary: String(salary),
      details: details,
      shift: String(shift),
      experience: experience,
      education: education,
      timeline: String(timeline),
    };

    await axios.post("/api/jobs", data).then((res) => {
      const data1 = {
        id: res.data.job_id,
        employer_id: `${user.user.id}`,
        category: catagory,
        required_position: position,
        skills: skills,
        location: location,
        job_type: jobtype,
        salary: String(salary),
        details: details,
        shift: shift.toString(),
        experience: experience,
        education: education,
        timeline: timeline.toString(),
      };
      navigate("/review", { state: data1 });
    });
  };
  if (user) {
    return (
      <>
        <Header />
        <div className="flex justify-center bg-secondaryLightBackground p-16  ">
          <div className="flex flex-col gap-10 border-t pt-14 border-borderbg">
            <div className="w-[800px] flex flex-col gap-5 ">
              <p>
                Please update the following form with essential job details,
                including position titles, descriptions, and instructions ensure
                accurate and up-to-date information for potential candidates.
              </p>
              <p>
                Kindly make these updates promptly to enhance the recruitment
                process.
              </p>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                <div className="flex flex-col gap-8">
                  {/* <div className="job-progress flex flex-col gap-2">
                    <h1 className="text-[12px]">Job posting progress</h1>
                    <div className="bg-white h-[10px] rounded-3xl shadow">
                      <div
                        className={`bg-primary h-[10px] w-[100%] rounded-3xl`}
                      ></div>
                    </div>
                  </div> */}
                  <h1 className="text-[22px] text-center w-[800px]">
                    Job Details
                  </h1>
                  <div className="input flex flex-col gap-5">
                    <label htmlFor="category">Category</label>
                    <select
                      name="category"
                      id=""
                      type="text"
                      className="bg-primaryLightBackground w-[800px] p-2 rounded-lg"
                      onChange={(e) => setCatagory(e.target.value)}
                      required
                    >
                      <option value="Information Technology">
                        Information Technology
                      </option>
                      <option value="Marketing">Marketing</option>
                      <option value="Health Care">Health Care</option>
                      <option value="Analytics">Analytics</option>
                      <option value="Hosipitality">Hosipitality</option>
                      <option value="Hosipitality">Creative</option>
                      <option value="Finance">Finance</option>
                      <option value="Education">Education</option>
                      <option value="Engineering">Engineering</option>
                      <option value="Content Creater">Content Creater</option>
                    </select>
                  </div>
                  <div className="input flex flex-col gap-5">
                    <label htmlFor="requted_position">Required Postion</label>
                    <input
                      type="text"
                      name="required_postion"
                      className="bg-primaryLightBackground w-[800px] p-2 rounded-lg"
                      onChange={(e) => setPostion(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input flex flex-col gap-5">
                    <label htmlFor="skills">Skills Required</label>
                    <input
                      type="text"
                      name="required_postion"
                      className="bg-primaryLightBackground w-[800px] p-2 rounded-lg"
                      placeholder="separating them by comma "
                      onChange={(e) => setSkills(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input flex flex-col gap-5">
                    <label htmlFor="requiredPostion">
                      Which choice provides the most accurate description of the
                      job's location? *
                    </label>
                    <select
                      name="sss"
                      id=""
                      type="text"
                      className="bg-primaryLightBackground w-[800px] p-1 rounded-lg"
                      onChange={(e) => setLocation(e.target.value)}
                    >
                      <option value="Addis Ababa, Ethiopia">
                        Addis Ababa, Ethiopia
                      </option>
                      <option value="Adama, Ethiopia">Adama, Ethiopia</option>
                      <option value="Hawasa, Ethiopia">Hawasa, Ethiopia</option>
                      <option value="Meqele, Ethiopia">Meqele, Ethiopia</option>
                      <option value="Ambo, Ethiopia">Ambo, Ethiopia</option>
                      <option value="Welkite, Ethiopia">
                        Welkite, Ethiopia
                      </option>
                    </select>
                  </div>
                  <div className="input flex flex-col gap-5">
                    <label htmlFor="requiredPostion">Job Type</label>
                    <div className="flex gap-5">
                      <div className="p-3 border border-borderbg rounded-lg gap-3 flex">
                        <input
                          type="radio"
                          name="jobtype"
                          value="Full-Time"
                          onChange={(e) => setJobtype(e.target.value)}
                        />
                        <span>Full-Time</span>
                      </div>
                      <div className="p-3 border border-borderbg rounded-lg gap-3 flex">
                        <input
                          type="radio"
                          name="jobtype"
                          value="Part-Time"
                          onChange={(e) => setJobtype(e.target.value)}
                        />
                        <span>Part-Time</span>
                      </div>
                      <div className="p-3 border border-borderbg rounded-lg gap-3 flex">
                        <input
                          type="radio"
                          name="jobtype"
                          value="Contract"
                          onChange={(e) => setJobtype(e.target.value)}
                        />
                        <span>Contract</span>
                      </div>
                      <div className="p-3 border border-borderbg rounded-lg gap-3 flex">
                        <input
                          type="radio"
                          name="jobtype"
                          value="Internship"
                          onChange={(e) => setJobtype(e.target.value)}
                        />
                        <span>Internship</span>
                      </div>
                      <div className="p-3 border border-borderbg rounded-lg gap-3 flex">
                        <input
                          type="radio"
                          name="jobtype"
                          value="Temporary"
                          onChange={(e) => setJobtype(e.target.value)}
                        />
                        <span>Temporary</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="text-[22px] text-center w-[800px]">
                    Pay and Benefits
                  </h1>
                  <div className="input flex flex-col gap-5">
                    <label htmlFor="pay">Pay</label>
                    <div className="flex gap-5 jusify-center items-center">
                      <div className="flex flex-col justify-center items-center gap-3">
                        <h1>Show Pay by</h1>
                        <select
                          name="pay"
                          id=""
                          className="p-2"
                          onChange={(e) => setPay(e.target.value)}
                        >
                          <option value="range">Range</option>
                          <option value="fixed">Fixed</option>
                        </select>
                      </div>
                      <div>
                        {pay == "fixed" ? (
                          <div className="flex flex-col justify-center items-center gap-3">
                            <h1>Amount</h1>
                            <div className="flex p-2 border rounded-lg">
                              <p>ETB</p>
                              <div className="border-e-2 p-3 "></div>
                              <input
                                type="number"
                                className="w-[60px] focus:outline-none ms-2"
                                onChange={(e) => setFixed(e.target.value)}
                                required
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="flex gap-10">
                            <div className="flex flex-col justify-center items-center gap-3">
                              <h1>Minimum</h1>
                              <div className="flex p-2 border rounded-lg">
                                <p>ETB</p>
                                <div className="border-e-2 p-3 "></div>
                                <input
                                  type="number"
                                  className="w-[60px] focus:outline-none ms-2"
                                  onChange={(e) => setMins(e.target.value)}
                                  required
                                />
                              </div>
                            </div>
                            to
                            <div className="flex flex-col justify-center items-center gap-3">
                              <h1>Maximum</h1>
                              <div className="flex p-2 border rounded-lg">
                                <p>ETB</p>
                                <div className="border-e-2 p-3 "></div>
                                <input
                                  type="number"
                                  className="w-[60px] focus:outline-none ms-2"
                                  onChange={(e) => setMaxs(e.target.value)}
                                  required
                                />
                              </div>
                            </div>
                            <div className="input flex flex-col gap-3">
                              <label htmlFor="requiredPostion">Rate</label>
                              <select
                                name="sss"
                                id=""
                                type="text"
                                className="border w-[120px] p-2 rounded-lg"
                                onChange={(e) => setRate(e.target.value)}
                              >
                                <option value="per hour">per hour</option>
                                <option value="per day">per day</option>
                                <option value="per day">per week</option>
                                <option value="per day">per month</option>
                              </select>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="input flex flex-col gap-5">
                      <label htmlFor="requiredPostion">Hiring timeline</label>
                      <select
                        name="timeline"
                        id=""
                        type="text"
                        className="bg-primaryLightBackground w-[800px] p-1 rounded-lg"
                        onChange={(e) => setTimeline(e.target.value)}
                      >
                        <option value="1 to 7 Days">1 to 7 Days</option>
                        <option value="1 to 2 Weeks">1 to 2 Weeks</option>
                        <option value="2 to 4 Weeks">2 to 4 Weeks</option>
                        <option value="More than 4 Weeks">
                          More than 4 Weeks
                        </option>
                      </select>
                    </div>
                    <div className="input flex flex-col gap-5">
                      <label htmlFor="requiredPostion">Expreriance Level</label>
                      <select
                        name="timeline"
                        id=""
                        type="text"
                        className="bg-primaryLightBackground w-[800px] p-1 rounded-lg"
                        onChange={(e) => setExperience(e.target.value)}
                      >
                        <option value="Entry-Level">Entry-Level</option>
                        <option value="Mid-Level">Mid-Level</option>
                        <option value="Senior-Level">Senior-Level</option>
                      </select>
                    </div>
                    <div className="input flex flex-col gap-5">
                      <label htmlFor="requiredPostion">Education Level</label>
                      <select
                        name="timeline"
                        id=""
                        type="text"
                        className="bg-primaryLightBackground w-[800px] p-1 rounded-lg"
                        onChange={(e) => setEducation(e.target.value)}
                      >
                        <option value="High School Diploma">
                          High School Diploma
                        </option>
                        <option value="Bachelor's Degree">
                          Bachelor's Degree
                        </option>
                        <option value="Master's Degree">Master's Degree</option>
                        <option value="Doctorate/Ph.D">Doctorate/Ph.D</option>
                      </select>
                    </div>
                    <div className="input flex flex-col gap-5">
                      <label htmlFor="requiredPostion">Shift/Schedule</label>
                      <select
                        name="timeline"
                        id=""
                        type="text"
                        className="bg-primaryLightBackground w-[800px] p-1 rounded-lg"
                        onChange={(e) => setShift(e.target.value)}
                      >
                        <option value="Morning (8:30am - 12:30pm)">
                          Morning (8:30am - 12:30pm)
                        </option>
                        <option value="Afternoon (1:30pm - 5:30pm)">
                          Afternoon (1:30pm - 5:30pm)
                        </option>
                        <option value="Night (6:30pm - 5:30am)">
                          Night (6:30pm - 5:30am)
                        </option>
                        <option value="Fullday">Fullday</option>
                        <option value="Remote">Remote</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="text-[22px] text-center w-[800px]">
                    Describe The Job
                  </h1>
                  <div className="flex flex-col gap-5">
                    <label htmlFor="discription">Job Describe</label>
                    <div className="input">
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        className="border w-[800px] bg-primaryLightBackground border-borderbg  rounded-xl p-4"
                        onChange={(e) => setDetails(e.target.value)}
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end w-[800px]">
                  <button
                    type="sumit"
                    className="bg-[#0CB657] w-[150px] p-2  rounded-full"
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
};

export default Post;
