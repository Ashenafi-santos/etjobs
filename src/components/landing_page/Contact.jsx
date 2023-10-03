import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-[#CDD5F9] flex p-5 justify-center flex-col gap-10 items-center"
    >
      <div>
        <h1 className="text-3xl font-bold">Get In Touch</h1>
      </div>

      <div className="flex justify-around w-full">
        <div className="contact-text gap-10 flex flex-col">
          <div>
            <p className="w-[600px] text-lg">
              Kuraz Technologies PLC is a privately owned company headquartered
              in Addis Ababa, Ethiopia which aims at providing Information and
              Communication technologies to the education sector and is known
              for providing best-in-class web application products to increase
              the efficiency of Ethiopian students and professionals.
            </p>
          </div>
          <div>
            <ul className="flex gap-9">
              <li className="flex text-center  gap-3 flex-col items-center">
                <CiLocationOn
                  size={50}
                  className="bg-secondaryBackground p-1 rounded-full"
                />
                <h1 className="text-2xl font-bold">Address</h1>
                <p className="w-[200px] text-sm">
                  22 Golagol, Haile Gebre Selase St, Addis Ababa Hanan k Plaza
                  5th floor
                </p>
              </li>
              <li className="flex  gap-3 flex-col text-center items-center">
                <AiOutlineMail
                  size={50}
                  className="bg-secondaryBackground p-2 rounded-full"
                />
                <h1 className="text-2xl font-bold">Email</h1>
                <p className="w-[200px] text-sm">kuraztech@company.com</p>
                <p className="w-[200px] text-sm">kuraztech@company.com</p>
              </li>
              <li className="flex text-center  gap-3 flex-col items-center">
                <BsFillTelephoneFill
                  size={50}
                  className="bg-secondaryBackground p-2 rounded-full"
                />
                <h1 className="text-2xl font-bold">Phone</h1>
                <p className="w-[200px] text-sm">0910121314</p>
                <p className="w-[200px] text-sm">0910121314</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="contact-form">
          <h1 className="text-3xl font-semibold py-2">Message Us</h1>
          <form className="w-[500px]">
            <div className="input flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" className="p-2 rounded-2xl" />
            </div>
            <div className="input flex flex-col gap-2">
              <label htmlFor="email">Email Address</label>
              <input type="text" name="email" className="p-2 rounded-2xl" />
            </div>
            <div className="input flex flex-col gap-2">
              <label htmlFor="name">Message</label>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                className="p-2 rounded-2xl"
              ></textarea>
            </div>

            <div className="flex justify-end py-3">
              <button className="bg-primary text-white px-4 py-2 rounded-2xl font-semibold">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
