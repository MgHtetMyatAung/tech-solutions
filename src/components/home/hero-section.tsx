import { Search } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import Link from "next/link";
import { ROUTE_PATH } from "@/constants/router";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-20 text-center min-h-[50vh] grid place-items-center">
      <div className="max-w-4xl">
        <h1 className="text-4xl text-green-300 md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Discover Tech Solutions
        </h1>
        <p className=" text-lg sm:text-xl text-gray-300 my-8 max-w-2xl mx-auto">
          Connect with developers worldwide. Share your technical expertise,
          discover proven solutions, and accelerate your development journey.
        </p>

        {/* Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto my-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-300" />
            <Input
              placeholder="Search solutions, technologies, or problems..."
              className="pl-10 h-10 text-white border-gray-400 rounded-full border-2"
            />
          </div>
          <Link href={ROUTE_PATH.SOLUTIONS}>
            <Button
              size="lg"
              className="w-full md:w-auto border-2 border-gray-300 rounded-full bg-gray-50 hover:bg-gray-50 text-gray-800"
            >
              Explore Solutions
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center space-y-1">
            <div className="text-3xl font-bold text-white">1,200+</div>
            <div className=" text-gray-300">Solutions Shared</div>
          </div>
          <div className="text-center space-y-1">
            <div className="text-3xl font-bold text-white">850+</div>
            <div className=" text-gray-300">Active Developers</div>
          </div>
          <div className="text-center space-y-1">
            <div className="text-3xl font-bold text-white">50+</div>
            <div className=" text-gray-300">Tech Stacks</div>
          </div>
        </div>
      </div>
    </section>
  );
}
