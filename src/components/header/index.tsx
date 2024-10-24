"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Container from "../global/container";
import { cn } from "@src/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const menuLinks = [
    { name: "About Us", link: "/about" },
    { name: "Gallery", link: "/gallery" },
    {
      name: "Catalog",
      link: "https://aslan.pockethost.io/api/files/kjfejhlex2trr82/m9045wugbd6p5t1/jolib_katalog_design_1_compressed_1_MCD3yxQrjg.pdf",
      target: "_blank",
    },
    { name: "Products", link: "/products" },
    { name: "Contact", link: "/contact" },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <div className="mt-24">
    <header
      className={`px-4 h-auto py-3 fixed top-0 inset-x-0 w-full transition-all duration-300  border-b border-r border-l bg-[#BE8493]  rounded-br-2xl rounded-bl-2xl z-50`}
    >
      <Container reverse>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <picture>
                <img
                  src="https://aslan.pockethost.io/api/files/kjfejhlex2trr82/a76tdj0sus89pzo/logo_pg0izmHdWW.webp"
                  alt="Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </picture>
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="flex items-center p-2 focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
          <nav className={`hidden md:flex`}>
            <ul className="flex items-center space-x-8">
              {menuLinks.map((menu, i) => (
                <li key={i}>
                  <Link
                    target={menu.target ? menu.target : ""}
                    href={menu.link}
                    className="text-xl font-medium opacity-60 hover:opacity-100 transition-all"
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div
          className={cn(
            "menu-parent md:hidden text-gray-900 w-full flex-col gap-10 px-7 py-2 font-medium bg-[#BE8493]  duration-300 top-30 transition-all",
            {
              "flex": isMenuOpen,
              "hidden": !isMenuOpen,
            }
          )}
        >
          <div className="w-full mt-16 rounded-2xl text-center"></div>
          <ul className="flex flex-col justify-center items-center gap-6 text-lg">
            {menuLinks.map((menu, i) => (
              <li
                key={i}
                className="hover:text-cyan-600 flex items-center gap-1"
              >
                <Link href={menu.link} className="font-bold text-white text-xl">
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-white text-center">
            &copy; {new Date().getFullYear()} All rights reserved by{" "}
            <a href="">
              <strong>Jolib Care A.Ş</strong>
            </a>
          </p>
        </div>
      </Container>
    </header>
            </div>
  );
};

export default Header;
