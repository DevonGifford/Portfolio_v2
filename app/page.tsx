import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Experience from "@/components/Experience";
import SmallProjects from "@/components/small-projects/SmallProjects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BigProjects from "@/components/big-projects/BigProjects";

// ✅ SEO & <head> replacement
export const metadata: Metadata = {
  title: "Devon Gifford",
  description: "Full-stack developer portfolio showcasing projects and experience.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function HomePage() {
  return (
    <main className="h-screen w-full overflow-x-hidden overflow-y-scroll bg-bodyColor font-bodyFont text-textLight scrollbar-thin scrollbar-track-textDark/5 scrollbar-thumb-textDark/70">
      <Navbar />
      <div className="h-[88vh] w-full items-center justify-between gap-10 lg:flex">
        <div className="fixed bottom-0 left-0 hidden h-full w-32 xl:inline-flex">
          <LeftSide />
        </div>
        <div className="mx-auto h-[88vh] w-full p-4">
          <Banner />
          <About />
          <Experience />
          <BigProjects />
          <SmallProjects />
          <Contact />
          <Footer />
        </div>
        <div className="fixed bottom-0 right-0 hidden h-full w-32 xl:inline-flex">
          <RightSide />
        </div>
      </div>
    </main>
  );
}
