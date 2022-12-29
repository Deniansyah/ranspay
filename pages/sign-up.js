import Link from "next/link";
import Image from "next/image";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

const SignUp = () => {
  return (
    <div className="flex h-screen overflow-y-hidden">
      {/* Left */}
      <div className="hidden md:block md:basis-1/2 bg-[#16C79A] relative">
        <h1 className="text-white text-4xl ml-24 mt-10 carter drop-shadow-xl tracking-wider">RansPay</h1>
        <svg className="absolute top-[100px] w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#01F5B5"
            fill-opacity="1"
            d="M0,320L48,298.7C96,277,192,235,288,181.3C384,128,480,64,576,74.7C672,85,768,171,864,218.7C960,267,1056,277,1152,256C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <div className="w-full h-full bg-[#01F5B5] absolute top-[235px]" />
        <svg className="absolute top-[110px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#4BEAC0"
            fill-opacity="1"
            d="M0,320L48,298.7C96,277,192,235,288,181.3C384,128,480,64,576,74.7C672,85,768,171,864,218.7C960,267,1056,277,1152,256C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <div className="w-full h-full bg-[#4BEAC0] absolute top-[245px]" />
        <div className="flex justify-center items-center">
          <Image className="absolute z-10 top-24" src="/phone-grup.png" width={400} height={400} alt="phone-grup" />
        </div>
        <div className="ml-24 absolute z-20 bottom-16">
          <h3 className="text-white font-bold text-xl mb-7">App that Covering Banking Needs.</h3>
          <p className="text-white text-sm pr-28">
            FazzPay is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in FazzPay everyday with worldwide users coverage.
          </p>
        </div>
      </div>
      {/* Right */}
      <div className="md:basis-1/2 bg-[#E5E5E]">
        <div className="md:pt-20 pt-10 px-16">
          <h2 className="text-2xl font-bold mb-5">Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h2>
          <p className="text-gray-500 mb-10">Transfering money is eassier than ever, you can access FazzPay wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
          <form>
            <div className="flex items-center mb-7 border-b-2">
              <FiUser className="text-lg text-gray-400" />
              <input className="outline-none py-2 px-4 bg-white w-full" type="text" name="text" placeholder="Enter your first name" />
            </div>
            <div className="flex items-center mb-7 border-b-2">
              <FiUser className="text-lg text-gray-400" />
              <input className="outline-none py-2 px-4 bg-white w-full" type="text" name="text" placeholder="Enter your last name" />
            </div>
            <div className="flex items-center mb-7 border-b-2">
              <FiMail className="text-lg text-gray-400" />
              <input className="outline-none py-2 px-4 bg-white w-full" type="email" name="email" placeholder="Enter your e-mail" />
            </div>
            <div className="flex items-center mb-3 border-b-2">
              <FiLock className="text-lg text-gray-400" />
              <input className="outline-none py-2 px-4 bg-white w-full" type="password" name="password" placeholder="Enter your password" />
            </div>
            <Link href='/create-pin' type="submit" className="flex justify-center bg-[#16C79A] rounded text-white w-full py-2 my-5">
              Sign Up
            </Link>
          </form>
          <p className="text-center">
            Already have an account? Let's{" "}
            <Link href="/login" className="text-[#16C79A]">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
