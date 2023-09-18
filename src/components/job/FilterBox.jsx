import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FilterBox = ({ title, options }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex flex-col justify-center items-center ">
            <div
                className="flex gap-5 bg-[#F8F9FA] p-3 rounded-lg border border-[#707070] cursor-pointer"
                onClick={toggle}
            >
                <p>{title}</p>
                <FaChevronDown size={20} />
            </div>
            {isOpen ? (
                <div className="options bg-[#F8F9FA] w-[150px] absolute top-[150px] text-center rounded-lg border border-[#707070]">
                    {options.map((option) => (
                        <p key={option}>{option}</p>
                    ))}
                </div>
            ) : null}
        </div>
    );
};

export default FilterBox;
