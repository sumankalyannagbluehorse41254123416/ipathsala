"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchPageData } from "@/lib/page";
import { fetchBlogData } from "@/app/action/blog";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface Testimonial {
  name: string;
  designation: string;
  image: string;
  text: string;
}
export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        const res = await fetchBlogData();
        // console.log("ress****", res);

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
        <div className="row">
          <div className="col-lg-6">
            <div className="testimonial-wrapper-2 mt-40">
              <div className="section-title-2">
                <h2 className="title">Our Students Review</h2>
                <span className="line"></span>
              </div>

              <div className="testimonials-content">
                <Swiper modules={[Autoplay]} autoplay={{ delay: 3000 }} loop>
                  {testimonials.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="single-testimonial-content">
                        <div className="content-text">
                          <i className="fas fa-quote-right"></i>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: item.text,
                            }}
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="testimonial-wrapper-2">
              <div className="testimonials-imatestimonials-image slick-initialized slick-sliderge">
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
                  {testimonials.map((student, index) => (
                    <SwiperSlide key={index}>
                      <div className="single-testimonial-image">
                        <Image
                          src={student.image}
                          alt={student.name}
                          width={250}
                          height={400}
                        />
                        <div className="content-meta tesConMeta d-flex">
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
