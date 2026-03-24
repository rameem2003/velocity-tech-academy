"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { courseType } from "@/types/type";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/hooks/useCart";

const InfoComponent = ({ course }: { course: courseType }) => {
  const { addCart } = useCart();
  return (
    <div className="w-full">
      <Badge className="bg-red-500 text-xs">Live Course</Badge>

      <div className="mt-2">
        <h2 className="font-syncopate text-accent-foreground text-4xl font-bold">
          {course.title}
        </h2>

        <p
          className="font-inter mt-5 text-base leading-7 font-medium text-white"
          dangerouslySetInnerHTML={{
            __html: course?.description || "",
          }}
        />

        <Button
          onClick={() => addCart(course._id)}
          size={"lg"}
          className="font-syncopate mt-5 cursor-pointer rounded-md text-[20px] font-bold text-white uppercase"
        >
          Enroll Now
        </Button>
      </div>
    </div>
  );
};

export default InfoComponent;
