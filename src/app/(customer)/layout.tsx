import Contact from "@/components/common/Contact";
import Footer from "@/components/common/Footer";
import Navigation from "@/components/common/Navigation";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navigation />
      {children}
      <Contact />
      <Footer />
    </>
  );
};

export default layout;
