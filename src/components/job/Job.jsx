import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import FilterBox from "./FilterBox";
import JobCard from "./JobCard";
import DiscriptionCard from "./DiscriptionCard";

const Job = () => {
    return (
        <>
            <Header />
            <div className="job-section h-[1500px] bg-[#E8EDEB]">
                <div className="filter-section flex justify-center items-center h-[auto] border-b border-[#0CB657] flex-wrap gap-8 p-7">
                    <FilterBox
                        title={"Date Posted"}
                        options={["1 day ago", "1 month ago"]}
                    />
                    <FilterBox
                        title={"Catagory"}
                        options={["Software", "Health"]}
                    />
                    <FilterBox
                        title={"Shift and Schedules"}
                        options={["Moring", "After Noon"]}
                    />
                    <FilterBox
                        title={"Region"}
                        options={["Addis Ababa", "Oromia", "Amhara"]}
                    />
                    <FilterBox
                        title={"Expriance Level"}
                        options={["Entry", "Beginer", "intermidate", "Expert"]}
                    />
                    <FilterBox
                        title={"Education"}
                        options={[
                            "Computer Science",
                            "Software Engineer",
                            "Engineer",
                        ]}
                    />
                    <FilterBox
                        title={"Job Type"}
                        options={["Entry", "Beginer", "intermidate", "Expert"]}
                    />
                </div>
                <div className="job-posting flex gap-20 justify-center p-10">
                    <div className="job-selection flex flex-col overflow-scroll gap-5 h-[1200px]">
                        <JobCard />
                        <JobCard />
                        <JobCard />
                        <JobCard />
                        <JobCard />
                        <JobCard />
                        <JobCard />
                        <JobCard />
                        <JobCard />
                        <JobCard />
                    </div>
                    <div className="job-dis">
                        <DiscriptionCard />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Job;
