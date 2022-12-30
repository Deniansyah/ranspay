import { FiMail } from "react-icons/fi";
import Link from "next/link";
import AuthLeft from "../components/AuthLeft";

const ResetPassword = () => {
  return (
    <div className="flex h-screen overflow-y-hidden">
      <AuthLeft />
      <div className="md:basis-1/2 bg-[#E5E5E]">
        <div className="md:pt-20 pt-10 px-16">
          <h2 className="text-2xl font-bold mb-5">Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.</h2>
          <p className="text-gray-500 mb-10">To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</p>
          <form className="flex flex-col gap-10">
            <div className="flex items-center mb-7 border-b-2">
              <FiMail className="text-lg text-gray-400" />
              <input className="outline-none py-2 px-4 bg-white w-full" type="email" name="email" placeholder="Enter your e-mail" />
            </div>
            <Link href='/forgot-password' type="submit" className="flex justify-center bg-[#16C79A] rounded text-white w-full py-2 my-5">
              Confirm
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
