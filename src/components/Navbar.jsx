import { useState } from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { motion } from "motion/react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#our-work" },
  { label: "Contact Us", href: "#contact-us" },
];

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center justify-between px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70"
    >
      {/* Logo */}
      <img
        src={theme === "dark" ? assets.logo_dark : assets.logo}
        className="w-28 sm:w-36 lg:w-40"
        alt="Logo"
      />

      {/* Desktop Nav */}
      <div className="hidden sm:flex flex-1 justify-center items-center gap-10">
        {navLinks.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="dark:text-gray-300 hover:border-b transition-colors"
          >
            {label}
          </a>
        ))}
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3 sm:gap-5">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        <a
          href="#contact-us"
          className="hidden sm:flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all"
        >
          Connect <img src={assets.arrow_icon} width={14} alt="arrow" />
        </a>

        {/* Mobile Menu Icon */}
        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          width={26}
          alt="menu"
          className="sm:hidden cursor-pointer"
          onClick={() => setSidebarOpen(true)}
        />
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 min-h-screen bg-black/60 sm:hidden z-20 transition-opacity duration-300 ${
          sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeSidebar}
      />

      <div
        className={`fixed sm:hidden top-0 bottom-0 right-0 w-3/4 max-w-xs min-h-screen
    flex flex-col items-start pt-20 px-6
    bg-primary text-white gap-6 z-30 shadow-lg transform transition-transform duration-300 ease-in-out
    ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <img
          src={assets.close_icon}
          width={22}
          alt="close"
          className="absolute right-4 top-4 cursor-pointer"
          onClick={closeSidebar}
        />

        {navLinks.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            onClick={closeSidebar}
            className="text-lg font-medium hover:underline"
          >
            {label}
          </a>
        ))}

        {/* Connect Button */}
        <a
          href="#contact-us"
          onClick={closeSidebar}
          className="mt-6 bg-white text-primary px-6 py-2 rounded-full font-medium hover:scale-105 transition-all"
        >
          Connect
        </a>
      </div>
    </motion.div>
  );
};

export default Navbar;
