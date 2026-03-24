import React from "react";
import Container from "@/components/common/Container";

import { Metadata } from "next";
import { categoryType } from "@/types/type";
import { allCategories } from "@/lib/courseApi";
import CategoryComponent from "@/components/shared/CategoryComponent";

export const metadata: Metadata = {
  title: "Our Courses || Velocity Tech Academy",
  description:
    "Explore our wide range of courses designed to empower you with the skills needed for success in the tech industry. From web development to data science, our courses are tailored to meet the demands of the ever-evolving technology landscape. Join us today and take the first step towards a rewarding career in tech.",
};

const page = async () => {
  let { data } = await allCategories();
  let categories: categoryType[] = data;

  return (
    <main className="py-25">
      <Container>
        {/* <Advertisement /> */}
        <h1 className="font-syncopate text-accent-foreground text-5xl font-bold">
          Our Courses
        </h1>
        {/* descriptions */}
        <p className="font-inter mt-4 w-full text-lg font-medium text-white lg:w-175">
          Explore our wide range of courses designed to empower you with the
          skills needed for success in the tech industry. From web development
          to data science, our courses are tailored to meet the demands of the
          ever-evolving technology landscape. Join us today and take the first
          step towards a rewarding career in tech.
        </p>

        {/* <section className="mt-10">
          <CourseCategory />
        </section> */}

        <section className="mt-20">
          {/* <div className="mb-20">
            <h2 className="font-syncopate text-accent-foreground text-center text-4xl font-bold">
              Enrollment in Our Courses: Your Pathway to Success in the Tech
              Industry
            </h2>

            <p className="font-inter mx-auto mt-4 w-full text-center text-lg text-white lg:w-[700px]">
              Enroll in our courses today and take the first step towards a
              rewarding career in the tech industry. Our comprehensive
              curriculum, expert instructors, and hands-on projects will equip
              you with the skills and knowledge needed to thrive in this dynamic
              field. Whether you're a beginner looking to start your tech
              journey or a professional seeking to upskill, our courses are
              designed to meet your needs. Don't miss out on this opportunity to
              kickstart your career and achieve your goals in the world of
              technology.
            </p>
          </div> */}

          {categories.map((category, i) => (
            <CategoryComponent data={category} key={i} />
          ))}
        </section>
      </Container>
    </main>
  );
};

export default page;
