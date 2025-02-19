import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full md:px-10 py-4 flex justify-between items-center">
      <div className="flex items-center text-2xl font-semibold">
        <NavLink to={'/'} className="ml-1 md:block hidden">Arcsale AI</NavLink>
      </div>
      <div className="flex gap-4 items-center">
        <NavLink to={"/pricing"} className="">
          About
        </NavLink>
        <NavLink to={"/pricing"} className="">
          Pricing
        </NavLink>
        <button className="px-4 md:py-2 py-1 rounded-full bg-gray-100 text-black hover:bg-gray-200 transition-colors">
          View demo
        </button>
        <button className="px-4 md:py-2 py-1 rounded-full bg-black text-white hover:bg-gray-800 transition-colors">
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
