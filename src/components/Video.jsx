import React from "react";
import AOS from "aos";

AOS.init();

export default function Video() {
  return (
    <div className="p-4 sm:p-28 mb-12 xl:p-42 bg-black dark:bg-[#ebe2e2] Sfsf ">
     <h1
        data-aos="fade-up"
        data-aos-duration="750"
        className="drop-shadow-[0_0px_35px_#007bc4] text-center text-[#007bc4] mb-14 text-4xl heading"
      >
        THE TRAILER
      </h1>
      <iframe
        className="w-full md:h-[90vh] h-[40vh] sm:h-[60vh]"
        
        height="315"
        src="https://www.youtube.com/embed/cjL7ntyJi5k?si=V_1UFYHTomiBZzIV"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; quality"
        allowfullscreen="true"
      ></iframe>
    </div>
  );
}
