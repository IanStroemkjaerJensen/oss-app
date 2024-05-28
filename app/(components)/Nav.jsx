import { useUser } from "@auth0/nextjs-auth0/client";

import { getSession, isLoading, error } from "@auth0/nextjs-auth0";
import { faHome, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Nav = async () => {
  const { user } = await getSession();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  console.log(user.email_verified);

  return (
    <nav className="flex justify-between bg-nav p-2">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href="/SuggestionPage/new">
          <FontAwesomeIcon icon={faPlus} className="icon" />
        </Link>
      </div>
      <div className="flex flex-col">
        {user &&
          (user.email_verified ? (
            <a className="text-white" href="/api/auth/logout">
              Logout
            </a>
          ) : (
            <a className="text-white" href="/api/auth/login">
              Login
            </a>
          ))}
        <p>Logged in as {user.nickname}</p>
      </div>
    </nav>
  );
};

export default Nav;
