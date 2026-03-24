import { categoryType } from "@/types/type";
import React from "react";
import CourseCard from "../common/CourseCard";

const CategoryComponent = ({ data }: { data: categoryType }) => {
  return (
    <section className="mb-10">
      <h2 className="font-syncopate text-accent-foreground mb-5 text-2xl font-bold md:text-3xl xl:text-5xl">
        {data.name}
      </h2>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-0">
        {data.courses.length === 0 && (
          <p className="font-inter text-lg text-red-500">
            No courses available in this category
          </p>
        )}

        {data.courses.map((course) => (
          <div className="w-full sm:w-[48%] md:w-[32%]" key={course._id}>
            <CourseCard data={course} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryComponent;
