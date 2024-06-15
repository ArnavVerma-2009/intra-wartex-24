import React, { useEffect } from "react";
import AOS from "aos";
import YashMehra from "./../assets/TeamMembers/YashMehra.webp";
import RiddhiGoel from "./../assets/TeamMembers/RiddhiGoel.webp";
import OjasAggarwal from "./../assets/TeamMembers/OjasAggarwal.webp";
import GauravKumar from "./../assets/TeamMembers/GauravKumar.webp";
import NipunSinghal from "./../assets/TeamMembers/NipunSinghal.webp";
import RishimaJhamb from "./../assets/TeamMembers/RishimaJhamb.webp";
import ArnavVerma from "./../assets/TeamMembers/ArnavVerma.webp";
import AdvikAggarwal from "./../assets/TeamMembers/AdvikAggarwal.webp";
import JhanviSingh from "./../assets/TeamMembers/JhanviSingh.webp";
import JaishreeSharma from "./../assets/TeamMembers/JaishreeSharma.webp";
import SwastikVerma from "./../assets/TeamMembers/SwastikVerma.webp";
import SiddhiMalhotra from "./../assets/TeamMembers/SiddhiMalhotra.webp";
import Placeholder from './../assets/TeamMembers/placeholder.avif'
AOS.init();

const TeamMetaData = [
  {
    id: 1,
    Name: "Swastik Vermma",
    Image: `${SwastikVerma}`,
    Designation: "President",
    InstaLink: "https://www.instagram.com/thedelhibro",
    delay: 2000,
  },
  {
    id: 2,
    Name: "Gaurav Kumar",
    Image: `${GauravKumar}`,
    Designation: "Vice President",
    InstaLink: "https://www.instagram.com/thedelhibro",
    delay: 2400,
  },

  {
    id: 3,
    Name: "Jai Vikramaditya",
    Image: `${Placeholder}`,
    Designation: "Executive",
    InstaLink: "",
    delay: 2800,
  },
  {
    id: 4,
    Name: "Arnav verma",
    Image: `${ArnavVerma}`,
    Designation: "Event Director",
    InstaLink: "",
    delay: 2800,
  },
  {
    id: 5,
    Name: "Mayank satija",
    Image: `${Placeholder}`,
    Designation: "Event Director",
    InstaLink: "",
    delay: 2400,
  },
  {
    id: 6,
    Name: "Advik Aggarwal",
    Image: `${AdvikAggarwal}`,
    Designation: "Operation Managaer",
    InstaLink: "",
    delay: 2000,
  },
  {
    id: 7,
    Name: "Shreya Saxena",
    Image: `${Placeholder}`,
    Designation: "Operation Manager",
    InstaLink: "",
    delay: 2000,
  },

  {
    id: 10,
    Name: "Abhinav Mishra",
    Image: `${Placeholder}`,
    Designation: "GFX head & Organising head",
    InstaLink: "",
    delay: 2800,
  },

  {
    id: 11,
    Name: "Siddhi Malhotra",
    Image: `${SiddhiMalhotra}`,
    Designation: "Photography head",
    InstaLink: "",
    delay: 2400,
  },
  {
    id: 12,
    Name: "Mahi Arya",
    Image: `${Placeholder}`,
    Designation: "Literary Team",
    InstaLink: "",
    delay: 2000,
  },
  {
    id: 8,
    Name: "Purtika Tuteja",
    Image: `${Placeholder}`,
    Designation: "Literary Team",
    InstaLink: "",
    delay: 2400,
  },

  {
    id: 9,
    Name: "Khyati Aggarwal",
    Image: `${Placeholder}`,
    Designation: "Literary Team",
    InstaLink: "",
    delay: 2800,
  },
];

export const ApexTeam = () => {
  return (
    <>
      <div className="p-4 sm:p-28 xl:p-42 bg-black dark:bg-[#ebe2e2]">
        <section className="bg-black dark:bg-[#ebe2e2]">
          <div className="h-[32rem] bg-black dark:bg-[#ebe2e2]">
            <div className="container px-6 py-10 mx-auto">
              <h1
                className="mb-2 text-4xl text-[var(--primary-color)] drop-shadow-[0_0px_35px_var(--primary-color)]  text-center font-semibold uppercase tracking-px heading"
                data-aos="fade-up"
              >
                THE REAL ONES
              </h1>

              <p
                className="mb-14 text-sm text-white dark:text-black text-center font-semibold uppercase tracking-px"
                data-aos="fade-up"
              >
                THE TEAM MEMBERS
              </p>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <div className="container relative px-6 py-10 mx-auto -mt-72 sm:-mt-80 md:-mt-96">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 xl:mt-16 md:grid-cols-3 xl:grid-cols-3">
                {TeamMetaData.map((data) => (
                  <div key={data.id}>
                    <div
                      data-aos="fade-up"
                      data-aos-duration={data.delay}
                      className=" group relative block bg-black overflow-hidden drop-shadow-[0_0px_0px_var(--primary-color)]   my-8 sm:my-0 aspect-[8/10] rounded-xl justify-center   border-[4px] border-[var(--primary-color)] "
                    >
                      <img
                        style={{
                          backgroundSize: "cover",
                          aspectRatio: "8/10",
                        }}
                        alt={data.Name}
                        src={data.Image}
                        loading="lazy"
                        fill="true"
                        sizes="(max-width : 768px) 100vw, 700px"
                        className="hover:brightness-[40%] absolute inset-0 h-full w-auto object-cover opacity-75 transition duration-2000"
                      />

                      <div className="relative flex flex-col items-start justify-end h-full  p-4 sm:p-5 lg:p-7 ">
                        <p className="sf relative text-xl font-bold text-white md:text-2xl sm:text-[13px]">
                          {data.Name}
                        </p>
                        <p className="sf relative text-sm sm:text-[9px] md:text-[15px] uppercase tracking-widest text-white font-bold">
                          {data.Designation}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
