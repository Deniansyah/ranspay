import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

const Confirmation = () => {
  return (
    <div className="relative">
      <Navbar />
      {/* Main */}
      <div className="flex bg-gray-100 md:px-32 pt-32 pb-10 gap-5">
        <Navigation />
        {/* Confirmation */}
        <section className="basis-3/4">
          <div className="bg-white rounded-xl px-7 py-5">
            <h3 className="font-bold mb-3">Transfer To</h3>
            <div className="flex gap-4 bg-white p-5 shadow-lg rounded-xl">
              <Image src="/user-history-1.png" width={46} height={46} />
              <div>
                <h3 className="font-bold">Samuel Suhi</h3>
                <p className="text-sm text-gray-400">+62 813-8492-9994</p>
              </div>
            </div>
            <h3 className="font-bold my-5">Details</h3>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col bg-white py-2 px-5 shadow-lg rounded-lg">
                <p className="text-sm text-gray-400">Amount</p>
                <h3 className="font-bold text-lg">Rp100.000</h3>
              </div>
              <div className="flex flex-col bg-white py-2 px-5 shadow-lg rounded-lg">
                <p className="text-sm text-gray-400">Balance Left</p>
                <h3 className="font-bold text-lg">Rp20.000</h3>
              </div>
              <div className="flex flex-col bg-white py-2 px-5 shadow-lg rounded-lg">
                <p className="text-sm text-gray-400">Date & Time</p>
                <h3 className="font-bold text-lg">May 11, 2020 - 12.20</h3>
              </div>
              <div className="flex flex-col bg-white py-2 px-5 shadow-lg rounded-lg">
                <p className="text-sm text-gray-400">Notes</p>
                <h3 className="font-bold text-lg">For buying some socks</h3>
              </div>
            </div>
            <div className="w-full flex justify-end">
              <Link href='/transfer/status' className="btn btn-accent text-white mt-7">Confirmation</Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Confirmation;
