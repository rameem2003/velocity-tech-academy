"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import Autoplay from "embla-carousel-autoplay";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { successStoryType } from "@/types/type";
import { RiCloseLargeFill } from "@remixicon/react";

interface playProps {
  state?: boolean;
  video?: string;
}

const CourseSuccessStoryComponent = ({
  story,
}: {
  story: successStoryType[];
}) => {
  const [play, setPlay] = useState<playProps>({});
  return (
    <div className="w-full rounded-lg bg-slate-100 p-3">
      <h2 className="font-sy text-cd-primary mb-5 text-3xl font-bold">
        Success Stories
      </h2>
      {story.length === 0 && <p className="text-red-500">Not Found</p>}

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="mx-0">
          {story.map((item, i) => (
            <CarouselItem key={i} className="w-full p-0">
              <Card
                onClick={() =>
                  setPlay({
                    state: true,
                    video: item.video,
                  })
                }
                key={i}
                className="relative w-full cursor-pointer overflow-hidden p-0"
              >
                <Image
                  src={process.env.NEXT_PUBLIC_BASE_URL + item.thumb}
                  alt="banner"
                  width={500}
                  height={500}
                  className="h-auto w-full"
                />

                <Image
                  src="/play.png"
                  alt="icon"
                  width={500}
                  height={500}
                  className="absolute top-[50%] left-[50%] z-10 h-[60px] w-[60px] translate-x-[-50%] translate-y-[-50%] lg:h-[80px] lg:w-[80px]"
                />
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {play.state && (
        <div className="fixed top-0 left-0 z-50 flex h-screen w-full items-center justify-center bg-black/90">
          <RiCloseLargeFill
            className="absolute top-20 right-4 cursor-pointer text-[30px] text-white"
            onClick={() => setPlay({ state: false, video: "" })}
          />

          <ReactPlayer
            src={play.video}
            width={"50%"}
            height={"50%"}
            controls={false}
            playing={true}
          />
        </div>
      )}
    </div>
  );
};

export default CourseSuccessStoryComponent;
