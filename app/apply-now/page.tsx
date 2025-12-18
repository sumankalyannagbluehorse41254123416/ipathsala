"use client";
import React from "react";

const ApplyNowSection = () => {
  return (
    <section className="contact-area">
      <input type="hidden" id="titlenew" name="titlenew" value="" />

      <div className="container">
        <div className="contact-form">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="contact-title text-center">
                <h3 className="title">APPLY NOW</h3>
                <p>
                  Here is our event schedule where you can get information about
                  time schedule about this event so it's very easy for you to
                  manage your time and schedule
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="contact-form-wrapper">
                <form
                  className="apply_now_form"
                  action="https://www.ipathsala.com/contact-us/save"
                  method="post">
                  <input
                    type="hidden"
                    name="_token"
                    value="V8u2eqU4H7sbQo85aaP1KoabpPhkRiFNyfByf6au"
                  />

                  <div className="row">
                    <div className="col-md-5">
                      <div className="single-form">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Name"
                        />
                        <span id="nameErr" style={{ color: "red" }}></span>
                      </div>
                    </div>

                    <div className="col-md-7">
                      <div className="single-form">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="E-mail"
                        />
                        <span id="emailErr" style={{ color: "red" }}></span>
                      </div>
                    </div>

                    <div className="col-md-5">
                      <div className="single-form">
                        <input
                          type="text"
                          name="phone"
                          id="mobile"
                          placeholder="Phone"
                        />
                        <span id="mobileErr" style={{ color: "red" }}></span>
                      </div>
                    </div>

                    <div className="col-md-7">
                      <div className="single-form">
                        <select required name="subject" id="subject">
                          <option value="Diploma In Front Office">
                            Diploma In Front Office
                          </option>
                          <option value="Diploma In Accomodaation Operation (Housekeeping)">
                            Diploma In Accomodation Operation (Housekeeping)
                          </option>
                          <option value="Diploma In Food and Beverage Services">
                            Diploma In Food and Beverage Services
                          </option>
                          <option value="Diploma In Food and Beverage Production">
                            Diploma In Food and Beverage Production
                          </option>
                          <option value="Craftsmanship course in f and b services">
                            Craftsmanship course in f and b services
                          </option>
                          <option value="Craftsmanship course in f and b production">
                            Craftsmanship course in f and b production
                          </option>
                          <option value="Industrial Training on PHP Full Stack Development with Laravel Framework">
                            Industrial Training on PHP Full Stack Development
                            with Laravel Framework
                          </option>
                          <option value="Industrial Training on Hybrid Mobile and Web Apps Development with Node Js, Angular with Ionic framework">
                            Industrial Training on Hybrid Mobile and Web Apps
                            Development with Node Js, Angular with Ionic
                            framework
                          </option>
                          <option value="Industrial Training on eCommerce and Magento Development">
                            Industrial Training on eCommerce and Magento
                            Development
                          </option>
                          <option value="Industrial Training on Software Testing">
                            Industrial Training on Software Testing
                          </option>
                        </select>
                        <span id="subjectErr" style={{ color: "red" }}></span>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="single-form">
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Write here..."></textarea>
                        <span id="messageErr" style={{ color: "red" }}></span>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="single-form text-center">
                        <button
                          type="button"
                          id="submitBtn"
                          className="main-btn">
                          Submit now
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyNowSection;
