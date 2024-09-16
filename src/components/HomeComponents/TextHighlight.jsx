import PropTypes from "prop-types";

const TextHighlight = ({text}) => {
  return (
    <div className='inline text-[#dbb64f]'>{text}</div>
  )
}

TextHighlight.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TextHighlight