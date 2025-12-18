import { fetchPageData } from "@/lib/page";
import Image from "next/image";

export default async function CampusVisit() {
  const UID = "841e238f-474e-4cba-ab97-2c87d18b18db";
  const res = await fetchPageData({ uid: UID });
  const data = res?.pagedata;
  return (
    <section className="campus-visit-area">
      <div className="container">
        <div className="campus-visit-wrapper">
          <div className="campus-image-col">
            <div className="campus-image">
              <div className=" single-campus">
                <Image
                  src={data?.cover_image_url || "/Images/404.png"}
                  alt="image1"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
          <div className="campus-content-col">
            <div className="campus-content">
              <h2 className="title">{data?.title || "No title"}</h2>
              <span className="line"></span>
              <p></p>
              or watch video Play now
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
