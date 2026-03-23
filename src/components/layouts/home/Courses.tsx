import Container from "@/components/common/Container";
import CourseCard from "@/components/common/CourseCard";
import React from "react";

const Courses = () => {
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
          {Array.from({ length: 3 }).map((course, i) => (
            <CourseCard key={i} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Courses;
