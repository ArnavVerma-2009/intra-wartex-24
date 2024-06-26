import React from "react";
import AOS from "aos";

AOS.init();

export default function Guidelines() {
  return (
    <div className="p-4 sm:p-28 xl:p-42 bg-black dark:bg-[#ebe2e2] Sfsf ">
      <h1
        data-aos="fade-up"
        data-aos-duration="750"
        className="drop-shadow-[0_0px_35px_var(--primary-color)] text-center text-[var(--primary-color)] mb-14 text-4xl heading"
      >
        THE GUIDELINES
      </h1>
      <ol className="relative">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 drop-shadow-[0_0px_20px_var(--primary-color)] bg-[var(--primary-color)] rounded-full mt-1.5 -left-1.5   "></div>
          <p
            data-aos="fade-up"
            data-aos-duration="750"
            className="sf mb-4 text-base font-normal text-gray-300 dark:text-black"
          >
            One student is permitted to participate in one offline along with any one online event. 
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 drop-shadow-[0_0px_20px_var(--primary-color)] bg-[var(--primary-color)] rounded-full mt-1.5 -left-1.5  "></div>
          <p
            data-aos="fade-up"
            data-aos-duration="750"
            className="sf text-base font-normal text-gray-300 dark:text-black"
          >
            Participants need to register at: wartex.co.in
          </p>
        </li>
    
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 drop-shadow-[0_0px_20px_var(--primary-color)] bg-[var(--primary-color)] rounded-full mt-1.5 -left-1.5  "></div>
          <p
            data-aos="fade-up"
            data-aos-duration="750"
            className="sf text-base font-normal text-gray-300 dark:text-black"
          >
            Date of prelims for every hybrid event is mentioned along with the
            rules of that event.
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 drop-shadow-[0_0px_20px_var(--primary-color)] bg-[var(--primary-color)] rounded-full mt-1.5 -left-1.5   "></div>
          <p
            data-aos="fade-up"
            data-aos-duration="750"
            className="sf mb-4 text-base font-normal text-gray-300 dark:text-black"
          >
            All offline events will be conducted in the SRDAV Public School
            premises on 11 JULY, 2024.
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 drop-shadow-[0_0px_20px_var(--primary-color)] bg-[var(--primary-color)] rounded-full mt-1.5 -left-1.5  "></div>
          <p
            data-aos="fade-up"
            data-aos-duration="750"
            className="sf text-base font-normal text-gray-300 dark:text-black"
          >
            Participants who are found to have used any sort of unfair means
            will be disqualified from participating.
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 drop-shadow-[0_0px_20px_var(--primary-color)] bg-[var(--primary-color)] rounded-full mt-1.5 -left-1.5   "></div>
          <p
            data-aos="fade-up"
            data-aos-duration="750"
            className="sf mb-4 text-base font-normal text-gray-300 dark:text-black"
          >
            For all the information, announcements and updates, follow our
            Instagram page , join our Discord Server and WhatsApp community
            group.
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 drop-shadow-[0_0px_20px_var(--primary-color)] bg-[var(--primary-color)] rounded-full mt-1.5 -left-1.5  "></div>
          <p
            data-aos="fade-up"
            data-aos-duration="750"
            className="sf text-base font-normal text-gray-300 dark:text-black"
          >
            Late comers will not be entertained.
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 drop-shadow-[0_0px_20px_var(--primary-color)] bg-[var(--primary-color)] rounded-full mt-1.5 -left-1.5   "></div>
          <p
            data-aos="fade-up"
            data-aos-duration="750"
            className="sf mb-4 text-base font-normal text-gray-300 dark:text-black"
          >
            Opening ceremony will take place on the school stage from 8:00 AM to
            8:30 AM, the events will commence from 8:30 AM.
          </p>
        </li>
      </ol>
    </div>
  );
}
