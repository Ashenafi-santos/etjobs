import React from "react";
import CataCard from "./CataCard";
import { Design } from "../../assets/images";
import { Art } from "../../assets/images";
import { Code } from "../../assets/images";
import { Ad } from "../../assets/images";
import { Health } from "../../assets/images";
import { Tool } from "../../assets/images";
import { Bill } from "../../assets/images";

const Catagories = () => {
    return (
        <div className="h-[700px] bg-[#E8EDEB] flex justify-center items-center">
            <div className="caragories-content space-y-10">
                <h1 className="text-[30px]">Most Demanding Categories</h1>
                <div className="cards grid grid-cols-4 justify-items-center gap-20">
                    <CataCard
                        icon={Design}
                        header={"Design & Development"}
                        discription={"100 vacancy"}
                    />
                    <CataCard
                        icon={Art}
                        header={"Art & Animation."}
                        discription={"100 vacancy"}
                    />
                    <CataCard
                        icon={Code}
                        header={"Software Developer"}
                        discription={"100 vacancy"}
                    />
                    <CataCard
                        icon={Bill}
                        header={"Finance"}
                        discription={"100 vacancy"}
                    />
                    <CataCard
                        icon={Tool}
                        header={"Technician"}
                        discription={"100 vacancy"}
                    />
                    <CataCard
                        icon={Health}
                        header={"HealthCare"}
                        discription={"100 vacancy"}
                    />
                    <CataCard
                        icon={Ad}
                        header={"Advertising & Promotion."}
                        discription={"100 vacancy"}
                    />
                    <div className="bg-[#0CB657] w-[200px] p-6 flex text-white flex-col justify-center rounded-xl">
                        <h1>1k+</h1>
                        <p>Jobs Are Already Posted</p>
                    </div>
                </div>
                <div>
                    <h1 className="text-right text-[#0CB657]">
                        All catagories
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Catagories;
