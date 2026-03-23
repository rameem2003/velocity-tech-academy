import Container from "@/components/common/Container";
import About from "@/components/layouts/home/About";
import Banner from "@/components/layouts/home/Banner";
import Courses from "@/components/layouts/home/Courses";
import Teachers from "@/components/layouts/home/Teachers";
import React from "react";

const page = () => {
  return (
    <main>
      <Banner />
      <About />
      <Courses />
      <Teachers />
    </main>
  );
};

export default page;
