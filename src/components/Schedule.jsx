import React from "react";
import AOS from "aos";
import { Link } from "react-router-dom";

AOS.init();

export default function Schedule() {
  return (
    <div className="relative pt-28 p-4 sm:p-28 xl:p-42 bg-black dark:bg-[#ebe2e2] sf flex flex-col justify-center items-center ">
      <h1
        data-aos="fade-up"
        data-aos-duration="750"
        className="text-center drop-shadow-[0_0px_35px_var(--primary-color)] text-[var(--primary-color)]  text-4xl mb-4 heading"
      >
        THE TIMELINE
      </h1>
      {/* <Link
        to="/Schedule"
        data-aos="fade-up"
        data-aos-duration="750"
        className="flex justify-center w-max transition duration-500 dark:text-black rounded-3xl mb-14 px-3 py-1 text-base font-semibold leading-7 text-white text-center uppercase border-[2px] hover:bg-gray-50 hover:text-black "
      >
        SEE THE FULL SCHEDULE
      </Link> */}
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 drop-shadow-[0_0px_20px_var(--primary-color)] bg-[var(--primary-color)] rounded-full mt-1.5 -left-1.5"></div>
          <h2
            data-aos="fade-up"
            data-aos-duration="750"
            className="text-lg font-semibold text-gray-100 dark:text-black"
          >
            OPENING CEREMONY
          </h2>
          <h3
            data-aos="fade-up"
            data-aos-duration="750"
            className="sf mb-1 text-sm font-normal leading-none text-gray-400  dark:text-black"
          >
            11 JULY
          </h3>
          <p
            data-aos="fade-up"
            data-aos-duration="750"
            className="sf mb-4 text-base font-normal text-gray-300  dark:text-black"
          >
          The opening ceremony will take place from 8:00AM.
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-[var(--primary-color)] drop-shadow-[0_0px_20px_var(--primary-color)] rounded-full mt-1.5 -left-1.5 border border-[var(--primary-color)]"></div>
          <h2
            data-aos="fade-up"
            data-aos-duration="750"
            className="text-lg font-semibold text-gray-300 dark:text-black"
          >
            THE COMPETITON IS ON
          </h2>
          <h3
            data-aos="fade-up"
            data-aos-duration="750"
            className="sf mb-1 text-sm font-normal leading-none text-gray-400  dark:text-black"
          >
            8:30AM to 1:30PM{" "}
          </h3>

          <p
            data-aos="fade-up"
            data-aos-duration="750"
            className="sf text-base font-normal text-gray-300  dark:text-black"
          >
            All the event heads will lead the participants to their respective
            events. All the events would come to an end by 1:30PM.
          </p>
        </li>
        <li className="ml-4">
          <div className="absolute w-3 h-3 bg-[var(--primary-color)] drop-shadow-[0_0px_20px_var(--primary-color)] rounded-full mt-1.5 -left-1.5 border border-[var(--primary-color)]"></div>
          <h2
            data-aos="fade-up"
            data-aos-duration="750"
            className="text-lg font-semibold text-gray-300 dark:text-black"
          >
          THE CHAMPIONS ARE ANNOUNCED
          </h2>
          <h3
            data-aos="fade-up"
            data-aos-duration="750"
            className="sf mb-1 text-sm font-normal leading-none text-gray-400  dark:text-black"
          >
            
          </h3>

          <p
            data-aos="fade-up"
            data-aos-duration="750"
            className="sf text-base font-normal text-gray-300  dark:text-black"
          >
            The valedictory ceremony will take place on a later day after the results are compiled and medals and certificates will be awarded to the champions
          </p>
        </li>
      </ol>
    </div>
  );
}
