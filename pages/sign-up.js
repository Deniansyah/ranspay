import Link from "next/link";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import AuthLeft from "../components/AuthLeft";

const SignUp = () => {
  return (
    <div className="flex h-screen overflow-y-hidden">
      <AuthLeft />
      <div className="md:basis-1/2 bg-[#E5E5E]">
        <div className="md:pt-20 pt-10 px-16">
          <h2 className="text-2xl font-bold mb-5">Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h2>
          <p className="text-gray-500 mb-10">Transfering money is eassier than ever, you can access FazzPay wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
          <form>
            <div className="flex items-center mb-7 border-b-2">
              <FiUser className="text-lg text-gray-400" />
              <input className="outline-none py-2 px-4 bg-white w-full" type="text" name="firstname" placeholder="Enter your first name" />
            </div>
            <div className="flex items-center mb-7 border-b-2">
              <FiUser className="text-lg text-gray-400" />
              <input className="outline-none py-2 px-4 bg-white w-full" type="text" name="lastname" placeholder="Enter your last name" />
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
