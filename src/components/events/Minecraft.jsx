import React from "react";
import { Link } from "react-router-dom";
import Transition from "../../transition";

const Minecraft = () => {
  return (
    <Transition>
      <div className="p-4 sm:p-28 xl:p-42 bg-black">
        <section className="bg-black dark:bg-black">
          <div className="container px-6 py-16 mx-auto text-center">
            <div className="max-w-lg mx-auto">
              <h1
                className="text-3xl font-semibold text-white lg:text-5xl mt-12 sm:mt-0"
                style={{ fontFamily: "akira" }}
              >
                minecraft
              </h1>
              <p className="mt-6 text-white">EXCITEMENT FILLED CHALLENGES</p>
            </div>

            <div className="flex justify-center mt-10">
              <img
                className="object-cover w-full h-96 rounded-xl lg:w-4/5"
                src="https://media.wired.com/photos/62e0301fb014c7f5985e3405/master/w_1920,c_limit/Minecraft-NFTs-Games.jpg"
              />
            </div>
          </div>
        </section>

        <div className="bg-black">
          <div className="flex sm:flex-row justify-center items-center flex-col mb-20 ">
            <div className="group block sm:m-4 mt-4 sm:mt-0 max-w-sm p-6 border rounded-lg shadow  bg-[#ffffff] border-gray-700 w-96">
              <h5 className="akira mb-2 text-2xl font-bold text-center items-center tracking-tight text-gray-900 dark:text-white">
                Eligibility
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                Class: IX-XII{" "}
              </p>
            </div>

            <div className="group block sm:m-4 mt-4 sm:mt-0 max-w-sm p-6 border rounded-lg shadow  bg-[#ffffff] border-gray-700 w-96">
              <h5 className="akira mb-2 text-2xl font-bold text-center items-center tracking-tight text-gray-900 dark:text-white">
                Event-head
              </h5>
              <p className="  font-normal text-gray-700 dark:text-gray-400 text-center">
                Diya Aggarwal
                <br />
                Ragahav Gaur
                <br />
                Akshit Parag
              </p>
            </div>
            <div className="block sm:m-4 max-w-sm p-6 mt-4 sm:mt-0 border rounded-lg shadow  bg-[#ffffff] border-gray-700 hover:bg-gray-300 transition duration-500 w-96">
              <h5 className="akira group-hover:text-white transition duration-500 mb-2 text-2xl font-bold text-center items-center tracking-tight text-gray-900 dark:text-white">
                theme
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                Survival Games
              </p>
            </div>
          </div>

          <h1 className="text-center text-[var(--primary-color)] mb-14 text-4xl heading">
            RULES
          </h1>
          <ol className="relative">
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[var(--primary-color)] rounded-full mt-1.5 -left-1.5   "></div>
              <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-300">
                It will be a multiple-round event , Detailed instructions about the event are given in the brochure.
              </p>
            </li>
      
          </ol>
        </div>
      </div>
    </Transition>
  );
};

export default Minecraft;
