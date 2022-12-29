import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

const Transfer = () => {
  return (
    <div className="relative">
      <Navbar />
      {/* Main */}
      <div className="flex bg-gray-100 h-screen md:px-32 pt-32 pb-10 gap-5">
        <Navigation />
        {/* Search */}
        <section className="basis-3/4">
          <div className="bg-white rounded-xl px-7 py-5">
            <h3 className="font-bold mb-3">Search Receiver</h3>
            <div className="flex items-center relative mb-3">
              <div className="absolute left-0 pl-3">
                <FiSearch className="text-2xl text-gray-400" />
              </div>
              <input className="input w-full pl-12 bg-gray-200" type="text" placeholder="Search receiver here" />
            </div>
            <div className="flex flex-col gap-4">
              <Link href='/transfer/input' className="btn btn-accent justify-start h-fit border-0 flex gap-4 bg-white p-5 shadow-lg rounded-xl">
                <Image src="/user-history-1.png" width={46} height={46} />
                <div>
                  <h3 className="font-bold capitalize text-left text-lg text-black">Samuel Suhi</h3>
                  <p className="text-sm">+62 813-8492-9994</p>
                </div>
              </Link>
              <Link href='/transfer/input' className="btn btn-accent justify-start h-fit border-0 flex gap-4 bg-white p-5 shadow-lg rounded-xl">
                <Image src="/user-history-1.png" width={46} height={46} />
                <div>
                  <h3 className="font-bold capitalize text-left text-lg text-black">Samuel Suhi</h3>
                  <p className="text-sm">+62 813-8492-9994</p>
                </div>
              </Link>
              <Link href='/transfer/input' className="btn btn-accent justify-start h-fit border-0 flex gap-4 bg-white p-5 shadow-lg rounded-xl">
                <Image src="/user-history-1.png" width={46} height={46} />
                <div>
                  <h3 className="font-bold capitalize text-left text-lg text-black">Samuel Suhi</h3>
                  <p className="text-sm">+62 813-8492-9994</p>
                </div>
              </Link>
              <Link href='/transfer/input' className="btn btn-accent justify-start h-fit border-0 flex gap-4 bg-white p-5 shadow-lg rounded-xl">
                <Image src="/user-history-1.png" width={46} height={46} />
                <div>
                  <h3 className="font-bold capitalize text-left text-lg text-black">Samuel Suhi</h3>
                  <p className="text-sm">+62 813-8492-9994</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Transfer;
