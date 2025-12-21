import { fetchPageData } from "@/lib/page";
import Image from "next/image";

export default async function FeaturesSection() {
  const UID = "c8e3a76c-406a-4a72-911f-68ebb752ed9d";
  const res = await fetchPageData({ uid: UID });
  // console.log("res*****", res);
  const data = res?.pagedata;
  const sectionData = res?.pageItemdataWithSubsection as any;
  // console.log("sectionData", sectionData);

  return (
    <div className="features-area-2">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="features-image-2">
              <Image
                className="wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
                src={data?.cover_image_url || "/Images/404.png"}
                alt="Salient Features"
                width={200}
                height={500}
              />
            </div>
          </div>

          <div className="col-lg-8">
            <div className="features-items">
              <div className="features-items-wrapper">
                <div
                  className="single-features-item d-flex align-items-center wow fadeInUpBig"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s">
                  <div className="item-icon">
                    <Image
                      src={sectionData[0]?.image || "/Images/404.png"}
                      alt="100% Job guaranteed"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="item-content media-body">
                    <p>{sectionData[0]?.title}</p>
                  </div>
                </div>

                <div
                  className="single-features-item d-flex align-items-center wow fadeInUpBig"
                  data-wow-duration="1s"
                  data-wow-delay="0.3s">
                  <div className="item-icon">
                    <Image
                      src={sectionData[1]?.image || "/Images/404.png"}
                      alt="Earn while you learn"
                      height={100}
                      width={100}
                    />
                  </div>
                  <div className="item-content media-body">
                    <p>{sectionData[1]?.title}</p>
                  </div>
                </div>
              </div>

              <div className="features-items-wrapper">
                <div
                  className="single-features-item d-flex align-items-center wow fadeInUpBig"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s">
                  <div className="item-icon">
                    <Image
                      src={sectionData[2]?.image || "/Images/404.png"}
                      alt="Live Training Infrastructure"
                      height={100}
                      width={100}
                    />
                  </div>
                  <div className="item-content media-body">
                    <p>{sectionData[2]?.title}</p>
                  </div>
                </div>

                <div
                  className="single-features-item d-flex align-items-center wow fadeInUpBig"
                  data-wow-duration="1s"
                  data-wow-delay="0.6s">
                  <div className="item-icon">
                    <Image
                      src={sectionData[3]?.image || "/Images/404.png"}
                      alt="Sessions by Industrial Experts"
                      height={100}
                      width={100}
                    />
                  </div>
                  <div className="item-content media-body">
                    <p>{sectionData[3]?.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
