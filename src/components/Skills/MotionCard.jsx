// import React from "react";
// import { motion } from "framer-motion";

// const MotionCard = ({image, size}) => {
//   return (
//     <div>
//       <motion.div
//         className="container border-4 border-[#03fcc6] w-fit p-3"
//         whileHover={{ scale: 1, rotate: 90 }}
//         whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
//       >
//         <img 
//             src={image} 
//             alt="Not Avaliable" 
//             className={`transform scale-[${size}]`}
//         />
//       </motion.div>
//     </div>
//   );
// };

// export default MotionCard

import PropTypes from "prop-types";
import { motion } from "framer-motion";

const MotionCard = ({ image, link ,size = 1 }) => { // Setting default value for size
  return (
    <div>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <motion.div
        className="container border-4 rounded-tl-3xl rounded-br-3xl md:border-[6px] border-[#03fcc6] w-fit p-3"
        whileHover={{ scale: 1, rotate: 90, boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)" }}
        whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
      >
        <img 
          src={image} 
          alt="Not Available" 
          style={{ transform: `scale(${size})` }}
        />
      </motion.div>
      </a>
    </div>
  );
};

MotionCard.propTypes = {
  image: PropTypes.string.isRequired, 
  size: PropTypes.number,     
  link: PropTypes.string.isRequired,       
};

export default MotionCard;
