import React, { useState } from "react";
import bgImage from "./../assets/images/bg-about.webp";
import { ScrollParallax } from "react-just-parallax";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import MadhavImage from "./../assets/TeamMembers/madhav.webp";
import Transition from "../transition";

const About = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      <Transition>
        <div className="h-[auto] text-white  ">
          <section className=" sm:mt-0 mt-20 AboutDiv p-12 ">
            <div className="AboutContainer">
              <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2  lg:py-16 lg:px-6">
                <div className="font-light text-white sm:text-lg ">
                  <h2 className="mb-12 sm:text-4xl text-3xl tracking-tight font-extrabold  z-[1000]  text-white">
                    ONE OF THE MOST HIGHLY ANTICIPATED SCHOOL TECH EVENT IN
                    DELHI.
                  </h2>
                  <p className="mb-4 text-justify">
                    The IT Club of SRDAV Public School, Dayanand Vihar is
                    organising its annual tech-based event - WARTEX.
                    <br/>
                    <br/>
                    It is a technology-based event held on the school premises
                    for students of classes 6-12 that brings together technology
                    enthusiasts and professionals to showcase the latest
                    advancements in various fields such as AI, robotics,
                    cybersecurity, and more to showcase their innovation and
                    problem-solving skills through various tech-related tasks.
                    The event comprises various competitions ranging from
                    cryptic hunt to web development to coding (python, C++) rap
                    battle, group discussion events on tech-related topics, and
                    many more.
                    
                    <br />
                    <br />
                     The event is judged by experts from the industry,
                    academia, and research, who evaluate the projects based on
                    their innovation, technical complexity,
                    feasibility, and impact.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4 mt-8  z-10">
                  <img
                    className="w-full rounded-lg brightness-[60%]"
                    src={MadhavImage}
                    alt="office content 1"
                  />{" "}
                  <div className="absolute z-10 lg:bg-gradient-to-l bg-gradient-to-t from-[#005fc4] from-20% via-15% via-[#005fc4] h-full" />
                </div>
              </div>
            </div>
          </section>

          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className=" text-white px-4 py-16 mb-20 mx-auto w-full md:px-24 lg:px-8 lg:py-20">
              <div className="grid gap-24 sm:gap-0 sm:mt-20 sm:grid-cols-2">
                <div className="text-center">
                  <h6 className="text-5xl font-bold text-deep-purple-accent-400">
                    {counterOn && (
                      <CountUp
                        className="akira"
                        start={0}
                        end={850}
                        duration={3}
                        delay={0}
                      ></CountUp>
                    )}{" "}
                    +
                  </h6>
                  <p className="font-bold akira">Participants</p>
                </div>
                <div className="text-center">
                  <h6 className="text-5xl font-bold text-deep-purple-accent-400">
                    {counterOn && (
                      <CountUp
                        className="akira"
                        start={0}
                        end={55}
                        duration={3}
                        delay={0}
                      ></CountUp>
                    )}{" "}
                  </h6>
                  <p className="font-bold akira">Schools</p>
                </div>
              </div>
              <h1 className="akira text-center text-3xl sm:text-5xl font-bold mt-20">
                1 MEGA COMPETITION
              </h1>
            </div>
          </ScrollTrigger>
        </div>
      </Transition>
    </>
  );
};

export default About;
