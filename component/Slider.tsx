// "use client";

// import { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { fetchAllBanners } from "@/lib/banner";

// interface BannerData {
//   id: number;
//   title: string;
//   description: string;
//   desktopImage: string;
//   collection?: string;
//   status: string;
//   type: string;
// }

// export default function HomeSlider() {
//   const [slides, setSlides] = useState<BannerData[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadBanners = async () => {
//       try {
//         const res = await fetchAllBanners({
//           host: window.location.host,
//         });

//         console.log("Banner API response:", res);

//         if (res?.status && Array.isArray(res.bannerData)) {
//           const activeHeroBanners = res.bannerData.filter(
//             (item: BannerData) =>
//               item.status === "active" && item.collection === "Home Banner"
//           );
//           console.log("activeHeroBanners", activeHeroBanners);

//           setSlides(activeHeroBanners);
//         }
//       } catch (error) {
//         console.error("Banner fetch error:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadBanners();
//   }, []);

//   if (loading || slides.length === 0) return null;

//   return (
//     <section
//       className="slider-area slider-03 slider-active"
//       style={{ position: "relative" }}>
//       <Swiper
//         modules={[Navigation, Autoplay]}
//         loop={true}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         onSwiper={(swiper) => {
//           setTimeout(() => {
//             swiper.params.navigation = {
//               prevEl: ".prev",
//               nextEl: ".next",
//             };
//             swiper.navigation.destroy();
//             swiper.navigation.init();
//             swiper.navigation.update();
//           });
//         }}
//         className="slick-initialized slick-slider">
//         {slides.map((s) => (
//           <SwiperSlide key={s.id}>
//             <div
//               className="single-slider d-flex align-items-center bg_cover"
//               style={{ backgroundImage: `url(${s.desktopImage})` }}>
//               <div className="container">
//                 <div className="slider-content slider-content-3 text-center">
//                   <h1 className="title">{s.title}</h1>

//                   <div dangerouslySetInnerHTML={{ __html: s.description }} />

//                   <ul className="slider-btn">
//                     <li>
//                       <a
//                         className="main-btn main-btn-2"
//                         href="https://www.ipathsala.com/hotel-courses">
//                         View Courses
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         className="main-btn"
//                         href="https://www.ipathsala.com/about-us">
//                         Learn more
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* SAME ARROW BUTTONS */}
//       <span className="prev slick-arrow">
//         <i className="fas fa-chevron-left"></i>
//       </span>
//       <span className="next slick-arrow">
//         <i className="fas fa-chevron-right"></i>
//       </span>
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { fetchAllBanners } from "@/lib/banner";

interface BannerData {
  id: number;
  title: string;
  description: string;
  desktopImage: string;
  collection?: string;
  status: string;
  type: string;
}

export default function HomeSlider() {
  const [slides, setSlides] = useState<BannerData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBanners = async () => {
      try {
        const res = await fetchAllBanners({
          host: window.location.host,
        });

        // console.log("Banner API response:", res);

        if (res?.status && Array.isArray(res.bannerData)) {
          const activeHeroBanners = res.bannerData.filter(
            (item: BannerData) =>
              item.status === "active" && item.collection === "Home Banner"
          );
          // console.log("activeHeroBanners", activeHeroBanners);

          setSlides(activeHeroBanners);
        }
      } catch (error) {
        console.error("Banner fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadBanners();
  }, []);

  if (loading || slides.length === 0) return null;

  return (
    <section
      className="slider-area slider-03 slider-active"
      style={{ position: "relative" }}>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="slick-initialized slick-slider">
        {slides.map((s) => (
          <SwiperSlide key={s.id}>
            <div
              className="single-slider d-flex align-items-center bg_cover"
              style={{ backgroundImage: `url(${s.desktopImage})` }}>
              <div className="container">
                <div className="slider-content slider-content-3 text-center">
                  <h1 className="title">{s.title}</h1>

                  <div dangerouslySetInnerHTML={{ __html: s.description }} />

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
