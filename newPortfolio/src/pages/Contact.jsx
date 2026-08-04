import "../index.css";
import linkedinImg from "../assets/images/linkedin.jpg";
import instagramImg from "../assets/images/instagram.png";
import githubImg from "../assets/images/github-icon.svg";

const Contact = () => {
  return (
    <main id="contactPage">
      <div id="contactTitle">Don't be a stranger</div>
      <div id="contactSubHeading">
        I'm always open to new opportunities.
      </div>

      <div id="contactContainer">
        <div id="contactGrid">
          <div id="contactLeft">
            <div id="contactInfo">
              <div className="contactRow">
                <div className="contactIcon">✉</div>
                <div>
                  <div className="contactLabel">Email</div>
                  <div className="contactValue">
                    pemalotus276@gmail.com
                  </div>
                </div>
              </div>

              <div className="contactRow">
                <div className="contactIcon">✆</div>
                <div>
                  <div className="contactLabel">Expected Grad. Date</div>
                  <div className="contactValue">May 2028</div>
                </div>
              </div>

              <div className="contactRow">
                <div className="contactIcon">⌖</div>
                <div>
                  <div className="contactLabel">Based in</div>
                  <div className="contactValue">Uncasville, CT</div>
                </div>
              </div>

              <div className="contactRow">
                <div className="contactIcon">🎓</div>
                <div>
                  <div className="contactLabel">University</div>
                  <div className="contactValue">UConn Storrs</div>
                </div>
              </div>
            </div>

            <div id="contactQuote">
              <div id="quoteText">
                "Happiness is not something ready-made. It comes from your own
                actions."
              </div>
              <div id="quoteAuthor">— H.H. the Dalai Lama</div>
            </div>
          </div>

          <div id="contactForm">
            <div id="formTitle">Send Me a Message!</div>

            <input
              id="inputName"
              type="text"
              placeholder="Your Name"
            />

            <input
              id="inputEmail"
              type="email"
              placeholder="Your Email"
            />

            <textarea
              id="inputMessage"
              placeholder="What's on your mind?"
            />

            <button id="inputSubmit" type="button">
              Send Message
            </button>

            <div id="inputSuccess">
              Message Sent! I'll get back to you soon.
            </div>

            <div className="aboutMeInfoText">
              You can also find me on...
            </div>

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
                href="https://www.instagram.com/"
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
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;