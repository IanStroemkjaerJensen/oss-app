"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

import { faHome, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Nav = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
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
        {user ? (
          <>
            {user.email_verified ? (
              <a className="text-white" href="/api/auth/logout">
                Logout
              </a>
            ) : (
              <a className="text-white" href="/api/auth/login">
                Login
              </a>
            )}
            <p>Logged in as {user.nickname}</p>
          </>
        ) : (
          <>
            <a className="text-white" href="/api/auth/login">
              Login
            </a>
            <div>No user is logged in</div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
