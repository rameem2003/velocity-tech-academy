import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import {
  RiChatCheckFill,
  RiCheckboxBlankCircleFill,
  RiCheckboxCircleFill,
} from "@remixicon/react";
import React from "react";

const page = () => {
  return (
    <main className="py-30">
      <Container>
        <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center rounded-2xl bg-white p-6 text-center shadow-lg">
          <RiCheckboxCircleFill
            size={120}
            className="text-accent-foreground mb-4 text-6xl"
          />
          <h1 className="font-syncopate mb-2 text-2xl font-bold text-gray-800">
            Your payment has been cancelled.
          </h1>

          <Button className="">Thank You</Button>
        </div>
      </Container>
    </main>
  );
};

export default page;
