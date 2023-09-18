import React from "react";
import { Kuraz } from "../../assets/images";

const DiscriptionCard = () => {
    return (
        <div className="w-[900px] bg-white justify-center items-center p-10 rounded-3xl border border-[#707070]">
            <div className="card-section flex flex-col gap-5">
                <div className="logo flex">
                    <img src={Kuraz} alt="logo" className="w-[110px]" />
                    <h1 className="text-[34px]">Figma Designer</h1>
                </div>
                <div className="overview flex flex-col gap-5 ">
                    <h1 className="font-bold text-[20px]">Job Overview</h1>
                    <p>
                        We are seeking a talented and creative Figma Designer to
                        join our design team. As a Figma Designer, you will play
                        a crucial role in shaping the visual and interactive
                        aspects of our digital products and experiences. You
                        will collaborate closely with cross-functional teams,
                        including product managers, developers, and UX/UI
                        designers, to translate ideas and concepts into visually
                        appealing and user-friendly designs.
                    </p>
                </div>
                <div className="skills flex flex-col gap-5 text-[20px]">
                    <h1 className="font-bold">Skills</h1>
                    <div className="flex gap-5">
                        <p className="bg-[#E8EDEB] text-center w-[200px] p-2 rounded-lg">
                            UI designer
                        </p>
                        <p className="bg-[#E8EDEB] p-2 rounded-lg text-center w-[200px]">
                            Figma
                        </p>
                        <p className="bg-[#E8EDEB] p-2 rounded-lg text-center w-[200px]">
                            Landing Page
                        </p>
                    </div>
                </div>
                <div className="qualification flex flex-col gap-5">
                    <h1 className="font-bold text-[20px]">Qualification</h1>
                    <div>
                        <p>
                            - Proven experience as a Figma Designer or similar
                            role, with a portfolio showcasing your design work.
                        </p>
                        <p>
                            - Proven experience as a Figma Designer or similar
                            role, with a portfolio showcasing your design work.
                        </p>
                        <p>
                            - Proven experience as a Figma Designer or similar
                            role, with a portfolio showcasing your design work.
                        </p>
                        <p>
                            - Proven experience as a Figma Designer or similar
                            role, with a portfolio showcasing your design work.
                        </p>
                        <p>
                            - Proven experience as a Figma Designer or similar
                            role, with a portfolio showcasing your design work.
                        </p>
                        <p>
                            - Proven experience as a Figma Designer or similar
                            role, with a portfolio showcasing your design work.
                        </p>
                        <p>
                            - Proven experience as a Figma Designer or similar
                            role, with a portfolio showcasing your design work.
                        </p>
                        <p>
                            - Proven experience as a Figma Designer or similar
                            role, with a portfolio showcasing your design work.
                        </p>
                        <p>
                            - Proven experience as a Figma Designer or similar
                            role, with a portfolio showcasing your design work.
                        </p>
                    </div>
                </div>
                <div className="btn flex justify-end">
                    <a
                        href=""
                        className="bg-[#0CB657] p-2 text-white  rounded-lg"
                    >
                        Submit Propsal
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DiscriptionCard;
