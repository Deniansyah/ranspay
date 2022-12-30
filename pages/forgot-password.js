  import { FiLock } from "react-icons/fi";
import Link from "next/link";
import AuthLeft from "../components/AuthLeft";

const ForgotPassword = () => {
  return (
    <div className="flex h-screen overflow-y-hidden">
      <AuthLeft />
      <div className="md:basis-1/2 bg-[#E5E5E]">
        <div className="md:pt-20 pt-10 px-16">
          <h2 className="text-2xl font-bold mb-5">Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h2>
          <p className="text-gray-500 mb-10">Now you can create a new password for your FazzPay account. Type your password twice so we can confirm your new passsword.</p>
          <form>
            <div className="flex items-center mb-3 border-b-2">
              <FiLock className="text-lg text-gray-400" />
              <input className="outline-none py-2 px-4 bg-white w-full" type="password" name="password" placeholder="Enter your password" />
            </div>
            <div className="flex items-center mb-3 border-b-2">
              <FiLock className="text-lg text-gray-400" />
              <input className="outline-none py-2 px-4 bg-white w-full" type="password" name="password" placeholder="Create new password" />
            </div>
            <Link href='/login' type="submit" className="flex justify-center bg-[#16C79A] rounded text-white w-full py-2 my-5">
              Reset Password
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
