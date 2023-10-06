import React from "react";
import Transition from "../../transition";

const RaiseARap = () => {
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
                Raise-A-Rap
              </h1>
              <p className="mt-6 text-white">RAPPING</p>
            </div>

            <div className="flex justify-center mt-10">
              <img
                className="object-cover w-full h-96 rounded-xl lg:w-4/5"
                src="https://images.unsplash.com/photo-1558258021-971dd2148be5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
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
                Class VI-XII{" "}
              </p>
            </div>

            <div className="group block sm:m-4 mt-4 sm:mt-0 max-w-sm p-6 border rounded-lg shadow  bg-[#ffffff] border-gray-700 w-96">
              <h5 className="akira mb-2 text-2xl font-bold text-center items-center tracking-tight text-gray-900 dark:text-white">
                Event-head
              </h5>
              <p className="  font-normal text-gray-700 dark:text-gray-400 text-center">
                Aishwarya Vats
                <br />
                Aadishree Gupta
              </p>
            </div>
            <div className="block sm:m-4 max-w-sm p-6 mt-4 sm:mt-0 border rounded-lg shadow  bg-[#ffffff] border-gray-700 hover:bg-gray-300 transition duration-500 w-96">
              <h5 className="akira group-hover:text-white transition duration-500 mb-2 text-2xl font-bold text-center items-center tracking-tight text-gray-900 dark:text-white">
                Theme
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                Any inspirational topic
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
                Round I- Qualifiers (online)
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[#007bc4] rounded-full mt-1.5 -left-1.5  "></div>
              <p className="text-base font-normal text-gray-300 ">
                Participants can perform either a self composed rap or edit any
                renowned rap songs and draw inspiration from classics.
              </p>
            </li>
            <li className="ml-4 mb-10">
              <div className="absolute w-3 h-3 bg-[#007bc4] rounded-full mt-1.5 -left-1.5  "></div>
              <p className="text-base font-normal text-gray-300 dark:text-gray-300">
                They are free to use any language for their lyrics but must
                maintain a respectful and appropriate tone, strictly avoiding
                offensive language or cuss words.
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[#007bc4] rounded-full mt-1.5 -left-1.5   "></div>
              <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-300">
                Participants need to submit their rap lyrics to
                wartexdata@gmail.com in PDF format with the necessary details
                such as name, event name, contact details and the name of their
                school.
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[#007bc4] rounded-full mt-1.5 -left-1.5  "></div>
              <p className="text-base font-normal text-gray-300 ">
                Once the event heads approve the song lyrics the participants
                will appear for Round th 2 in the school premises on 26 October,
                2023
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[#007bc4] rounded-full mt-1.5 -left-1.5   "></div>
              <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-300">
                The submission deadline is 23 October, 2023, and entries should
                be emailed to wartexdata@gmail.com
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[#007bc4] rounded-full mt-1.5 -left-1.5   "></div>
              <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-300">
                The names of qualified participants will be announced on Wartex
                WhatsApp community & Wartex Discord Server on 24th October.
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[#007bc4] rounded-full mt-1.5 -left-1.5   "></div>
              <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-300">
                Round 2- Live Performance (Offline)
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[#007bc4] rounded-full mt-1.5 -left-1.5   "></div>
              <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-300">
                Qualified participants are required to perform their rap live at
                the event. To do this, they should bring their rap music in a
                virus-free pen drive on the event day, ensuring smooth technical
                execution
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[#007bc4] rounded-full mt-1.5 -left-1.5   "></div>
              <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-300">
                Participants have creative freedom in how they accompany their
                rap. They can use copyrighted internet music, play instruments,
                or include a beatboxer. When using pre-recorded music, it's
                crucial to disclose the song's name.
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[#007bc4] rounded-full mt-1.5 -left-1.5   "></div>
              <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-300">
                The organizing team will provide essential equipment, such as
                microphones and speakers.
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[#007bc4] rounded-full mt-1.5 -left-1.5   "></div>
              <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-300">
              Participants should keep in mind the 5minute time limit for their performance.
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[#007bc4] rounded-full mt-1.5 -left-1.5  "></div>
              <p className="text-base font-normal text-gray-300 ">
                Judgment Criteria
                <br />
                <br />
                <ul className="text-justify">
                  <p className="ml-4 text-justify">
                    {" "}
                    Lyrics & Dictation :10 Marks
                  </p>
                  <p className="ml-4 text-justify">
                    Presentation & Delivery :10 Marks
                  </p>
                  <p className="ml-4 text-justify">
                    Music & Voice intonation: 5 Marks
                  </p>
                  <p className="ml-4 text-justify">
                    {" "}
                    Confidence & Showmanship : 5 Marks
                  </p>
                </ul>
              </p>
            </li>
          </ol>
        </div>
      </div>
    </Transition>
  );
};

export default RaiseARap;
