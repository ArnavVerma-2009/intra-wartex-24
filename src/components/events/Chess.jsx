import React from "react";
import Transition from "../../transition";

const Chess = () => {
  return (
    <Transition>
      <div className="p-4 sm:p-28 xl:p-42 bg-black">
        <section className="bg-black dark:bg-black">
          <div className="container px-6 py-16 mx-auto text-center">
            <div className="max-w-lg mx-auto">
              <h1
                className="text-[28px] font-semibold text-white lg:text-[43px] mt-12 sm:mt-0"
                style={{ fontFamily: "akira" }}
              >
                CHESS
              </h1>
              <p className="mt-6 text-white">CHESS GAME COMPETITION</p>
            </div>

            <div className="flex justify-center mt-10">
              <img
                className="object-cover w-full h-96 rounded-xl lg:w-4/5"
                src="https://images.unsplash.com/photo-1580541832626-2a7131ee809f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoZXNzfGVufDB8fDB8fHww"
              />
            </div>
          </div>
        </section>

        <div className="bg-black">
          <div className="flex sm:flex-row flex-col mb-20 ">
            <div className="group block sm:m-4 mt-4 sm:mt-0 max-w-sm p-6 border rounded-lg shadow  bg-[#ffffff] border-gray-700 w-96">
              <h5 className="akira mb-2 text-2xl font-bold text-center items-center tracking-tight text-gray-900 dark:text-white">
                Eligibility
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                VI-VIII (junior)
                <br />
                IX-XII (senior){" "}
              </p>
            </div>

            <div className="group block sm:m-4 mt-4 sm:mt-0 max-w-sm p-6 border rounded-lg shadow  bg-[#ffffff] border-gray-700 w-96">
              <h5 className="akira mb-2 text-2xl font-bold text-center items-center tracking-tight text-gray-900 dark:text-white">
                Event-head
              </h5>
              <p className="  font-normal text-gray-700 dark:text-gray-400 text-center">
                Kanishk Kandpal
                <br />
                Aditya Gupta
                <br />
                Gauransh Kaushik
              </p>
            </div>
            <div className="block sm:m-4 max-w-sm p-6 mt-4 sm:mt-0 border rounded-lg shadow  bg-[#ffffff] border-gray-700 hover:bg-gray-300 transition duration-500 w-96">
              <h5 className="akira group-hover:text-white transition duration-500 mb-2 text-2xl font-bold text-center items-center tracking-tight text-gray-900 dark:text-white">
                Team
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                1 Member
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
                {" "}
                It will be a one day online event.
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[var(--primary-color)] rounded-full mt-1.5 -left-1.5  "></div>
              <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-300">
                It will be conducted on Chess.com. Timings will be announced
              </p>
            </li>
            <li className="ml-4 mb-10">
              <div className="absolute w-3 h-3 bg-[var(--primary-color)] rounded-full mt-1.5 -left-1.5  "></div>
              <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-300">
                {" "}
                The tournament will be conducted as per FIDE Rules and FIDE
                Swiss System with 7 rounds (may differ with number of
                participants).
              </p>
            </li>
            <li className="ml-4 mb-10">
              <div className="absolute w-3 h-3 bg-[var(--primary-color)] rounded-full mt-1.5 -left-1.5  "></div>
              <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-300">
                Time control : 10 minutes with no increment
              </p>
            </li>
            <li className="ml-4 mb-10">
              <div className="absolute w-3 h-3 bg-[var(--primary-color)] rounded-full mt-1.5 -left-1.5  "></div>
              <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-300">
                For more details check out the brochure{" "}
              </p>
            </li>
          </ol>
        </div>
      </div>
    </Transition>
  );
};

export default Chess;
