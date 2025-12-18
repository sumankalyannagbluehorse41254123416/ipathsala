import { fetchBannerData } from "../action/banner";
import { fetchBlogData } from "../action/blog";
interface BlogPost {
  uuid: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  tag: string;

  featured_image_url: string | null;
}

interface BlogResponse {
  status: boolean;
  userPostdata: BlogPost[];
}
const EventsPage = async () => {
  const UID = "3d06247d-7564-4ae0-b467-02fd02866e2e";
  const bannerRes = await fetchBannerData(UID);
  // console.log("bannerRes", bannerRes);
  const res: BlogResponse = await fetchBlogData();
  const events = res.userPostdata.slice(7, 10);
  // console.log("events", events);

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

      <section className="event-page">
        <div className="container">
          <div className="row">
            {events.map((item, index) => (
              <div className="col-lg-3 col-sm-6" key={index}>
                <div className="single-event text-center mt-30">
                  <div className="card_item">
                    <span
                      className="time"
                      dangerouslySetInnerHTML={{
                        __html: item?.content,
                      }}
                    />
                    <span className="date">{item?.tag}</span>
                  </div>

                  <h4 className="event-title">
                    {/* <a href={item.link}>{item.title}</a> */}
                  </h4>
                  <div
                    className="event-title"
                    dangerouslySetInnerHTML={{
                      __html: item.excerpt,
                    }}
                  />

                  <p className="place">{item?.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsPage;
