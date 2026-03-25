"use client";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserInfo = () => {
  const { user } = useAuth();
  return (
    <section className="w-full">
      <div className="bg-accent-foreground flex h-auto items-end rounded-md p-6 lg:h-75">
        <div className="flex w-full flex-col items-center justify-start gap-2 lg:flex-row">
          <div className="w-full lg:w-4/12 xl:w-2/12">
            <Image
              className="h-50 w-50 rounded-md"
              src={process.env.NEXT_PUBLIC_BASE_URL! + user?.avatar}
              alt={user?.name || "User Avatar"}
              width={1000}
              height={1000}
            />
          </div>
          <div className="w-full lg:w-8/12 xl:w-10/12">
            <h2 className="font-inter mb-8 text-5xl font-semibold text-white">
              {user?.name}
            </h2>
            <p className="font-inter text-lg font-medium text-white">
              <span className="font-bold">Email:</span> {user?.email}
            </p>
            <p className="font-inter text-lg font-medium text-white">
              <span className="font-bold">Phone:</span> {user?.phone || "N/A"}
            </p>

            <div className="mt-8 w-full text-right">
              <Link href="/dashboard/profile" className="inline-block">
                <Button className="bg-sidebar hover:bg-sidebar/90 cursor-pointer px-8">
                  Update Profile
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
