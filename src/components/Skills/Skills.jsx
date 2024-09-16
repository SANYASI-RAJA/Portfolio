import styles from "./Skills.module.css";
import MotionCard from "./MotionCard";
import html from "../../assets/skills/html.png";
import css from "../../assets/skills/css.png";
import js from "../../assets/skills/javascript.png";
import nodejs from "../../assets/skills/node.png"
import react from "../../assets/skills/react.png"
import git from "../../assets/skills/git.png"
import github from "../../assets/skills/github.png"
import mongodb from "../../assets/skills/mongodb.png"
import java from "../../assets/skills/java.png"
import c from "../../assets/skills/c.png"
import cplus from "../../assets/skills/cplus.png"
import bootstrap from "../../assets/skills/bootstrap.png"
import tailwind from "../../assets/skills/tailwind.png"
import python from "../../assets/skills/python.png"
import mysql from "../../assets/skills/mysql.png";



const Skills = () => {
  return (
    <div className={`${styles.Skills} lg:px-32 lg:flex lg:flex-col justify-center lg:h-[100vh]`}>
      <div className="flex flex-row text-blue-200 mt-4 items-center gap-2">
        <h1 className="text-[30px] font-bold md:text-[40px] lg:text-[35px]">
          Skills
        </h1>
        <div className="border-b-4 border-solid border-blue-100 p-1 w-16"></div>
      </div>
      <div className="skills mt-4 flex flex-row gap-3 flex-wrap justify-center lg:w-[70%] m-auto">
        <MotionCard image={html} />
        <MotionCard image={css} />
        <MotionCard image={js} />
        <MotionCard image={nodejs} />
        <MotionCard image={mongodb} />
        <MotionCard image={react} />
        <MotionCard image={git} />
        <MotionCard image={java} />
        <MotionCard image={python} />
        <MotionCard image={c} />
        <MotionCard image={cplus} />
        <MotionCard image={bootstrap} />
        <MotionCard image={tailwind} />
        <MotionCard image={github} />
        <MotionCard image={mysql} />
        
      </div>
    </div>
  );
};

export default Skills;

// border-2 border-solid border-green-500
// border-2 border-solid border-yellow-400
