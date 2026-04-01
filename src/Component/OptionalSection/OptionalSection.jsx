import React from "react";

const OptionalSection = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-5">
      <div className=" w-full max-w-300 mx-auto text-center py-30">
        <div className="mb-10">
          <h1 className="text-white font-extrabold text-2xl mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
            Ready to Transform Your
            <span className="ml-1 bg-linear-to-r from-warning to-neutral-content bg-clip-text text-transparent ">
              Workflow?
            </span>
          </h1>
          <p className="text-white/90">
            Join thousands of professionals who are already using Digitools to
            work smarter. <br className="hidden lg:block" /> Start your free
            trial today.
          </p>
        </div>
        <div className="">
          <div className="flex items-center justify-center gap-4">
            <button className="btn rounded-full text-primary">
              Explore Products
            </button>
            <button className="btn bg-transparent text-white rounded-full">
              View Pricing
            </button>
          </div>
          <div className="text-white/90 text-[12px] sm:text-[14px] md:text-base mt-4">
            14-day free trial • No credit card required • Cancel anytime
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionalSection;
