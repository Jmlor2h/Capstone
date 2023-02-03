export const Header = () => {
  return (
  <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 allyfont">
  <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
  <svg
  className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
  viewBox="0 0 100 100"
  fill="currentColor"
  preserveAspectRatio="none slice"
  >
  <path d="M50 0H100L50 100H0L50 0Z" />
  </svg>
  <img
  className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
  src="https://images.pexels.com/photos/7176325/pexels-photo-7176325.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
  alt="therapist"
  />
  </div>
          <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
            <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold allyfont tracking-wider text-ally8 uppercase rounded-full ">
                Healthy Mind Healhty Body
              </p>
              <h2 className=" allyfont mb-5 font-sans text-3xl font-bold tracking-tight text-ally2 sm:text-4xl sm:leading-none">
               mentALLY was
                <br className="hidden md:block" />
                {' '} made for {' '}
                <span className="inline-block text-ally1">
                  YOU
                </span>
              </h2>
              <p className="pr-5 mb-5 text-base allyfont text-ally3 md:text-lg">
              Only 6% of Healthcare Profressionals in the US speak Spanish.
  100% of mentALLY Therapist and Doctors speak Spanish. We provide Spanish-speaking Healthcare Profressionals who care about you and your family's health and well-being.
              </p>
              <div className="flex items-center">
                <  a
                  href="/Login"
                  className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide transition duration-200 rounded shadow-md text-ally7 bg-ally6 hover:color-ally8 focus:shadow-outline focus:outline-none"
                >
               Get Started
                </a>
                <a
          href="/Register"
          className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide transition duration-200 rounded shadow-md text-ally7 bg-ally6 hover:color-ally8 focus:shadow-outline focus:outline-none"
        >
          Learn more
  </a>
  
              </div>
            </div>
          </div>
        </div>
      );
    };
  export default Header;
    