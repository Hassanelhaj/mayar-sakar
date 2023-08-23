"use client";

import React, { useState } from "react";
import{HiHome, HiPhone} from 'react-icons/hi'
import {  FiMenu } from "react-icons/fi";
import {  BsPersonCircle } from "react-icons/bs";
import logo from '../../public/imgs/mayarLogo.png'


import { BsInfoCircleFill} from "react-icons/bs";
import Link from "next/link";

import { FaUserFriends } from "react-icons/fa";

import Image from "next/image";

const NavBar = () => {


  let [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <main className="px-6 text-purple-800 bg-white">
      <nav className="  max-w-screen-xl ">
        {/* mobile nav */}
        <div className="container mx-auto  lg:hidden flex justify-between items-center flex-wrap px-2 pl-3 py-4">
          <Link
            href="/"
            className=" flex justify-center items-center gap-2 cursor-pointer"
          >
            <span>
              {/* <HiCode className="text-3xl" /> */}
              <Image src={logo} className="w-8 h-8" />


            </span>
            <span className="text-2xl -mt-1 font-bold uppercase">mayar</span>
          </Link>
          <span onClick={handleToggle}>{<FiMenu className="text-3xl" />}</span>

          {toggle && (
            <div className="w-screen text-center mt-8 ">
              <ul className="flex flex-col items-center gap-2">
              <Link
              href="/"
              className=" flex justify-center items-center gap-1 hover:opacity-70"
            >
              <span>
                <HiHome className="text-2xl " />
              </span>
              <span>Home </span>
            </Link>
                <a
                  href="#clients"
                  className=" flex justify-center items-center gap-1 a"
                >
                  <span>
                    <FaUserFriends className="text-xl" />
                  </span>
                  <span>clients</span>
                </a>
                <a
                  href="#about"
                  className=" flex justify-center items-center gap-1 a"
                >
                  <span>
                    <BsPersonCircle className=" text-xl" />
                  </span>
                  <span>About US</span>
                </a>
                {/*  */}
                <a
                  href="#contact"
                  className=" flex justify-center items-center gap-1
           a"
                >
                  <span>
                    <HiPhone className="text-xl" />
                  </span>
                  <span>Contact Us</span>
                </a>
              
              
              </ul>
            </div>
          )}
        </div>

        {/* desktop nav */}

        <div
          className=" hidden lg:flex 
     flex-row  py-4 justify-start items-center  lg:gap-40 xl:gap-80"
        >
          <Link
            href="/"
            className=" flex justify-center items-center gap-2 cursor-pointer text-purple-800"
          >
            <span>
              <Image src={logo} className="w-8 h-8" />
              {/* <HiCode className="text-3xl text-purple-800  "  /> */}
            </span>
            <span className="text-2xl -mt-1 font-bold uppercase ">mayar</span>
          </Link>
          <ul className="flex justify-center items-center  lg:gap-3 xl:gap-6 lg:ml-6 xl:ml-10">
          <Link
              href="/"
              className=" flex justify-center items-center gap-1 hover:opacity-70"
            >
              <span>
                <HiHome className="text-2xl " />
              </span>
              <span>Home </span>
            </Link>
            <a
              href="#clients"
              className=" flex justify-center items-center gap-1 hover:opacity-70"
            >
              <span>
                <FaUserFriends className="text-xl" />
              </span>
              <span>clients</span>
            </a>
            {/*  */}
          
            <a
              href="#about"
              className=" flex justify-center items-center gap-1 hover:opacity-70"
            >
              <span>
                <BsInfoCircleFill className="text-xl" />
              </span>
              <span>About US </span>
            </a>
            <a
              href="#contact"
              className=" flex justify-center items-center gap-1 hover:opacity-70 text-purple-800"
            >
              <span>
                <HiPhone className="text-xl  " />
              </span>
              <span>Contact us</span>
            </a>
           
           
          </ul>
        </div>
      </nav>
    </main>
  );
};
// IoRestaurantSharp

export default NavBar;
