import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const Post = () => {
    return (
        <>
            <Header />
            <div className="flex justify-center bg-[#F8F9FA] p-16 border-y-2 ">
                <div className="flex flex-col gap-10">
                    <div className="w-[800px] flex flex-col gap-5">
                        <p>
                            Please update the following form with essential job
                            details, including position titles, descriptions,
                            and instructions ensure accurate and up-to-date
                            information for potential candidates.
                        </p>
                        <p>
                            Kindly make these updates promptly to enhance the
                            recruitment process.
                        </p>
                    </div>
                    <div>
                        <form action="/" className="flex flex-col gap-10">
                            <div className="flex flex-col gap-5">
                                <h1 className="text-[22px] text-center w-[800px]">
                                    Job Details
                                </h1>
                                <div className="input flex flex-col gap-5">
                                    <label htmlFor="jobTitle">Job Title</label>
                                    <input
                                        type="text"
                                        className="bg-[#E8EDEB] w-[800px] p-1 rounded-lg"
                                    />
                                </div>
                                <div className="input flex flex-col gap-5">
                                    <label htmlFor="requiredPostion">
                                        Required Postion
                                    </label>
                                    <input
                                        type="text"
                                        className="bg-[#E8EDEB] w-[800px] p-1 rounded-lg"
                                    />
                                </div>
                                <div className="input flex flex-col gap-5">
                                    <label htmlFor="requiredPostion">
                                        Which choice provides the most accurate
                                        description of the job's location? *
                                    </label>
                                    <select
                                        name="sss"
                                        id=""
                                        className="bg-[#E8EDEB] w-[800px] p-1 rounded-lg"
                                    >
                                        <option value="">select option</option>
                                        <option value="">Addis Ababa</option>
                                        <option value="">Oromia</option>
                                        <option value="">Amhara</option>
                                        <option value="">Tigray</option>
                                    </select>
                                </div>
                                <div className="input flex flex-col gap-5">
                                    <label htmlFor="requiredPostion">
                                        Job Type
                                    </label>
                                    <div className="flex gap-5">
                                        <div className="p-3 border border-black rounded-lg gap-3 flex">
                                            <input type="checkbox" />
                                            <span>Full-Time</span>
                                        </div>
                                        <div className="p-3 border border-black rounded-lg gap-3 flex">
                                            <input type="checkbox" />
                                            <span>Part-Time</span>
                                        </div>
                                        <div className="p-3 border border-black rounded-lg gap-3 flex">
                                            <input type="checkbox" />
                                            <span>Contract</span>
                                        </div>
                                        <div className="p-3 border border-black rounded-lg gap-3 flex">
                                            <input type="checkbox" />
                                            <span>Internship</span>
                                        </div>
                                        <div className="p-3 border border-black rounded-lg gap-3 flex">
                                            <input type="checkbox" />
                                            <span>Temporary</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input flex flex-col gap-5">
                                    <label htmlFor="requiredPostion">
                                        Schedule
                                    </label>
                                    <select
                                        name="sss"
                                        id=""
                                        className="bg-[#E8EDEB] w-[800px] p-1 rounded-lg"
                                    >
                                        <option value="">select option</option>
                                        <option value="">Addis Ababa</option>
                                        <option value="">Oromia</option>
                                        <option value="">Amhara</option>
                                        <option value="">Tigray</option>
                                    </select>
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
                                            <div className="flex p-2 border rounded-lg">
                                                Range
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center items-center gap-3">
                                            <h1>Minimum</h1>
                                            <div className="flex p-2 border rounded-lg">
                                                <p>ETB</p>
                                                <div className="border-e-2 p-3 "></div>
                                                <input
                                                    type="text"
                                                    className="w-[60px] focus:outline-none ms-2"
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
                                                    type="text"
                                                    className="w-[60px] focus:outline-none ms-2"
                                                />
                                            </div>
                                        </div>
                                        <div className="input flex flex-col gap-3">
                                            <label htmlFor="requiredPostion">
                                                Rate
                                            </label>
                                            <select
                                                name="sss"
                                                id=""
                                                className="border w-[120px] p-2 rounded-lg"
                                            >
                                                <option value="">
                                                    per hour
                                                </option>
                                                <option value="">
                                                    per day
                                                </option>
                                                <option value="">
                                                    per week
                                                </option>
                                                <option value="">
                                                    per month
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="input flex flex-col gap-5">
                                        <label htmlFor="requiredPostion">
                                            Additional Benefits?
                                        </label>
                                        <input
                                            type="text"
                                            className="bg-[#E8EDEB] w-[800px] p-1 rounded-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-[22px] text-center w-[800px]">
                                    Describe The Job
                                </h1>
                                <div className="flex flex-col gap-5">
                                    <label htmlFor="discription">
                                        Job Describe
                                    </label>
                                    <div className="input">
                                        <textarea
                                            name=""
                                            id=""
                                            cols="30"
                                            rows="10"
                                            className="border w-[800px] bg-white  rounded-xl"
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
};

export default Post;
