import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FilterBox = ({
  title,
  options,
  isOpen,
  setIsOpen,
  setVal,
  applyChange,
}) => {
  const handelChange = async (e) => {
    await setVal(e.target.value);
    applyChange(e);
  };

  const toggle = () => {
    if (isOpen == title) {
      setIsOpen("");
    } else {
      setIsOpen(title);
    }
  };

  return (
    <div
      className="flex flex-col justify-center items-center "
      onClick={toggle}
    >
      <div className="flex items-center gap-6 bg-primaryLightBackground p-2 rounded-lg border border-[#707070] cursor-pointer">
        <p>{title}</p>
        <FaChevronDown
          size={16}
          className={`${isOpen != title && "rotate-180"}`}
        />
      </div>
      {isOpen == title ? (
        <div className="options bg-[#F8F9FA] w-auto absolute top-[150px] text-center rounded-lg border border-[#707070] z-50">
          {options.map((option, index) => (
            <div className="flex  items-center px-4 gap-1" key={index}>
              <input
                type="radio"
                name={title}
                value={option}
                className="w-[20px] cursor-pointer"
                onClick={handelChange}
              />
              <label htmlFor={title}>{option}</label>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default FilterBox;
