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
                    <div className="courses-image">
                      <a href="javascript:void(0);">
                        <img
                          src={course.featured_image_url || ""}
                          alt={course.title}
                        />
                      </a>
                    </div>

                    <div className="courses-content">
                      <div className="courses-content-wrapper">
                        <h4 className="courses-title">
                          <a href="javascript:void(0);">{course.title}</a>
                        </h4>

                        <p style={{ clear: "both" }}></p>

                        <div
                          className="courses-fee"
                          dangerouslySetInnerHTML={{
                            __html: course.excerpt,
                          }}
                        />

                        <p style={{ clear: "both" }}></p>

                        <div
                          className="duration"
                          dangerouslySetInnerHTML={{
                            __html: course.content,
                          }}
                        />

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
