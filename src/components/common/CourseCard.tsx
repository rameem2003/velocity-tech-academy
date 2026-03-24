import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import Image from "next/image";
import { RiUser3Fill } from "@remixicon/react";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { courseType } from "@/types/type";

const CourseCard = ({ data }: { data: courseType }) => {
  return (
    <Card className="border-accent-foreground mx-auto mb-2 gap-0 rounded-[15px] border-2 bg-transparent p-0 duration-300 ease-in-out hover:-translate-y-1.25 hover:shadow-lg">
      <CardContent className="m-0 p-0">
        <Image
          src={process.env.NEXT_PUBLIC_BASE_URL + data.thumb}
          alt="banner"
          width={500}
          height={500}
          className="h-50 w-full rounded-t-[15px] lg:h-62.5"
        />
      </CardContent>
      <CardFooter className="m-0 block rounded-b-[15px] bg-[#00000e] px-4 py-5">
        <div className="flex w-full items-center justify-between">
          <Badge className="bg-red-500 text-xs">Live Course</Badge>

          <p className="font-inter mt-2 flex items-center gap-1 text-[14px] font-medium text-white">
            <RiUser3Fill />
            {data.users.length || 0} +
          </p>
        </div>

        <p className="font-inter text-accent-foreground mt-2 text-[14px] font-medium">
          {data.category.name}
        </p>

        <h2 className="font-inter text-[24px] font-bold text-white">
          {data.title}
        </h2>

        <div className="mt-3 flex items-center justify-between">
          <p className="font-inter text-accent-foreground text-[24px] font-bold">
            {data.discountedPrice ? data.discountedPrice : data.sellingPrice}{" "}
            BDT
          </p>

          <Link
            href={`/course/${data._id}`}
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
