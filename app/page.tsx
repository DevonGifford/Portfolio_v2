import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import LeftSide from "@/components/layout/LeftSide";
// import Navbar from "@/components/layout/Navbar";
import RightSide from "@/components/layout/RightSide";
import About from "@/components/sections/About";
import Banner from "@/components/sections/Banner";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import BigProjects from "@/components/sections/projects/big-projects/BigProjects";
import SmallProjects from "@/components/sections/projects/small-projects/SmallProjects";

import type { Metadata } from "next";

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
      <Header />
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
