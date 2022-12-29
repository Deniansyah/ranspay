import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const PersonalInfo = () => {
  return (
    <div className="relative">
      <Navbar />
      {/* Main */}
      <div className="flex bg-gray-100 md:px-32 pt-32 pb-10 gap-5">
        <Navigation />
        {/* Personal Info Content */}
        <section className="basis-3/4">
          <div className="bg-white rounded-xl px-7 py-5">
            <div className="flex flex-col gap-5">
              <h2 className="font-bold">Personal Information</h2>
              <p className="text-gray-400 w-96">We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</p>
              <div className="flex flex-col bg-white py-2 px-5 shadow-lg rounded-lg">
                <p className="text-sm text-gray-400">First Name</p>
                <h3 className="font-bold text-lg">Robert</h3>
              </div>
              <div className="flex flex-col bg-white py-2 px-5 shadow-lg rounded-lg">
                <p className="text-sm text-gray-400">Last Name</p>
                <h3 className="font-bold text-lg">Chandler</h3>
              </div>
              <div className="flex flex-col bg-white py-2 px-5 shadow-lg rounded-lg">
                <p className="text-sm text-gray-400">Verified E-mail</p>
                <h3 className="font-bold text-lg">pewdiepie1@gmail.com</h3>
              </div>
              <div className="flex bg-white py-2 px-5 shadow-lg rounded-lg">
                <div className="grow">
                  <p className="text-sm text-gray-400">Phone Number</p>
                  <h3 className="font-bold text-lg">+62 813-9387-7946</h3>
                </div>
                <Link href='manage-phone' className="btn btn-ghost text-[#17c79a]">Manage</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PersonalInfo;
