import React from "react";
import Image from "next/image";
import InfoComponent from "./InfoComponent";
import PriceComponent from "./PriceComponent";
import CourseSuccessStoryComponent from "./CourseSuccessStoryComponent";
// import Advertisement from "@/components/shared/Advertisement";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Metadata, ResolvingMetadata } from "next";
import { singleCourse } from "@/lib/courseApi";
import { courseType, PageProps } from "@/types/type";
import Container from "@/components/common/Container";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const id = (await params).id;
  // fetch post information
  const post = await singleCourse(id).then((res) => res.data);

  return {
    title: post.title + " || Velocity Tech Academy",
    // description: post.description,
  };
}

const page = async ({ params }: PageProps) => {
  let { id } = await params;
  console.log(id);

  let data = await singleCourse(id);

  let course: courseType = data.data;

  const services = [
    {
      title: "Live Online Classes",
      description:
        "Our live online classes provide an interactive learning experience, allowing you to engage with instructors and fellow students in real-time. This format fosters a collaborative environment where you can ask questions, participate in discussions, and receive immediate feedback on your progress.",
    },

    {
      title: "Project-Based Learning",
      description:
        "Our courses are designed based on project-based learning, which allows you to apply your skills in real-world scenarios. This approach helps you develop problem-solving abilities and enhances your expertise according to industry demands.",
    },

    {
      title: "Career Guidance and Placement Assistance",
      description:
        "We offer comprehensive career guidance and placement assistance to help you navigate the job market successfully. Our experienced career counselors provide personalized support, including resume writing, interview preparation, and job search strategies, to ensure you are well-equipped to secure your desired position in the tech industry.",
    },
    {
      title: "Practice Labs and Mentorship",
      description:
        "Our practice labs provide a hands-on learning environment where you can apply theoretical knowledge to real-world projects. Additionally, our mentorship program connects you with industry experts who offer guidance, support, and insights to help you succeed in your tech career.",
    },

    {
      title: "Lifetime Access",
      description:
        "Once you enroll in our course, you will have lifetime access. This means you can continue your learning journey at your convenience.",
    },
  ];

  return (
    <main className="py-30">
      <Container>
        <section className="mb-20 flex flex-col items-start justify-center gap-5 lg:flex-row">
          <div className="w-full lg:w-1/2 xl:h-7/12">
            <InfoComponent course={course} />
          </div>

          <div className="w-full lg:w-1/2 xl:h-5/12">
            <Image
              src={process.env.NEXT_PUBLIC_BASE_URL + course.thumb}
              alt="course"
              width={500}
              height={500}
              className="w-full rounded-md"
            />
          </div>
        </section>

        {/* <Advertisement /> */}

        <section className="mt-20">
          <div className="flex flex-col items-start justify-start gap-6 lg:flex-row">
            <div className="w-full lg:w-1/2 xl:w-7/12">
              <div className="mb-8">
                <h2 className="font-inter text-2xl font-bold text-white md:text-3xl xl:text-5xl">
                  Why Choose Our Course?
                </h2>

                <div className="mt-8 flex flex-wrap items-center justify-between">
                  {services.map((service, index) => (
                    <Card
                      key={index}
                      className="mb-4 w-full bg-lime-200 p-3 md:w-[48%]"
                    >
                      <CardHeader>
                        <h2 className="font-cd-bangla text-cd-primary text-2xl font-bold">
                          {service.title}
                        </h2>
                      </CardHeader>

                      <CardContent>
                        <p className="text-base leading-7 font-medium text-gray-600">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative w-full lg:w-1/2 xl:w-5/12">
              <CourseSuccessStoryComponent story={course.successStories} />
              <PriceComponent data={course} />
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default page;
