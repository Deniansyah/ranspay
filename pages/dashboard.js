import { FiArrowUp, FiArrowDown, FiPlus} from "react-icons/fi";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from 'next/link'
import Navigation from "../components/Navigation";

const Dashboard = () => {
  return (
    <div className="relative">
      <Navbar />
      {/* Main */}
      <div className="flex bg-gray-100 h-screen md:px-32 pt-32 pb-10 gap-5">
        <Navigation />
        {/* Content */}
        <section className="basis-3/4">
          <div className="flex bg-[#17c79a] rounded-xl p-7 text-white mb-5">
            <div className="grow">
              <p>Balance</p>
              <h1 className="text-5xl mb-3">Rp120.000</h1>
              <p>+62 813-9387-7946</p>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/transfer" className="flex items-center btn btn-accent text-white gap-2 bg-white/20 border-white capitalize">
                <FiArrowUp className="text-2xl text-gray-200/50" />
                Transfer
              </Link>
              <Link href="#" className="flex items-center btn btn-accent text-white gap-2 bg-white/20 border-white capitalize">
                <FiPlus className="text-2xl text-gray-200/50" />
                Top Up
              </Link>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col justify-center basis-1/2 bg-white rounded-xl p-7">
              <div className="flex">
                <div className="grow">
                  <FiArrowUp className="text-2xl text-green-500" />
                  <p className="text-sm">Income</p>
                  <h3 className="font-bold">Unavailable</h3>
                </div>
                <div>
                  <FiArrowDown className="text-2xl text-red-500" />
                  <p className="text-sm">Expense</p>
                  <h3 className="font-bold">Unavailable</h3>
                </div>
              </div>
              <div>
                <Image src="/grapik.png" width={270} height={200} alt="grafik" />
              </div>
            </div>
            <div className="flex flex-col basis-1/2 bg-white rounded-xl px-7 pt-5 gap-5">
              <div className="flex">
                <h2 className="font-bold mb-3 grow">Transaction History</h2>
                <Link href="/history" className="text-[#17c79a]">
                  See All
                </Link>
              </div>
              <div className="flex gap-2">
                <Image src="/user-history-1.png" width={46} height={46} />
                <div className="grow">
                  <h3 className="font-bold">Samuel Suhi</h3>
                  <p className="text-sm text-gray-400">Accept</p>
                </div>
                <p className="flex items-center text-green-500">+Rp50.000</p>
              </div>
              <div className="flex gap-2">
                <Image src="/user-history-netflix.png" width={46} height={46} />
                <div className="grow">
                  <h3 className="font-bold">Netflix</h3>
                  <p className="text-sm text-gray-400">Transfer</p>
                </div>
                <p className="flex items-center text-red-500">-Rp149.000</p>
              </div>
              <div className="flex gap-2">
                <Image src="/user-history-2.png" width={46} height={46} />
                <div className="grow">
                  <h3 className="font-bold">Christine Mar...</h3>
                  <p className="text-sm text-gray-400">Accept</p>
                </div>
                <p className="flex items-center text-green-500">+Rp150.000</p>
              </div>
              <div className="flex gap-2">
                <Image src="/user-history-a.png" width={46} height={46} />
                <div className="grow">
                  <h3 className="font-bold">Robert Chandler</h3>
                  <p className="text-sm text-gray-400">Topup</p>
                </div>
                <p className="flex items-center text-red-500">+Rp249.000</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
