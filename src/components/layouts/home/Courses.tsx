import Container from "@/components/common/Container";
import CourseCard from "@/components/common/CourseCard";
import { allCourses } from "@/lib/courseApi";
import { courseType } from "@/types/type";
import React from "react";

const Courses = async () => {
  let { data } = await allCourses(3);
  let courses: courseType[] = data;
  return (
    <section className="py-20">
      <Container>
        <h2 className="text-accent-foreground font-inter mb-2 text-4xl font-bold">
          Popular Courses
        </h2>

        <p className="font-inter text-lg text-white">
          Discover our most popular courses and advance your skills.
        </p>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-2">
          {courses.map((course, i) => (
            <CourseCard key={i} data={course} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Courses;
