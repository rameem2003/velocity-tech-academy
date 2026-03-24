import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { RiCheckboxCircleFill } from "@remixicon/react";
import React from "react";

const page = () => {
  return (
    <main className="py-[120px]">
      <Container>
        <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center rounded-2xl bg-white p-6 text-center shadow-lg">
          <RiCheckboxCircleFill
            size={120}
            className="text-accent-foreground mb-4 text-6xl"
          />
          <h1 className="font-inter font-syncopate mb-2 text-2xl font-bold">
            Purchase Failed
          </h1>
          <p className="font-inter font-syncopate mb-6">
            Unfortunately, your payment could not be processed. Please try
            again.
          </p>

          <Button className="">Try Again</Button>
        </div>
      </Container>
    </main>
  );
};

export default page;
