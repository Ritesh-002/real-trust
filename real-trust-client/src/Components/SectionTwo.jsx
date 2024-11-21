import React from "react";

const SectionTwo = () => {
    return (
        <div className="bg-white  flex flex-col items-center justify-center px-[4rem] py-12">
            {/* Main Container */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                {/* Left Text Section */}
                <div className="flex flex-col gap-10">
                    <img src="\src\assets\Ellipse 10.png" className="h-10 w-10" alt="" />
                    <h1 className="pl-[2rem] text-3xl md:text-4xl font-bold text-blue-600">
                        Not Your Average Realtor
                    </h1>
                    <p className="pl-[2rem] text-gray-500 -mt-4 leading-relaxed">
                        Your trusted agency for simplifying entry, accurate consulting, and
                        offering unmatched expertise to maximize your value.
                    </p>
                </div>

                {/* Right Images Section */}
                <div className="relative flex justify-center">
                    {/* Large Circle Image */}
                    <div className="w-72 h-72  rounded-full overflow-hidden shadow-lg border-4 border-blue-100">
                        <img
                            src="\src\assets\Ellipse 11.png"
                            alt="Main Realtor"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Top Right Image */}
                    <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-40 h-40 rounded-full overflow-hidden shadow-md border-4 border-blue-100">
                        <img
                            src="\src\assets\Ellipse 12.png"
                            alt="Client Smiling"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Bottom Right Image */}
                    <div className="absolute bottom-0 right-0 transform translate-x-8 translate-y-8 w-40 h-40 rounded-full overflow-hidden shadow-md border-4 border-blue-100">
                        <img
                            src="\src\assets\Ellipse 13.png"
                            alt="Realtor with House"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="mt-12 text-center">
                <h2 className="text-xl md:text-2xl font-bold text-blue-600">
                    Why Choose Us?
                </h2>
                <div className="h-1.5 w-48 mt-1 bg-blue-800 rounded-md"></div>
                {/* Add content for this section as needed */}
            </div>
        </div>
    );
};

export default SectionTwo;
