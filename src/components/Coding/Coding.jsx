import styles from "./Coding.module.css";
import hackerrank from "../../assets/coding/hackerrank.png";
import leetcode from "../../assets/coding/leetcode.png";
import codeforces from "../../assets/coding/code-forces.png";
import codechef from "../../assets/coding/codechef.png";
import gfg from "../../assets/coding/gfg.png";
import Card from "./Card";
import { FaStar } from "react-icons/fa";

const Coding = () => {
  return (
    <div
      className={`${styles.Coding} lg:px-32 lg:flex lg:flex-col justify-center `}
    >
      <div className="flex flex-row text-blue-200 mt-4 items-center gap-2">
        <h1 className="text-[30px] text-red-500 font-bold md:text-[40px] lg:text-[35px]">
          Coding
        </h1>
        <div className="border-b-4 border-solid border-blue-100 p-1 w-16 border-red-500"></div>
      </div>
      <div className="coding mt-8 flex flex-col gap-7 lg:grid lg:grid-cols-2">
        <Card 
            logo={codeforces} 
            name={"Codeforces"} 
            star
            count
            desc={`1200+ Questions Solved and max rating 1631(Expert)`} 
            linkto={"https://codeforces.com/profile/SANYASI_RAJA"} />
        <Card
          logo={leetcode}
          name={"Leetcode"}
          star
          count
          desc={`1200+ Questions Solved, Unlocked 10 Badges and maximum rating is 2197(Guardian)`}
          linkto={"https://leetcode.com/u/Sanyasi/"}
        />
        <Card
          logo={codechef}
          name={"CodeChef"}
          star={<FaStar />}
          count={5}
          desc={`on Codechef and Achieved Global Rank 101 in contest`}
          linkto={"https://www.codechef.com/users/sanyasiraja001"}
        />
        
        <Card
          logo={gfg}
          name={"GeeksforGeeks"}
          star
          count
          desc={`350+ Questions solved and Institute Rank is 376`}
          linkto={"https://www.geeksforgeeks.org/user/sanyasiroweh/"}
        />

        <Card
          logo={hackerrank}
          name={"Hackerrank"}
          star={<FaStar />}
          count={5}    
          desc={`in Problem Solving and Certificates of c++ and SQL`}
          linkto={"https://www.hackerrank.com/profile/sanyasiraja001"}
        />
        
        
      </div>
    </div>
  );
};

export default Coding;
