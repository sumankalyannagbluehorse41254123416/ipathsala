"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function FooterWithChat() {
  useEffect(() => {
    // Load socket.io dynamic script
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.5.0/socket.io.js";
    script.async = true;
    document.body.appendChild(script);

    // Load external JS if required
    const script2 = document.createElement("script");
    script2.src = "https://www.ipathsala.com/js/script.js";
    script2.async = true;
    document.body.appendChild(script2);
  }, []);

  return (
    <>
      {/* Footer Section */}
      <section
        className="footer-area footer-02 bg_cover"
        style={{ backgroundImage: "url()" }}>
        <div className="footer-widget">
          <div className="container">
            <div className="row">
              {/* Column 1 */}
              <div className="col-md-3 col-sm-6">
                <div className="footer-link mt-45">
                  <h4 className="footer-title">Information</h4>
                  <ul className="link-list">
                    <li>
                      <p>
                        <a href="tel:+9339146656">+91 93391 46656</a>
                      </p>
                    </li>
                    <li>
                      <a
                        href="mailto:ipathsala.academy@gmail.com"
                        target="_blank">
                        ipathsala.academy@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="/seminar" className="seminarfd55">
                        Seminar Feedback
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Column 2 */}
              <div className="col-md-3 col-sm-6">
                <div className="footer-link mt-45">
                  <h4 className="footer-title">Useful Links</h4>
                  <ul className="link-list">
                    <li>
                      <a href="https://www.ipathsala.com/hotel-courses">
                        Hotel Management Courses
                      </a>
                    </li>
                    <li>
                      <a href="https://www.ipathsala.com/software-courses">
                        Software Management Courses
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Column 3 */}
              <div className="col-md-3 col-sm-6">
                <div className="footer-link mt-45">
                  <h4 className="footer-title">Contact Info</h4>
                  <ul className="link-list">
                    <li>
                      <p>
                        2nd Floor of
                        <br />
                        ZBRDST Express B/8,
                        <br />
                        Aurobindo Nagar, Judge Court Road,
                        <br />
                        Midnapore - 721101
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Column 4 */}
              <div className="col-md-3 col-sm-6">
                <a href="https://bluehorse.in" target="_blank">
                  <img
                    className="copyright-logo"
                    src="https://www.ipathsala.com/images/bluehorse.png"
                    alt="ipathsala-logo"
                  />
                </a>
              </div>
            </div>

            {/* Social + Menu */}
            <div className="footer-widget-wrapper">
              <div className="footer-social">
                <ul className="social">
                  <li>
                    <a
                      href="https://www.facebook.com/ipathsala"
                      target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/ipathsala" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-menu">
                <ul className="menu">
                  <li>
                    <a href="/home">Home</a>
                  </li>
                  <li>
                    <a href="/about-us">About</a>
                  </li>
                  <li>
                    <a href="/event">Events</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <div className="container">
            <div className="text-center">
              <p>
                Copyright © 2022 ipathsala. All Rights Reserved. Powered by{" "}
                <a href="https://iudyog.com/" target="_blank">
                  iUdyog
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Tool */}
      {/*  */}

      {/* Back To Top */}
      <a href="#" className="back-to-top">
        <i className="fal fa-chevron-up"></i>
      </a>
    </>
  );
}
