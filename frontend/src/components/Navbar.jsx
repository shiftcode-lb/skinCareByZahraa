import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { assets, menuLinks } from '../assets/assets';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // disable scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflowX = 'hidden';
      document.body.style.overflowY = 'auto';
    }

    return () => {
      document.body.style.overflowX = 'hidden';
      document.body.style.overflowY = 'auto';
    };
  }, [open]);

  // hide/show navbar on scroll (applies to all pages)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false); // scrolling down hide
      } else {
        setShowNavbar(true); // scrolling up show
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`border-b border-borderColor py-[10.5px] fixed top-0 w-full bg-background z-50 transition-transform duration-300
      ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div
        className={`flex items-center justify-between text-[17px]
        w-full mx-auto px-3 sm:px-4 md:px-11 lg:px-13 xl:px-12 2xl:px-16 max-w-screen-xl
        text-primary relative transition-all`}
      >
        {/* LOGO + TITLE */}
        <div
          className="flex flex-row items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={assets.logo}
            alt="Navbar Logo"
            className="w-[75px] h-[75px]"
          />
          <p className="ml-3 text-center sm:text-3xl text-xl fancy-title">
            Skin Care By Zahraa
          </p>
        </div>

        {/* If on home → full menu, else → back button */}
        {location.pathname === "/" ? (
          <>
            <div
              className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-18
              max-sm:border-t border-borderColor right-0 flex flex-col sm:flex-row items-start
              sm:items-center gap-4 sm:gap-8 max-sm:p-4 transition-all duration-300 mt-6 sm:mt-0
              ${open ? "max-sm:translate-x-0 bg-background flex max-sm:items-center max-sm:justify-start text-center z-0" : "max-sm:translate-x-full"}`}
            >
              {menuLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setOpen(false);
                    if (link.name === "Home") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    } else {
                      const section = document.getElementById(
                        link.path.replace("#", "")
                      );
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      } else {
                        navigate(link.path);
                      }
                    }
                  }}
                  className="cursor-pointer font-semibold bg-transparent border-none outline-none"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Mobile menu toggle */}
            <button className="sm:hidden cursor-pointer">
              <img
                onClick={() => setOpen(!open)}
                src={open ? assets.close_icon : assets.menu_icon}
                alt="menu"
              />
            </button>
          </>
        ) : (
          <button
            onClick={() => navigate("/")}
            className="text-primary font-semibold border px-2 py-2 rounded-lg hover:bg-primary hover:text-white transition cursor-pointer"
          >
            ← Home
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
