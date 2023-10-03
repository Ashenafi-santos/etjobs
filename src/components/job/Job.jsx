import React, { Suspense, useEffect, useState } from "react";
import Header from "../header/JobHeader";
import Footer from "../Footer";
import FilterBox from "./FilterBox";
import JobCard from "./JobCard";
import DiscriptionCard from "./DiscriptionCard";
import axios from "../../api/axios";
import Pagination from "./Pagination";

function Loading() {
  return <h2>🌀 Loading...</h2>;
}
const Job = () => {
  const [isOpen, setIsOpen] = useState("");
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage, setJobsPerPage] = useState(9);
  const [search, setSearch] = useState("");
  const [jobType, setJobType] = useState("");
  const [shift, setShift] = useState("");
  const [date, setDate] = useState("");
  const [catagory, setCatagory] = useState("");
  const [experience, setExperience] = useState("");
  const [education, setEducation] = useState("");
  const [location, setLocation] = useState("");

  const getJobs = async () => {
    const res = await axios
      .get("/api/jobs", {
        params: {
          search,
          shift,
          education,
          category: catagory,
          location,
          experience,
          job_type: jobType,
        },
      })
      .then((res) => {
        setJobs(res.data.jobs);
      })
      .catch((e) => {
        setJobs(null);
      });
  };

  useEffect(() => {
    getJobs();
  }, []);

  const applyChange = (e) => {
    e.preventDefault();
    getJobs();
  };

  console.log(search, catagory);

  const lastJobIndex = currentPage * jobsPerPage;
  const firstJobIndex = lastJobIndex - jobsPerPage;

  const currentjobs = jobs?.slice(firstJobIndex, lastJobIndex);

  return (
    <>
      <Header setSearch={setSearch} applyChange={applyChange} />
      <div className="job-section auto bg-secondaryLightBackground">
        <div className="filter-section flex justify-center items-center h-[auto] flex-wrap gap-8 p-7">
          <FilterBox
            title={"Date Posted"}
            options={[
              "1 month",
              "3 weeks",
              "2 weeks",
              "1 week",
              "3 days",
              "2 days",
              "1 day",
            ]}
            setVal={setDate}
            setIsOpen={setIsOpen}
            applyChange={applyChange}
            isOpen={isOpen}
          />
          <FilterBox
            title={"Catagory"}
            options={[
              "Information Technology",
              "Healthcare",
              "Finance and Banking",
              "Education",
              "Manufacturing",
              "Retail",
              "Marketing and Advertising",
              "Hospitality and Tourism",
              "Construction",
            ]}
            setIsOpen={setIsOpen}
            setVal={setCatagory}
            applyChange={applyChange}
            isOpen={isOpen}
          />
          <FilterBox
            title={"Shift and Schedules"}
            options={[
              "Morning (8:30am-12:30pm)",
              "Afternoon (1:30pm-11:30pm)",
              "Night (6:30pm-11:30pm)",
              "Full day",
              "Remote",
            ]}
            setVal={setShift}
            setIsOpen={setIsOpen}
            applyChange={applyChange}
            isOpen={isOpen}
          />
          <FilterBox
            title={"Location"}
            options={[
              "Addis Ababa",
              "Adama",
              "Bahir dar",
              "Hawassa",
              "Mekele",
              "Gondar",
              "Dire dawa",
            ]}
            setIsOpen={setIsOpen}
            setVal={setLocation}
            applyChange={applyChange}
            isOpen={isOpen}
          />
          <FilterBox
            title={"Expriance Level"}
            options={[
              "Entry level",
              "1 year",
              "2 years",
              "3 years",
              "4 years+",
            ]}
            setIsOpen={setIsOpen}
            setVal={setExperience}
            applyChange={applyChange}
            isOpen={isOpen}
          />
          <FilterBox
            title={"Education"}
            options={[
              "High school graduate",
              "Diploma",
              "Bachelor's Degree",
              "Master's Degree",
              "PhD",
            ]}
            setVal={setEducation}
            setIsOpen={setIsOpen}
            applyChange={applyChange}
            isOpen={isOpen}
          />
          <FilterBox
            title={"Job Type"}
            options={[
              "Full-time",
              "Part-time",
              "Contract",
              "InternShip",
              "Temporary",
            ]}
            setIsOpen={setIsOpen}
            setVal={setJobType}
            applyChange={applyChange}
            isOpen={isOpen}
          />
        </div>
        <div className="flex flex-wrap gap-10 border-t border-borderbg  justify-center p-16">
          {currentjobs ? (
            currentjobs.map((job, index) => <JobCard key={index} job={job} />)
          ) : (
            <div className="text-2xl">No Result Found</div>
          )}
        </div>
        <div>
          <Pagination
            jobsPerPage={jobsPerPage}
            totalJobs={jobs?.length}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            firstIndex={firstJobIndex}
            lastIndex={lastJobIndex}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Job;
