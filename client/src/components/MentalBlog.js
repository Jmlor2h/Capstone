import React from "react";
import Workplace from "../assets/wokplace.png";
import Latinx from "../assets/Latinx.webp";
import SuicideAwarness from "../assets/Suicide.png";

export const MentalBlog = () => {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="overflow-hidden transition-shadow duration-300 bg-white2 rounded">
            <a
              href="https://nami.org/Blogs/NAMI-Blog/December-2022/Supporting-Mental-Health-in-The-Workplace"
              aria-label="Article"
            >
              <img
                src={Workplace}
                className="object-cover w-full h-64 rounded"
                alt="Workplace"
              />
            </a>
            <div className="py-5">
              <p className="mb-2 text-xs font-semibold text-teal uppercase">
                28 Dec 2022
              </p>
              <a
                href="https://nami.org/Blogs/NAMI-Blog/December-2022/Supporting-Mental-Health-in-The-Workplace"
                aria-label="Article"
                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-xl font-bold leading-5">
                  Supporting Mental Health in the Workplace
                </p>
              </a>
              <p className="mb-4 text-gray-700">
                Difficult topics, like mental illness and suicide, have likely
                impacted more people within your organization than you think —
                it is simply not discussed openly.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://nami.org/Blogs/NAMI-Blog/December-2022/Supporting-Mental-Health-in-The-Workplace"
                  aria-label="Likes"
                  className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                >
                  <div className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5 text-purple transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                    >
                      <polyline
                        points="6 23 1 23 1 12 6 12"
                        fill="none"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </div>
                  <p className="font-semibold">5.0K</p>
                </a>
                <a
                  href="https://nami.org/Blogs/NAMI-Blog/December-2022/Supporting-Mental-Health-in-The-Workplace"
                  aria-label="Comments"
                  className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                >
                  <div className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-5 h-5 text-purple transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                    >
                      <polyline
                        points="23 5 23 18 19 18 19 22 13 18 12 18"
                        fill="none"
                        strokeMiterlimit="10"
                      />
                      <polygon
                        points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </div>
                  <p className="font-semibold">25</p>
                </a>
              </div>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white2 rounded">
            <a
              href="https://nami.org/Blogs/NAMI-Blog/July-2020/How-My-Latina-Identity-Holds-Hands-with-My-Depression"
              aria-label="Article"
            >
              <img
                src={Latinx}
                className="object-cover w-full h-64 rounded"
                alt="Latin x"
              />
            </a>
            <div className="py-5">
              <p className="mb-2 text-xs font-semibold text-teal uppercase">
                27 Jul 2020
              </p>
              <a
                href="https://nami.org/Blogs/NAMI-Blog/July-2020/How-My-Latina-Identity-Holds-Hands-with-My-Depression"
                aria-label="Article"
                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-xl font-bold leading-5">
                  How My Latina Identity Holds Hands with My Depression
                </p>
              </a>
              <p className="mb-4 text-gray-700 text-sm">
                There is a perception in Latinx/Hispanic communities, especially
                among older people, that discussing problems with mental health
                can create embarrassment and shame for the family, resulting in
                fewer people seeking treatment
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://nami.org/Blogs/NAMI-Blog/July-2020/How-My-Latina-Identity-Holds-Hands-with-My-Depression"
                  aria-label="Likes"
                  className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                >
                  <div className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5 text-purple transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                    >
                      <polyline
                        points="6 23 1 23 1 12 6 12"
                        fill="none"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </div>
                  <p className="font-semibold">10.5K</p>
                </a>
                <a
                  href="https://nami.org/Blogs/NAMI-Blog/July-2020/How-My-Latina-Identity-Holds-Hands-with-My-Depression"
                  aria-label="Comments"
                  className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                >
                  <div className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-5 h-5 text-purple transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                    >
                      <polyline
                        points="23 5 23 18 19 18 19 22 13 18 12 18"
                        fill="none"
                        strokeMiterlimit="10"
                      />
                      <polygon
                        points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </div>
                  <p className="font-semibold">850</p>
                </a>
              </div>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white2 rounded">
            <a
              href="https://nami.org/Blogs/NAMI-Blog/September-2022/Changing-The-Conversation-About-Suicide"
              aria-label="Article"
            >
              <img
                src={SuicideAwarness}
                className="object-cover w-full h-64 rounded"
                alt="Change Topic"
              />
            </a>
            <div className="py-5">
              <p className="mb-2 text-xs font-semibold text-teal uppercase">
                26 Sep 2020
              </p>
              <a
                href="https://nami.org/Blogs/NAMI-Blog/September-2022/Changing-The-Conversation-About-Suicide"
                aria-label="Article"
                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-xl font-bold leading-5">
                  Changing The Conversation About Suicide
                </p>
              </a>
              <p className="mb-4 text-gray-700">
                Suicide is the 12th leading cause of death overall in the U.S.—
                and 90% of people who die by suicide may have experienced
                symptoms of a mental health condition.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://nami.org/Blogs/NAMI-Blog/September-2022/Changing-The-Conversation-About-Suicide"
                  aria-label="Likes"
                  className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                >
                  <div className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5 text-purple transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                    >
                      <polyline
                        points="6 23 1 23 1 12 6 12"
                        fill="none"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </div>
                  <p className="font-semibold">7.4K</p>
                </a>
                <a
                  href="https://nami.org/Blogs/NAMI-Blog/September-2022/Changing-The-Conversation-About-Suicide"
                  aria-label="Comments"
                  className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                >
                  <div className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-5 h-5 text-purple transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                    >
                      <polyline
                        points="23 5 23 18 19 18 19 22 13 18 12 18"
                        fill="none"
                        strokeMiterlimit="10"
                      />
                      <polygon
                        points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </div>
                  <p className="font-semibold">81</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
