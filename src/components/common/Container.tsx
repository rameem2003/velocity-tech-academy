import React from "react";

const Container = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="mx-auto max-w-350 px-3 xl:px-0">{children}</div>;
};

export default Container;
