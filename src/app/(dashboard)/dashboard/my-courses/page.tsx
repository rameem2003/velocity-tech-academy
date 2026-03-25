"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { useCourse } from "@/hooks/useCourse";

const page = () => {
  const { courseList } = useCourse();
  return (
    <main className="mt-5">
      <h2 className="font-inter text-accent-foreground text-2xl font-bold">
        My Courses
      </h2>

      <section className="mt-10 flex flex-wrap items-center justify-between gap-2">
        {courseList?.length === 0 && (
          <p className="font-inter text-lg text-red-500">
            You have not purchased any courses yet.
          </p>
        )}

        {courseList?.map((course, i) => (
          <div className="block w-full md:w-[49.5%]">
            <Card className="border-cd-primary bg-sidebar border-accent-foreground mb-1 w-full border-2 p-1 duration-200">
              <CardContent className="flex flex-col items-center justify-start gap-5 px-1 md:flex-row">
                <Image
                  src={process.env.NEXT_PUBLIC_BASE_URL + course.course.thumb}
                  alt={course.course.title}
                  width={500}
                  height={500}
                  className="h-full w-full rounded-lg md:h-25 md:w-auto"
                />

                <div>
                  <h3 className="font-inter text-accent-foreground text-2xl font-bold">
                    {course.course.title}
                  </h3>
                  <p className="font-inter mt-1 font-medium text-white">
                    {course.course.category.name}
                  </p>

                  <div className="mt-2 flex items-center gap-3">
                    {course.courseCompleted ? (
                      <Badge
                        variant="secondary"
                        className="bg-green-500 text-white"
                      >
                        Completed
                      </Badge>
                    ) : (
                      <Badge
                        variant="secondary"
                        className="bg-red-500 text-white"
                      >
                        Progressing
                      </Badge>
                    )}

                    {course?.certificate && (
                      <a
                        className="text-blue-500 underline"
                        href={
                          process.env.NEXT_PUBLIC_BASE_URL + course.certificate
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Certificate
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </section>
    </main>
  );
};

export default page;
