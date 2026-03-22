import Container from "@/components/common/Container";
import { Card } from "@/components/ui/card";
import React from "react";

const About = () => {
  const titles = [
    {
      title: "Industry Standard Curriculum",
      short_des: "Learn the latest industry standards and best practices.",
    },
    {
      title: "Hands-on Projects",
      short_des: "Gain real-world experience through practical projects.",
    },
    {
      title: "Expert Instructors",
      short_des: "Learn from industry professionals with years of experience.",
    },
    {
      title: "Career Support",
      short_des: "Get guidance and support to advance your career.",
    },
    {
      title: "Community and Networking",
      short_des: "Connect with peers and build your professional network.",
    },
  ];

  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col-reverse items-center justify-between gap-10 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <div className="w-full px-2 py-10 xl:p-20">
              {titles.map((item, index) => (
                <Card
                  key={index}
                  className="bg-accent-foreground mb-5 rounded-md px-4"
                >
                  <h3 className="font-syncopate text-lg font-bold text-white uppercase">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground font-inter text-base font-medium">
                    {item.short_des}
                  </p>
                </Card>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="font-inter text-accent-foreground mb-8 text-2xl font-semibold">
              Why you need to be an IT skilled person?
            </h2>

            <p className="text-base text-white">
              In today’s digital era, learning IT skills has become an essential
              competency rather than an optional one. Gaining IT knowledge is
              not just about understanding how systems work—it’s about
              developing the ability to navigate and leverage technology
              effectively in everyday life and professional environments. These
              skills empower you to solve problems efficiently and think in a
              structured, analytical way. <br /> <br /> By learning IT, you open
              the door to a wide range of opportunities. You can work on
              building websites, developing applications, managing data,
              securing systems, or even automating everyday tasks. IT skills
              enhance your creativity by allowing you to turn ideas into
              practical solutions and real-world projects. <br /> <br /> The
              demand for IT skills continues to grow across nearly every
              industry, from healthcare and education to business and
              entertainment. It offers strong career prospects, competitive
              salaries, and the flexibility to work remotely or freelance from
              anywhere in the world. Fields like software development, data
              analysis, cybersecurity, cloud computing, and artificial
              intelligence all rely heavily on IT expertise. <br /> <br />{" "}
              Moreover, IT learning strengthens your problem-solving and
              critical thinking abilities. It trains you to break down complex
              challenges into manageable parts and find efficient solutions.
              These are transferable skills that benefit you in any career path.{" "}
              <br /> <br /> In summary, learning IT is not just about acquiring
              technical knowledge—it’s about preparing yourself for the future.
              It equips you with the tools to innovate, adapt, and thrive in a
              technology-driven world. Starting your journey in IT today means
              investing in a more capable, flexible, and opportunity-rich
              future.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
