"use client";
import React, { useEffect, useState } from "react";
import { courseType } from "@/types/type";
import { Button } from "@/components/ui/button";

const PriceComponent = ({ data }: { data: courseType }) => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 835) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    // console.log(window.scrollY);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`static mt-5 rounded-lg bg-blue-200 p-3`}>
      <h2 className="font-cd-bangla text-cd-primary mb-5 text-3xl font-bold">
        Enrollment Begin
      </h2>

      <div className="rounded-lg bg-white p-6">
        <div className="mb-4 flex flex-col items-center justify-between md:flex-row">
          <h3 className="font-cd-bangla text-cd-primary text-2xl font-semibold">
            Price
          </h3>
          <div>
            <span className="font-cd-poppins text-cd-primary text-3xl font-bold">
              {data.discountedPrice ? data.discountedPrice : data.sellingPrice}{" "}
              BDT
            </span>
            {data.discountedPrice != 0 && (
              <del className="font-cd-poppins text-cd-primary text-sm font-bold">
                {data.sellingPrice} BDT
              </del>
            )}
          </div>
        </div>

        <Button className="font-syncopate w-full cursor-pointer rounded-md text-[20px] font-bold text-white uppercase">
          Enroll Now
        </Button>
      </div>
    </div>
  );
};

export default PriceComponent;
