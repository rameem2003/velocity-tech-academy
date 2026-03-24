"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import CouponApply from "./CouponApply";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import Container from "@/components/common/Container";
import LoadingComponent from "@/components/shared/LoadingComponent";

const page = () => {
  let { cart, loading, fetchCart, deleteCart, goToPurchase } = useCart();

  useEffect(() => {
    fetchCart();
  }, []);

  if (!cart) {
    return (
      <div className="py-30">
        <Container>
          <h2 className="font-inter text-[36px] font-bold text-white">
            You have no course in your cart
          </h2>

          <Button>
            <Link
              href="/"
              className="font-inter cursor-pointer text-xl font-bold"
            >
              Home Page
            </Link>
          </Button>
        </Container>
      </div>
    );
  }

  return (
    <main className="py-30">
      {loading && <LoadingComponent />}
      <Container>
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-10/12">
            <h2 className="font-inter text-[36px] font-bold text-white">
              Course Information {cart?.course.title}
            </h2>
          </div>
        </div>
        <section className="mt-10">
          <div className="flex flex-wrap items-start justify-between gap-5 md:flex-nowrap">
            <div className="w-full lg:w-5/12">
              <Image
                className="w-full"
                src={
                  (process.env.NEXT_PUBLIC_BASE_URL +
                    cart?.course.thumb) as string
                }
                alt="thumbnail"
                width={500}
                height={500}
              />
            </div>

            <div className="w-full lg:w-7/12">
              <Table>
                <TableBody>
                  <TableRow className="">
                    <TableCell className="font-inter text-xl font-medium text-white">
                      Course Selling Price
                    </TableCell>

                    <TableCell className="font-inter text-right text-xl text-white">
                      {cart?.course.sellingPrice} BDT
                    </TableCell>
                  </TableRow>
                  <TableRow className="">
                    <TableCell className="font-inter text-xl font-medium text-white">
                      Course Discount Price
                    </TableCell>

                    <TableCell className="font-inter text-right text-xl text-white">
                      {cart?.course?.discountedPrice > 0
                        ? cart?.course.discountedPrice
                        : cart?.course.sellingPrice}{" "}
                      BDT
                    </TableCell>
                  </TableRow>

                  <TableRow className="">
                    <TableCell className="font-inter text-xl font-medium text-white">
                      Coupon Discount{" "}
                      <span className="font-normal text-gray-500">
                        {cart?.coupon}
                      </span>
                    </TableCell>

                    <TableCell className="font-inter text-right text-xl text-white">
                      {cart?.discount} BDT
                    </TableCell>
                  </TableRow>

                  <TableRow className="">
                    <TableCell className="font-inter text-xl font-medium text-white">
                      Course Final Price
                    </TableCell>

                    <TableCell className="font-inter text-right text-xl text-white">
                      {cart?.finalPrice > 0
                        ? cart?.finalPrice
                        : cart?.course.discountedPrice > 0
                          ? cart?.course.discountedPrice
                          : cart?.course.sellingPrice}{" "}
                      BDT
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <CouponApply />

              <div className="mt-2 flex items-center justify-between gap-2">
                <Button
                  onClick={goToPurchase}
                  variant={"default"}
                  className="w-[49%] cursor-pointer text-white"
                >
                  Confirm Enrollment
                </Button>
                <Button
                  onClick={deleteCart}
                  variant="destructive"
                  className="w-[49%] cursor-pointer text-white"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-10"></div>
        </section>
      </Container>
    </main>
  );
};

export default page;
