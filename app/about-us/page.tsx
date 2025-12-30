import AboutImage from "@/component/AboutImage";
import AboutusTestimonials from "@/component/AboutusTestimonials";
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

            {/* <div className="col-lg-5">
              <div className="about-image mt-50">
                {aboutSection?.subsections?.map((item, index) => (
                  <div
                    key={item.id}
                    className={`single-image image-${index + 1}`}>
                    <img src={item.image} alt={`about-image-${index + 1}`} />
                  </div>
                ))}

                <div className="about-icon icon-1">
                  <img src="/Images/aboutUs/1648114950629.png" alt="" />
                </div>
                <div className="about-icon icon-2">
                  <img src="/Images/aboutUs/1648114985677.png" alt="" />
                </div>
                <div className="about-icon icon-3">
                  <img src="/Images/aboutUs/1648115013485.png" alt="" />
                </div>
                <div className="about-icon icon-4">
                  <img src="/Images/aboutUs/1648115041763.png" alt="" />
                </div>
              </div>
            </div> */}
            <AboutImage />
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
                    __html: teamSection?.shortDescription || "No description",
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
                          __html: member.description || "No Description",
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

      {/* <section className="testimonials-area">
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

            <div className="col-lg-8">
              <div className="testimonials-wrapper">
                <div className="testimonials-shape shape-1" />
                <div className="testimonials-shape shape-2" />
                <div className="row no-gutters">
                  <div className="col-lg-6 col-md-5">
                    <div className="testimonials-image slick-initialized slick-slider">
                      <div className="slick-list draggable"><div className="slick-track" style={{ opacity: 1, width: 770 }}><div className="single-testimonial-image slick-slide" data-slick-index={0} aria-hidden="true" tabIndex={-1} style={{ width: 385, position: 'relative', left: 0, top: 0, zIndex: 998, opacity: 0, transition: 'opacity 800ms' }}>
                        <img src="https://wip.tezcommerce.com:3304/admin/module/49/1649922392776.png" alt="Biswajit Kolya" />
                      </div><div className="single-testimonial-image slick-slide slick-current slick-active" data-slick-index={1} aria-hidden="false" tabIndex={0} style={{ width: 385, position: 'relative', left: '-385px', top: 0, zIndex: 999, opacity: 1 }}>
                          <img src="https://wip.tezcommerce.com:3304/admin/module/49/1649922428311.png" alt="Soumita Das" />
                        </div></div></div>
                      <span className="next slick-arrow" style={{}}>Next <i className="far fa-long-arrow-right" /></span></div>
                  </div>
                  <div className="col-lg-6 col-md-7">
                    <div className="testimonials-content slick-initialized slick-slider">
                      <div className="slick-list draggable"><div className="slick-track" style={{ opacity: 1, width: 1925, transform: 'translate3d(-770px, 0px, 0px)' }}><div className="single-testimonial-content slick-slide slick-cloned" data-slick-index={-1} id aria-hidden="true" tabIndex={-1} style={{ width: 385 }}>
                        <div className="content-text">
                          <i className="fas fa-quote-right" />
                          It may sound like a tall order to love what you are doing or learning to do for some of us. But, unfortunately, it’s not easy to find the motivation for that subject you don’t like to study, no matter how many quotes from iconic developers you read!
                        </div>
                        <div className="content-meta">
                          <p className="name">Soumita Das</p>
                          <p className="designation">Student</p>
                        </div>
                      </div><div className="single-testimonial-content slick-slide" data-slick-index={0} aria-hidden="true" tabIndex={-1} style={{ width: 385 }}>
                          <div className="content-text">
                            <i className="fas fa-quote-right" />
                            Even a small improvement in your success could give you the motivational boost you need to study harder next time, kick-starting a virtual cycle of increasingly more success and motivation!
                          </div>
                          <div className="content-meta">
                            <p className="name">Biswajit Kolya</p>
                            <p className="designation">Student</p>
                          </div>
                        </div><div className="single-testimonial-content slick-slide slick-current slick-active" data-slick-index={1} aria-hidden="false" tabIndex={0} style={{ width: 385 }}>
                          <div className="content-text">
                            <i className="fas fa-quote-right" />
                            It may sound like a tall order to love what you are doing or learning to do for some of us. But, unfortunately, it’s not easy to find the motivation for that subject you don’t like to study, no matter how many quotes from iconic developers you read!
                          </div>
                          <div className="content-meta">
                            <p className="name">Soumita Das</p>
                            <p className="designation">Student</p>
                          </div>
                        </div><div className="single-testimonial-content slick-slide slick-cloned" data-slick-index={2} id aria-hidden="true" tabIndex={-1} style={{ width: 385 }}>
                          <div className="content-text">
                            <i className="fas fa-quote-right" />
                            Even a small improvement in your success could give you the motivational boost you need to study harder next time, kick-starting a virtual cycle of increasingly more success and motivation!
                          </div>
                          <div className="content-meta">
                            <p className="name">Biswajit Kolya</p>
                            <p className="designation">Student</p>
                          </div>
                        </div><div className="single-testimonial-content slick-slide slick-cloned" data-slick-index={3} id aria-hidden="true" tabIndex={-1} style={{ width: 385 }}>
                          <div className="content-text">
                            <i className="fas fa-quote-right" />
                            It may sound like a tall order to love what you are doing or learning to do for some of us. But, unfortunately, it’s not easy to find the motivation for that subject you don’t like to study, no matter how many quotes from iconic developers you read!
                          </div>
                          <div className="content-meta">
                            <p className="name">Soumita Das</p>
                            <p className="designation">Student</p>
                          </div>
                        </div></div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section> */}
      <AboutusTestimonials />
    </>
  );
}
