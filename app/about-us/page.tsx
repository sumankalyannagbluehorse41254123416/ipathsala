// import { fetchPageData } from "@/lib/page";
// import { fetchBannerData } from "../action/banner";
// import Image from "next/image";

// export default async function AboutPage() {
//   const UID = "93d3ee6d-6a7b-4802-b0b0-44a00c5afefb";
//   const res = await fetchPageData({ uid: UID });
//   const PageData = res?.pagedata;
//   const sections = res?.pageItemdataWithSubsection || [];

//   return (
//     <>
//       <div className="clearfix"></div>

//       {/* Page Banner */}
//       <section className="page-banner">
//         <div
//           className="page-banner-bg i"
//           style={{
//             backgroundImage: `url(${PageData?.cover_image_url})`,
//           }}>
//           <div className="container">
//             <div className="banner-content text-center">
//               <h2 className="title">{PageData?.title}</h2>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="about-area">
//         <div className="container">
//           <div className="row align-items-center">
//             {/* Left Content */}
//             <div className="col-lg-7">
//               <div className="about-content mt-40">
//                 <h2 className="about-title">{sections[0]?.title}</h2>
//                 <span className="line"></span>
//                 <div
//                   dangerouslySetInnerHTML={{
//                     __html: sections[0]?.shortDescription || "No description",
//                   }}
//                 />
//               </div>
//             </div>

//             {/* Right Images */}
//             <div className="col-lg-5">
//               <div className="about-image mt-50">
//                 <div className="single-image image-1">
//                   <img
//                     src="https://wip.tezcommerce.com:3304/admin/module/49/1649071412819.webp"
//                     alt="image1"
//                   />
//                 </div>

//                 <div className="single-image image-2">
//                   <img
//                     src="https://wip.tezcommerce.com:3304/admin/module/49/1649071412819.webp"
//                     alt="image2"
//                   />
//                 </div>

//                 <div className="single-image image-3">
//                   <img
//                     src="https://wip.tezcommerce.com:3304/admin/module/49/1649071428898.webp"
//                     alt="image3"
//                   />
//                 </div>

//                 <div className="single-image image-4">
//                   <img
//                     src="https://wip.tezcommerce.com:3304/admin/module/49/1649071442776.webp"
//                     alt="image4"
//                   />
//                 </div>

//                 {/* Icons ******************************************************************/}
//                 <div className="about-icon icon-1">
//                   <img
//                     src="https://wip.tezcommerce.com:3304/admin/module/49/1648114950629.png"
//                     alt="icon1"
//                   />
//                 </div>

//                 <div className="about-icon icon-2">
//                   <img
//                     src="https://wip.tezcommerce.com:3304/admin/module/49/1648114985677.png"
//                     alt="icon2"
//                   />
//                 </div>

//                 <div className="about-icon icon-3">
//                   <img
//                     src="https://wip.tezcommerce.com:3304/admin/module/49/1648115013485.png"
//                     alt="icon3"
//                   />
//                 </div>

//                 <div className="about-icon icon-4">
//                   <img
//                     src="https://wip.tezcommerce.com:3304/admin/module/49/1648115041763.png"
//                     alt="icon4"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Teachers Section */}
//       <section className="teachers-area">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="section-title mt-40">
//                 <h2 className="title">Meet our Team</h2>
//                 <p>Alone we can do so little; together we can do so much.</p>
//               </div>
//             </div>
//           </div>

//           <div className="teachers-wrapper">
//             <div className="row teachers-row">
//               {/* Teacher Cards */}
//               {[
//                 {
//                   img: "https://wip.tezcommerce.com:3304/admin/module/49/1649315845234.webp",
//                   name: "Uttam Dey",
//                   role: "Sous Chef (Hyatt Regency,Kolkata)",
//                 },
//                 {
//                   img: "https://wip.tezcommerce.com:3304/admin/module/49/1649315898337.webp",
//                   name: "Suresh Kumar",
//                   role: "Chef De Cuisine (Holland American Cruise Line,USA)",
//                 },
//                 {
//                   img: "https://wip.tezcommerce.com:3304/admin/module/49/1650448362418.webp",
//                   name: "Souvik Das",
//                   role: "Former Sous Chef in HHI , (kolkata)",
//                 },
//                 {
//                   img: "https://wip.tezcommerce.com:3304/admin/module/49/1649316079452.webp",
//                   name: "Abdul Barik",
//                   role: "Laravel Project Manager",
//                 },
//                 {
//                   img: "https://wip.tezcommerce.com:3304/admin/module/49/1649316153822.webp",
//                   name: "Suman Kalyan Naag",
//                   role: "Junior Developer Magento",
//                 },
//               ].map((t, i) => (
//                 <div className="col-md-4 col-sm-6 teachers-col" key={i}>
//                   <div className="single-teacher mt-30 text-center">
//                     <div className="teacher-social">
//                       <ul className="social">
//                         <li>
//                           <a href="https://www.facebook.com/ipathsala">
//                             <i className="fab fa-facebook-f" />
//                           </a>
//                         </li>
//                         <li>
//                           <a href="https://www.twitter.com/ipathsala">
//                             <i className="fab fa-twitter" />
//                           </a>
//                         </li>
//                         <li>
//                           <a href="https://www.instagram.com/ipathsala">
//                             <i className="fab fa-instagram" />
//                           </a>
//                         </li>
//                         <li>
//                           <a href="https://www.linkedin.in/ipathsala">
//                             <i className="fab fa-linkedin-in" />
//                           </a>
//                         </li>
//                       </ul>
//                     </div>

//                     <div className="teacher-image">
//                       <a href="javascript:void(0);">
//                         <img src={t.img} alt={t.name} />
//                       </a>
//                     </div>

//                     <div className="teacher-content">
//                       <h4 className="name">
//                         <a href="teacher-details.html">{t.name}</a>
//                       </h4>
//                       <span className="designation">{t.role}</span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="testimonials-area">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-lg-4">
//               <div className="testimonials-title">
//                 <h2 className="title">Our Students Review</h2>
//                 <span className="line"></span>
//                 <p>
//                   Believe in yourself, take on challenges and conquer your
//                   fears.
//                 </p>
//               </div>
//             </div>
//             {/* <Testimonials /> */}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
import { fetchPageData } from "@/lib/page";
import Image from "next/image";
import Link from "next/link";

export default async function AboutPage() {
  const UID = "93d3ee6d-6a7b-4802-b0b0-44a00c5afefb";

  const res = await fetchPageData({ uid: UID });

  const PageData = res?.pagedata;
  const sections = res?.pageItemdataWithSubsection || [];
  const aboutSection = sections.find(
    (s) => s.title === "Best Educational Environment"
  );

  const teamSection = sections.find((s) => s.title === "Meet our Team");

  return (
    <>
      <div className="clearfix"></div>
      <section className="page-banner">
        <div
          className="page-banner-bg"
          style={{
            backgroundImage: `url(${PageData?.cover_image_url})`,
          }}>
          <div className="container">
            <div className="banner-content text-center">
              <h2 className="title">{PageData?.title}</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="about-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="about-content mt-40">
                <h2 className="about-title">{aboutSection?.title}</h2>
                <span className="line"></span>

                <div
                  dangerouslySetInnerHTML={{
                    __html: aboutSection?.shortDescription || "",
                  }}
                />
              </div>
            </div>

            <div className="col-lg-5">
              <div className="about-image mt-50">
                {aboutSection?.subsections?.map((item, index) => (
                  <div
                    key={item.id}
                    className={`single-image image-${index + 1}`}>
                    <img src={item.image} alt={`about-image-${index + 1}`} />
                  </div>
                ))}

                <div className="about-icon icon-1">
                  <img src="" alt="" />
                </div>
                <div className="about-icon icon-2">
                  <img src="" alt="" />
                </div>
                <div className="about-icon icon-3">
                  <img src="" alt="" />
                </div>
                <div className="about-icon icon-4">
                  <img src="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="teachers-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title mt-40">
                <h2 className="title">{teamSection?.title}</h2>

                <div
                  dangerouslySetInnerHTML={{
                    __html: teamSection?.shortDescription || "",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="teachers-wrapper">
            <div className="row teachers-row">
              {teamSection?.subsections?.map((member) => (
                <div key={member.id} className="col-md-4 col-sm-6 teachers-col">
                  <div className="single-teacher mt-30 text-center">
                    <div className="teacher-social">
                      <ul className="social">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="teacher-image">
                      <Link href={"javascript:void(0);"}>
                        <Image
                          src={member.image || "/Images/404.png"}
                          alt={member.title}
                          height={250}
                          width={400}
                        />
                      </Link>
                    </div>

                    <div className="teacher-content">
                      <h4 className="name">
                        <Link href="teacher-details.html">{member.title}</Link>
                      </h4>

                      <span
                        className="designation"
                        dangerouslySetInnerHTML={{
                          __html: member.description || "",
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="testimonials-title">
                <h2 className="title">Our Students Review</h2>
                <span className="line"></span>
                <p>
                  Believe in yourself, take on challenges and conquer your
                  fears.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
