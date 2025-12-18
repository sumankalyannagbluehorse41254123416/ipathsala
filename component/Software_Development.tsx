import { fetchBlogData } from "@/app/action/blog";
import { fetchPageData } from "@/lib/page";
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
export default async function TopCourses() {
  const UID = "8fdf9397-bf4e-4d1c-ae39-e49b5174c4d7";
  const res = await fetchPageData({ uid: UID });
  const PageData = res?.pagedata;
  const courseres: BlogResponse = await fetchBlogData();
  const courses = courseres.userPostdata.slice(4, 7);
  // console.log("PageData", PageData);

  return (
    <section className="top-courses-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="section-title mt-40">
              <h2 className="title">{PageData?.title}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: PageData?.description,
                }}
              />
            </div>
          </div>
        </div>
        <div
          className="courses-wrapper wow fadeInUpBig"
          data-wow-duration="1s"
          data-wow-delay="0.3s">
          <div className="row">
            {courses.map((course) => (
              <div key={course.uuid} className="col-lg-4 col-sm-6 courses-col">
                <div className="single-courses-2 mt-30 single-courses-height1">
                  <div className="courses-image">
                    <a href={`/software-courses/${course.slug}`}>
                      <img
                        src={
                          course.featured_image_url ??
                          "https://via.placeholder.com/400x250"
                        }
                        alt={course.title}
                      />
                    </a>
                  </div>

                  <div className="courses-content">
                    <h4 className="courses-title courses-height1">
                      <a href={`/software-courses/${course.slug}`}>
                        {course.title}
                      </a>
                    </h4>

                    <div className="courses-link">
                      <a
                        className="apply"
                        href={`/apply-now?title=${encodeURIComponent(
                          course.title
                        )}`}>
                        Online Apply
                      </a>

                      <a
                        className="more"
                        href={`/software-courses/${course.slug}`}>
                        Read more <i className="fa fa-chevron-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
