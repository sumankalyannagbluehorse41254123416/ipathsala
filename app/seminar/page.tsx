import React from "react";

const SeminarSection = () => {
  return (
    <section className="seminar_section">
      <div className="contact-form">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-title text-center">
              <div className="feedback485">
                <i className="fa fa-commenting"></i>
              </div>
              <p>
                Thank you for attending the Seminar. Please Share your feedback.
                <br />
                We will also share Seminar Matrerial to your Whatsapp mobile
                Number
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-form-wrapper">
              <form>
                <input type="hidden" name="_token" value="" />

                <div className="row">
                  <div className="col-md-6">
                    <div className="single-form">
                      <input
                        type="text"
                        name="seminarCode"
                        id="seminarCode"
                        placeholder="Seminar Code"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="single-form">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="single-form">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="E-mail"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="single-form">
                      <input
                        type="text"
                        name="mobileNo"
                        id="mobileNo"
                        placeholder="Mobile No (10 Digit Whatsapp No)"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="single-form">
                      <input
                        type="text"
                        name="organisation"
                        id="organisation"
                        placeholder="Organisation"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="single-form">
                      <input
                        type="text"
                        name="department"
                        id="department"
                        placeholder="Department"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="single-form">
                      <label>Share you Rating out of 5</label>
                      <div className="stars">
                        <form action="">
                          <input
                            className="star star-5"
                            id="star-5"
                            type="radio"
                            value="5"
                            name="rating"
                          />
                          <label
                            className="star star-5"
                            htmlFor="star-5"></label>

                          <input
                            className="star star-4"
                            id="star-4"
                            type="radio"
                            value="4"
                            name="rating"
                          />
                          <label
                            className="star star-4"
                            htmlFor="star-4"></label>

                          <input
                            className="star star-3"
                            id="star-3"
                            type="radio"
                            value="3"
                            name="rating"
                          />
                          <label
                            className="star star-3"
                            htmlFor="star-3"></label>

                          <input
                            className="star star-2"
                            id="star-2"
                            type="radio"
                            value="2"
                            name="rating"
                          />
                          <label
                            className="star star-2"
                            htmlFor="star-2"></label>

                          <input
                            className="star star-1"
                            id="star-1"
                            type="radio"
                            value="1"
                            name="rating"
                          />
                          <label
                            className="star star-1"
                            htmlFor="star-1"></label>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="single-form">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Remarks (What you like / disliked about the training?)"></textarea>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="Field"></div>
                  </div>

                  <script src="https://www.google.com/recaptcha/api.js"></script>

                  <div className="col-md-12">
                    <div className="single-form text-center">
                      <button type="submit" id="submitBtn" className="main-btn">
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
    </section>
  );
};

export default SeminarSection;
