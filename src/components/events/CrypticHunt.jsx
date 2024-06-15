import React from "react";
import Transition from "../../transition";
import { scrollToTop } from "../../App";

const CrypticHunt  = () => {
  scrollToTop()
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
                Cryptic Hunt
              </h1>
              <p className="mt-6 text-white">Treasure Hunt</p>
            </div>

            <div className="flex justify-center mt-10">
              <img
                className="object-cover w-full h-96 rounded-xl lg:w-4/5"
                src="https://thescienceofdeduction.co.uk/wp-content/uploads/2022/01/holmes-1.jpg"
              />
            </div>
          </div>
        </section>

        <div className="bg-black">
          cd
          <div className="flex sm:flex-row justify-center items-center flex-col mb-20 ">
            <div className=" group block sm:m-4 mt-4 sm:mt-0 max-w-sm p-6 border rounded-lg shadow  bg-[#ffffff] border-gray-700 w-96">
              <h5 className="mb-2 akira text-2xl font-bold text-center items-center tracking-tight text-gray-900 dark:text-white">
                Eligibility
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                Class VI-XII{" "}
              </p>
            </div>

            <div className=" group block sm:m-4 mt-4 sm:mt-0 max-w-sm p-6 border rounded-lg shadow  bg-[#ffffff] border-gray-700 w-96">
              <h5 className="akira mb-2 text-2xl font-bold text-center items-center tracking-tight text-gray-900 dark:text-white">
                Event-head
              </h5>
              <p className="  font-normal text-gray-700 dark:text-gray-400 text-center">
                Arnav Verma
                <br />
                Advik Aggarwal
              </p>
            </div>
            <div className="block sm:m-4 max-w-sm p-6 mt-4 sm:mt-0 border rounded-lg shadow  bg-[#ffffff] border-gray-700 hover:bg-gray-300 transition duration-500 w-96">
              <h5 className="akira group-hover:text-white transition duration-500 mb-2 text-2xl font-bold text-center items-center tracking-tight text-gray-900 dark:text-white">
                Team member
              </h5>
              <p className="font-normal text-lg text-gray-700 dark:text-gray-400 text-center">
                1
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
                The game has 10 levels, each consisting of 1 question. Answer
                the question correctly to move on to the next level.
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[var(--primary-color)] rounded-full mt-1.5 -left-1.5  "></div>
              <p className="text-base font-normal text-gray-300 ">
                The first one to complete all the levels will be declared as the
                Champion.
              </p>
            </li>
            <li className="ml-4 mb-10">
              <div className="absolute w-3 h-3 bg-[var(--primary-color)] rounded-full mt-1.5 -left-1.5  "></div>
              <p className="text-base font-normal text-gray-300 dark:text-gray-300">
                Questions will be from anything & anywhere. This is like any
                other Cryptic Hunt.
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[var(--primary-color)] rounded-full mt-1.5 -left-1.5   "></div>
              <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-300">
                Website for The Cryptic Hunt will be revealed on the day of the
                event.
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[var(--primary-color)] rounded-full mt-1.5 -left-1.5  "></div>
              <p className="text-base font-normal text-gray-300 ">
                The Hunt will be live for 24 hours. It will begin on 6th July
                midnight and will end on 7th July midnight.
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[var(--primary-color)] rounded-full mt-1.5 -left-1.5  "></div>
              <p className="text-base font-normal text-gray-300 ">
                The player must have access to a computer/ laptop at all times. We
                do not recommend playing the hunt on a mobile device.{" "}
              </p>
            </li>
          </ol>
        </div>
      </div>
    </Transition>
  );
};

export default CrypticHunt;
