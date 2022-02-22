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
          {" "}
          <i className="bx bx-chevron-up scrolltop__icon"></i>
        </span>
      </a>
      <main className="l-main">
        {/* HOME */}
        <section className="home" id="home">
          <div className="home__container bd-container bd-grid">
            <div className="home__data">
              <style></style>
              <h1 className="home__title">Content Management</h1>
              <br />
              <h2 className="home__subtitle">
                With us you can <span id="spin"></span>
              </h2>
              <Link to="/signup">
                <a href="#" className="button">
                  SignUp
                </a>
              </Link>
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

        {/* <!--========== PRODUCT servicess ==========--> */}
        <section className="services section bd-container" id="services">
          <span className="section-subtitle">Offering</span>
          <h2 className="section-title">Our amazing products</h2>

          <div className="services__container  bd-grid">
            <div className="services__content">
              <h3 className="services__title">CUCKOO </h3>
              <p className="services__description">
                Online annotation, controlled sharing and viewing.
              </p>
            </div>

            <div className="services__content">
              <h3 className="services__title">finGenie</h3>
              <p className="services__description">
                Any-where Banking solution for NBFC and Credit Societies.
              </p>
            </div>

            <div className="services__content">
              <h3 className="services__title">proPeak</h3>
              <p className="services__description">
                Agile Kanban based task management system.
              </p>
            </div>
          </div>
          <div className="jc-center">
            <br />
            <a
              href="https://www.algorisys.com/our-products/"
              className="button"
            >
              Explore history
            </a>
          </div>
        </section>

        {/* <!--========== CMS ==========--> */}
        <section className="menu section bd-container" id="menu">
          <span className="section-subtitle">CMS</span>
          <h2 className="section-title">You can...!</h2>

          <div className="menu__container bd-grid">
            <div className="menu__content">
              <img src="assets/img/write.png" alt="" className="menu__img" />
              <h3 className="menu__name">Write</h3>
              <span className="menu__detail">Write your own </span>
              <span className="menu__preci">Blog</span>
              <a href="#" className="button menu__button">
                &gt;
              </a>
            </div>

            <div className="menu__content">
              <img src="assets/img/design.png" alt="" className="menu__img" />
              <h3 className="menu__name">Design</h3>
              <span className="menu__detail">---------</span>
              <span className="menu__preci">----</span>
              <a href="#" className="button menu__button">
                &gt;
              </a>
            </div>

            <div className="menu__content">
              <img src="assets/img/publish.png" alt="" className="menu__img" />
              <h3 className="menu__name">publish</h3>
              <span className="menu__detail">---</span>
              <span className="menu__preci">--</span>
              <a href="#" className="button menu__button">
                &gt;
              </a>
            </div>
          </div>
        </section>

        {/* <!--========== CONTACT US ==========--> */}
        <section className="contact section bd-container" id="contact">
          <div className="contact__container bd-grid">
            <div className="contact__data">
              <span className="section-subtitle contact__initial">
                Let's talk
              </span>
              <h2 className="section-title contact__initial">Contact us</h2>
              <p className="contact__description">
                If you have any query connect with us.
              </p>
            </div>

            <div className="contact__button">
              <a href="#" className="button">
                Contact us now
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
