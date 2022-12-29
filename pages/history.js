import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const History = () => {
  return (
    <div className="relative">
      <Navbar />
      {/* Main */}
      <div className="flex bg-gray-100 h-screen md:px-32 pt-32 pb-10 gap-5">
        <Navigation />
        {/* Notification */}
        <section className="basis-3/4">
          <div className="bg-white rounded-xl p-7">
            <div className="flex mb-5">
              <h3 className="flex items-center grow font-bold">Transaction History</h3>
              <div className="bg-gray-300 py-2 px-5 rounded-xl">-- Select Filter --</div>
            </div>
            <div className="flex flex-col gap-7">
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
              <div className="flex gap-2">
                <Image src="/user-history-1.png" width={46} height={46} />
                <div className="grow">
                  <h3 className="font-bold">Samuel Suhi</h3>
                  <p className="text-sm text-gray-400">Accept</p>
                </div>
                <p className="flex items-center text-green-500">+Rp50.000</p>
              </div>
              <div className="flex gap-2">
                <Image src="/user-history-1.png" width={46} height={46} />
                <div className="grow">
                  <h3 className="font-bold">Samuel Suhi</h3>
                  <p className="text-sm text-gray-400">Accept</p>
                </div>
                <p className="flex items-center text-green-500">+Rp50.000</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default History;
