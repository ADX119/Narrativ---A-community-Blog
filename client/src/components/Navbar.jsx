import { useState } from "react";
import Image from "./Image"
import { Link } from "react-router-dom";
import { SignedOut,SignedIn, UserButton } from "@clerk/clerk-react";


function Navbar() {
  const [open, Setopen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/*LOGO*/}
      <Link to="/" className=" flex items-center gap-4 text-2xl font-bold">
        <Image src="./Narrativ.png" alt="Narrative" w={96} h={96} />
        <span>Narrativ</span>
      </Link>

      {/*MOBLE MENU*/}
      <div className="md:hidden">
        <div
          className="cursor-pointer text-4xl"
          onClick={() => Setopen((prev) => !prev)}
        >
          {open ? "x" : "≡"}
        </div>
        {/*MOBILE LINK LISTS*/}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Most Popular</Link>
          <Link to="/">About</Link>
          <Link to="/">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login👋
            </button>
          </Link>
        </div>
      </div>
      {/*LARGE SCREEN*/}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>
        <SignedOut>
        <Link to="/login">
          <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
            Login👋
          </button>
        </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}

export default Navbar;
