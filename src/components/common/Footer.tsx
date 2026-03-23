import React from "react";
import Container from "./Container";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mt-16 bg-gray-800 px-8 py-6 tracking-wide">
      <Container>
        <div className="relative">
          <div className="bg-accent-foreground absolute top-[-76px] flex min-h-[100px] w-full flex-wrap items-center justify-between gap-3 rounded-3xl py-2 max-sm:px-6 sm:px-8">
            <h6 className="text-xl font-medium text-white">
              Kickstart Your Career Today
            </h6>
            <button
              type="button"
              className="cursor-pointer gap-2 rounded-full bg-gray-800 px-6 py-3 text-sm text-white"
            >
              Get Started
            </button>
          </div>
          <div className="grid grid-cols-1 gap-8 pt-20 md:grid-cols-2 lg:grid-cols-5">
            <div className="max-w-sm lg:col-span-2">
              <h4 className="mb-6 text-base font-medium text-slate-100">
                About Us
              </h4>
              <p className="text-base leading-relaxed text-slate-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                gravida, mi eu pulvinar cursus, sem elit interdum mauris.
              </p>
            </div>
            <div>
              <h4 className="mb-6 text-base font-medium text-slate-100">
                Courses
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-base text-slate-400 hover:text-slate-200"
                  >
                    Web Development
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-base text-slate-400 hover:text-slate-200"
                  >
                    Mobile App Development
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-base text-slate-400 hover:text-slate-200"
                  >
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-base text-slate-400 hover:text-slate-200"
                  >
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-base text-slate-400 hover:text-slate-200"
                  >
                    E-commerce Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-base text-slate-400 hover:text-slate-200"
                  >
                    Brand Strategy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-6 text-base font-medium text-slate-100">
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="text-base text-slate-400">123 Main Street</li>
                <li className="text-base text-slate-400">
                  City, State, Country
                </li>
                <li className="text-base text-slate-400">
                  contact@example.com
                </li>
                <li className="text-base text-slate-400">+1 234 567 890</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-6 text-base font-medium text-slate-100">
                Follow Us
              </h4>
              <ul className="flex flex-wrap gap-4">
                <li>
                  <a href="javascript:void(0)">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 fill-blue-600"
                      viewBox="0 0 49.652 49.652"
                    >
                      <path
                        d="M24.826 0C11.137 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.137 38.516 0 24.826 0zM31 25.7h-4.039v14.396h-5.985V25.7h-2.845v-5.088h2.845v-3.291c0-2.357 1.12-6.04 6.04-6.04l4.435.017v4.939h-3.219c-.524 0-1.269.262-1.269 1.386v2.99h4.56z"
                        data-original="#000000"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      viewBox="0 0 112.196 112.196"
                    >
                      <circle
                        cx="56.098"
                        cy="56.097"
                        r="56.098"
                        fill="#007ab9"
                        data-original="#007ab9"
                      />
                      <path
                        fill="#fff"
                        d="M89.616 60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118-3.705 0-5.906 2.491-6.878 4.903-.353.862-.444 2.059-.444 3.268v22.524h-13.41s.18-36.546 0-40.329h13.411v5.715c-.027.045-.065.089-.089.132h.089v-.132c1.782-2.742 4.96-6.662 12.085-6.662 8.822 0 15.436 5.764 15.436 18.149zm-54.96-36.642c-4.587 0-7.588 3.011-7.588 6.967 0 3.872 2.914 6.97 7.412 6.97h.087c4.677 0 7.585-3.098 7.585-6.97-.089-3.956-2.908-6.967-7.496-6.967zm-6.791 59.77H41.27v-40.33H27.865v40.33z"
                        data-original="#f1f2f2"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h4 className="mb-6 text-base font-medium text-slate-100">
            We supports
          </h4>
          <Image
            className="w-full"
            src="/sslall.png"
            alt="footer"
            width={1000}
            height={1000}
          />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
