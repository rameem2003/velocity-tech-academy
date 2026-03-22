"use client";
import React from "react";
// import GridDistortion from "./../../GridDistortion";
import Container from "@/components/common/Container";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";
// import GridDistortion from "./GridDistortion";

const Banner = () => {
  const MarqueeData = [
    { title: "react", url: "/techicons/react.png" },
    { title: "nextjs", url: "/techicons/next.png" },
    { title: "tailwind", url: "/techicons/tailwind.png" },
    { title: "typescript", url: "/techicons/typescript.png" },
    { title: "javascript", url: "/techicons/js.png" },
    { title: "mongodb", url: "/techicons/mongodb.png" },
    { title: "nodejs", url: "/techicons/nodejs.png" },
  ];

  const doubledComponents = MarqueeData ? [...MarqueeData, ...MarqueeData] : [];

  return (
    <section className="min-h-dvh overflow-hidden">
      {/* <div className="h-full" style={{ position: "relative" }}>
        <GridDistortion
          imageSrc="banner.png"
          grid={200}
          mouse={0.1}
          strength={0.15}
          relaxation={0.9}
          className="custom-class"
        />
      </div> */}
      <div className="relative min-h-dvh w-full bg-black">
        {/* Deep Ocean Glow */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(70% 55% at 50% 50%, #2a5d77 0%, #184058 18%, #0f2a43 34%, #0a1b30 50%, #071226 66%, #040d1c 80%, #020814 92%, #01040d 97%, #000309 100%), radial-gradient(160% 130% at 10% 10%, rgba(0,0,0,0) 38%, #000309 76%, #000208 100%), radial-gradient(160% 130% at 90% 90%, rgba(0,0,0,0) 38%, #000309 76%, #000208 100%)",
          }}
        />
        {/* Your Content/Components */}
      </div>

      <div className="absolute top-0 left-0 z-10 min-h-dvh w-full">
        <Container>
          {/* <div className=" flex flex-col">

          </div> */}
          <div className="flex min-h-dvh flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
              <div className="w-full md:w-1/2 lg:w-7/12">
                <h1 className="font-inter w-full text-center text-xl font-bold text-white uppercase lg:w-175 lg:text-left xl:text-[64px]">
                  up your <span className="text-accent-foreground">skills</span>{" "}
                  to <span className="text-accent-foreground">advance</span>{" "}
                  your <span className="text-accent-foreground">career</span>{" "}
                  path
                </h1>

                <div className="mt-8 flex flex-col items-center justify-start gap-5 lg:flex-row">
                  <Link href="/courses">
                    <Button className="font-syncopate cursor-pointer p-7 text-base">
                      Browse Courses
                    </Button>
                  </Link>

                  <AvatarGroup>
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/techicons/react.png" alt="@shadcn" />
                      <AvatarFallback>react</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/techicons/next.png" alt="@maxleiter" />
                      <AvatarFallback>nextjs</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src="/techicons/express.png"
                        alt="@evilrabbit"
                      />
                      <AvatarFallback>express</AvatarFallback>
                    </Avatar>
                    <AvatarGroupCount className="h-10 w-10">
                      +3
                    </AvatarGroupCount>
                  </AvatarGroup>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-5/12">
                <Image
                  src="/banner-im.png"
                  alt="logo"
                  width={1000}
                  height={1000}
                  className="w-full object-contain"
                />
              </div>
            </div>
            <div className="mt-20 overflow-x-hidden">
              <div className="marqueeSliderLeft flex items-center gap-5 lg:gap-[80px]">
                {doubledComponents.map((item, index) => (
                  <Image
                    key={index}
                    src={item.url}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="h-[40px] w-[40px] object-contain grayscale duration-300 hover:grayscale-0 xl:h-[80px] xl:w-[80px]"
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Banner;
