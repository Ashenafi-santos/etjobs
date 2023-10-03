import React from "react";
import {
  ApplyHire,
  ApplyHireImg,
  CompleteProfile,
  CompleteProfileImg,
  CreateAccount,
  CreateAccountImg,
} from "../../assets/images";

const How = () => {
  return (
    <div className="how bg-secondaryLightBackground flex flex-col justify-center items-center gap-28 p-20">
      <div className="how-header flex justify-center flex-col items-center">
        <h1 className="text-3xl font-bold">How It Works?</h1>
        <p>Get the most from our website in 3 Simple Steps</p>
      </div>
      <div className="step-1 flex flex-wrap justify-between w-[1000px] items-center">
        <div className="card shadow-2xl shadow-secondary">
          <img
            src={CreateAccount}
            className="w-[400px] z-10"
            alt="create account "
          />
        </div>
        <div className="w-[300px] flex flex-col gap-8 justify-center items-center">
          <img
            src={CreateAccountImg}
            className="w-[250px] "
            alt="create account img"
          />
          <div className="flex flex-col gap-5">
            <h1 className="text-2xl font-bold">Create an Account</h1>
            <p>
              By registering your account, you can use our basic features for
              recruiting by getting qualified employees.
            </p>
          </div>
        </div>
      </div>
      <div className="step-2 flex justify-between w-[1000px] items-center">
        <div className="w-[300px] flex flex-col gap-8">
          <img
            src={CompleteProfileImg}
            className="w-[250px] "
            alt="create account img"
          />
          <div className="flex flex-col gap-5">
            <h1 className="text-2xl font-bold">Complete Your Profile </h1>
            <p>
              By registering your account, you can use our basic features for
              recruiting by getting qualified employees.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src={CompleteProfile}
            alt="create account"
            className="w-[400px] shadow-2xl shadow-primary"
          />
        </div>
      </div>
      <div className="step-3 flex justify-between w-[1000px] items-center">
        <div className="card">
          <img
            src={ApplyHire}
            alt="create account"
            className="w-[400px] shadow-2xl shadow-secondary"
          />
        </div>
        <div className="w-[300px] flex flex-col gap-8 items-center">
          <img
            src={ApplyHireImg}
            className="w-[250px]"
            alt="create account img"
          />
          <div className="flex flex-col gap-5">
            <h1 className="text-2xl font-bold">Hire/Apply for Jobs</h1>
            <p>
              By registering your account, you can use our basic features for
              recruiting by getting qualified employees.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default How;
