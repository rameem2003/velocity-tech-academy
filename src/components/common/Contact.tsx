import React from "react";
import Container from "./Container";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import {
  RiFacebookBoxFill,
  RiLinkedinBoxFill,
  RiLinkedinFill,
  RiMailFill,
  RiPhoneFill,
  RiUserLocationFill,
} from "@remixicon/react";

const Contact = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col items-stretch justify-between gap-5 md:flex-row">
          <div className="w-full md:w-1/2 lg:w-8/12">
            <h2 className="text-accent-foreground text-4xl font-bold">
              Contact Us
            </h2>

            <form action="" className="mt-8">
              <div className="flex flex-row gap-0 gap-2">
                <div className="mb-2 w-1/2">
                  <Label
                    htmlFor="name"
                    className="text-lg font-medium text-white"
                  >
                    Name
                  </Label>

                  <Input
                    type="text"
                    name="name"
                    id="name"
                    className="border-accent-foreground mt-1 block w-full rounded-md border py-8 font-medium text-white shadow-sm placeholder:text-white focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm lg:text-xl"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-2 w-1/2">
                  <Label
                    htmlFor="email"
                    className="text-lg font-medium text-white"
                  >
                    Email
                  </Label>

                  <Input
                    type="email"
                    name="email"
                    id="email"
                    className="border-accent-foreground mt-1 block w-full rounded-md border py-8 font-medium text-white shadow-sm placeholder:text-white focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm lg:text-xl"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="mt-8">
                <Label
                  htmlFor="message"
                  className="text-lg font-medium text-white"
                >
                  Message
                </Label>

                <Textarea
                  //   type="text"
                  name="message"
                  id="message"
                  className="border-accent-foreground mt-1 block h-[200px] w-full rounded-md border py-8 font-medium text-white shadow-sm placeholder:text-white focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm lg:text-xl"
                  placeholder="Enter your message"
                />
              </div>

              <Button
                type="submit"
                className="border-accent-foreground hover:bg-accent-foreground mt-8 w-full rounded-md border py-8 text-lg font-medium text-white hover:text-white"
              >
                Submit
              </Button>
            </form>
          </div>
          <div className="h-full w-full object-cover md:w-1/2 lg:w-4/12">
            <div className="bg-accent-foreground shadow-accent-foreground flex h-full flex-col items-stretch rounded-md p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white">Get in Touch</h3>

              <div className="mt-8">
                <div className="mb-10 flex flex-row gap-2">
                  <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white">
                    <RiUserLocationFill
                      className="text-accent-foreground"
                      size={24}
                    />
                  </div>
                  <div>
                    <h3 className="font-inter text-xl font-bold text-white">
                      Address
                    </h3>
                    <p className="text-sm text-white">
                      123 Main Street, Anytown, USA
                    </p>
                  </div>
                </div>
                <div className="mb-10 flex flex-row gap-2">
                  <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white">
                    <RiPhoneFill className="text-accent-foreground" size={24} />
                  </div>
                  <div>
                    <h3 className="font-inter text-xl font-bold text-white">
                      Phone
                    </h3>
                    <p className="text-sm text-white">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="mb-10 flex flex-row gap-2">
                  <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white">
                    <RiMailFill className="text-accent-foreground" size={24} />
                  </div>
                  <div>
                    <h3 className="font-inter text-xl font-bold text-white">
                      Email
                    </h3>
                    <p className="text-sm text-white">example@example.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-2xl font-bold text-white">Follow Us</h3>

                <div className="mt-8">
                  <div className="flex items-center justify-start">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <RiFacebookBoxFill
                        className="text-white hover:text-gray-300"
                        size={38}
                      />
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <RiLinkedinBoxFill
                        className="text-white hover:text-gray-300"
                        size={38}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
