import React from "react";
import "../styles/styles.css";
import "../styles/styles.scss";
import Home from "../images/home.png";
import About from "../images/about.png";

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
                With us you can <span id="spin"></span>.
              </h2>

              <a href="#" className="button">
                SignUp
              </a>
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
                Analytics Solution using IBM & Qlik Products.
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

      {/* <!--========== FOOTER ==========--> */}
      <footer className="footer section bd-container">
        <div className="footer__container bd-grid">
          <div className="footer__content">
            <a href="#" className="footer__logo">
              CMS
            </a>
            <span className="footer__description">..</span>
            <div>
              <a href="#" className="footer__social" />
              <a href="#" className="footer__social">
                {" "}
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAYVJREFUSEu1lQ9NA2EMxX9zgANAAaAAcAAKmIOBAnAAKAAUAAoABRsOmILhAPJIe+l9+/4l5JpctuTavva1fTdjYptNnJ8egDlwDBzao5pW9rwAr7UiawBnwC2w1+jyC7gCBLZlJYA7YNFB3xrYNT/FCGhkOYDe5J9G2Q1wbVnvgcuIkAKIlufOypXIadGcHizuPNKVAohPb7mEU6JVgJqZcux7cHSOVZSSOy2l917g0EUEeAQugA9byzSJBhppyYF4kU+A/o/uQLt9YO2dBE5z3ZY6UNyb3chRCvBjUd5VSlnPUe4Am5gnBqUA8osg/waIFGlYbg6c0pK7YKdoWIbckHWNOrYWgN6rqD+uzXxVs0P2IxvtcUJTbrhepPhfmnZl11TBvsdpF7Ub+bbL1a860DoPAlmTilPgPZTcc4hyr0qFHKLYqSIJWM885NMUO08UQUSbFFObIY5LtpVcjq0PjoBa4leVkJ7j0Xbp0SdTUiJTN1pRyXX2S+Zt9gBUWGm/mhzgFzWDVxnlcFgNAAAAAElFTkSuQmCC" />
              </a>
              <a href="#" className="footer__social">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAUdJREFUSEvdleExBEEQhb+LgAzIABEgAkTgRIAIEAEhyAARkAGXAREgAuq7mrmanZuZ29uq/XNTdX92ut/r97qnb8LIZzIyPptHsA38rLDNmEvgFNgHPoFH4C7k+f05YuQWGWzAR4PkDTgs3Jsj4TXwUCLw8j0oOAMEyk+MqfFLMgsE8yJzBX9JplUoO7VMdU8Ndb/BgUVxOYHenWQAfvOnfQfAfYPgJRAsQlICm7cbwHYGvg8V36a5OcH3QOCY1mlwqQfaMLR68bSwM4F5D5wSG7Q1QMlXsLiTWloVTsp53qwehEv2lCzy2xHw2gMwDbF61S9tgdqycxJu1iA5rjzM5jZ1bH1s2tU6F2EXFWNqCrQpLrQauK/2qgWe90BQK97rYY0vVnDHunlKCqah0TYtkrnAbGC6NlZhz+837x+tl+x1gka36B/CnzgZFPaBJAAAAABJRU5ErkJggg==" />
              </a>
              <a href="#" className="footer__social">
                {" "}
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAXRJREFUSEvFlbsuRFEUhr9pNFPQaDRDLy4vwLwBSokErQTxBHgDxNQukSh5AzyBywugVqmU5Je15WTZ+5x9ZnIyuztnr/X/a/3rsls0fFoN4zM0gjlgF+gCkxVZvgH3wDHw5G1jGWwAZ31KtwmcF309gSJ/7BM8uM0XM/EEYl+vQfAJLJuU++Z3AUiF3+MJpGcnQSBHaTxmdVEg+lbEIrkxP2FMpQi+I+DPBiDHcbv/ACSnMh41UhH/w/UZxAgUzQSwBiwCsnkAroCvRM3+cKsIgp49YMtldwpsA7fAkrvLJtgDLi3iaQfyAswCB0AocG2JDoET4A6YcQShwAMRBIk0pTuO4AhQhgNJJEy14QiwCiwYiYp8DbQtu+SGqCqyHNWeK5E9oz2l3i+2Z2UNygZNUoRlphnQcMWO5kb30UmuuypiBKWrQqv5NRFZ7u/SZSeQRtd1iFKZqL9VyNTyC7bv9uCobbMenFwpsuyG9iZnRZdj9AO5y0cZdyMG3QAAAABJRU5ErkJggg==" />
              </a>
            </div>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">By</h3>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/murtuza-gulam-bakir-372069207/"
                  className="footer__link"
                >
                  Murtuza Bakir
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mohammed-zaki-bhojani-93a858194/"
                  className="footer__link"
                >
                  Mohammed Zaki Bhojani
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/nusratfatimaansari/"
                  className="footer__link"
                >
                  Nusrat Fatima Ansari
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">Information</h3>
            <ul>
              <li>
                <a href="#" className="footer__link">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Terms of services
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">Adress</h3>
            <ul>
              <li>
                <a
                  href="https://www.google.com/maps/place/Algorisys+Technologies+Private+Limited/@19.088761,72.912862,10z/data=!4m5!3m4!1s0x0:0x2872117b02dc309f!8m2!3d19.0934559!4d72.9143272?hl=en-US"
                  className="footer__social"
                >
                  {" "}
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAU5JREFUSEu1lO1RQkEMRQ8dSAVoBWgFWAJWoB2AnWgHUAF0IFagVoB2oBXIXGaXWfOyXzOSn2/z7sneJDvizDE6sz4tgEtgAdwC16Ggd2AHPAOfpSJrgKcgXtJQzmMuoQRQldNGC5V74+XmAC2VWz3ZtbQfPYA835vEr/CzKlWoFypiYvKubE88gK1e4hL8NmIXgIApZHALD2C9vwO2mV7MgU1yNuiFB/g1YmOn+pji2flH878BP4CsO4UH0ALNkpwei17DQhYBK+A+AWhTNeNek98A2RRjDTzUbqAn4cX0QRDN+Ef4rgXUtKXiOlIhcZSPqblF69niWMvAnhLAu0VmUk+fB9WXADrreS7cZ6IG0HmLVa418V6151ozrbHNvapquuy0E1YcU+t1DlIVb7EowiykSbwHoFxB1HiFdiJrS23RauPYdV5rcpeYl3wAl91AGYDJRKAAAAAASUVORK5CYII=" />
                  Algorisys Technologies Pvt. Ltd.
                </a>
              </li>
              <li>
                Gold Crest Business Park, 2nd Floor, 208-209, Opp. Shreyas
                Cinema, LBS Rd, Ghatkopar(W) Mumbai,Mahrashtra 400086
              </li>
              <li>(022) 22112216</li>
              <li>info@algorisys.com</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
