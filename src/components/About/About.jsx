import styles from "./About.module.css";
import Sanyasi from "../../assets/about/Sanyasi.jpeg";


const About = () => {
  return (
    <div className= {`${styles.About} lg:px-32`}>
      <div className="flex flex-row text-blue-200 mt-4 items-center gap-2">
        <h1 className="text-[30px] text-blue-800 font-bold md:text-[40px] lg:text-[35px]">About Me</h1>
        <div className="border-b-4 border-solid border-blue-100 p-1 w-16 border-blue-800 "></div>
      </div>
      <div className="container w-full h-[80vh] flex flex-col items-center gap-3  mt-5 mb-20 lg:flex-row lg:justify-between lg:mt-2">
        <div className="data w-full lg:w-[60%]">
          <p className="text-[18px] text-cyan-500 font-bold md:text-[30px] lg:text-[28px]">Education:</p>
          {/* <div className="pg flex gap-2 text-blue-100 md:text-[25px]">
            &#187;
            <p className="text-[16px] flex flex-row items-start md:text-[25px] lg:text-[22px]">
              Master of Computer Applications(MCA), NIT Jamshedpur
            </p>
          </div> */}
          <div className="ug flex gap-2 text-blue-100 md:text-[25px]">
            &#187;
            <p className="text-[16px] text-gray-300 flex flex-row items-start sm:text-lg md:text-[22px]">
              Bachelor of Technology (B.Tech), NIT Jamshedpur
            </p>
          </div>
          <div className="about">
            <p className="text-[15px] text-gray-400 text-justify mt-3 sm:text-lg md:text-[22px]  ">
              I&apos;m a full-stack developer specializing in MERN (MongoDB,
              Express.js, React.js, Node.js) development. I&apos;ve built numerous
              responsive websites focused on delivering great user experiences.
              Proficient in HTML, CSS, and JavaScript, I stay updated with the
              latest web development trends. Additionally, I actively
              participate in online coding platforms like codeforces, LeetCode and CodeChef,
              where I&apos;ve solved various challenges and earned recognition,
              including stars and commendations. This has strengthened my
              problem-solving skills and solidified my expertise as a developer.
            </p>
          </div>
        </div>
        
        <div className="user-image">
          <img className=" w-[120px] md:w-[180px] lg:w-[270px] mt-5 rounded-md " src={Sanyasi} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default About;


// border-2 border-solid border-green-500
// border-2 border-solid border-yellow-400