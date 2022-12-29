import { FiPhone, FiLock, FiDownload, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link"

function LandingPage() {
  return (
    <div className="bg-gray-400 h-screen relative">
      {/* Navabar */}
      <nav className="md:px-36 py-5 navbar absolute top-0 z-10">
        <div className="navbar-start">
          <Link href='/' className="btn btn-ghost normal-case text-3xl carter text-white drop-shadow-2xl tracking-wider">RansPay</Link>
        </div>
        <div className="navbar-end flex gap-5">
          <Link href='/login' className="btn btn-accent bg-transparent border-white text-white">Login</Link>
          <Link href='/sign-up' className="btn btn-accent bg-white text-[#17c79a] hover:text-white border-0">Sign Up</Link>
        </div>
      </nav>
      {/* Header */}
      <header className="hero h-screen bg-[#17c79a] relative">
        <svg className="absolute top-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#01F5B5"
            fill-opacity="1"
            d="M0,256L30,245.3C60,235,120,213,180,197.3C240,181,300,171,360,192C420,213,480,267,540,288C600,309,660,299,720,250.7C780,203,840,117,900,69.3C960,21,1020,11,1080,48C1140,85,1200,171,1260,181.3C1320,192,1380,128,1410,96L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
        </svg>
        <div className="w-full h-[44%] bg-[#01F5B5] absolute top-[395px]" />
        <svg className="absolute top-36" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#4BEAC0"
            fill-opacity="1"
            d="M0,256L30,245.3C60,235,120,213,180,197.3C240,181,300,171,360,192C420,213,480,267,540,288C600,309,660,299,720,250.7C780,203,840,117,900,69.3C960,21,1020,11,1080,48C1140,85,1200,171,1260,181.3C1320,192,1380,128,1410,96L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
        </svg>
        <div className="w-full h-[44%] bg-[#4BEAC0] absolute top-[395px]" />
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-white">Awesome App For Saving Time.</h1>
            <p className="py-6 text-white drop-shadow-xl">We bring you a mobile app for banking problems that oftenly wasting much of your times.</p>
            <Link href='/sign-up' className="btn btn-accent bg-white text-[#17c79a] hover:text-white border-0">Get Started</Link>
          </div>
        </div>
      </header>
      {/* Section Why Choose */}
      <section className="md:px-36 my-32">
        <div className="text-center flex flex-col justify-center items-center mb-10">
          <h1 className="text-5xl font-bold mb-10">
            <span className="text-[#17c79a]">Why</span> Choose RansPay?
          </h1>
          <div className="w-[500px]">
            <p>We have some great features from the application and it's totally free to use by all users around the world.</p>
          </div>
        </div>
        {/* card */}
        <div className="flex gap-5">
          <div className="card w-96 bg-base-100 shadow-xl text-center">
            <div className="card-body">
              <div className="flex justify-center">
                <div className="w-12 h-12 rounded-full bg-gray-400/40 flex justify-center items-center">
                  <FiPhone className="text-2xl text-[#17c79a]" />
                </div>
              </div>
              <h2 className="card-title justify-center py-5">24/7 Support</h2>
              <p>We have 24/7 contact support so you can contact us whenever you want and we will respond it.</p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl text-center">
            <div className="card-body">
              <div className="flex justify-center">
                <div className="w-12 h-12 rounded-full bg-gray-400/40 flex justify-center items-center">
                  <FiLock className="text-2xl text-[#17c79a]" />
                </div>
              </div>
              <h2 className="card-title justify-center py-5">Data Privacy</h2>
              <p>We make sure your data is safe in our database and we will encrypt any data you submitted to us.</p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl text-center">
            <div className="card-body">
              <div className="flex justify-center">
                <div className="w-12 h-12 rounded-full bg-gray-400/40 flex justify-center items-center">
                  <FiDownload className="text-2xl text-[#17c79a]" />
                </div>
              </div>
              <h2 className="card-title justify-center py-5">Easy Download</h2>
              <p>Zwallet is 100% totally free to use it's now available on Google Play Store and App Store.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Section Partner */}
      <section className="bg-gray-200">
        <div className="flex justify-center items-center py-10">
          <Image src="/partner.png" width={800} height={100} alt="partner" />
        </div>
      </section>
      {/* Section Money */}
      <section className="py-20 text-center">
        <div className="w-full flex justify-center">
          <h1 className="px-10 py-5 rounded-full bg-gray-200 text-5xl w-fit font-bold text-[#17c79a]">Rp. 390.736.500</h1>
        </div>
        <h1 className="py-8 text-5xl font-bold">
          <span className="text-[#17c79a]">Money</span> has Been Transfered.
        </h1>
        <div className="w-full flex justify-center">
          <p className="w-[500px]">That amount of money has been transfered from all users. We still counting and going strong!</p>
        </div>
      </section>
      {/* Section Features */}
      <section className="flex bg-gray-200">
        <div className="basis-2/5">
          <Image src="/phone-grup-cut.png" width={500} height={100} />
        </div>
        <div className="basis-3/5 py-24 pr-36">
          <h1 className="text-5xl font-bold w-[450px] mb-10">
            All The <span className="text-[#17c79a]">Great</span> RansPay Features.
          </h1>
          <div className="flex flex-col gap-5">
            <div className="p-5 rounded-lg bg-white shadow-xl">
              <h3 className="font-bold mb-2">
                <span className="text-[#17c79a]">1. </span> Small Fee
              </h3>
              <p>We only charge 5% of every success transaction done in FazzPay app.</p>
            </div>
            <div className="p-5 rounded-lg bg-white shadow-xl">
              <h3 className="font-bold mb-2">
                <span className="text-[#17c79a]">2. </span> Data Secured
              </h3>
              <p>All your data is secured properly in our system and it’s encrypted.</p>
            </div>
            <div className="p-5 rounded-lg bg-white shadow-xl">
              <h3 className="font-bold mb-2">
                <span className="text-[#17c79a]">1. </span> User Friendly
              </h3>
              <p>FazzPay come up with modern and sleek design and not complicated.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Section Testimoni */}
      <section className="text-center md:px-32 py-20">
        <h1 className="text-5xl font-bold">
          What Users are <span className="text-[#17c79a]">Saying.</span>
        </h1>
        <div className="flex justify-center">
          <p className="py-10 w-[500px]">We have some great features from the application and it's totally free to use by all users around the world.</p>
        </div>
        <div className="flex items-center gap-5">
          <div className="bg-gray-100 rounded-2xl p-3">
            <FiArrowLeft className="text-2xl" />
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-16 flex flex-col justify-center items-center">
            <Image src="/testi.png" width={100} height={100} alt="testi" />
            <h2 className="font-bold my-2">Alex Hansinburg</h2>
            <p className="mb-5">Designer</p>
            <p>
              “This is the most outstanding app that I've ever try in my live, this app is such an amazing masterpiece and it’s suitable for you who is bussy with their bussiness and must transfer money to another person aut there. Just try
              this app and see the power!”
            </p>
          </div>
          <div className="bg-gray-100 rounded-2xl p-3">
            <FiArrowRight className="text-2xl" />
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="md:px-36 py-10 bg-[#17c79a] text-white">
        <div className="border-b-2">
          <h1 className="text-2xl carter text-white tracking-wider">RansPay</h1>
          <p className="w-[260px] py-10">Simplify financial needs and saving much time in banking needs with one single app.</p>
        </div>
        <div className="flex my-3">
          <div className="grow">
            <p>2022 RansPay. All right reserved.</p>
          </div>
          <div className="flex gap-7">
            <p>+62 5637 xxxx 9901</p>
            <p>contact@ranspay.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage