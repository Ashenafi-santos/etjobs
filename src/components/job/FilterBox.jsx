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
    await applyChange(e);
  };

  return (
    <div
      className="flex flex-col justify-center items-center "
      onClick={() => {
        if (isOpen == title) {
          setIsOpen("");
        } else {
          setIsOpen(title);
        }
      }}
    >
      <div className="flex items-center gap-6 bg-primaryLightBackground p-2 rounded-lg border border-[#707070] cursor-pointer">
        <p>{title}</p>
        <FaChevronDown
          size={16}
          className={`${isOpen != title && "rotate-180"}`}
        />
      </div>
      {isOpen == title ? (
        <div className="options bg-[#F8F9FA] w-auto absolute top-[160px] text-center rounded-lg border border-[#707070] z-50">
          {options.map((option, index) => (
            <div className="flex  items-center gap-1" key={index}>
              <button
                name={title}
                value={option}
                className="min-w-[150px] w-full border cursor-pointer hover:bg-primary hover:text-white"
                onClick={handelChange}
              >
                {option}
              </button>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default FilterBox;
