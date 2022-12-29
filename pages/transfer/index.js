import { FiGrid, FiArrowUp, FiPlus, FiUser, FiLogOut, FiSearch } from "react-icons/fi";
import Image from "next/image";

const Transfer = () => {
  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="navbar bg-base-100 md:px-32 py-5 absolute top-0 rounded-b-3xl shadow-xl">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-3xl text-[#17c79a] carter tracking-wider">RansPay</a>
        </div>
        <div className="navbar-end">
          <div className="flex gap-2 mr-3">
            <div className="flex items-center">
              <Image src="/nav-profil.png" width={42} height={42} />
            </div>
            <div>
              <p>Robert Chandler</p>
              <p>+62 8139 xxxx 7946</p>
            </div>
          </div>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </div>
          </button>
        </div>
      </nav>
      {/* Main */}
      <div className="flex bg-gray-100 h-screen md:px-32 pt-32 pb-10 gap-5">
        {/* Navigasi */}
        <aside className="flex flex-col gap-5 basis-1/4 bg-white rounded-xl py-10 relative">
          <div className="flex items-center gap-2 px-8">
            <FiGrid className="text-2xl" />
            <p>Dashboard</p>
          </div>
          <div className="flex items-center gap-2 px-8 border-l-4 border-[#17c79a] text-[#17c79a]">
            <FiArrowUp className="text-2xl" />
            <p>Transfer</p>
          </div>
          <div className="flex items-center gap-2 px-8">
            <FiPlus className="text-2xl" />
            <p>Top Up</p>
          </div>
          <div className="flex items-center gap-2 px-8">
            <FiUser className="text-2xl" />
            <p>Profile</p>
          </div>
          <div className="flex items-center gap-2 px-8 absolute bottom-10">
            <FiLogOut className="text-2xl" />
            <p>Logout</p>
          </div>
        </aside>
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
              <div className="flex gap-4 bg-white p-5 shadow-lg rounded-xl">
                <Image src="/user-history-1.png" width={46} height={46} />
                <div>
                  <h3 className="font-bold">Samuel Suhi</h3>
                  <p className="text-sm text-gray-400">+62 813-8492-9994</p>
                </div>
              </div>
              <div className="flex gap-4 bg-white p-5 shadow-lg rounded-xl">
                <Image src="/user-history-1.png" width={46} height={46} />
                <div>
                  <h3 className="font-bold">Samuel Suhi</h3>
                  <p className="text-sm text-gray-400">+62 813-8492-9994</p>
                </div>
              </div>
              <div className="flex gap-4 bg-white p-5 shadow-lg rounded-xl">
                <Image src="/user-history-1.png" width={46} height={46} />
                <div>
                  <h3 className="font-bold">Samuel Suhi</h3>
                  <p className="text-sm text-gray-400">+62 813-8492-9994</p>
                </div>
              </div>
              <div className="flex gap-4 bg-white p-5 shadow-lg rounded-xl">
                <Image src="/user-history-1.png" width={46} height={46} />
                <div>
                  <h3 className="font-bold">Samuel Suhi</h3>
                  <p className="text-sm text-gray-400">+62 813-8492-9994</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Footer */}
      <footer className="flex bg-[#17c79a] py-3 md:px-32 text-white">
        <div className="grow">
          <p>2020 FazzPay. All right reserved.</p>
        </div>
        <div className="flex gap-7">
          <p>+62 5637 xxxx 9901</p>
          <p>contact@ranspay.com</p>
        </div>
      </footer>
    </div>
  );
};

export default Transfer;
