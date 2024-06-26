import React, { useState } from "react";

function MainDashboardTop() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(null); // Track which menu is open

  const openMenu = (index) => {
    setIsMenuOpen(index); // Open the menu
  };

  const closeMenu = () => {
    setIsMenuOpen(null); // Close the menu
  };

  const [focusedInput, setFocusedInput] = useState(null);

  const handleFocus = (inputIndex) => {
    setFocusedInput(inputIndex);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="">
      <div className="login flex p-2 md:justify-end justify-center ">
        <div className="pr-5 pt-2 pb-2">
          <a href="https://www.google.com">
            <p>Login</p>
          </a>
        </div>
        <div className="pr-5 pt-2 pb-2">
          <a href="https://www.google.com">
            <p>Register</p>
          </a>
        </div>

        <div className="flex md:pr-10 pt-2 pb-2 " onClick={toggleDropdown}>
          <div className="flex">
            <img src="images/moon.png" className="h-4 pr-5 cursor-pointer" />
            <p className="pr-5 cursor-pointer">Day</p>

            {dropdownVisible && (
              <div className="absolute md:right-0 right-[30%] mt-6 bg-white overlap border border-gray-300 rounded-md shadow-lg">
                <p
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => console.log("Day selected")}
                >
                  Day
                </p>
                <p
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => console.log("Night selected")}
                >
                  Night
                </p>
              </div>
            )}
          </div>

          <img
            src="images/down-arrow.png"
            className="h-4 pr-2 cursor-pointer"
          ></img>
        </div>
      </div>
      <div className="flex justify-between md:justify-around mt-7 mb-7 ml-5 mr-5 md:ml-0 md:mr-0">
        <div>
          <img
            src="images/img_umatlogo1.png"
            className="md:w-16 md:h-16 w-8 h-8"
          ></img>
        </div>
        <div
          className="md:hidden cursor-pointer z-50 absolute top-18 right-5  "
          onClick={toggleMobileMenu}
        >
          {/* Icon for mobile menu */}
          <img
            src="images/menu-icon.png"
            className="h-6 w-6 mr-4 "
            alt="Menu Icon"
          />
          {isMobileMenuOpen && (
            <div className="absolute top-18 right-0  bg-gray-50 mt-1 shadow-md w-30 ">
              {/* Mobile menu dropdown */}
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Item 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Item 2
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Item 3
              </a>
            </div>
          )}
        </div>
        <div className="hidden md:flex items-center link-labels">
          <div className="flex items-center link-labels relative">
            <div className="flex items-center link-labels">
              {Array.from({ length: 6 }, (_, index) => (
                <div key={index} className="relative">
                  <div
                    className="cursor-pointer flex"
                    onMouseEnter={() => openMenu(index)} // Open the menu on hover
                  >
                    <p className="pr-1">Menu {index + 1}</p>
                    <img
                      src="images/down-arrow.png"
                      className="h-4 mr-10"
                      alt="Dropdown Arrow"
                    />
                  </div>
                  {/* Dropdown menu */}
                  {isMenuOpen === index && (
                    <div
                      className="dropdown-menu absolute top-[100%] z-50"
                      onMouseLeave={closeMenu}
                    >
                      {/* Dropdown content */}
                      <div className="dropdown-content bg-gray-50 border border-gray-300 rounded-md shadow-lg py-2 w-60">
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                          onClick={closeMenu}
                        >
                          Item 1
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                          onClick={closeMenu}
                        >
                          Item 2
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                          onClick={closeMenu}
                        >
                          Item 3
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative">
        <div className="hidden md:flex">
          <input
            type="text"
            name="Search"
            placeholder={focusedInput === 5 ? "" : "Search..."}
            className=" rounded-full search-box h-14 w-80 border-green-900"
            onFocus={() => handleFocus(5)}
            onBlur={handleBlur}
          ></input>
          <div className="green-color absolute top-[-3%] right-[0%] w-16 h-16 rounded-full flex justify-center items-center cursor-pointer">
            <img src="images/search-icon1.png" className=""></img>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default MainDashboardTop;
