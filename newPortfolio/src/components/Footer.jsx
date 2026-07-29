import "../styles/Footer.css";
import linkedinImg from "../assets/images/linkedin.jpg";
import instagramImg from "../assets/images/instagram.png";
import githubImg from "../assets/images/github-icon.svg";

export const Footer = () => {
  return (
    <footer>
      <div className="header">Contact Information</div>

      <div className="contactLinkContainer">
        <a
          className="contactLink"
          href="https://www.linkedin.com/in/pemactashi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinImg} alt="LinkedIn" />
        </a>

        <a
          className="contactLink"
          href="https://www.instagram.com/YOUR_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramImg} alt="Instagram" />
        </a>

        <a
          className="contactLink"
          href="https://github.com/ptashi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubImg} alt="GitHub" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;