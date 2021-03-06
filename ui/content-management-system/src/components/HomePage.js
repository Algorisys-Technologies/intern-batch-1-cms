import React from "react";
import "../styles/styles.css";
import "../styles/styles.scss";
import Home from "../images/home.png";
import About from "../images/about.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <a href="#" className="scrolltop" id="scroll-top">
        <span>
          <i className="bx bx-chevron-up scrolltop__icon"></i>
        </span>
      </a>
      <main className="l-main">
        <section className="home" id="home">
          <div className="home__container bd-container bd-grid">
            <div className="home__data">
              <h1 className="home__title">Content Management</h1>
              <br />
              <h2 className="home__subtitle">
                With us you can <span id="spin"></span>
              </h2>
              {localStorage.getItem("user_name") == undefined && (
                <Link to="/signup">
                  <a href="#" className="button">
                    SignUp
                  </a>
                </Link>
              )}
            </div>

            <img src={Home} alt="" className="home__img" />
          </div>
        </section>

        {/* <!--========== ABOUT ==========--> */}
        <section className="about section bd-container" id="about">
          <div className="about__container  bd-grid">
            <div className="about__data">
              <span className="section-subtitle about__initial">About us</span>
              <h2 className="section-title about__initial">
                Algorisys Technologies
              </h2>
              <p className="about__description">
                Algorisys Technologies is a Software Development, IT Business
                Consulting and Training Service Provider Organisation
                headquartered in Mumbai, India. Algorisys Technologies caters to
                various large corporates and SME customers through its ranges of
                cost effective products and solutions. Algorisys Technologies
                has more than 70+ man years of hands-on-experience in developing
                IT solutions, Mobile Application, Systems around Core Banking,
                Custom Analytics Solutions usng opensource/.Net Technology and
                Analytics Solution using IBM &amp; Qlik Products.
              </p>
              <a href="https://www.algorisys.com/" className="button">
                Explore history
              </a>
            </div>

            <img src={About} alt="" className="about__img" />
          </div>
        </section>

        {/* <!--========== CONTACT US ==========--> */}
        <span className="section-subtitle ">Let's talk</span>
        <section className="contact section bd-container" id="contact">
          <div className="contact__container bd-grid">
            <div className="contact__data">
              <h2 className="section-title contact__initial">Contact us</h2>
              <div className="contact section bd-container">
                <form>
                  <label for="fname">First Name</label>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Your name.."
                  />

                  <label for="lname">Last Name</label>
                  <input
                    type="text"
                    id="lname"
                    name="lastname"
                    placeholder="Your last name.."
                  />

                  <label for="subject">Subject</label>
                  <textarea
                    id="subject"
                    name="subject"
                    placeholder="Write something.."
                    style={{ height: "200px" }}
                  ></textarea>

                  <div className="contact__button">
                    <a href="#" className="button">
                      Contact us now
                    </a>
                  </div>
                </form>
              </div>
            </div>

            <div className="footer__content">
              <h3 className="footer__title">Address</h3>
              <ul>
                <li>
                  {" "}
                  <a>Algorisys Technologies Pvt. Ltd.</a>
                </li>
                <div className="mapouter">
                  <div
                    className="gmap_canvas"
                    style={{
                      height: "550px",
                    }}
                  >
                    <iframe
                      className="gmap_iframe"
                      width="100%"
                      frameBorder={0}
                      scrolling="no"
                      marginHeight={0}
                      marginWidth={0}
                      src="https://maps.google.com/maps?width=150&height=3000&hl=en&q=Gold Crest Business Park, 2nd Floor, 208-209, Opp. Shreyas Cinema, LBS Rd, Ghatkopar(W) Mumbai, Maharashtra 400086&t=&z=3&ie=UTF8&iwloc=B&output=embed"
                    />
                    <a href="https://kokagames.com/">Koka Games</a>
                  </div>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        ".mapouter{position:relative;text-align:right;width:100%;height:100px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:100px;}.gmap_iframe {height:500px!important;width:350px!important;}",
                    }}
                  />
                </div>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
