import React from "react";
import Youth from "../assets/youth.avif"
import Older from "../assets/OlderAdults.avif"
import Latinx from "../assets/LatinX.avif"
import Depression from '../assets/Depression.avif'
import Anxiety from '../assets/Anxiety.avif'
import BIPOC from '../assets/BIPOC.avif'
import WarningSigns from '../assets/WarningSigns.avif'
import Suicide from '../assets/SuicideCat.avif'


export const CategoriesMental = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="7b568941-9ed0-4f49-85a0-5e21ca6c7ad6"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#7b568941-9ed0-4f49-85a0-5e21ca6c7ad6)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative text-black">More On</span>
                    </span>{' '}
                    <span className="text-purple">Mental Health</span>
                </h2>
                <p className="text-base text-black md:text-lg">
                    More info on major mental health topics and conditions
                </p>
            </div>
            <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
                <a
                    href="https://mhanational.org/conditions/depression"
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                >
                    <div className="flex flex-col h-full">
                        <img
                            src={Depression}
                            className="object-cover w-full h-48"
                            alt="depression"
                        />
                        <div className="flex-grow border border-t-0 rounded-b">
                            <div className="p-5">
                                <h6 className="mb-2 text-xl font-semibold leading-5">
                                    Depression
                                </h6>
                                <p className="text-xs text-gray-900">
                                    Major depression is one of the most common mental illnesses,
                                    affecting more than 21 million of American adults each year.
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
                <a
                    href="https://mhanational.org/conditions/anxiety"
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                >
                    <div className="flex flex-col h-full">
                        <img
                            src={Anxiety}
                            className="object-cover w-full h-48"
                            alt="anxiety"
                        />
                        <div className="flex-grow border border-t-0 rounded-b">
                            <div className="p-5">
                                <h6 className="mb-2 text-xl font-semibold leading-5">
                                    Anxiety
                                </h6>
                                <p className="text-xs text-gray-900">
                                    Anxiety disorders are among the most common mental illnesses in America; over 42.5 million of adults are affected by these debilitating illnesses each year.
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
                <a
                    href="https://mhanational.org/conditions/suicide"
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                >
                    <div className="flex flex-col h-full">
                        <img
                            src={Suicide}
                            className="object-cover w-full h-48"
                            alt="Suicide"
                        />
                        <div className="flex-grow border border-t-0 rounded-b">
                            <div className="p-5">
                                <h6 className="mb-2 text-xl font-semibold leading-5">Suicide</h6>
                                <p className="text-xs text-gray-900">
                                    The majority of suicides worldwide are related to mental
                                    health disorders; depression, substance use, and psychosis are the biggest risk factors.
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
                <a
                    href="https://mhanational.org/bipoc"
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                >
                    <div className="flex flex-col h-full">
                        <img
                            src={BIPOC}
                            className="object-cover w-full h-48"
                            alt="BIPOC"
                        />
                        <div className="flex-grow border border-t-0 rounded-b">
                            <div className="p-5">
                                <h6 className="mb-2 text-xl font-semibold leading-5">
                                    BIPOC Mental Health
                                </h6>
                                <p className="text-sm text-gray-900">
                                    Mental Health Resources For Black, Indigenous, And People Of Color
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
                <a
                    href="https://mhanational.org/recognizing-warning-signs-and-how-cope"
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                >
                    <div className="flex flex-col h-full">
                        <img
                            src={WarningSigns}
                            className="object-cover w-full h-48"
                            alt="warning signs"
                        />
                        <div className="flex-grow border border-t-0 rounded-b">
                            <div className="p-5">
                                <h6 className="mb-2 text-xl font-semibold leading-5">
                                    Warning Signs
                                </h6>
                                <p className="text-xs text-gray-900">
                                    It is especially important to pay attention to sudden
                                    changes in thoughts and behaviors. Also keep in mind that
                                    the onset of several of the symptoms below, and not just any one change, indicates a problem that should be assessed.
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
                <a
                    href="https://www.vayahealth.com/get-to-know-us/current-news/rethinking-mental-health-in-the-latino-community/"
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                >
                    <div className="flex flex-col h-full">
                        <img
                            src={Latinx}
                            className="object-cover w-full h-48"
                            alt="Latinx Mental Health"
                        />
                        <div className="flex-grow border border-t-0 rounded-b">
                            <div className="p-5">
                                <h6 className="mb-2 text-xl font-semibold leading-5">
                                    Latinx Mental Health
                                </h6>
                                <p className="text-xs text-gray-900">
                                    It is important to look at how culture can add to mental health
                                    stigma in the Latino community. A lack of understanding and acceptance
                                    of mental illness keep many from speaking about their problems and getting professional care.
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
                <a
                    href="https://mhanational.org/depression-older-adults"
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                >
                    <div className="flex flex-col h-full">
                        <img
                            src={Older}
                            className="object-cover w-full h-48"
                            alt='Older Adults'
                        />
                        <div className="flex-grow border border-t-0 rounded-b">
                            <div className="p-5">
                                <h6 className="mb-2 text-xl font-semibold leading-5">Older Adults</h6>
                                <p className="text-xs text-gray-900">
                                    Depression is often under-recognized and under-treated in older adults.
                                    Without treatment, depression can impair an older adult’s ability to function and
                                    enjoy life, and can contribute to poorer overall health.
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
                <a
                    href="https://mhanational.org/childrens-mental-health"
                    aria-label="View Item"
                    className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                >
                    <div className="flex flex-col h-full">
                        <img
                            src={Youth}
                            className="object-cover w-full h-48"
                            alt="youth"
                        />
                        <div className="flex-grow border border-t-0 rounded-b">
                            <div className="p-5">
                                <h6 className="mb-2 text-xl font-semibold leading-5">
                                    Youth
                                </h6>
                                <p className="text-xs text-gray-900">
                                    The first “basic” is to know that children’s mental health matters.
                                    We need to treat a child’s mental health just like we do their physical health,
                                    by giving it thought and attention and, when needed, professional help.
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

        </div>
    );
};