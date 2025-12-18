"use client";

import React, { useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { submitFormData } from "@/lib/contact";

const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    };
    let isValid = true;

    if (!formData.firstname.trim()) {
      newErrors.firstname = "First name is required";
      isValid = false;
    }
    if (!formData.lastname.trim()) {
      newErrors.lastname = "Last name is required";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    try {
      if (isSubmitting) return; // prevent double-click
      setIsSubmitting(true);

      const isValid = validateForm();
      if (!isValid) {
        setIsSubmitting(false);
        return;
      }
      const response = await submitFormData(
        {},
        "3fc09a5c-2a61-43ba-bb15-af00aa92e70a",
        formData
      );

      toast.success("Your message has been sent successfully!");
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        message: "",
      });
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast.error("Your message could not be sent. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  // setTimeout(() => {
  //   setErrors({ firstname: "", lastname: "", email: "", message: "" });
  // }, 4000);

  return (
    <div className="row form-outer">
      {/* Left Side */}
      <div className="image-column col-lg-6 col-md-12 col-sm-12 con_item">
        <div className="layer-image">
          <Image
            src="/images/contactus/Amficslogo.png"
            alt="Amfics Logo"
            width={300}
            height={300}
            className="img-fluid"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="form-column col-lg-6 col-md-12 col-sm-12">
        <div className="default-form contact-form">
          <div className="title contact_text text-center mb-4">
            <h4>Contact Us</h4>
          </div>

          <form id="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="row mid-spacing">
              {/* First Name */}
              <div className="form-group col-lg-6 col-md-6 col-sm-12">
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  value={formData.firstname}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors.firstname && (
                  <span className="text-danger">{errors.firstname}</span>
                )}
              </div>

              {/* Last Name */}
              <div className="form-group col-lg-6 col-md-6 col-sm-12">
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  value={formData.lastname}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors.lastname && (
                  <span className="text-danger">{errors.lastname}</span>
                )}
              </div>

              {/* Email */}
              <div className="form-group col-lg-12 col-md-6 col-sm-12">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors.email && (
                  <span className="text-danger">{errors.email}</span>
                )}
              </div>

              {/* Message */}
              <div className="form-group col-lg-12 col-md-12 col-sm-12">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors.message && (
                  <span className="text-danger">{errors.message}</span>
                )}
              </div>

              {/* Button */}
              <div className="form-group col-lg-12 col-md-12 col-sm-12">
                <button
                  type="button"
                  className="theme-btn btn-style-four"
                  onClick={handleSubmit}
                  disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
