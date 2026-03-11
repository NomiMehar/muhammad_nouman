import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:nomimehar667@gmail.com" data-cursor="disable">
                nomimehar667@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+923137821667" data-cursor="disable">
                +92 313 7821667
              </a>
            </p>
            <h4>Location</h4>
            <p>Gujranwala, Punjab, Pakistan</p>
            <h4>Education</h4>
            <p>Bachelor of Science in Computer Science (BSCS), Virtual University of Pakistan</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.github.com/NomiMehar"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-nouman-software-engineer/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Muhammad Nouman</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
