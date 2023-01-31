const About = () => {
return (
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<div className="grid gap-12 row-gap-8 lg:grid-cols-2">
<div className="flex flex-col justify-center">
<div className="max-w-xl mb-6">
<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-ally2 sm:text-4xl sm:leading-none">
Who We Are 
<br className="hidden md:block" />
&{' '}
<span className="inline-block text-ally1">
Our Mission
</span>
</h2>
<p className="text-base text-ally6 md:text-lg">
We want to provide education and information to those seeking or receiving mental health services, such as people diagnosed with life-threatening/ terminal illnesses. We want to provide personal coping ability, and internal and external resources from their own areas of strength are often better able to address difficulties, feel more in control of the condition(s), and have a greater internal capacity to work toward mental and emotional well-being. Many Latino individuals who have a mental health condition know little or nothing about the condition they have been diagnosed with, (because it’s such a taboo thing, and stigma) what they might expect from therapy or the positive and negative effects of any medications they may be prescribed. 

</p>
</div>
<div className="grid gap-8 row-gap-8 sm:grid-cols-2">
<div>
<div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
<svg
className="w-10 h-10 text-deep-purple-accent-400"
stroke="currentColor"
viewBox="0 0 52 52"
>
<polygon
strokeWidth="3"
strokeLinecap="round"
strokeLinejoin="round"
fill="none"
points="29 13 14 29 25 29 23 39 38 23 27 23"
/>
</svg>
</div>
<h6 className="mb-2 font-semibold leading-5 text-ally8">
Educate Yourself
</h6>
<p className="text-sm text-ally8">
With our provided resources in your dashboard, after free sign up. You have everything you need to learn more about your well being.
</p>
</div>
<div>
<div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                  <svg
                    className="w-10 h-10 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5 text-ally8">
               Resources
                </h6>
                <p className="text-sm text-ally8">
                  We provide Articles, Activities, Questionares, and Free Consultations with Healthcare Profressionals.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt="clipcoard therapist"
            />
          </div>
        </div>
      </div>
    );
  };

  export default About;