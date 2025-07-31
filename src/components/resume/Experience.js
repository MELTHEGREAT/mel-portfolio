import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Business Owner || Freelancer"
            subTitle="Liveselling and Tiktok Affiliates - (2024 - Present)"
            result="Tiktok"
            des="Handled Tiktok live selling 'ukay shoes', people engagement, and content creation."
          />
          <ResumeCard
            title="IT Intern"
            subTitle="PUP - (2025)"
            result="Unisan Quezon"
            des="Develop a system for clients and basic tech assistance for office computers and printers."
          />
          <ResumeCard
            title="Cashier"
            subTitle="5 Star Chicken - (2022)"
            result="Malvar Batangas"
            des="Handling people management and engagement."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold">Non - Tech Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
          />
          <ResumeCard
            title=""
            subTitle=""
            result=""
            des=""
          />
          <ResumeCard
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
