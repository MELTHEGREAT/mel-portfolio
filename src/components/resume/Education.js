import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BS in Information Technology (BSIT)"
            subTitle="Polytechnic University of the Philippines  (2021 - 2025)"
            result="CUMLAUDE"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="General Academic Strand (GAS)"
            subTitle="San Isidro National High School (2019 - 2021)"
            result="HONOR"
            des="Higher education is senior high school education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Junior High School Education"
            subTitle="San Isidro National High School(2015-2019)"
            result="HONOR"
            des="Secondary education or junior high school education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="LIVE SELLER || SMALL ONLINE BUSINESS OWNER"
            subTitle="Freelance - (2024 - Present)"
            result="Tiktok"
            des="Handled Tiktok live selling, people engagement, and content creation."
          />
          <ResumeCard
            title="IT Intern"
            subTitle="PUP Unisan - (2025)"
            result="Computer Lab"
            des="Develop a system for clients and basic tech assistance for office computers and printers."
          />
          <ResumeCard
            title="SPES (SUPPORT STAFF)"
            subTitle="Local Government Unit - (2024)"
            result="Office"
            des="Organized records and reports using Microsoft Excel and basic tech assistance for departments."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
