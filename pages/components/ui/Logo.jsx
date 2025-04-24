import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href="/"
      className="text-[2rem] font-dancing
     font-bold"
    >
      {" "}
      Feane{" "}
    </Link>
  );
};

export default Logo;
