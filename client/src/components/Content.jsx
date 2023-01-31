const Content = () => {
return (
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
<div>
<p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
How We Help YOU
</p>
</div>
<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-ally1 sm:text-4xl md:mx-auto">
<span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-ally2 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
              </svg>
              <span className="relative text-ally2">mentALLY &</span>
            </span>{' '}
              Your Health
          </h2 >
          <p className="text-base text-ally2 md:text-lg">
           mentALLY offers you unlimited and immediate chat consultations with doctors and psychologists! after FREE sign up to make your consultations confidential.
          </p>
        </div>
        <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
          <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
            <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
              <h6 className="mb-2 font-semibold leading-5">Hypertension</h6>
              <p className="text-sm text-gray-900">
              1 in 5 Latinos develop high blood pressure, a disease called hypertension. MiSalud can help you reduce the risk of high blood pressure and improve your health habits.
‍ Control
              </p>
            </div>
          </div>
          <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
            <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
              <h6 className="mb-2 font-semibold leading-5">Diabetes</h6>
              <p className="text-sm text-gray-900">
              Hispanics have more than a 50% chance of developing diabetes during our lifetime, and often at a younger age. MiSalud helps you prevent and control the risk of diabetes.
‍ Manage
              </p>
            </div>
          </div>
          <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
            <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
              <h6 className="mb-2 font-semibold leading-5">
               High Cholesterol
              </h6>
              <p className="text-sm text-gray-900">
              30% of Latinos between the ages of 18 and 44 have high cholesterol. This rises to 60% between 45 and 64 years. The MiSalud health team can help you manage this.
‍ Lowers

              </p>
            </div>
          </div>
    
          <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
            <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
              <h6 className="mb-2 font-semibold leading-5">Obesity. </h6>
              <p className="text-sm text-gray-900">
              Hispanic Americans are 1.2 times as likely to be obese than non-Hispanic whites. This is especially important because obesity can lead to other health challenges.

              </p>
            </div>
          </div>
        </div>

        
        
        <div className="text-center">
          <a
            href="/"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-ally2 transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
           Read Articles
          </a>
        </div>
      </div>
    );
  };

  export default Content;