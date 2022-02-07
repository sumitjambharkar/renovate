import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container mx-auto flex justify-around flex-wrap p-8 flex-col md:flex-row items-center">
          <a className="flex items-center mb-4 md:mb-0">
            <span className="ml-6 text-5xl font-semibold text-white">
              RENOVATE
            </span>
            {/* <img src={Logo} alt="" width={150} /> */}
          </a>
          <nav className="md:ml-6 flex flex-wrap items-center text-base justify-center">
            <input className="input" type="text" placeholder="search" />
            <button className="button">Search</button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
