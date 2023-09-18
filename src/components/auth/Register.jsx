import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { BiCircle } from "react-icons/bi";

const Register = () => {
    return (
        <>
            <Header />
            <div className="h-[900px]">
                <div className="bg-[#F8F9FA] flex justify-center items-center h-full border-b border-black">
                    <div className="card p-6 rounded-2xl bg-[#E8EDEB] w-[600px] h-auto flex flex-col justify-center items-center">
                        <h1 className="text-[#0FB357] text-[30px] font-bold">
                            WELLCOME
                        </h1>
                        <h1 className="text-[18px]">
                            Create your account and apply for jobs
                        </h1>

                        <form action="/" className="flex flex-col">
                            <div className="py-4">
                                <p className="font-bold">Personal Details</p>
                                <p className="text-[14px]">
                                    Please fill out the required information in
                                    the field below
                                </p>
                            </div>
                            <div className="input">
                                <label
                                    htmlFor="fullname"
                                    className="absolute px-[10px] translate-x-5 text-[#0FB357] bg-[#E8EDEB] translate-y-[-7px] text-[0.75em]"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    className="w-[350px] p-2 bg-[#E8EDEB] border border-black rounded-lg"
                                />
                                <div className="relative left-[310px] top-[-34px]">
                                    <BiCircle size={24} />
                                </div>
                            </div>
                            <div className="input">
                                <label
                                    htmlFor="fullname"
                                    className="absolute px-[10px] translate-x-5 text-[#0FB357] bg-[#E8EDEB] translate-y-[-7px] text-[0.75em]"
                                >
                                    Username
                                </label>
                                <input
                                    type="text"
                                    className="w-[350px] p-2 bg-[#E8EDEB] border border-black rounded-lg"
                                />
                                <div className="relative left-[310px] top-[-34px]">
                                    <BiCircle size={24} />
                                </div>
                            </div>
                            <div className="input">
                                <label
                                    htmlFor="fullname"
                                    className="absolute px-[10px] translate-x-5 text-[#0FB357] bg-[#E8EDEB] translate-y-[-7px] text-[0.75em]"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="text"
                                    className="w-[350px] p-2 bg-[#E8EDEB] border border-black rounded-lg"
                                />
                                <div className="relative left-[310px] top-[-34px]">
                                    <BiCircle size={24} />
                                </div>
                            </div>
                            <div className="input">
                                <label
                                    htmlFor="fullname"
                                    className="absolute px-[10px] translate-x-5 text-[#0FB357] bg-[#E8EDEB] translate-y-[-7px] text-[0.75em]"
                                >
                                    Contact Number
                                </label>
                                <input
                                    type="text"
                                    className="w-[350px] p-2 bg-[#E8EDEB] border border-black rounded-lg"
                                />
                                <div className="relative left-[310px] top-[-34px]">
                                    <BiCircle size={24} />
                                </div>
                            </div>

                            <div className="py-4">
                                <p className="font-bold">Security Details</p>
                                <p className="text-[14px]">
                                    Please fill out the security information in
                                    the field below
                                </p>
                            </div>
                            <div className="input">
                                <label
                                    htmlFor="fullname"
                                    className="absolute px-[10px] translate-x-5 text-[#0FB357] bg-[#E8EDEB] translate-y-[-7px] text-[0.75em]"
                                >
                                    Password
                                </label>
                                <input
                                    type="text"
                                    className="w-[350px] p-2 bg-[#E8EDEB] border border-black rounded-lg"
                                />
                                <div className="relative left-[310px] top-[-34px]">
                                    <BiCircle size={24} />
                                </div>
                            </div>
                            <div className="input">
                                <label
                                    htmlFor="fullname"
                                    className="absolute px-[10px] translate-x-5 text-[#0FB357] bg-[#E8EDEB] translate-y-[-7px] text-[0.75em]"
                                >
                                    Repeat Password
                                </label>
                                <input
                                    type="text"
                                    className="w-[350px] p-2 bg-[#E8EDEB] border border-black rounded-lg"
                                />
                                <div className="relative left-[310px] top-[-34px]">
                                    <BiCircle size={24} />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="sumit"
                                    className="bg-[#0FB357] w-full text-white font-semibold p-2 rounded-md "
                                >
                                    Lets get started
                                </button>
                            </div>

                            <div className="flex justify-center items-center gap-3 mt-4">
                                <p>Already a member? </p>
                                <a
                                    href="/login"
                                    className="text-[#0FB357] font-semibold "
                                >
                                    Login
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Register;
