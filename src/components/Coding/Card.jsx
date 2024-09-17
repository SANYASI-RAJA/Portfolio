import { CiShare1 } from "react-icons/ci";
import PropTypes from "prop-types";

const Card = ({ logo, name, star, count, desc, linkto }) => {
  return (
    <div>
      <div className="Card w-full flex flex-col gap-4 h-auto md:h-60 shadow-sm shadow-blue-200 transform hover:translate-y-3 hover:duration-200 p-5 bg-blue-950">
        <div className="icons flex justify-between">
          <img className="w-20 h-20" src={logo} alt="" />
          <a className="text-3xl" href={linkto} target="_blank" rel="noopener noreferrer"><CiShare1 /></a>
        </div>
        <div className="name text-xl text-cyan-400 font-bold">{name}</div>
        <div className="desc text-gray-200 flex items-start gap-3 font-semibold flex-wrap">
          {count && (
            <div className="flex text-yellow-400 items-center gap-1">
              {star && count}
              {star}
            </div>
          )}
          <div className="flex-1">{desc}</div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  logo: PropTypes.string.isRequired,  
  name: PropTypes.string.isRequired,  
  star: PropTypes.node,               
  count: PropTypes.number,            
  desc: PropTypes.string.isRequired,  
  linkto: PropTypes.string.isRequired 
};

export default Card;
