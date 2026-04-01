import UserImage from "../../assets/user.png";
import ProductImage from "../../assets/package.png";
import RocketImage from "../../assets/rocket.png";

const GetStartedSection = () => {
  return (
    <div className="bg-base-200  px-4 mt-8 sm:px-6 ">
      <div className="py-3 w-full max-w-300 mx-auto ">
        <div className="text-center mt-10">
          <h1 className="text-[#101727] font-extrabold text-2xl mb-4 sm:text-3xl md:text-4xl lg:text-5xl ">
            Get Started in 3 Steps
          </h1>
          <p className="text-[#627382]">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* card container  */}
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-10 mb-30">
          <div className="text-center relative animate-left-to-right bg-white px-6 py-22 rounded-2xl border border-neutral-200  hover:-translate-y-1.5 transition hover:shadow-xl  duration-300">
            <img
              className="mx-auto w-25 rounded-full  bg-base-200 p-5 mb-4"
              src={UserImage}
              alt="Create account illustration"
            />
            <h1 className="text-2xl font-bold text-[#101727] mb-4">
              Create Account
            </h1>
            <p className="text-[#627382]">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>

            <div className="w-10 h-10 p-2.5 absolute top-5 right-5 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full">
              <h1 className="text-white flex text-[14px] font-bold  justify-center items-center h-full">
                01
              </h1>
            </div>
          </div>
          <div className="text-center relative animate-right-to-left bg-white px-6 py-22 rounded-2xl border border-neutral-200  hover:-translate-y-1.5 transition hover:shadow-xl  duration-300">
            <img
              className="mx-auto w-25 rounded-full  bg-base-200 p-5 mb-4"
              src={ProductImage}
              alt="Choose products illustration"
            />
            <h1 className="text-2xl font-bold text-[#101727] mb-4">
              Choose Products
            </h1>
            <p className="text-[#627382]">
              Browse our catalog and select the tools that fit your needs.
            </p>

            <div className="w-10 h-10 p-2.5 absolute top-5 right-5 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full">
              <h1 className="text-white flex text-[14px] font-bold  justify-center items-center h-full">
                02
              </h1>
            </div>
          </div>
          <div className="text-center relative animate-left-to-right bg-white px-6 py-22 rounded-2xl border border-neutral-200  hover:-translate-y-1.5 transition hover:shadow-xl  duration-300">
            <div className="w-25 h-25 mx-auto rounded-full bg-base-200 flex items-center justify-center mb-4">
              <img
                className="w-15 object-contain"
                src={RocketImage}
                alt="Start creating illustration"
              />
            </div>
            <h1 className="text-2xl font-bold mt-4 text-[#101727] mb-4">
              Start Creating
            </h1>
            <p className="text-[#627382]">
              Download and start using your premium tools immediately.
            </p>
            <div className="w-10 h-10 p-2.5 absolute top-5 right-5 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full ">
              <h1 className="text-white flex text-[14px] font-bold  justify-center items-center h-full">
                03
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedSection;
