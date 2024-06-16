import React from "react";
import Transition from "../../transition";

const Upvento = () => {
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
                UPVENTO
              </h1>
              <p className="mt-6 text-white">
                SOLVING REAL LIFE PROBLEMS BY SMALL INNOVATIONS
              </p>
            </div>

            <div className="flex justify-center mt-10">
              <img
                className="object-cover w-full h-96 rounded-xl lg:w-4/5"
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
              />
            </div>
          </div>
        </section>

        <div className="bg-black">
          <div className="flex sm:flex-row flex-col justify-center mb-20 ">
            <div className="group block sm:m-4 mt-4 sm:mt-0 max-w-sm p-6 border rounded-lg shadow  bg-[#ffffff] border-gray-700 w-96">
              <h5 className="akira mb-2 text-2xl font-bold text-center items-center tracking-tight text-gray-900 dark:text-white">
                Eligibility
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                Class VII-XII{" "}
              </p>
            </div>

            <div className="group block sm:m-4 mt-4 sm:mt-0 max-w-sm p-6 border rounded-lg shadow  bg-[#ffffff] border-gray-700 w-96">
              <h5 className="akira mb-2 text-2xl font-bold text-center items-center tracking-tight text-gray-900 dark:text-white">
                Event-head
              </h5>
              <p className="  font-normal text-gray-700 dark:text-gray-400 text-center">
                Nandini Prasher
                <br />
                Mayank Satija
                <br />
                Anmol Narayan
              </p>
            </div>
            <div className="block sm:m-4 max-w-sm p-6 mt-4 sm:mt-0 border rounded-lg shadow  bg-[#ffffff] border-gray-700 hover:bg-gray-300 transition duration-500 w-96">
              <h5 className="akira group-hover:text-white transition duration-500 mb-2 text-2xl font-bold text-center items-center tracking-tight text-gray-900 dark:text-white">
                Team
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                2-4 members
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
                Participants are required to develop a working project
                /product/service that offers a practical solution to an existing
                issue.
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[var(--primary-color)] rounded-full mt-1.5 -left-1.5  "></div>
              <p className="text-base font-normal text-gray-300 ">
                This solution will be marked by its creativity, innovation,
                and originality.
              </p>
            </li>
            <li className="ml-4 mb-10">
              <div className="absolute w-3 h-3 bg-[var(--primary-color)] rounded-full mt-1.5 -left-1.5  "></div>
              <p className="text-base font-normal text-gray-300 dark:text-gray-300">
                Any form of plagiarism will result in disqualification{" "}
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[var(--primary-color)] rounded-full mt-1.5 -left-1.5   "></div>
              <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-300">
                The participants will be required to pitch their project in the
                form of a power point presentation sent to the event heads via
                mail at wartexdata@gmail.com that outlines project's key
                details.
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[var(--primary-color)] rounded-full mt-1.5 -left-1.5   "></div>
              <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-300">
                The participants will be required to bring & pitch their project
                in the form of a power point presentation that out lines
                project's key details. The presentation should be of 3-5 mins.{" "}
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[var(--primary-color)] rounded-full mt-1.5 -left-1.5   "></div>
              <p className="mb-4 text-base font-normal text-gray-300 dark:text-gray-300">
                The key details should include information on the problem your
                model or service addresses, its objectives, advantages,
                drawbacks, structure, operation, required funding for the
                initial version, a SWOT analysis, and a labeled sketch or 3-D
                design for models, or a layout and component overview for
                websites in the case of a service.{" "}
              </p>
            </li>

            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-[var(--primary-color)] rounded-full mt-1.5 -left-1.5  "></div>
              <p className="text-base font-normal text-gray-300 ">
                Judgment Criteria
                <br />
                <br />
                <ul className="text-justify">
                  <p className="ml-4 text-justify"> Creativity : 10 Marks</p>
                  <p className="ml-4 text-justify">Originality : 10 Marks</p>
                  <p className="ml-4 text-justify">Presentation : 10 Marks</p>
                  <p className="ml-4 text-justify">Market Potential : 10 Marks</p>
                </ul>
              </p>
            </li>
          </ol>
        </div>
      </div>
    </Transition>
  );
};

export default Upvento;
