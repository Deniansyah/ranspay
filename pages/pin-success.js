import { FiCheck } from "react-icons/fi";
import Link from "next/link";
import AuthLeft from "../components/AuthLeft";

const PinSuccess = () => {
  return (
    <div className="flex h-screen overflow-y-hidden">
      <AuthLeft />
      <div className="md:basis-1/2 bg-[#E5E5E]">
        <div className="md:pt-20 pt-10 px-16">
          <div className="bg-green-500 p-4 rounded-full w-fit mb-10">
            <FiCheck className="text-white text-5xl" />
          </div>
          <h2 className="text-2xl font-bold mb-5">Your PIN Was Successfully Created</h2>
          <p className="text-gray-500 mb-24">Your PIN was successfully created and you can now access all the features in FazzPay.</p>
          <Link href='/dashboard' type="submit" className="flex justify-center bg-[#16C79A] rounded text-white w-full py-2 my-5">
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PinSuccess;
