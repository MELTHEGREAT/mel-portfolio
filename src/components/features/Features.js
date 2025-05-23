import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Web Development"
          des="I build responsive and functional websites using HTML, CSS, JavaScript, PHP, and modern frameworks like React and Node.js."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Database Management"
          des="Skilled in designing and managing MySQL databases, ensuring data is structured and accessible for all kinds of systems."
          icon={<SiProgress />}
        />
        <Card
          title="System Projects"
          des="Developed systems like restaurant kiosks and church management tools to solve real-world problems effectively."
          icon={<FaMobile />}
        />
        <Card
          title="Version Control"
          des="Comfortable using Git and GitHub to manage code, track changes, and collaborate efficiently on development projects."
          icon={<SiAntdesign />}
        />
        <Card
          title="Tech Support & Office Tools"
          des="Experienced in basic PC troubleshooting and using tools like Microsoft Excel to organize and present data clearly."
          icon={<FaGlobe />}
        />
        <Card
          title="Creative & Visual Tools"
          des="Capable in Canva for designing digital assets and presentations, blending functionality with creativity."
          icon={<AiFillAppstore />}
        />

      </div>
    </section>
  );
}

export default Features