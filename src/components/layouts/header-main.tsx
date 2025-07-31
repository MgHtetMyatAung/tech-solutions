import { Code, Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ROUTE_PATH } from "@/constants/router";

export default function Header() {
  return (
    <>
      {/* Navigation */}
      <nav className="">
        <div className="container mx-auto  max-w-[1280px] px-4 py-8 2xl:py-10">
          <div className="flex items-center justify-between">
            <Link
              href={"/"}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <Code className="h-6 sm:h-8 w-h-6 sm:w-8 text-gray-100" />
              <span className=" text-xl sm:text-2xl font-bold text-white">
                Innovix.Tech
              </span>
            </Link>
            <div className="hidden lg:flex items-center space-x-6">
              <Link
                href="/solutions"
                className="text-gray-200 hover:text-white"
              >
                Browse Solutions
              </Link>
              <Link
                href="/categories"
                className="text-gray-200 hover:text-white"
              >
                Categories
              </Link>
              <Link href="/about" className="text-gray-200 hover:text-white">
                About
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <Link href={ROUTE_PATH.LOGIN}>
                <Button className=" hidden sm:block rounded-full bg-gray-300 text-gray-900 hover:bg-gray-300 border-gray-700 border-2">
                  Login
                </Button>
              </Link>
              <Link href={ROUTE_PATH.REGISTER}>
                <Button className=" rounded-full border-green-400 border-2">
                  Join{" "}
                  <span className=" hidden sm:inline-block">Community</span>
                </Button>
              </Link>
              <Link href={ROUTE_PATH.LOGIN}>
                <Button className=" rounded-full bg-gray-300 text-gray-900 hover:bg-gray-300 border-gray-700 border-2">
                  <Menu />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
