import { Code } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="">
        <div className="container max-w-[1280px] mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className=" col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Code className="h-6 w-6 text-gray-50" />
                <span className="text-lg font-bold text-white">
                  burmese.tech
                </span>
              </div>
              <p className="text-sm text-gray-200">
                Empowering developers through shared knowledge and collaborative
                problem-solving.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-100">Platform</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/solutions" className="text-gray-300">
                    Browse Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/categories" className="text-gray-300">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link href="/trending" className="text-gray-300">
                    Trending
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-100">Community</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/register" className="text-gray-300">
                    Join Us
                  </Link>
                </li>
                <li>
                  <Link href="/guidelines" className="text-gray-300">
                    Guidelines
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="text-gray-300">
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-100">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/about" className="text-gray-300">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-300">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 burmese.tech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
