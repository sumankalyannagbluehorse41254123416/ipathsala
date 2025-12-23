"use client";
import { submitFormData } from "@/lib/contact";
import { error } from "console";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ApplyNowSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };
  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
      isValid = false;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
      isValid = false;
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const isValid = validateForm();
    if (!isValid) return;

    try {
      setIsSubmitting(true);

      await submitFormData(
        {},
        "d75c49ea-0ac9-4ca5-9f4f-3bba837c9729",
        formData
      );

      toast.success("submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Your message could not be sent. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="contact-area">
      <input type="hidden" id="titlenew" name="titlenew" value="" />

      <div className="container">
        <div className="contact-form">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="contact-title text-center">
                <h3 className="title">APPLY NOW</h3>
                <div>
                  Here is our event schedule where you can get information about
                  time schedule about this event so it's very easy for you to
                  manage your time and schedule
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="contact-form-wrapper">
                <form className="apply_now_form" onSubmit={handleSubmit}>
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
                          value={formData.name}
                          onChange={handleChange}
                        />
                        {errors.name && (
                          <span className="text-danger">{errors.name}</span>
                        )}
                      </div>
                    </div>

                    <div className="col-md-7">
                      <div className="single-form">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="E-mail"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && (
                          <span className="text-danger">{errors.email}</span>
                        )}
                      </div>
                    </div>

                    <div className="col-md-5">
                      <div className="single-form">
                        <input
                          type="text"
                          name="phone"
                          id="mobile"
                          placeholder="Phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                        {errors.phone && (
                          <span className="text-danger">{errors.phone}</span>
                        )}
                      </div>
                    </div>

                    <div className="col-md-7">
                      <div className="single-form">
                        <select
                          required
                          name="subject"
                          id="subject"
                          value={formData.subject}
                          onChange={handleChange as any}>
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
                        {errors.subject && (
                          <span className="text-danger">{errors.subject}</span>
                        )}
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="single-form">
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Write here..."
                          value={formData.message}
                          onChange={handleChange as any}
                        />

                        {errors.message && (
                          <span className="text-danger">{errors.message}</span>
                        )}
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="single-form text-center">
                        <button
                          type="submit"
                          id="submitBtn"
                          className="main-btn"
                          disabled={isSubmitting}>
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
