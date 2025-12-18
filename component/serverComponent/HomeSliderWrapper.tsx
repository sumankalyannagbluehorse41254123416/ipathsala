// import { fetchAllBanners } from "@/lib/banner";
// import HomeSlider from "../Slider";

// export default async function HomeSliderWrapper() {
//   const res = await fetchAllBanners({ host: "ipathsala.com" });

//   if (!res?.status || !res?.bannerData?.length ) {
//     return null;
//   }

//   // only active + hero banners
//   const banners = res.bannerData
//     .filter((b: any) => b.status === "active" && b.type === "hero")
//     .sort((a: any, b: any) => a.sequence - b.sequence);

//   return <HomeSlider slides={banners} />;
// }
