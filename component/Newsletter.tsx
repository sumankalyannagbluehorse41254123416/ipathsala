"use client";

import { submitFormData } from "@/lib/contact";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface NewsletterProps {
  title?: string;
  description?: string;
}
const Newsletter: React.FC<NewsletterProps> = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    return /^[A-Za-z0-9._%+-]+@[A-Za-z][A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(
      email
    );
  };

  const handleSubscribe = async () => {
    setMessage("");
    setError("");

    if (!email.trim()) {
      // setError("Email field is required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      const newsletterData = { Email: email };
      const response = await submitFormData(
        {},
        "0c05ebae-bd15-4a3d-9d3d-d41f915bb95e",
        newsletterData
      );

      if (response?.success) {
        toast.success("Your email has been sent successfully!");
        setEmail("");
      }
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast.error("Your email could not be sent. Please try again.");
      setError("Your email could not be sent. Please try again.");
    }
  };

  return (
    <section className="newsletter-area-2">
      <div className="container">
        <div
          className="newsletter-wrapper bg_cover wow zoomIn"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
          style={{
            backgroundImage: "url()",
          }}>
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="section-title-2 mt-25">
                <h2 className="title">Subscribe our Newsletter</h2>
                <span className="line"></span>
                <p>
                  Get actionable career-building advice and updates on new
                  educational programs straight to your inbox.
                </p>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="newsletter-form mt-30">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                  method="POST">
                  <input
                    id="dsubscribers_email"
                    type="email"
                    name="email"
                    placeholder="Enter your e-mail"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <button
                    type="submit"
                    className="main-btn main-btn-2"
                    onClick={handleSubscribe}>
                    Subscribe now
                  </button>
                  {message && (
                    <div className="msgblog text-success text-center contact-gap">
                      {message}
                    </div>
                  )}
                  {error && (
                    <div className="msgblog text-danger text-center contact-gap">
                      {error}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
