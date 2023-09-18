import React from "react";

const How = () => {
    return (
        <div className="how h-[500px] bg-[#F8F9FA] flex justify-center">
            <div className="how-content flex gap-16 flex-col justify-center items-center">
                <div className="grid grid-cols-3 items-center justify-items-center">
                    <hr
                        style={{
                            background: "black",
                            color: "black",
                            borderColor: "black",
                            height: "1px",
                            width: "350px",
                        }}
                    />
                    <h1 className="text-[40px]">How It Works?</h1>
                    <hr
                        style={{
                            background: "black",
                            color: "black",
                            borderColor: "black",
                            height: "1px",
                            width: "350px",
                        }}
                    />
                </div>
                <div className="how-cards flex gap-20">
                    <div className="how-card gap-3 w-[300px] flex flex-col justify-center items-center">
                        <h1 className="text-[18px] bg-[#0CB657] text-white w-[40px] text-center rounded-lg">
                            1
                        </h1>
                        <h1 className="text-[20px]">Create Account</h1>
                        <p className="p-[8px] font-light text-center">
                            Open an account and start your journey
                        </p>
                    </div>
                    <div className="how-card gap-3 w-[300px] flex flex-col justify-center items-center">
                        <h1 className="text-[18px] bg-[#0CB657] text-white w-[40px] text-center rounded-lg">
                            2
                        </h1>
                        <h1 className="text-[20px]">Complete Your Profile</h1>
                        <p className="p-[8px] font-light text-center">
                            Complete your profile to get the best from our
                            website
                        </p>
                    </div>
                    <div className="how-card gap-3 w-[300px] flex flex-col justify-center items-center">
                        <h1 className="text-[18px] bg-[#0CB657] text-white w-[40px] text-center rounded-lg">
                            3
                        </h1>
                        <h1 className="text-[20px]">Apply for Job or Hire</h1>
                        <p className="p-[8px] font-light text-center">
                            Apply & get your preferable jobs
                        </p>
                    </div>
                </div>
                <hr
                    style={{
                        background: "black",
                        color: "black",
                        borderColor: "black",
                        height: "1px",
                        width: "100%",
                    }}
                />
            </div>
        </div>
    );
};

export default How;
