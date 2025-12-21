// "use client";

// import { submitFormData } from "@/lib/contact";
// import { useState } from "react";
// import { toast } from "react-toastify";

// const SeminarSection: React.FC = () => {
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     seminarCode: "",
//     name: "",
//     email: "",
//     phone: "",
//     organisation: "",
//     department: "",
//     message: "",
//   });
//   const [errors, setErrors] = useState({
//     seminarCode: "",
//     name: "",
//     email: "",
//     phone: "",
//     organisation: "",
//     department: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setErrors((prev) => ({ ...prev, [name]: "" }));
//   };
//   const validateForm = () => {
//     const newErrors = {
//       seminarCode: "",
//       name: "",
//       email: "",
//       phone: "",
//       organisation: "",
//       department: "",
//       message: "",
//     };
//     let isValid = true;

//     if (!formData.seminarCode.trim()) {
//       newErrors.seminarCode = "Seminar Code is required";
//       isValid = false;
//     }
//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//       isValid = false;
//     }
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//       isValid = false;
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Enter a valid email address";
//       isValid = false;
//     }
//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone is required";
//       isValid = false;
//     }
//     if (!formData.organisation.trim()) {
//       newErrors.organisation = "Organisation is required";
//       isValid = false;
//     }
//     if (!formData.department.trim()) {
//       newErrors.department = "Department is required";
//       isValid = false;
//     }
//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required";
//       isValid = false;
//     }
//     setErrors(newErrors);
//     return isValid;
//   };
//   const handleSubmit = async () => {
//     try {
//       if (isSubmitting) {
//         return;
//       }
//       setIsSubmitting(true);
//       const isValid = validateForm();
//       if (!isValid) {
//         setIsSubmitting(false);
//         return;
//       }

//       const response = await submitFormData(
//         {},
//         "4f495a14-1eae-482c-a1e4-1163431281ee",
//         formData
//       );
//     } catch (error: any) {
//       console.error("Error submitting form:", error);
//       toast.error("Your message could not be sent. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section className="seminar_section">
//       <div className="contact-form">
//         <div className="row justify-content-center">
//           <div className="col-lg-8">
//             <div className="contact-title text-center">
//               <div className="feedback485">
//                 {/* <i className="fa fa-commenting"></i> */}
//                 <i className="fa-regular fa-comment"></i>
//               </div>
//               <p>
//                 Thank you for attending the Seminar. Please Share your feedback.
//                 <br />
//                 We will also share Seminar Matrerial to your Whatsapp mobile
//                 Number
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="row justify-content-center">
//           <div className="col-lg-8">
//             <div className="contact-form-wrapper">
//               <form>
//                 <input type="hidden" name="_token" value="" />

//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="single-form">
//                       <input
//                         type="text"
//                         name="seminarCode"
//                         id="seminarCode"
//                         placeholder="Seminar Code"
//                         value={formData.seminarCode}
//                         onChange={handleChange}
//                       />
//                       {errors.seminarCode && (
//                         <span className="text-danger">
//                           {errors.seminarCode}
//                         </span>
//                       )}
//                     </div>
//                   </div>

//                   <div className="col-md-6">
//                     <div className="single-form">
//                       <input
//                         type="text"
//                         name="name"
//                         id="name"
//                         placeholder="Name"
//                         value={formData.name}
//                         onChange={handleChange}
//                       />
//                       {errors.name && (
//                         <span className="text-danger">{errors.name}</span>
//                       )}
//                     </div>
//                   </div>

//                   <div className="col-md-6">
//                     <div className="single-form">
//                       <input
//                         type="email"
//                         name="email"
//                         id="email"
//                         placeholder="E-mail"
//                         value={formData.email}
//                         onChange={handleChange}
//                       />
//                       {errors.email && (
//                         <span className="text-danger">{errors.email}</span>
//                       )}
//                     </div>
//                   </div>

//                   <div className="col-md-6">
//                     <div className="single-form">
//                       <input
//                         type="number"
//                         name="phone"
//                         id="phone"
//                         placeholder="Mobile No (10 Digit Whatsapp No)"
//                         value={formData.phone}
//                         onChange={handleChange}
//                       />
//                       {errors.phone && (
//                         <span className="text-danger">{errors.phone}</span>
//                       )}
//                     </div>
//                   </div>

//                   <div className="col-md-6">
//                     <div className="single-form">
//                       <input
//                         type="text"
//                         name="organisation"
//                         id="organisation"
//                         placeholder="Organisation"
//                         value={formData.organisation}
//                         onChange={handleChange}
//                       />
//                       {errors.organisation && (
//                         <span className="text-danger">
//                           {errors.organisation}
//                         </span>
//                       )}
//                     </div>
//                   </div>

//                   <div className="col-md-6">
//                     <div className="single-form">
//                       <input
//                         type="text"
//                         name="department"
//                         id="department"
//                         placeholder="Department"
//                         value={formData.department}
//                         onChange={handleChange}
//                       />
//                       {errors.department && (
//                         <span className="text-danger">{errors.department}</span>
//                       )}
//                     </div>
//                   </div>

// <div className="col-md-6">
//   <div className="single-form">
//     <label>Share you Rating out of 5</label>
//     <div className="stars">
//       <input
//         className="star star-5"
//         id="star-5"
//         type="radio"
//         value="5"
//         name="rating"
//       />
//       <label className="star star-5" htmlFor="star-5"></label>

//       <input
//         className="star star-4"
//         id="star-4"
//         type="radio"
//         value="4"
//         name="rating"
//       />
//       <label className="star star-4" htmlFor="star-4"></label>

//       <input
//         className="star star-3"
//         id="star-3"
//         type="radio"
//         value="3"
//         name="rating"
//       />
//       <label className="star star-3" htmlFor="star-3"></label>

//       <input
//         className="star star-2"
//         id="star-2"
//         type="radio"
//         value="2"
//         name="rating"
//       />
//       <label className="star star-2" htmlFor="star-2"></label>

//       <input
//         className="star star-1"
//         id="star-1"
//         type="radio"
//         value="1"
//         name="rating"
//       />
//       <label className="star star-1" htmlFor="star-1"></label>
//     </div>
//   </div>
// </div>

//                   <div className="col-md-12">
//                     <div className="single-form">
//                       <textarea
//                         name="message"
//                         id="message"
//                         placeholder="Remarks (What you like / disliked about the training?)"
//                         value={formData.message}
//                         onChange={handleChange as any}
//                       />
//                     </div>
//                   </div>

//                   <div className="col-md-12">
//                     <div className="Field"></div>
//                   </div>

//                   <div className="col-md-12">
//                     <div className="single-form text-center">
//                       <button
//                         type="submit"
//                         // id="submitBtn"
//                         className="main-btn"
//                         onClick={handleSubmit}>
//                         Submit now
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SeminarSection;
"use client";

import { submitFormData } from "@/lib/contact";
import { useState } from "react";
import { toast } from "react-toastify";

const SeminarSection: React.FC = () => {
  // const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    seminarCode: "",
    name: "",
    email: "",
    phone: "",
    organisation: "",
    department: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    seminarCode: "",
    name: "",
    email: "",
    phone: "",
    organisation: "",
    department: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {
      seminarCode: "",
      name: "",
      email: "",
      phone: "",
      organisation: "",
      department: "",
      message: "",
    };

    let isValid = true;

    if (!formData.seminarCode.trim()) {
      newErrors.seminarCode = "Seminar Code is required";
      isValid = false;
    }
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
    if (!formData.organisation.trim()) {
      newErrors.organisation = "Organisation is required";
      isValid = false;
    }
    if (!formData.department.trim()) {
      newErrors.department = "Department is required";
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
        "4f495a14-1eae-482c-a1e4-1163431281ee",
        formData
      );

      toast.success("Feedback submitted successfully!");

      setFormData({
        seminarCode: "",
        name: "",
        email: "",
        phone: "",
        organisation: "",
        department: "",
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
    <section className="seminar_section">
      <div className="contact-form">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-title text-center">
              <div className="feedback485">
                <i className="fa-regular fa-comment"></i>
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
              <form onSubmit={handleSubmit}>
                <input type="hidden" name="_token" value="" />

                <div className="row">
                  <div className="col-md-6">
                    <div className="single-form">
                      <input
                        type="text"
                        name="seminarCode"
                        id="seminarCode"
                        placeholder="Seminar Code"
                        value={formData.seminarCode}
                        onChange={handleChange}
                      />
                      {errors.seminarCode && (
                        <span className="text-danger">
                          {errors.seminarCode}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6">
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

                  <div className="col-md-6">
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

                  <div className="col-md-6">
                    <div className="single-form">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Mobile No (10 Digit Whatsapp No)"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      {errors.phone && (
                        <span className="text-danger">{errors.phone}</span>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="single-form">
                      <input
                        type="text"
                        name="organisation"
                        id="organisation"
                        placeholder="Organisation"
                        value={formData.organisation}
                        onChange={handleChange}
                      />
                      {errors.organisation && (
                        <span className="text-danger">
                          {errors.organisation}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="single-form">
                      <input
                        type="text"
                        name="department"
                        id="department"
                        placeholder="Department"
                        value={formData.department}
                        onChange={handleChange}
                      />
                      {errors.department && (
                        <span className="text-danger">{errors.department}</span>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-form">
                      <label>Share you Rating out of 5</label>
                      <div className="stars">
                        <input
                          className="star star-5"
                          id="star-5"
                          type="radio"
                          value="5"
                          name="rating"
                        />
                        <label className="star star-5" htmlFor="star-5"></label>

                        <input
                          className="star star-4"
                          id="star-4"
                          type="radio"
                          value="4"
                          name="rating"
                        />
                        <label className="star star-4" htmlFor="star-4"></label>

                        <input
                          className="star star-3"
                          id="star-3"
                          type="radio"
                          value="3"
                          name="rating"
                        />
                        <label className="star star-3" htmlFor="star-3"></label>

                        <input
                          className="star star-2"
                          id="star-2"
                          type="radio"
                          value="2"
                          name="rating"
                        />
                        <label className="star star-2" htmlFor="star-2"></label>

                        <input
                          className="star star-1"
                          id="star-1"
                          type="radio"
                          value="1"
                          name="rating"
                        />
                        <label className="star star-1" htmlFor="star-1"></label>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="single-form">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Remarks (What you like / disliked about the training?)"
                        value={formData.message}
                        onChange={handleChange}
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
                        className="main-btn"
                        disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit now"}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              {/* form end */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeminarSection;
