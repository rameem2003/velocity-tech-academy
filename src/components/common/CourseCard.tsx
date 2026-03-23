import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import Image from "next/image";
import { RiUser3Fill } from "@remixicon/react";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const CourseCard = () => {
  return (
    <Card className="border-accent-foreground mx-auto mb-2 gap-0 rounded-[15px] border-2 bg-transparent p-0 duration-300 ease-in-out hover:translate-y-[-5px] hover:shadow-lg">
      <CardContent className="m-0 p-0">
        <Image
          src={"/course.jpg"}
          alt="banner"
          width={500}
          height={500}
          className="h-[200px] w-full rounded-t-[15px] lg:h-[250px]"
        />
      </CardContent>
      <CardFooter className="m-0 block rounded-b-[15px] bg-[#00000e] px-4 py-5">
        <div className="flex w-full items-center justify-between">
          <Badge className="bg-red-500 text-xs">Live Course</Badge>

          <p className="font-inter mt-2 flex items-center gap-1 text-[14px] font-medium text-white">
            <RiUser3Fill />
            200
          </p>
        </div>

        <p className="font-inter mt-2 text-[14px] font-medium text-white">
          Web Development
        </p>

        <h2 className="font-inter text-[24px] font-bold text-white">
          MERN Stack Development Course
        </h2>

        <div className="mt-3 flex items-center justify-between">
          <p className="font-inter text-accent-foreground text-[24px] font-bold">
            50000 BDT
          </p>

          <Link
            href={`/course/123`}
            className="font-inter bg-cd-primary rounded-[15px] text-[20px] font-semibold text-white"
          >
            <Button className="cursor-pointer">Details</Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
