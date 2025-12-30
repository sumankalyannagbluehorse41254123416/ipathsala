import { fetchPageData } from "@/lib/page";

export default async function AboutImage() {
  const UID = "fc859837-6c9b-43d0-85da-b5b364850611";

  const res = await fetchPageData({ uid: UID });
  // console.log("res*********************", res);
  // console.log("res*********************", res);

  if (!res?.status || !res?.pagedata) return null;

  const section = res?.pageItemdataWithSubsection;

  return (
    <div className="col-lg-5">
      <div className="about-image mt-50">
        <div className="single-image image-1">
          <img src={section[0]?.image} alt="image1" />
        </div>

        <div className="single-image image-2">
          <img src={section[1]?.image} alt="image2" />
        </div>

        <div className="single-image image-3">
          <img src={section[2]?.image} alt="image3" />
        </div>

        <div className="single-image image-4">
          <img src={section[3]?.image} alt="image4" />
        </div>

        <div className="about-icon icon-1">
          <img
            src="https://wip.tezcommerce.com:3304/admin/module/49/1648034648137.png"
            alt="image1"
          />
        </div>

        <div className="about-icon icon-2">
          <img
            src="https://wip.tezcommerce.com:3304/admin/module/49/1648034662229.png"
            alt="image2"
          />
        </div>

        <div className="about-icon icon-3">
          <img
            src="https://wip.tezcommerce.com:3304/admin/module/49/1648034679125.png"
            alt="image3"
          />
        </div>

        <div className="about-icon icon-4">
          <img
            src="https://wip.tezcommerce.com:3304/admin/module/49/1648034693539.png"
            alt="image4"
          />
        </div>
      </div>
    </div>
  );
}
