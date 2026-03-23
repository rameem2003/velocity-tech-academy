import Container from "@/components/common/Container";
import TeacherCard from "@/components/common/TeacherCard";
import React from "react";

const Teachers = () => {
  return (
    <section className="py-20">
      <Container>
        <h2 className="text-accent-foreground font-inter mb-2 text-4xl font-bold">
          Our Expert Teachers
        </h2>

        <p className="font-inter text-lg text-white">
          Meet our talented instructors who are dedicated to helping you succeed
          in your coding journey.
        </p>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-2">
          {Array.from({ length: 4 }).map((teacher, i) => (
            <div className="w-full sm:w-[48%] md:w-[48%] lg:w-[24%]" key={i}>
              <TeacherCard />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Teachers;
