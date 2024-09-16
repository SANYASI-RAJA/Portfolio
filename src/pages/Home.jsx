import React from "react";
import styles from "./Home.module.css";
import boy1 from "../assets/hero/boy1.jpg";
import TextHighlight from "../components/HomeComponents/TextHighlight";
import TextAnimation from "../components/HomeComponents/TextAnimation";
import Button from "../components/HomeComponents/Button";
import resume from "../assets/hero/Sanyasi_raja.pdf"

const Home = () => {
  return (
    <div className={`${styles.Home}`}> {/* Adding Tailwind CSS classes */}
      <div className={`${styles.container} lg:flex lg:justify-between lg:px-24 lg:flex-row-reverse px-4 py-8 sm:px-6`}> {/* Adding Tailwind CSS classes */}
        <img src={boy1} alt="" className={`${styles.avtar} md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px]`} />
        <div className={`${styles.text}`}>
          <p className="text-xl text-[#64ffda] md:text-4xl mb-2">Hello,</p>
          <h1 className={`${styles.name} text-[24px] md:text-5xl mb-2`}>
            I'm <TextHighlight text={"Sanyasi Raja"} />
          </h1>
          <p className={`${styles.occup} mb-4`}>
            <TextAnimation />
          </p>
          <p className="mt-3 text-gray-400 text-base sm:text-lg md:text-[24px] mb-3 md:mb-4 text-justify"> {/* Adding Tailwind CSS classes */}
          I am a Mechanical Engineering from NIT Jamshedpur with a primary focus on competitive programming, Web Development. I possess a diverse skill set and have acquired expertise in various programming languages, frameworks, and tools relevant to this domain.
          </p>
          <p className="text-gray-400 text-base sm:text-lg mb-5 md:text-[24px]"> {/* Adding Tailwind CSS classes */}
            I am also interested in learning new skills and implement in real life.
          </p>
          <Button
            active={true}
            resume={resume}
          >
            Resume
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
