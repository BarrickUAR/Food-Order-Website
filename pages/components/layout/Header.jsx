import { useState } from "react";
import Logo from "../ui/Logo";
import { FaUserAlt, FaSearch, FaShoppingCart } from "react-icons/fa";
import OutsideClickHandler from "react-outside-click-handler";
import Search from "../ui/Search";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosCloseCircle } from "react-icons/io";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);

  const router = useRouter();

  return (
    <div
      className={`h-[5.5rem] z-40 relative ${
        router.asPath === "/" ? "bg-transparent" : "bg-secondary"
      }`}
    >
      <div className="container mx-auto text-white flex justify-between items-center h-full">
        <Logo />

        <nav
          className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-screen sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden z-50 ${
            isMenuModal === true && "!grid place-content-center"
          }`}
        >
          <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer ">
              <Link href="/">Home</Link>{" "}
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <Link href="/menu">Menu</Link>{" "}
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <Link href="/about">About</Link>{" "}
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <Link href="/reservation">Book Table</Link>{" "}
            </li>
          </ul>
        </nav>

        <div className="flex gap-x-4 items-center">
          <Link href="/auth/login">
            <FaUserAlt className=" hover:text-primary transition-all" />
          </Link>
          <Link href="/cart">
            <FaShoppingCart className=" hover:text-primary transition-all" />
          </Link>
          <button onClick={() => setIsSearchModal(true)}>
            <FaSearch className=" hover:text-primary transition-all" />
          </button>
          <a href="#" className="md:inline-block hidden  ">
            <button className="btn-primary">Order Online</button>
          </a>

          <button
            className="sm:hidden inline-block"
            onClick={() => setIsMenuModal(!isMenuModal)}
          >
            <RxHamburgerMenu className="text-xl hover:text-primary transition-all" />
          </button>

          {isMenuModal && (
            <button
              className="absolute  top-4 right-4 z-50 text-black"
              onClick={() => setIsMenuModal(false)}
            >
              <IoIosCloseCircle
                className="hover:text-primary transition-all"
                size={30}
              />
            </button>
          )}
        </div>
      </div>

      {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
    </div>
  );
};
export default Header;
