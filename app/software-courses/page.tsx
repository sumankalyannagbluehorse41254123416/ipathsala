import Link from "next/link";
import { fetchBannerData } from "../action/banner";
import { fetchBlogData } from "../action/blog";
import Image from "next/image";
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
const SoftwareDevelopmentCourses = async () => {
  const UID = "26525bdd-9b14-42d0-b367-75341c291fd1";
  const bannerRes = await fetchBannerData(UID);
  const res: BlogResponse = await fetchBlogData();
  const courses = res.userPostdata.slice(4, 7);
  return (
    <>
      <div className="clearfix"></div>
      <section className="page-banner">
        <div
          className="page-banner-bg bg_cover1"
          style={{
            backgroundImage: `url( ${bannerRes?.desktopImage})`,
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
                    <div className="courses-image">
                      <Link href="javascript:void(0);">
                        <Image
                          src={course.featured_image_url || ""}
                          alt={course.title}
                          height={400}
                          width={400}
                        />
                      </Link>
                    </div>
                    <div className="courses-content">
                      <div className="courses-content-wrapper">
                        <h4 className="courses-title">
                          <Link href="javascript:void(0);">{course.title}</Link>
                        </h4>
                        <p style={{ clear: "both" }}></p>
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

export default SoftwareDevelopmentCourses;
