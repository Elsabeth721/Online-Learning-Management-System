import ContactUs from "@/components/landing/ContactUs";
import CourseStatistics from "@/components/landing/CourseStatics";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import LearningJourney from "@/components/landing/LearningJourney";
import PopularCourses from "@/components/landing/PopularCourse";
import Testimonials from "@/components/landing/Testimonial";
import TrackingProgress from "@/components/landing/TrackingProgress";
function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HeroSection />
      <PopularCourses />
      <CourseStatistics />
      <LearningJourney />
      <TrackingProgress />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Home;
