import React from "react";
import { FooterImg, Logo } from "../assets/images";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="h-auto p-20 bg-secondaryBackground flex justify-center items-center">
      <div className="footer w-full">
        <div className="flex justify-center gap-64 ">
          <div className="footer-info flex gap-28 justify-center items-center">
            <div className="logo flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <img src={Logo} className="w-[150px] h-auto" alt="logo" />
                <p>Copyright &copy; 2023 ETJOBS</p>
              </div>
              <div className="flex flex-col justify-between gap-5">
                <h1 className="text-2xl font-bold">Find Us</h1>
                <div className="socials flex gap-4">
                  <BsInstagram size={24} />
                  <BsTwitter size={24} />
                  <BsFacebook size={24} />
                  <BsTelegram size={24} />
                </div>
              </div>
            </div>
            <div className="flex w-[300px] justify-between">
              <div className="info flex flex-col gap-5">
                <h1 className="text-[25px]">Services</h1>
                <ul className="flex flex-col gap-3">
                  <li>Browse Jobs</li>
                  <li>Catagories</li>
                  <li>Dashboard</li>
                </ul>
              </div>
              <div className="info flex flex-col gap-5">
                <h1 className="text-[25px]">Company</h1>
                <ul className="flex flex-col gap-3">
                  <li>About Us</li>
                  <li>Contact</li>
                  <li>FAQs</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <img src={FooterImg} className="w-[400px]" alt="footer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
