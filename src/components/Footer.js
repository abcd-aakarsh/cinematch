import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaHome,
  FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaPerson, FaPersonBiking, FaPersonCane } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link to="/">
            <img src={logo} alt="CineMatch Logo" className="w-36" />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Link
            to="/"
            className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
          >
            <FaHome className="inline-block mr-1" /> Home
          </Link>
          <Link
            to="/"
            className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
          >
            <FaSearch className="inline-block mr-1" /> Search
          </Link>
          <Link
            to="https://github.com/abcd-aakarsh"
            target="_blank"
            className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
          >
            <FaPersonCane className="inline-block mr-1" /> About Us
          </Link>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="https://x.com/AakarshVer83770"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-gray-300 hover:text-white" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-gray-300 hover:text-white" />
          </a>
          <a
            href="https://github.com/abcd-aakarsh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-gray-300 hover:text-white" />
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} CineMatch. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
