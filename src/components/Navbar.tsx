import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <nav className="w-full md:px-10 md:py-6 flex justify-between items-center">
      <div className="flex items-center text-2xl gap-2 font-semibold">
        <img src="arcsale-logo.png" className="h-10" alt="" />
        <NavLink to={"/"} className="ml-1 font-bold md:block hidden">
          Arcsale AI
        </NavLink>
      </div>
      <div className="hidden md:flex gap-5 items-center">
        <NavLink to="/aboutus" className="hover:text-gray-500 font-medium">
          About
        </NavLink>
        <NavLink to="/pricing" className="hover:text-gray-500 font-medium">
          Pricing
        </NavLink>
        <NavLink
          to={"/contact"}
          className="px-4 md:py-2 py-1 text-sm rounded-full bg-black text-white cursor-pointer font-medium transition-colors"
        >
          View demo
        </NavLink>
        <button
          onClick={() => scrollToBottom()}
          className="px-4 cursor-pointer md:py-2 font-medium py-1 text-sm rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
        >
          Contact Us
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          className="absolute right-6 z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute z-[1000] top-0 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden"
        >
          <button onClick={() => setIsOpen(!isOpen)}>
            <X size={24} />
          </button>
          <NavLink to="/aboutus" className="hover:text-gray-500">
            About
          </NavLink>
          <NavLink
            to="/pricing"
            className="hover:text-gray-500"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </NavLink>
          <NavLink
            to={"/contact"}
            className="px-4 py-2 rounded-full bg-black text-white hover:bg-gray-200 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            View demo
          </NavLink>
          <button
            className="px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
            onClick={() => {
              scrollToBottom(), setIsOpen(false);
            }}
          >
            Contact Us
          </button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
