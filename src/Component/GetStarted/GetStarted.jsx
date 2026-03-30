import UserImage from "../../assets/user.png";
import ProductImage from "../../assets/package.png";
import RocketImage from "../../assets/rocket.png";

const GetStarted = () => {
  return (
    <div className="bg-base-300 px-5">
      <div className="py-[12px] w-full max-w-[1200px] mx-auto ">
        <div className="text-center mt-10">
          <h1 className="text-[#101727] font-extrabold text-2xl mb-4 sm:text-3xl md:text-4xl lg:text-5xl ">
            Get Started in 3 Steps
          </h1>
          <p className="text-[#627382]">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* card container  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-10 mb-[120px]">
          <div className="text-center relative bg-white px-6 py-[88px] rounded-2xl">
            <img
              className="mx-auto w-[100px] rounded-full  bg-base-300 p-5 mb-4"
              src={UserImage}
              alt=""
            />
            <h1 className="text-2xl font-bold text-[#101727] mb-4">
              Create Account
            </h1>
            <p className="text-[#627382]">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>

            <div className="w-10 h-10 p-2.5 absolute top-5 right-5 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full">
              <h1 className="text-white flex text-[14px] font-bold  justify-center items-center h-full">
                01
              </h1>
            </div>
          </div>
          <div className="text-center relative bg-white px-6 py-[88px] rounded-2xl">
            <img
              className="mx-auto w-[100px] rounded-full  bg-base-300 p-5 mb-4"
              src={ProductImage}
              alt=""
            />
            <h1 className="text-2xl font-bold text-[#101727] mb-4">
              Choose Products
            </h1>
            <p className="text-[#627382]">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>

            <div className="w-10 h-10 p-2.5 absolute top-5 right-5 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full">
              <h1 className="text-white flex text-[14px] font-bold  justify-center items-center h-full">
                01
              </h1>
            </div>
          </div>
          <div className="text-center relative bg-white px-6 py-[88px] rounded-2xl">
            <div className="w-[100px] h-[100px] mx-auto rounded-full bg-base-300 flex items-center justify-center mb-4">
              <img
                className="w-[60px] object-contain"
                src={RocketImage}
                alt=""
              />
            </div>
            <h1 className="text-2xl font-bold mt-4 text-[#101727] mb-4">
              Start Creating
            </h1>
            <p className="text-[#627382]">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
            <div className="w-10 h-10 p-2.5 absolute top-5 right-5 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full">
              <h1 className="text-white flex text-[14px] font-bold  justify-center items-center h-full">
                01
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
