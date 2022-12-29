import { FiGrid, FiArrowUp, FiArrowDown, FiPlus, FiUser, FiLogOut } from "react-icons/fi";
import Link from 'next/link'

const Navigation = () => {
  return (
    <aside className="flex flex-col gap-5 basis-1/4 bg-white rounded-xl py-10 relative">
      <Link href="/dashboard" className="flex items-center gap-2 px-8 hover:border-l-4 hover:border-[#17c79a] hover:text-[#17c79a]">
        <FiGrid className="text-2xl" />
        <p>Dashboard</p>
      </Link>
      <Link href="/transfer" className="flex items-center gap-2 px-8 hover:border-l-4 hover:border-[#17c79a] hover:text-[#17c79a]">
        <FiArrowUp className="text-2xl" />
        <p>Transfer</p>
      </Link>
      <Link href="#" className="flex items-center gap-2 px-8 hover:border-l-4 hover:border-[#17c79a] hover:text-[#17c79a]">
        <FiPlus className="text-2xl" />
        <p>Top Up</p>
      </Link>
      <Link href="/profile" className="flex items-center gap-2 px-8 hover:border-l-4 hover:border-[#17c79a] hover:text-[#17c79a]">
        <FiUser className="text-2xl" />
        <p>Profile</p>
      </Link>
      <Link href="/" className="flex items-center gap-2 px-8 absolute bottom-10">
        <FiLogOut className="text-2xl" />
        <p>Logout</p>
      </Link>
    </aside>
  );
};

export default Navigation;
