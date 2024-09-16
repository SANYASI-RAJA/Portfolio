import styles from "./Contact.module.css";
import { IoLogoGithub } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import Button from "../HomeComponents/Button";

const Contact = () => {
  return (
    <div
      className={`${styles.Contact} lg:px-32 lg:flex lg:flex-col justify-start lg:justify-center lg:items-center lg:mx-14`}
    >
      {/* <div className="flex flex-row text-blue-200 mt-4 items-center gap-2">
        <h1 className="text-[30px] font-bold md:text-[40px] lg:text-[35px]">
          Contact
        </h1>
        <div className="border-b-4 border-solid border-blue-100 p-1 w-16"></div>
      </div> */}
      <div className="flex flex-col mt-8 lg:mt-0">
        <div className={`${styles.title} text-3xl mb-5`}>
          <h1 className="font-bold text-[#03fcc6]">Get in touch</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-24 items-start">
          <div className="text-[24px] text-gray-300 text-justify md:w-[50%] lg:w-[40%]">
            If you have any questions, please feel free to drop me a line. If
            you don&apos;t get an answer immediately, I might just be travelling
            through the middle of nowhere. I&apos;ll get back to you as soon as I
            can. That&apos;s a promise!
          </div>

          <div>
            <p className="text-[24px] font-bold border-b-4 border-blue-500 pb-3">
              Find Sanyasi elsewhere
            </p>
            <div className="flex mt-5 gap-10 text-[30px]">
              <a
                href="https://www.linkedin.com/in/sanyasi-raja-337777229/"
                target="_blank"
              >
                <FaLinkedin className="hover:text-[#03fcc6]" />
              </a>
              <a href="https://github.com/SANYASI-RAJA" target="_blank">
                <IoLogoGithub className="hover:text-[#03fcc6]" />
              </a>
              <a href="wa.link/lml7yi" target="_blank">
                <FaWhatsapp className="hover:text-[#03fcc6]" />
              </a>
              <a href="https://t.me/+919608207373" target="_blank">
                <FaTelegramPlane className="hover:text-[#03fcc6]" />
              </a>
            </div>
          </div>
        </div>
        <a
          className="mt-10 object-fill w-fit"
          href="mailto:sanyasiraja001@gmail.com"
        >
        <Button
        active={false}
          >
            Write Sanyasi
          </Button>
          {/* <button className="bg-yellow-600 px-5 py-3 rounded-md text-[20px] font-bold hover:bg-yellow-500">
            Write Sanyasi
          </button> */}
        </a>
      </div>
    </div>
  );
};

export default Contact;
