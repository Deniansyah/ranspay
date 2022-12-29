import { FiEdit2 } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

const Input = () => {
  return (
    <div className="relative">
      <Navbar />
      {/* Main */}
      <div className="flex bg-gray-100 h-screen md:px-32 pt-32 pb-10 gap-5">
        <Navigation />
        {/* Filled */}
        <section className="basis-3/4">
          <div className="bg-white rounded-xl px-7 py-5">
            <h3 className="font-bold mb-3">Transfer Money</h3>
            <div className="flex gap-4 bg-white p-5 shadow-lg rounded-xl">
              <Image src="/user-history-1.png" width={46} height={46} />
              <div>
                <h3 className="font-bold">Samuel Suhi</h3>
                <p className="text-sm text-gray-400">+62 813-8492-9994</p>
              </div>
            </div>
            <p className="text-gray-400 w-96 my-10">Type the amount you want to transfer and then press continue to the next steps.</p>
            <div className="flex flex-col justify-center items-center">
              <input type="text" placeholder="0.00" className="text-4xl font-bold outline-none text-center" />
              <h2 className="font-bold my-7">Rp120.000 Available</h2>
              <div className="flex items-center border-b-2 py-2 w-80">
                <FiEdit2 className="text-xl text-gray-400" />
                <input type="text" placeholder="Add some notes" className="outline-none pl-3 w-full" />
              </div>
            </div>
            <div className="w-full flex justify-end">
              <Link href='/transfer/confirmation' className="btn btn-accent text-white mt-7">Continue</Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Input;
