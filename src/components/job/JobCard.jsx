import React from "react";
import { Kuraz } from "../../assets/images";
const JobCard = () => {
    return (
        <div className="flex flex-col w-[600px] bg-white gap-5 justify-center px-10 py-5 rounded-3xl border border-[#707070]">
            <div className="card-info flex gap-5">
                <div className="logo">
                    <img src={Kuraz} alt="logo" className="w-[250px]" />
                </div>
                <div className="job-dis flex flex-col gap-5">
                    <div>
                        <h1 className="text-[24px]">Figma Designer</h1>
                        <p>Kuraz Technologies</p>
                        <p>Addis Ababa, Ethiopia</p>
                    </div>
                    <div>
                        <p>
                            We are seeking a talented and creative Figma
                            Designer to join our design team. As a Figma
                            Designer, you will play a crucial role in shaping
                            the visual and interactive aspects of our digital...
                        </p>
                    </div>
                </div>
            </div>
            <div className="skills flex gap-5">
                <p className="bg-[#E8EDEB] p-2 rounded-lg">UI designer</p>
                <p className="bg-[#E8EDEB] p-2 rounded-lg">Figma</p>
                <p className="bg-[#E8EDEB] p-2 rounded-lg"> Landing Page</p>
            </div>
            <div className="status">
                <p>Just Posted</p>
            </div>
        </div>
    );
};

export default JobCard;
