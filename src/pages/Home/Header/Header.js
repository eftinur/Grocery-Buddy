import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-12 px-4">
      <Link to="/">
        <h2 className="uppercase text-xl font-bold">Grocery Buddy</h2>
      </Link>
    </div>
  );
};

export default Header;
