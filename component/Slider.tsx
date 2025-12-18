"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function HomeSlider() {
  const slides = [
    {
      bg: "https://wip.tezcommerce.com:3304/admin/module/49/1649760015149.webp",
      title: "Creating Passionate Coders",
      desc: "Expert Coders on Job to Convert Graduates to Real Programmer via Coaching the Fundamentals and make them go through Rigorous Coding Exercises on Live Projects",
    },
    {
      bg: "https://wip.tezcommerce.com:3304/admin/module/49/1689250831408.jpg",
      title: "Detailed Theory and Live Practical session in Hotel Management",
      desc: "An IT & Hotel Management academy that provides short term job oriented best training courses to young graduates and undergraduates.",
    },
    {
      bg: "https://wip.tezcommerce.com:3304/admin/module/49/1650444222662.webp",
      title: "Focus Industries",
      desc: "Highest Job Creation , Glamorous Industry , Personal Growth , Career Growth , Quality of Life",
    },
  ];

  return (
    <section className="slider-area slider-03 slider-active" style={{position:"relative"}}>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="slick-initialized slick-slider">
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div
              className="single-slider d-flex align-items-center bg_cover"
              style={{
                backgroundImage: `url(${s.bg})`,
              }}>
              <div className="container">
                <div className="slider-content slider-content-3 text-center">
                  <h1 className="title">{s.title}</h1>
                  <p>{s.desc}</p>
                  <ul className="slider-btn">
                    <li>
                      <a
                        className="main-btn main-btn-2"
                        href="https://www.ipathsala.com/hotel-courses">
                        View Courses
                      </a>
                    </li>
                    <li>
                      <a
                        className="main-btn"
                        href="https://www.ipathsala.com/about-us">
                        Learn more
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* SAME ARROW BUTTONS */}
      <span className="prev slick-arrow">
        <i className="fas fa-chevron-left"></i>
      </span>
      <span className="next slick-arrow">
        <i className="fas fa-chevron-right"></i>
      </span>
    </section>
  );
}
