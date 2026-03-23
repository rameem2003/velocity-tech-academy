import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";

const TeacherCard = () => {
  return (
    <Card className="border-accent-foreground mx-auto mb-2 gap-0 rounded-[15px] border-2 bg-transparent p-0 py-5">
      <CardContent className="m-0 p-0">
        <img
          className="mx-auto h-[200px] w-[200px] rounded-full"
          src="https://www.rabbil.com/files/nextjs.webp"
          alt=""
        />
      </CardContent>
      <CardFooter className="m-0 block rounded-b-[15px] bg-[#00000e] px-4 py-5">
        <h2 className="font-inter text-center text-[24px] font-bold text-white">
          John Doe
        </h2>

        <p className="font-inter text-center text-[14px] font-medium text-white">
          Web Developer (MERN), ROL Studio Bangladesh
        </p>

        <p className="font-inter text-center text-[14px] font-medium text-white">
          Experience: 5 years
        </p>

        <div className="mt-3 flex items-center justify-between">
          {/* <Link
            href={`/course/123`}
            className="font-inter bg-cd-primary rounded-[15px] text-[20px] font-semibold text-white"
          >
            <Button className="cursor-pointer">Details</Button>
          </Link> */}
        </div>
      </CardFooter>
    </Card>
  );
};

export default TeacherCard;
