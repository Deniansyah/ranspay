import Link from "next/link";
import AuthLeft from "../components/AuthLeft";

const CreatePin = () => {
    return (
      <div className="flex h-screen overflow-y-hidden">
        <AuthLeft />
        <div className="md:basis-1/2 bg-[#E5E5E]">
          <div className="md:pt-20 pt-10 px-16">
            <h2 className="text-2xl font-bold mb-5">Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h2>
            <p className="text-gray-500 mb-10">Transfering money is eassier than ever, you can access FazzPay wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
            <form className="flex flex-col justify-center items-center gap-10">
              <div className="flex gap-5">
                <div className="border-gray-400 border w-10 pl-2 h-14 py-2 rounded-lg">
                  <input type="text" placeholder="_" className="outline-none text-4xl w-5 text-center" />
                </div>
                <div className="border-gray-400 border w-10 pl-2 h-14 py-2 rounded-lg">
                  <input type="text" placeholder="_" className="outline-none text-4xl w-5 text-center" />
                </div>
                <div className="border-gray-400 border w-10 pl-2 h-14 py-2 rounded-lg">
                  <input type="text" placeholder="_" className="outline-none text-4xl w-5 text-center" />
                </div>
                <div className="border-gray-400 border w-10 pl-2 h-14 py-2 rounded-lg">
                  <input type="text" placeholder="_" className="outline-none text-4xl w-5 text-center" />
                </div>
                <div className="border-gray-400 border w-10 pl-2 h-14 py-2 rounded-lg">
                  <input type="text" placeholder="_" className="outline-none text-4xl w-5 text-center" />
                </div>
                <div className="border-gray-400 border w-10 pl-2 h-14 py-2 rounded-lg">
                  <input type="text" placeholder="_" className="outline-none text-4xl w-5 text-center" />
                </div>
              </div>
              <Link href='pin-success' type="submit" className="flex justify-center bg-[#16C79A] rounded text-white w-full py-2 my-5">
                Confirm
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
}

export default CreatePin