"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/hooks/useCart";

const CouponApply = () => {
  const { applyCoupon } = useCart();
  const [coupon, setCoupon] = useState<string>("");

  const handleApplyCoupon = () => {
    applyCoupon(coupon);
  };
  return (
    <div className="w-full">
      <div className="mt-4 w-full">
        <div className="flex w-full items-center justify-between gap-2">
          <Input
            onChange={(e) => setCoupon(e.target.value)}
            value={coupon}
            className="border-accent-foreground border-2 placeholder:text-white"
            type="text"
            placeholder="Enter Coupon Code"
          />
          <Button onClick={handleApplyCoupon} className="font-inter text-white">
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CouponApply;
