import React from "react";

const CataCard = ({ icon, header, discription }) => {
    return (
        <div className="bg-[#F6F6F6] w-[200px] p-6 flex flex-col justify-center rounded-xl">
            <img
                src={icon}
                className="w-[60px] bg-gray-300 rounded-full p-2"
                alt="icon"
            />
            <h1>{header}</h1>
            <p>{discription}</p>
        </div>
    );
};

export default CataCard;
