// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";

// export default function Testimonials() {
//   return (
//     <section className="testimonials-area">
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-lg-4">
//             <div className="testimonials-title">
//               <h2 className="title">Our Students Review</h2>
//               <span className="line"></span>
//               <p>
//                 Believe in yourself, take on your challenges, dig deep within
//                 yourself to conquer fears. Never let anyone bring you down. You
//                 got to keep going.
//               </p>
//             </div>
//           </div>

//           <div className="col-lg-8">
//             <div className="testimonials-wrapper">
//               <div className="testimonials-shape shape-1"></div>
//               <div className="testimonials-shape shape-2"></div>

//               <div className="row no-gutters">
//                 {/* IMAGE SLIDER */}
//                 <div className="col-lg-6 col-md-5">
//                   <div className="testimonials-image">
//                     <Swiper
//                       modules={[Navigation, Autoplay]}
//                       navigation={{
//                         nextEl: ".next",
//                       }}
//                       autoplay={{ delay: 4000 }}
//                       loop>
//                       <SwiperSlide>
//                         <div className="single-testimonial-image">
//                           <img
//                             src="https://wip.tezcommerce.com:3304/admin/module/49/1649922392776.png"
//                             alt="Biswajit Kolya"
//                           />
//                         </div>
//                       </SwiperSlide>

//                       <SwiperSlide>
//                         <div className="single-testimonial-image">
//                           <img
//                             src="https://wip.tezcommerce.com:3304/admin/module/49/1649922428311.png"
//                             alt="Soumita Das"
//                           />
//                         </div>
//                       </SwiperSlide>
//                     </Swiper>

//                     <span className="next">
//                       Next <i className="far fa-long-arrow-right"></i>
//                     </span>
//                   </div>
//                 </div>

//                 {/* CONTENT SLIDER */}
//                 <div className="col-lg-6 col-md-7">
//                   <div className="testimonials-content">
//                     <Swiper
//                       modules={[Autoplay]}
//                       autoplay={{ delay: 4000 }}
//                       loop
//                       allowTouchMove={false}>
//                       <SwiperSlide>
//                         <div className="single-testimonial-content">
//                           <div className="content-text">
//                             <i className="fas fa-quote-right"></i>
//                             Even a small improvement in your success could give
//                             you the motivational boost you need to study harder
//                             next time, kick-starting a virtual cycle of
//                             increasingly more success and motivation!
//                           </div>
//                           <div className="content-meta">
//                             <p className="name">Biswajit Kolya</p>
//                             <p className="designation">Student</p>
//                           </div>
//                         </div>
//                       </SwiperSlide>

//                       <SwiperSlide>
//                         <div className="single-testimonial-content">
//                           <div className="content-text">
//                             <i className="fas fa-quote-right"></i>
//                             It may sound like a tall order to love what you are
//                             doing or learning to do for some of us. But,
//                             unfortunately, it’s not easy to find the motivation
//                             for that subject you don’t like to study.
//                           </div>
//                           <div className="content-meta">
//                             <p className="name">Soumita Das</p>
//                             <p className="designation">Student</p>
//                           </div>
//                         </div>
//                       </SwiperSlide>
//                     </Swiper>
//                   </div>
//                 </div>
//                 {/* END */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { fetchBlogData } from "@/app/action/blog";

interface Testimonial {
  name: string;
  designation: string;
  image: string;
  text: string;
}

const AboutusTestimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        const res = await fetchBlogData();
        console.log("ress****", res);

        if (!res?.status || !res.userPostdata?.length) return;

        const mappedData: Testimonial[] = res.userPostdata
          .slice(10, 12)
          .map((item: any) => ({
            name: item.author_name,
            designation: "Student",
            image: item.featured_image_url || "/images/default-user.png",
            text: item.excerpt,
          }));

        setTestimonials(mappedData);
      } catch (error) {
        console.error("Failed to load testimonials", error);
      }
    };

    loadTestimonials();
  }, []);

  if (!testimonials.length) return null;

  return (
    <section className="testimonials-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="testimonials-title">
              <h2 className="title">Our Students Review</h2>
              <span className="line"></span>
              <p>
                Believe in yourself, take on challenges and conquer your fears.
              </p>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="testimonials-wrapper position-relative">
              <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                loop
                speed={800}
                navigation={{
                  nextEl: ".testimonials-next",
                  prevEl: ".testimonials-prev",
                }}>
                {testimonials.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="row no-gutters">
                      <div className="col-lg-6 col-md-5">
                        <div className="testimonials-image">
                          <img src={item.image} alt={item.name} />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-7">
                        <div className="testimonials-content">
                          <div className="single-testimonial-content">
                            <div className="content-text">
                              <i className="fa-solid fa-quote-right" />
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: item.text,
                                }}
                              />
                              {/* {item.text} */}
                            </div>
                            <div className="content-meta">
                              <p className="name">{item.name}</p>
                              <div className="designation" />
                              <p className="designation">{item.designation}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <span className="testimonials-next next slick-arrow">
                Next <i className="fa-solid fa-arrow-right" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutusTestimonials;
