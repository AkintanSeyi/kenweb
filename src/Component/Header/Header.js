import React, { useState, useEffect } from "react";
import { useNavigate  , useLocation} from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const url = "winred/ken-paxton-for-senate/donate-today/653898598083884832845";
const mobileLink = (path, text) => (
  <button
    onClick={() => {
      navigate(path);
      setIsOpen(false);
    }}
    className="w-full text-left px-8 py-3"
  >
    <span className="relative inline-block uppercase font-black text-[#0f2d5e] text-[14px]">
      {text}

      {location.pathname === path && (
        <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-[#E31D2B]"></span>
      )}
    </span>
  </button>
);
  useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [isOpen]);

  // Reusable classes for the nav links
  const navLinkClass = "uppercase font-bold  text-[#0f2d5e]  tracking-wider text-[15px] transition-all duration-200 border-b-2 border-transparent hover:border-red-600 ";
  const getNavLinkClass = (path) =>  
    `uppercase font-bold text-[#0f2d5e]  tracking-wider text-[15px] transition-all duration-200 border-b-2 ${
      location.pathname === path ? "border-red-600" : "border-transparent hover:border-red-600"
    }`;
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-6 px-8 md:px-12 flex items-center justify-between">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img 
          src="https://res.cloudinary.com/dvuq6vmiy/image/upload/v1783950866/Untitled-7-247w_fy78r9.webp" 
          alt="Paxton U.S. Senate" 
          className="h-14 w-auto  hover:cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-10 text-black">
   <button onClick={() => navigate("/issues")} className={getNavLinkClass("/issues")}>The Fight At Hand</button>
        <button onClick={() => navigate("/about")} className={getNavLinkClass("/about")}>Meet Ken Paxton</button>
        <button onClick={() => navigate("/paxton-s-patriots")} className={getNavLinkClass("/paxton-s-patriots")}>Join Paxton's Patriots</button>
        {/* Donate Button */}
            <button onClick={() => navigate("/paxton-s-patriots")} className={getNavLinkClass("/merch")}>         
              
             
              
              <a href="https://secure.winred.com/ken-paxton-for-senate/storefront?_ga=2.240941706.881323927.1783861300-804037818.1783861288"> Merch </a>
              
              </button>
      
        <a onClick={() => navigate(`/${url}`)}   className="bg-[#ff0033] hover:cursor-pointer text-white px-16 py-4 uppercase font-bold tracking-wide  hover:border-[#ff0033]   hover:text-[#0f2d5e] hover:border-2 hover:bg-white transition-colors">
          Donate →
        </a>
      </nav>

      {/* Mobile Hamburger Button */}
     <button
  className="md:hidden p-2"
  onClick={() => setIsOpen(true)}
>
  <svg
    className="w-9 h-9"
    fill="none"
    stroke="#E31D2B"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
</button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
    
<div
  className={`fixed inset-0 z-[9999] md:hidden transition-all duration-500 ${
    isOpen
      ? "visible bg-black/40"
      : "invisible bg-transparent pointer-events-none"
  }`}
>
  {/* Click outside to close */}
  <div
    className="absolute inset-0"
    onClick={() => setIsOpen(false)}
  />

  {/* Drawer */}
  <div
    className={`absolute top-0 right-0 h-full w-[82%] max-w-[330px] bg-white shadow-2xl transition-transform duration-500 ease-in-out flex flex-col ${
      isOpen ? "translate-x-0" : "translate-x-full"
    }`}
  >
    {/* Close */}
    <button
      onClick={() => setIsOpen(false)}
     className="absolute top-5 right-5 text-5xl text-gray-500 hover:text-black transition"
    >
      ×
    </button>

    {/* Logo */}
   

    {/* Navigation */}
  <div className="pt-20 flex flex-col">

    {mobileLink("/", "Home")}
{mobileLink("/issues", "The Fight At Hand")}
{mobileLink("/about", "Meet Ken Paxton")}
{mobileLink("/paxton-s-patriots", "Join Paxton's Patriots")}

  <a
  href="https://secure.winred.com/ken-paxton-for-senate/storefront?_ga=2.240941706.881323927.1783861300-804037818.1783861288"
 
  rel="noopener noreferrer"
  className="w-full text-left px-8 py-3"
  onClick={() => setIsOpen(false)}
>
  <span className="relative inline-block uppercase font-black text-[#0f2d5e] text-[14px]">
    Merch

    {location.pathname === "/merch" && (
      <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-[#E31D2B]" />
    )}
  </span>
</a>
    </div>

    {/* Donate Button */}
    <div className="mt-auto bg-[#0f2d5e] p-8">
      <button
        onClick={() => {
          navigate(`/${url}`);
          setIsOpen(false);
        }}
        className="w-full bg-white text-[#e31d2b] font-black uppercase py-4 border-2 border-[#e31d2b]"
      >
        Donate
      </button>
    </div>
  </div>
</div>
      )}
    </header>
  );
};

export default Header;