import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, payback, diocese, innovazone, chat, restaurant , enrollment} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Diocese Management System"
          des=" Diocese is a system built for managing all operations and records within a diocese—helping streamline communication, administration, and pastoral duties."
          src={diocese}
        />
        <ProjectsCard
          title="Innovazone App"
          des="Innovazone is an e-commerce website built for young entrepreneurs to easily market and sell their products online."
          src={innovazone}
        />
        <ProjectsCard
          title="Chatting App"
          des="Chatting App is a real-time messaging platform that lets users connect instantly through secure and simple conversations"
          src={chat}
        />
        <ProjectsCard
          title="Duyanan Kiosk"
          des="Duyanan Kiosk is a smart ordering system for Duyanan Restaurant, featuring a chatbot assistant, sales analytics, and API-powered notifications."
          src={restaurant}
        />
        <ProjectsCard
          title="Payback"
          des="Payback helps you manage and track all the utang (debts) people owe you—with reminders, due dates, and payment logs."
          src={payback}
        />
        <ProjectsCard
          title="Enrollment System"
          des="Enrollment System is used by program chairs and admission officers to interview and manage enrollees efficiently."
          src={enrollment}
        />
      </div>
    </section>
  );
}

export default Projects
