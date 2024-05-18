import {
  faHome,
  faPlus,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href="/SuggestionPage/new">
          <FontAwesomeIcon icon={faPlus} className="icon" />
        </Link>
      </div>
      <div>
        <p className="text-default-textcolor">Logged in as userplaceholder</p>
      </div>
    </nav>
  );
};

export default Nav;
