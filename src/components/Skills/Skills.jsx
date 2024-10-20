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
        <h1 className="text-[30px] text-green-400 font-bold md:text-[40px] lg:text-[35px]">
          Skills
        </h1>
        <div className="border-b-4 border-solid border-blue-100 p-1 w-16 border-green-400"></div>
      </div>
      <div className="skills mt-4 flex flex-row gap-3 flex-wrap justify-center lg:w-[70%] m-auto">
          <MotionCard image={html} link="https://developer.mozilla.org/en-US/docs/Web/HTML" />
          <MotionCard image={css} link="https://developer.mozilla.org/en-US/docs/Web/CSS" />
          <MotionCard image={js} link="https://developer.mozilla.org/en-US/docs/Web/JavaScript" />
          <MotionCard image={nodejs} link="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework" />
          <MotionCard image={mongodb} link="https://www.mongodb.com/docs/" />
          <MotionCard image={react} link="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started" />
          <MotionCard image={git} link="https://git-scm.com/doc" />
          <MotionCard image={java} link="https://docs.oracle.com/en/java/" />
          <MotionCard image={python} link="https://docs.python.org/3/" />
          <MotionCard image={c} link="https://en.cppreference.com/w/c" />
          <MotionCard image={cplus} link="https://en.cppreference.com/w/cpp" />
          <MotionCard image={bootstrap} link="https://getbootstrap.com/docs/5.3/getting-started/introduction/" />
          <MotionCard image={tailwind} link="https://tailwindcss.com/docs" />
          <MotionCard image={github} link="https://docs.github.com/en" />
          <MotionCard image={mysql} link="https://dev.mysql.com/doc/" />
        
      </div>
    </div>
  );
};

export default Skills;

// border-2 border-solid border-green-500
// border-2 border-solid border-yellow-400
