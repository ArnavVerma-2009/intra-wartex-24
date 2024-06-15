import React from "react";
import Transition from "../../transition";

const AsimovWars = () => {
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
                ASIMOV WARS
              </h1>
              <p className="mt-6 text-white">ROBO WARS</p>
            </div>

            <div className="flex justify-center mt-10">
              <img
                className="object-cover w-full h-96 rounded-xl lg:w-4/5"
                src="https://i.ytimg.com/vi/T5WAAczLhmQ/maxresdefault.jpg"
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
                Class VIII-XII{" "}
              </p>
            </div>

            <div className=" group block sm:m-4 mt-4 sm:mt-0 max-w-sm p-6 border rounded-lg shadow  bg-[#ffffff] border-gray-700 w-96">
              <h5 className="akira mb-2 text-2xl font-bold text-center items-center tracking-tight text-gray-900 dark:text-white">
                Event-head
              </h5>
              <p className="  font-normal text-gray-700 dark:text-gray-400 text-center">
                Yash Mehra
                <br />
                Swastik Verma
              </p>
            </div>
            <div className="block sm:m-4 max-w-sm p-6 mt-4 sm:mt-0 border rounded-lg shadow  bg-[#ffffff] border-gray-700 hover:bg-gray-300 transition duration-500 w-96">
              <h5 className="akira group-hover:text-white transition duration-500 mb-2 text-2xl font-bold text-center items-center tracking-tight text-gray-900 dark:text-white">
                Team member
              </h5>
              <p className="font-normal text-lg text-gray-700 dark:text-gray-400 text-center">
                2 - 5
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
                The event will follow a bracket-style tournament format, similar
                to the one seen in the TV show "BattleBots”. This means that
                participants will compete in one-on-one battles, with winners
                advancing to the next round until a champion is determined.
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[var(--primary-color)] rounded-full mt-1.5 -left-1.5  "></div>
              <p className="text-base font-normal text-gray-300 ">
                Students are given creative freedom to design and build their
                fighting robots using any materials and machinery of their
                choice.
              </p>
            </li>
            <li className="ml-4 mb-10">
              <div className="absolute w-3 h-3 bg-[var(--primary-color)] rounded-full mt-1.5 -left-1.5  "></div>
              <p className="text-base font-normal text-gray-300 dark:text-gray-300">
                The robot should not exceed 16 X 16 inches dimensions. Any robot
                exceeding the given dimensions will be disqualified.
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[var(--primary-color)] rounded-full mt-1.5 -left-1.5   "></div>
              <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-300">
                Participants are required to bring all the necessary equipment
                and tools for their bot to fight. Electrical extension cords
                will be provided on-site if needed, but participants should
                ensure they have everything else required for their robot's
                operation.
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[var(--primary-color)] rounded-full mt-1.5 -left-1.5  "></div>
              <p className="text-base font-normal text-gray-300 ">
                While there are no specific restrictions on the tools and
                weaponry, participants are advised to develop their robots with
                features that will give them an edge over their competitors.
                Judgement Criteria will be revealed on the spot.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </Transition>
  );
};

export default AsimovWars;
