import MentalForm from "./MentalForm";
import WaterMind from '../assets/Watering.png'

export const ContainerMental = () => {
    return (
        <div className="relative flex flex-col-reverse py-16 lg:py-0 lg:flex-col">
            <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl">
                <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
                    <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-purple sm:text-4xl sm:leading-none md:text-center">
                        Mental Health And You
                    </h2>
                    <p className="mb-5 text-base text-black md:text-lg md:text-center">
                        A mental illness is a condition that affects a person's thinking,
                        feeling, behavior or mood. These conditions deeply impact day-to-day
                        living and may also affect the ability to relate to others. If you have
                        — or think you might have — a mental illness, the first thing you must know
                        is that you are not alone. Below is a standard edition Mental Health Assessment. Feel free
                        to take it. Once submitted your results will be processed by our administration. They will contact
                        you for further result discussion.
                    </p>
                    <MentalForm />
                </div>
            </div>
            <div className="inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
                <img
                    className="object-scale-down w-full max-h-full aspect-square"
                    src={WaterMind}
                    alt="WateringMind"
                />
            </div>
        </div>
    );
};