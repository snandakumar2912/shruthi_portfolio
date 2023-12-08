import React from "react";

// import img
import Image from "../assets/img/ai.jpg";

const About = () => {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Shruthi Nandakumar
                              </h2>
              <p className="mb-4 text-accent">Master's Student</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
              I am a dedicated and ambitious master's student passionate about Coding.
               With a keen interest in Artificial Intelligence, I am committed to advancing my knowledge and contributing to cutting-edge research in the field. 
               My academic journey has equipped me with strong analytical and problem-solving skills, and I thrive in collaborative and challenging environments. 
               Beyond academia, I am driven by a desire to make a positive impact, applying my skills to real-world challenges.
                Explore my portfolio to discover more about my academic pursuits, projects, and aspirations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
