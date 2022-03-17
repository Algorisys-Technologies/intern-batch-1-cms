import React from "react";
import "../styles/footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer-new">
        <div className="footer-content">
          {/* <!--========== FOOTER ==========--> */}
          <footer className="footer section bd-container ">
            <div className="footer__container bd-grid">
              <div className="footer__content">
                <a
                  href="#"
                  className="footer__logo"
                  style={{ color: "#393939" }}
                >
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
                <h3 className="footer__title">Address</h3>
                <ul>
                  <li>
                    <a
                      href="https://www.google.com/maps/place/Algorisys+Technologies+Private+Limited/@19.088761,72.912862,10z/data=!4m5!3m4!1s0x0:0x2872117b02dc309f!8m2!3d19.0934559!4d72.9143272?hl=en-US"
                      className="footer__social"
                    >
                      {" "}
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAU5JREFUSEu1lO1RQkEMRQ8dSAVoBWgFWAJWoB2AnWgHUAF0IFagVoB2oBXIXGaXWfOyXzOSn2/z7sneJDvizDE6sz4tgEtgAdwC16Ggd2AHPAOfpSJrgKcgXtJQzmMuoQRQldNGC5V74+XmAC2VWz3ZtbQfPYA835vEr/CzKlWoFypiYvKubE88gK1e4hL8NmIXgIApZHALD2C9vwO2mV7MgU1yNuiFB/g1YmOn+pji2flH878BP4CsO4UH0ALNkpwei17DQhYBK+A+AWhTNeNek98A2RRjDTzUbqAn4cX0QRDN+Ef4rgXUtKXiOlIhcZSPqblF69niWMvAnhLAu0VmUk+fB9WXADrreS7cZ6IG0HmLVa418V6151ozrbHNvapquuy0E1YcU+t1DlIVb7EowiykSbwHoFxB1HiFdiJrS23RauPYdV5rcpeYl3wAl91AGYDJRKAAAAAASUVORK5CYII=" />
                      <br /> Algorisys Technologies
                      <br /> Pvt. Ltd.
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>

          <div style={{ textAlign: "center" }}>
            <pre>
              Gold Crest Business Park, 2nd Floor, 208-209, Opp. Shreyas Cinema,
              <br />
              Lal Bahadur Shastri Rd, Ghatkopar-W,
              <br />
              Mumbai, Maharashtra 400086
            </pre>
          </div>
          <hr />
          <p style={{ textAlign: "center", margin: "0px" }}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAABmJLR0QA/wD/AP+gvaeTAAADYklEQVRIie2VTUxcVRTHf2dmWnEUExQ1tolJA03cdGEmYvkIeWhibMrAaqCxommLLBpME2OMG6PGTePKhcFGLJJIGsqON4ylY6JAAohhunHhosimgfrRgWQyRaa8d46LvkmGoQzoumd188//nN89977zLjyM/xCylyEej0ej0ehJEYkDdcDTwN/Asogk8/n8RDKZ3PjfkK6urrPAZ8ChCrbbwMdjY2PfALZvSCKROGhmXwNvB9KSmV0FFsxsTUSeFJHjZtYtInUAZnalurr63PDw8GZ5vciDIL7vDwJvAQUReT+bzV6ampryymzJvr6+T7LZ7Hkz+xx4I5fLAbxZ3tGOTjo6Os6KyGWgYGYnXNf9CaCzs/MYcAZ4HvgTcMfHx68DxOPxV0Kh0DXgoJn1ua47uCskkUg8urm5eRM4LCLvuq77ZVCkBxgq71xEBl3X7Qs2d8HMvgBuFwqFo+l0+m7RFypN2tjYaFfVw6q6lMvlLgXJh1T1K1UVVe0pFAqPAzHf92/5vv9OPB5/DWBlZWVAVZdV9blIJHKytO42iKq2qypmNlq8A8/zEqr6mKpeT6VSI+l0+m4ymbyhqhdVdX1ra+sFgEwms6Wqo0H+NkikDHIUwMx+KWqe5x0TEYDFUu/k5OQAMFCWX8yrrwR5KliuFTUze8LMACoOXJB/J1jW7grxfT8bFC7C8DzvnohgZtG9IJ7n1QZd3ynVy+/k9+BMG0o6+TXQXiz1Oo7T7zjOWltb23sl8suqiqrerASZUFV83z/lOE4k0K6o6qaqvt7a2trtOE5VS0tLTFU/VNUaVf0NIBaLHfB9/1SwodSukKqqqglV/cPM6jzPOw8wMzNzS1UvqGpYVUc9z/sHWAw+9W+np6evAUSj0X5VPaKqq/l8fhtkx8Q3Nzf3mtkgcA84MTc39yNAU1PTS8AZM3sWWA2FQu7s7OwPAI2Nja+KyPfcn/hz8/PzQxUhgDQ0NHwnIqcD0Aee5w1kMpmtcmMsFjsQDof7ReQicBAYWVhY6NlR8AEQ6uvrH6mpqbkMnA6kZeCqmf0MZIFaETkOdANHAs/I+vp679LSUmFfkJKd9gKfUvk9WRWRjxYXF4d2M+z5MsZisaiZtQe/ijrgGeAv7r8xqXA4nMpkMnsO6sPYd/wL8TPcEwd0n3YAAAAASUVORK5CYII="
              alt="Copyright"
            />
            Algorisys Technologies
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
