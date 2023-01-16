import React from "react";
import Service from "../../assets/services-img.png"

const Services = () => {
  return (
    <section id="services-section">
      <div className="container mx-auto flex py-10 ">
        {/* left section */}
        <div className="pt-10 px-5 w-1/2">
          <h1 className="text-3xl font-semibold pb-10">
            A whole world of freelance talent at your fingertips
          </h1>
          {/* first */}
          <div className="flex flex-col w-[450px] pb-5">
            <div className="flex items-center">
              <div className="border-[2px] rounded-full p-1 border-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <h4 className="pl-3 text-lg font-semibold">The best for every budget</h4>
            </div>
            <p className="text-left pt-2">
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          {/* second */}
          <div className="flex flex-col w-[450px] pb-5">
            <div className="flex items-center">
              <div className="border-[2px] rounded-full p-1 border-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <h4 className="pl-3 text-lg font-semibold">Quality work done quickly</h4>
            </div>
            <p className="text-left pt-2">
            Find the right freelancer to begin working on your project within minutes.
            </p>
          </div>
          {/* third */}
          <div className="flex flex-col w-[450px] ">
            <div className="flex items-center">
              <div className="border-[2px] rounded-full p-1 border-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <h4 className="pl-3 text-lg font-semibold">Protected payments, every time</h4>
            </div>
            <p className="text-left pt-2">
            Always know what you'll pay upfront. Your payment isn't released until you approve the work.
            </p>
          </div>
        </div>
        {/* right section */}
        <div className="pt-10">
            <img src={Service}/>
        </div>
      </div>
    </section>
  );
};

export default Services;
