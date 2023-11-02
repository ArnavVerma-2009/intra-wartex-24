import React from "react";
import Transition from "../../transition";

const TypingMonkey = () => {
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
                TYPESTRY
              </h1>
              <p className="mt-6 text-white">TYPING SPEED COMPETITION</p>
            </div>

            <div className="flex justify-center mt-10">
              <img
                className="object-cover w-full h-96 rounded-xl lg:w-4/5"
                src="https://images.unsplash.com/photo-1574012716378-0ca6f4c18c08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2017&q=80"
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
                Class VIII-XII{" "}
              </p>
            </div>

            <div className="group block sm:m-4 mt-4 sm:mt-0 max-w-sm p-6 border rounded-lg shadow  bg-[#ffffff] border-gray-700 w-96">
              <h5 className="akira mb-2 text-2xl font-bold text-center items-center tracking-tight text-gray-900 dark:text-white">
                Event-head
              </h5>
              <p className="  font-normal text-gray-700 dark:text-gray-400 text-center">
                Jaishree Sharma

                <br />

                Ojas Sahni
              </p>
            </div>
            <div className="block sm:m-4 max-w-sm p-6 mt-4 sm:mt-0 border rounded-lg shadow  bg-[#ffffff] border-gray-700 hover:bg-gray-300 transition duration-500 w-96">
              <h5 className="akira group-hover:text-white transition duration-500 mb-2 text-2xl font-bold text-center items-center tracking-tight text-gray-900 dark:text-white">
                Team
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                3 Members
              </p>
            </div>
          </div>

          <h1 className="text-center text-[#007bc4] mb-14 text-4xl heading">
            RULES
          </h1>
          <ol className="relative">
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[#007bc4] rounded-full mt-1.5 -left-1.5   "></div>
              <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-300">
                {" "}
                Round 1 : The Relay Dash
                <ul className="list-disc">
                  {" "}
                  <li>
                    Teamwork and efficiency are necessary for first round.{" "}
                  </li>
                  <li>
                    {" "}
                    Each team member will demonstrate their typing prowess in a
                    relay format with a buzzer sounding every 2 minutes, teams
                    must switch between members swiftly and seamlessly.{" "}
                  </li>
                  <li>This round will last for 6 minutes for each team.</li>
                </ul>
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[#007bc4] rounded-full mt-1.5 -left-1.5  "></div>
              <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-300">
                {" "}
                Round 2 : The Indivisual typing showdown
                <ul className="list-disc">
                  {" "}
                  <li>
                    Each participant will face the same text however with
                    scrambled words this time.
                  </li>
                  <li>
                    {" "}
                    A maximum of 2 minutes will be allowed for each team mate,
                    and 5 seconds will be deducted for every typing error.
                  </li>
                  <li>
                    The individual times of all three team members will be
                    meticulously recorded, and the teams with the most combined
                    time will advance to the next round.
                  </li>
                </ul>
              </p>
            </li>
            <li className="ml-4 mb-10">
              <div className="absolute w-3 h-3 bg-[#007bc4] rounded-full mt-1.5 -left-1.5  "></div>
              <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-300">
                {" "}
                Round 3 : The Blindfold Challenge
                <ul className="list-disc">
                  {" "}
                  <li>
                    Team must pick a team leader amongst them for this round.
                  </li>
                  <li>
                    {" "}
                    Team leaders will be blindfolded and an audio passage will
                    be played, and team’s leader must efficiently transcribe it.
                  </li>
                  <li>
                    The individual times of all three team members will be
                    meticulously recorded, and the teams with the most combined
                    time will advance to the next round.
                  </li>
                  <li>
                    {" "}
                    The audio will last for precisely minutes and 30 seconds.
                  </li>
                  <li>
                    It's a test of concentration and adaptability as teams
                    navigate the audio challenge in the absence of sight.
                  </li>
                  <li>
                  The teams with the highest accuracy will 
be rewarded.
                  </li>
                </ul>
              </p>
            </li>
          </ol>
        </div>
      </div>
    </Transition>
  );
};

export default TypingMonkey;
