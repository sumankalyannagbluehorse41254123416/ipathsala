import { fetchBlogData } from "@/app/action/blog";
import { fetchPageData } from "@/lib/page";
import Link from "next/link";

export default async function HotelManagement() {
  const UID = "d81195ea-f554-4104-ac22-9e63b2cdcae8";
  const res = await fetchPageData({ uid: UID });
  const blogRes = await fetchBlogData();
  // console.log("blogRes******", blogRes);
  const coursesRes = await fetchBlogData();
  // console.log("coursesRes", coursesRes);
  // console.log("coursesRes", coursesRes);
  const course = coursesRes.userPostdata.slice(0, 4);
  return (
    <section className="top-courses-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="section-title mt-40">
              <h2 className="title">{res?.pagedata?.title}</h2>
              <div
                dangerouslySetInnerHTML={{ __html: res.pagedata.description }}
              />
            </div>
          </div>
        </div>

        <div
          className="courses-wrapper wow fadeInUpBig"
          data-wow-duration="1s"
          data-wow-delay="0.3s">
          <div className="row">
            {course.map((item: any, index: number) => (
              <div
                key={item.uuid ?? index}
                className="col-lg-3 col-sm-6 courses-col">
                <div className="single-courses-2 mt-30 single-courses-height">
                  <div className="courses-image">
                    <Link href={`/hotel-courses`}>
                      <img src={item.featured_image_url} alt={item.title} />
                    </Link>
                  </div>

                  <div className="courses-content">
                    <h4 className="courses-title courses-height">
                      <Link href={`/hotel-courses`}>{item.title}</Link>
                    </h4>

                    <div className="courses-link">
                      <Link
                        className="apply"
                        // href={`/apply-now?title=${encodeURIComponent(
                        //   item.title
                        // )}`}
                        href={"/apply-now"}>
                        Online Apply
                      </Link>

                      <Link className="more" href={"/hotel-courses"}>
                        Read more
                      </Link>
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
