export const Statistic = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
                <div className="text-center md:border-r">
                    <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl text-purple">1 in 5 </h6>
                    <p className="text-xs font-medium tracking-tighter text-black uppercase lg:text-base">
                        U.S. adults experience mental illness each year
                    </p>
                </div>
                <div className="text-center md:border-r">
                    <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl text-purple">37%</h6>
                    <p className="text-xs font-medium tracking-tighter text-black uppercase lg:text-base">
                        Latino parents have experienced a mental health disorder
                    </p>
                </div>
                <div className="text-center md:border-r">
                    <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl text-purple">1 in 6</h6>
                    <p className="text-xs font-medium tracking-tighter text-black uppercase lg:text-base">
                        U.S. youth aged 6-17 experience a mental health disorder each year
                    </p>
                </div>
                <div className="text-center">
                    <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl text-purple">50%</h6>
                    <p className="text-xs font-medium tracking-tighter text-black uppercase lg:text-base">
                        of all lifetime mental illness begins by age 14, and 75% by age 24
                    </p>
                </div>
            </div>
        </div>
    );
};