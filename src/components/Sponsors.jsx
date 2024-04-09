import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import upskill from "./../assets/images/upskill.svg";
import adobe from "./../assets/images/adobe.svg";
import { Link } from "react-router-dom";
import Aakash from "./../assets/images/aakash.svg";
AOS.init();

export default function Sponsors() {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div>
      <section className="relative pt-28   bg-blueGray-100 overflow-hidden bg-black dark:bg-[#ebe2e2]">
        <div className="relative z-10 container px-4 mx-auto">
          <h1
            className="mb-2 text-4xl drop-shadow-[0_0px_35px_var(--primary-color)] text-[var(--primary-color)] text-center font-semibold uppercase tracking-px heading"
            data-aos="fade-up"
          >
            THE SUPPORTERS
          </h1>

          <p
            className="mb-14 text-sm text-white text-center font-semibold uppercase tracking-px dark:text-black"
            data-aos="fade-up"
          >
            THE OFFICAL SPONSORS
          </p>
          <div className="flex flex-wrap max-w-5xl mx-auto my-auto -m-3 justify-center">
            <div className="w-full md:w-1/2 lg:w-1/4 p-3">
              {" "}
              <Link to="https://www.adobe.com" target="_blank">
                <div
                  className="flex items-center justify-center py-8 px-9 h-full bg-[#ffffff] dark:bg-white rounded-3xl"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img src={adobe} alt="" />
                </div>{" "}
              </Link>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-3">
              {" "}
              <Link to="https://anthe.aakash.ac.in/" target="_blank">
                <div
                  className="flex items-center justify-center py-8 px-9 h-full dark:bg-white bg-[#ffffff] rounded-3xl"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img src={Aakash} alt="" />
                </div>{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="relative pt-4  bg-blueGray-100 overflow-hidden bg-transparent"></section>
    </div>
  );
}
