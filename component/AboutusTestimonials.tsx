"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Testimonials() {
  return (
    <section className="testimonials-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="testimonials-title">
              <h2 className="title">Our Students Review</h2>
              <span className="line"></span>
              <p>
                Believe in yourself, take on your challenges, dig deep within
                yourself to conquer fears. Never let anyone bring you down. You
                got to keep going.
              </p>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="testimonials-wrapper">
              <div className="testimonials-shape shape-1"></div>
              <div className="testimonials-shape shape-2"></div>

              <div className="row no-gutters">
                {/* IMAGE SLIDER */}
                <div className="col-lg-6 col-md-5">
                  <div className="testimonials-image">
                    <Swiper
                      modules={[Navigation, Autoplay]}
                      navigation={{
                        nextEl: ".next",
                      }}
                      autoplay={{ delay: 4000 }}
                      loop>
                      <SwiperSlide>
                        <div className="single-testimonial-image">
                          <img
                            src="https://wip.tezcommerce.com:3304/admin/module/49/1649922392776.png"
                            alt="Biswajit Kolya"
                          />
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="single-testimonial-image">
                          <img
                            src="https://wip.tezcommerce.com:3304/admin/module/49/1649922428311.png"
                            alt="Soumita Das"
                          />
                        </div>
                      </SwiperSlide>
                    </Swiper>

                    <span className="next">
                      Next <i className="far fa-long-arrow-right"></i>
                    </span>
                  </div>
                </div>

                {/* CONTENT SLIDER */}
                <div className="col-lg-6 col-md-7">
                  <div className="testimonials-content">
                    <Swiper
                      modules={[Autoplay]}
                      autoplay={{ delay: 4000 }}
                      loop
                      allowTouchMove={false}>
                      <SwiperSlide>
                        <div className="single-testimonial-content">
                          <div className="content-text">
                            <i className="fas fa-quote-right"></i>
                            Even a small improvement in your success could give
                            you the motivational boost you need to study harder
                            next time, kick-starting a virtual cycle of
                            increasingly more success and motivation!
                          </div>
                          <div className="content-meta">
                            <p className="name">Biswajit Kolya</p>
                            <p className="designation">Student</p>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="single-testimonial-content">
                          <div className="content-text">
                            <i className="fas fa-quote-right"></i>
                            It may sound like a tall order to love what you are
                            doing or learning to do for some of us. But,
                            unfortunately, it’s not easy to find the motivation
                            for that subject you don’t like to study.
                          </div>
                          <div className="content-meta">
                            <p className="name">Soumita Das</p>
                            <p className="designation">Student</p>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
                {/* END */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
