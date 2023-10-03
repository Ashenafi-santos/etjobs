import React from "react";
import Header from "../header/Header";
import Footer from "../Footer";
import { BiCircle } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

const Edit = () => {
  return (
    <>
      <Header />
      <div className="h-[1100px]">
        <div className="bg-[#F8F9FA] flex justify-center items-center h-full border-b border-black">
          <div className="card p-16 rounded-2xl bg-[#E8EDEB] w-[700px] h-auto flex flex-col justify-center items-center">
            <div className="py-4">
              <p className="font-bold">Personal Details</p>
              <p className="text-[14px]">
                Please fill out the required information in the field below
              </p>
            </div>
            <div className="profile-pic p-3">
              <CgProfile size={150} />
            </div>
            <form action="/" className="flex flex-col gap-5">
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
              </div>
              <div className="input">
                <label
                  htmlFor="fullname"
                  className="absolute px-[10px] translate-x-5 text-[#0FB357] bg-[#E8EDEB] translate-y-[-7px] text-[0.75em]"
                >
                  Profile Picture
                </label>
                <input
                  type="file"
                  className="w-[350px] p-2 bg-[#E8EDEB] border border-black rounded-lg"
                />
              </div>
              <div className="input">
                <label
                  htmlFor="fullname"
                  className="absolute px-[10px] translate-x-5 text-[#0FB357] bg-[#E8EDEB] translate-y-[-7px] text-[0.75em]"
                >
                  About Yourself
                </label>
                <textarea
                  type="text"
                  rows="6"
                  cols="50"
                  className="w-[350px] p-2 bg-[#E8EDEB] border border-black rounded-lg"
                ></textarea>
              </div>

              <div>
                <button
                  type="sumit"
                  className="bg-[#0FB357] w-full text-white font-semibold p-2 rounded-md "
                >
                  UPDATE
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

export default Edit;
