"use client";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import Link from "next/link";
import ProfileAvatar from "./ProfileAvatar";

const Navigation = () => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navMenu = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Our Courses",
      href: "/our-courses",
    },
  ];
  return (
    <nav
      className={`fixed top-0 left-0 z-10000 w-full py-3 transition-colors duration-300 ease-in-out ${scroll ? "bg-accent-foreground" : "bg-transparent"}`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <div className="w-1/2 md:w-3/12">
            <h2 className="text-3xl text-white">Logo</h2>
          </div>
          <div className="hidden md:block md:w-6/12">
            <ul className="flex items-center justify-center space-x-4">
              {navMenu.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-syncopate text-sm font-bold text-white uppercase xl:text-lg"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex w-1/2 items-center justify-end md:w-3/12">
            <ProfileAvatar />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navigation;
