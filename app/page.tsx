import Image from "next/image";
import styles from "./page.module.css";
import HomeSlider from "@/component/Slider";
import AboutSection from "@/component/About";
import HotelManagement from "@/component/Hotel_Management";
import FeaturesSection from "@/component/features_area";
import SoftwareCourses from "@/component/Software_Development";
import CampusVisit from "@/component/Visit";
import OurStudents from "@/component/Our_Students";

export default function Home() {
  return (
    <>
      <HomeSlider />
      <AboutSection />
      <HotelManagement />
      <FeaturesSection />
      <SoftwareCourses />
      <CampusVisit />
      <OurStudents />
    </>
  );
}
