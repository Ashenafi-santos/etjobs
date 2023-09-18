import React from "react";
import { Logo } from "../assets/images";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="h-[300px] p-5 bg-[#F8F9FA] flex justify-center items-center">
            <div className="footer-content flex flex-col gap-16">
                <div className="flex gap-24">
                    <div className="logo w-[400px]">
                        <img
                            src={Logo}
                            className="w-[150px] h-auto"
                            alt="logo"
                        />
                    </div>
                    <div className="footer-info flex gap-20">
                        <div className="info flex flex-col gap-10">
                            <h1 className="text-[25px]">Services</h1>
                            <ul className="flex flex-col gap-3">
                                <li>Browse Jobs</li>
                                <li>Catagories</li>
                                <li>Dashboard</li>
                            </ul>
                        </div>
                        <div className="info flex flex-col gap-10">
                            <h1 className="text-[25px]">Company</h1>
                            <ul className="flex flex-col gap-3">
                                <li>About Us</li>
                                <li>Contact</li>
                                <li>FAQs</li>
                            </ul>
                        </div>
                        <div className="info flex flex-col gap-10">
                            <h1 className="text-[25px]">Support</h1>
                            <ul className="flex flex-col gap-3">
                                <li>Terms and Conditions</li>
                                <li>Terms of Use</li>
                                <li>Privacy</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <p>Copyright &copy; 2023 ETJOBS</p>
                    <div className="socials flex gap-4">
                        <BsInstagram size={24} />
                        <BsTwitter size={24} />
                        <BsFacebook size={24} />
                        <BsTelegram size={24} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
