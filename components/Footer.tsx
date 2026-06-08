import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-lime py-16 px-6 md:px-8 font-dmsans relative z-10">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {/* Col 1 */}
        <div className="space-y-4">
          <Link
            href="/"
            className="block hover:opacity-90 transition-opacity"
          >
            <img
              src="https://res.cloudinary.com/dmj0smemf/image/upload/v1780901297/foodpark_logo_oizi3x.png"
              alt="Foodpark Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>
          <p className="text-richblack/70 text-sm max-w-xs leading-relaxed">
            One Kitchen. Ten Brands. Infinite Possibilities.
          </p>
          <p className="text-richblack/50 text-xs max-w-xs leading-relaxed mt-2">
            Foodpark is India&apos;s most ambitious multi-brand cloud kitchen network — built in Lucknow, scaling nationally, and designed to make food entrepreneurship accessible to everyone.
          </p>
        </div>

        {/* Col 2 */}
        <div className="space-y-4">
          <h4 className="font-spacegrotesk text-xs uppercase tracking-tag text-forest font-bold">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-richblack/80">
            <li>
              <Link href="/" className="hover:text-forest transition-colors font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-forest transition-colors font-medium">
                About
              </Link>
            </li>
            <li>
              <Link href="/brands" className="hover:text-forest transition-colors font-medium">
                Our Brands
              </Link>
            </li>
            <li>
              <Link href="/franchise" className="hover:text-forest transition-colors font-medium">
                Partnership
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3 */}
        <div className="space-y-4">
          <h4 className="font-spacegrotesk text-xs uppercase tracking-tag text-forest font-bold">
            Contact Us
          </h4>
          <ul className="space-y-2 text-sm text-richblack/80 font-medium">
            <li>
              <a
                href="tel:0522-3350876"
                className="hover:text-forest transition-colors"
              >
                📞 0522-3350876
              </a>
            </li>
            <li>
              <a
                href="mailto:foodparkventuresinfo@gmail.com"
                className="hover:text-forest transition-colors"
              >
                ✉ foodparkventuresinfo@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.foodparkindia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-forest transition-colors"
              >
                🌐 www.foodparkindia.com
              </a>
            </li>
            <li className="leading-relaxed text-richblack/70">
              📍 Lucknow, Uttar Pradesh, India
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto mt-16 pt-8 border-t border-forest/10 flex flex-col items-center justify-center">
        <p className="text-xs text-richblack/60 text-center">
          © 2026 Foodpark Ventures India. All rights reserved. Foodpark is a registered trademark of Foodpark Ventures India, headquartered in Lucknow, Uttar Pradesh, India.
        </p>
      </div>
    </footer>
  );
}
