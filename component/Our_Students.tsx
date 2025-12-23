"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Testimonials() {
  const reviews = [
    {
      text: "It may sound like a tall order to love what you are doing or learning to do for some of us. But, unfortunately, it’s not easy to find the motivation for that subject you don’t like to study, no matter how many quotes from iconic developers you read!",
    },
    {
      text: "Even a small improvement in your success could give you the motivational boost you need to study harder next time, kick-starting a virtual cycle of increasingly more success and motivation!",
    },
  ];

  const students = [
    {
      img: "https://wip.tezcommerce.com:3304/admin/module/49/1649922305247.png",
      name: "Soumita Das",
      designation: "Student",
    },
    {
      img: "https://wip.tezcommerce.com:3304/admin/module/49/1649922320606.png",
      name: "Biswajit Kolya",
      designation: "Student",
    },
  ];

  return (
    <section className="testimonials-area">
      <div className="container">
        <div className="row">
          {/* LEFT SIDE – TEXT SLIDER */}
          <div className="col-lg-6">
            <div className="testimonial-wrapper-2 mt-40">
              <div className="section-title-2">
                <h2 className="title">Our Students Review</h2>
                <span className="line"></span>
              </div>

              <div className="testimonials-content">
                <Swiper modules={[Autoplay]} autoplay={{ delay: 3000 }} loop>
                  {reviews.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="single-testimonial-content">
                        <div className="content-text">
                          <i className="fas fa-quote-right"></i>
                          {item.text}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE – IMAGE SLIDER */}
          <div className="col-lg-6">
            <div className="testimonial-wrapper-2">
              <div className="testimonials-imatestimonials-image slick-initialized slick-sliderge">
                {/* Swiper Navigation Button */}
                <span className="next slick-arrow swiper-button-next">
                  Next <i className="fa-solid fa-arrow-right-long"></i>
                </span>

                <Swiper
                  modules={[Navigation, Autoplay]}
                  navigation={{
                    nextEl: ".swiper-button-next",
                  }}
                  autoplay={{ delay: 3000 }}
                  loop>
                  {students.map((student, index) => (
                    <SwiperSlide key={index}>
                      <div className="single-testimonial-image">
                        <Image
                          src={student.img}
                          alt={student.name}
                          width={250}
                          height={400}
                        />
                        <div className="content-meta tesConMeta">
                          <p className="name">{student.name}</p>
                          <p className="designation">{student.designation}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
