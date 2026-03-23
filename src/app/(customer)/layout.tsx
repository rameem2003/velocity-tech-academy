import Contact from "@/components/common/Contact";
import Footer from "@/components/common/Footer";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      {children}
      <Contact />
      <Footer />
    </>
  );
};

export default layout;
