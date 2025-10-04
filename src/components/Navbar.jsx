import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "text-yellow-400 font-semibold"
      : "text-white";

  return (
    <nav className="bg-[#1e1e1e] text-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h2 className="text-2xl font-bold hover:text-yellow-400 transition-colors z-50">
          Kundan Kumar
        </h2>

        {/* Desktop Menu */}
        <div className="hidden sm:flex flex-1 justify-end mr-10">
          <ul className="flex space-x-6 text-lg">
           
            <li>
              <Link to="/about" className={`${isActive("/about")} hover:opacity-75`}>
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className={`${isActive("/projects")} hover:opacity-75`}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/services" className={`${isActive("/services")} hover:opacity-75`}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`${isActive("/contact")} hover:opacity-75`}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-gray-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Sliding Menu */}
      <div
        className={`sm:hidden fixed top-0 left-0 h-full w-64 bg-[#1e1e1e] shadow-lg transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)}>
            <X size={28} />
          </button>
        </div>
        <ul className="flex flex-col text-lg px-6">
          <li>
            <Link
              to="/hero"
              className={`${isActive("/")} hover:opacity-75 py-2 block`}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <hr className="border-gray-600" />
          </li>
          <li>
            <Link
              to="/about"
              className={`${isActive("/about")} hover:opacity-75 py-2 block`}
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <hr className="border-gray-600" />
          </li>
          <li>
            <Link
              to="/projects"
              className={`${isActive("/projects")} hover:opacity-75 py-2 block`}
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
            <hr className="border-gray-600" />
          </li>
          <li>
            <Link
              to="/services"
              className={`${isActive("/services")} hover:opacity-75 py-2 block`}
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
            <hr className="border-gray-600" />
          </li>
          <li>
            <Link
              to="/contact"
              className={`${isActive("/contact")} hover:opacity-75 py-2 block`}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
