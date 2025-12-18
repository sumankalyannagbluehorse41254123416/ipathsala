// import { fetchBlogData } from "../action/blog";

// const HotelManagementCourses = async () => {
//   const UID = "";
//   const res = await fetchBlogData();
//   console.log("sjfdhjsfsdfjh", res);

//   return (
//     <>
//       <div className="clearfix"></div>
//       <section className="page-banner">
//         <div
//           className="page-banner-bg bg_cover1"
//           style={{
//             backgroundImage:
//               "url(https://wip.tezcommerce.com:3304/admin/module/49/1649749808714.jpg)",
//           }}>
//           <div className="container">
//             <div className="banner-content text-center">
//               <h2 className="title">Courses In Hotel Management</h2>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="top-courses-area">
//         <div className="container">
//           <div className="tab-pane fade show active" id="list" role="tabpanel">
//             <div className="courses-wrapper wrapper-2">
//               {/* Course 1: Front Office */}
//               <div className="courses-col">
//                 <div className="single-courses-2 courses-list mt-30">
//                   <div className="courses-image">
//                     <a href="javascript:void(0);">
//                       <img
//                         src="https://wip.tezcommerce.com:3304/admin/module/49/1649328376119.webp"
//                         alt="Diploma In Front Office"
//                       />
//                     </a>
//                   </div>
//                   <div className="courses-content">
//                     <div className="courses-content-wrapper">
//                       <h4 className="courses-title">
//                         <a href="javascript:void(0);">
//                           Diploma In Front Office
//                         </a>
//                       </h4>
//                       <p style={{ clear: "both" }}></p>
//                       <p className="courses-fee">
//                         Duration: 12 Months | Fees: 30000/- | Eligibility: 10+2
//                       </p>
//                       <p style={{ clear: "both" }}></p>
//                       <p className="duration">
//                         Detailed Theory and Practical sessions on Front Office,
//                         including welcoming guests, meeting and greeting them,
//                         taking and organizing reservations, allocating check in
//                         and check out of rooms, issuing keys & setting the
//                         accounts.
//                       </p>
//                       <div className="courses-link">
//                         <a
//                           className="apply"
//                           href="https://www.ipathsala.com/apply-now?title=Diploma In Front Office">
//                           Online Apply
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Course 2: Housekeeping */}
//               <div className="courses-col">
//                 <div className="single-courses-2 courses-list mt-30">
//                   <div className="courses-image">
//                     <a href="javascript:void(0);">
//                       <img
//                         src="https://wip.tezcommerce.com:3304/admin/module/49/1649328392771.webp"
//                         alt="Diploma In Accomodaation Operation (Housekeeping)"
//                       />
//                     </a>
//                   </div>
//                   <div className="courses-content">
//                     <div className="courses-content-wrapper">
//                       <h4 className="courses-title">
//                         <a href="javascript:void(0);">
//                           Diploma In Accomodaation Operation (Housekeeping)
//                         </a>
//                       </h4>
//                       <p style={{ clear: "both" }}></p>
//                       <p className="courses-fee">
//                         Duration: 12 Months | Fees: 30000/- | Eligibility: 10+2
//                       </p>
//                       <p style={{ clear: "both" }}></p>
//                       <p className="duration">
//                         Detailed Theory and Practical sessions on Housekeeping,
//                         including providing cleanliness, comfort and aesthetic
//                         value of any place in a hotel such as cleaning of guest
//                         room, corridors, public areas, etc to ensure that the
//                         standard of the hotel is maintained.
//                       </p>
//                       <div className="courses-link">
//                         <a
//                           className="apply"
//                           href="https://www.ipathsala.com/apply-now?title=Diploma In Accomodaation Operation (Housekeeping)">
//                           Online Apply
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Course 3: F&B Services */}
//               <div className="courses-col">
//                 <div className="single-courses-2 courses-list mt-30">
//                   <div className="courses-image">
//                     <a href="javascript:void(0);">
//                       <img
//                         src="https://wip.tezcommerce.com:3304/admin/module/49/1649328407146.webp"
//                         alt="Diploma In Food and Beverage Services"
//                       />
//                     </a>
//                   </div>
//                   <div className="courses-content">
//                     <div className="courses-content-wrapper">
//                       <h4 className="courses-title">
//                         <a href="javascript:void(0);">
//                           Diploma In Food and Beverage Services
//                         </a>
//                       </h4>
//                       <p style={{ clear: "both" }}></p>
//                       <p className="courses-fee">
//                         Duration: 12 Months | Fees: 30000/- | Eligibility: 10+2
//                       </p>
//                       <p style={{ clear: "both" }}></p>
//                       <p className="duration">
//                         This course is aimed to provide basic Food & Beverage
//                         knowledge to the students and the current requirements
//                         for the F&B industry in India and abroad also. The
//                         course includes long sessions of Practical in Live
//                         Restaurant.
//                       </p>
//                       <div className="courses-link">
//                         <a
//                           className="apply"
//                           href="https://www.ipathsala.com/apply-now?title=Diploma In Food and Beverage Services">
//                           Online Apply
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Course 4: F&B Production */}
//               <div className="courses-col">
//                 <div className="single-courses-2 courses-list mt-30">
//                   <div className="courses-image">
//                     <a href="javascript:void(0);">
//                       <img
//                         src="https://wip.tezcommerce.com:3304/admin/module/49/1649328424183.webp"
//                         alt="Diploma In Food and Beverage Production"
//                       />
//                     </a>
//                   </div>
//                   <div className="courses-content">
//                     <div className="courses-content-wrapper">
//                       <h4 className="courses-title">
//                         <a href="javascript:void(0);">
//                           Diploma In Food and Beverage Production
//                         </a>
//                       </h4>
//                       <p style={{ clear: "both" }}></p>
//                       <p className="courses-fee">
//                         Duration: 12 Months | Fees: 30000/- | Eligibility: 10+2
//                       </p>
//                       <p style={{ clear: "both" }}></p>
//                       <p className="duration">
//                         The students develop professional culinary skills
//                         necessary for commercial food production operations.
//                         They will acquire knowledge on preparation, presentation
//                         & assembling of Dishes. The course includes long
//                         sessions of hands-on practical in Live Kitchen.
//                       </p>
//                       <div className="courses-link">
//                         <a
//                           className="apply"
//                           href="https://www.ipathsala.com/apply-now?title=Diploma In Food and Beverage Production">
//                           Online Apply
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default HotelManagementCourses;

import Link from "next/link";
import { fetchBannerData } from "../action/banner";
import { fetchBlogData } from "../action/blog";

interface BlogPost {
  uuid: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image_url: string | null;
}

interface BlogResponse {
  status: boolean;
  userPostdata: BlogPost[];
}

const HotelManagementCourses = async () => {
  const UID = "8e9a4277-0d27-49d4-864f-3287661e6ef4";
  const bannerRes = await fetchBannerData(UID);
  const res: BlogResponse = await fetchBlogData();

  if (!res?.status || !res.userPostdata?.length) {
    return null;
  }
  const courses = res.userPostdata.slice(0, 4);
  return (
    <>
      <div className="clearfix"></div>

      <section className="page-banner">
        <div
          className="page-banner-bg bg_cover1"
          style={{
            backgroundImage: `url(${bannerRes?.desktopImage})`,
          }}>
          <div className="container">
            <div className="banner-content text-center">
              <h2 className="title">{bannerRes?.title}</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="top-courses-area">
        <div className="container">
          <div className="tab-pane fade show active" id="list" role="tabpanel">
            <div className="courses-wrapper wrapper-2">
              {courses.map((course) => (
                <div className="courses-col" key={course.uuid}>
                  <div className="single-courses-2 courses-list mt-30">
                    {/* ===== Image ===== */}
                    <div className="courses-image">
                      <a href="javascript:void(0);">
                        <img
                          src={course.featured_image_url || ""}
                          alt={course.title}
                        />
                      </a>
                    </div>

                    {/* ===== Content ===== */}
                    <div className="courses-content">
                      <div className="courses-content-wrapper">
                        <h4 className="courses-title">
                          <a href="javascript:void(0);">{course.title}</a>
                        </h4>

                        <p style={{ clear: "both" }}></p>

                        {/* Duration / Fees / Eligibility */}
                        <div
                          className="courses-fee"
                          dangerouslySetInnerHTML={{
                            __html: course.excerpt,
                          }}
                        />

                        <p style={{ clear: "both" }}></p>

                        {/* Description */}
                        <div
                          className="duration"
                          dangerouslySetInnerHTML={{
                            __html: course.content,
                          }}
                        />

                        {/* Apply Button */}
                        <div className="courses-link">
                          <Link className="apply" href={`/apply-now`}>
                            Online Apply
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotelManagementCourses;
