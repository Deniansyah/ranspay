import { FiArrowRight, FiEdit2 } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Profile = () => {
  return (
    <div className="relative">
      <Navbar />
      {/* Main */}
      <div className="flex bg-gray-100 h-screen md:px-32 pt-32 pb-10 gap-5">
        <Navigation />
        {/* Profile Content */}
        <section className="basis-3/4">
          <div className="flex flex-col justify-center items-center bg-white rounded-xl px-7 py-5">
            <Image src="/nav-profil.png" width={60} height={60} className="mt-5" />
            <div className="flex items-center gap-2 text-gray-400 text-sm mt-2 mb-5">
              <FiEdit2 />
              <p>Edit</p>
            </div>
            <h2 className="text-lg font-bold">Robert Chandler</h2>
            <p className="text-sm text-gray-400">+62 813-xxxx-7946</p>
            <div className="w-full flex flex-col items-center gap-5 justify-center mt-5 md:mb-10">
              <Link href="/personal-info" className="btn btn-accent items-center w-96 bg-gray-300 px-5 rounded-lg border-0">
                <p className="grow font-bold text-left capitalize text-black text-lg">Personal Information</p>
                <FiArrowRight className="text-2xl text-gray-500" />
              </Link>
              <Link href="/change-password" className="btn btn-accent items-center w-96 bg-gray-300 px-5 rounded-lg border-0">
                <p className="grow font-bold text-left capitalize text-black text-lg">Change Password</p>
                <FiArrowRight className="text-2xl text-gray-500" />
              </Link>
              <Link href="/change-pin" className="btn btn-accent items-center w-96 bg-gray-300 px-5 rounded-lg border-0">
                <p className="grow font-bold text-left capitalize text-black text-lg">Change PIN</p>
                <FiArrowRight className="text-2xl text-gray-500" />
              </Link>
              <Link href="/" className="btn btn-accent items-center w-96 bg-gray-300 px-5 rounded-lg border-0">
                <p className="grow font-bold text-left capitalize text-black text-lg">Logout</p>
                <FiArrowRight className="text-2xl text-gray-500" />
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Profile
