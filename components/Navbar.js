import Image from "next/image";
import Link from 'next/link'
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 md:px-32 py-5 absolute top-0 rounded-b-3xl shadow-xl">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost normal-case text-3xl text-[#17c79a] carter tracking-wider">
          RansPay
        </Link>
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
        <div className="dropdown dropdown-bottom dropdown-end pl-3">
          <label tabIndex={0}>
            <div className="indicator cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </div>
          </label>
          <div tabIndex={0} className="dropdown-content menu py-5 px-6 shadow bg-base-100 rounded-box w-80 gap-5">
            <div className="flex items-center gap-2 rounded-xl shadow-md px-3 py-3">
              <div>
                <FiArrowDown className="text-2xl text-green-500"/>
              </div>
              <div>
                <p className="text-sm text-gray-400">Accept from Joshua Lee</p>
                <h3 className="font-bold">Rp220.000</h3>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-xl shadow-md px-3 py-3">
              <div>
                <FiArrowDown className="text-2xl text-green-500"/>
              </div>
              <div>
                <p className="text-sm text-gray-400">Accept from Joshua Lee</p>
                <h3 className="font-bold">Rp220.000</h3>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-xl shadow-md px-3 py-3">
              <div>
                <FiArrowDown className="text-2xl text-green-500"/>
              </div>
              <div>
                <p className="text-sm text-gray-400">Accept from Joshua Lee</p>
                <h3 className="font-bold">Rp220.000</h3>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-xl shadow-md px-3 py-3">
              <div>
                <FiArrowDown className="text-2xl text-green-500"/>
              </div>
              <div>
                <p className="text-sm text-gray-400">Accept from Joshua Lee</p>
                <h3 className="font-bold">Rp220.000</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
