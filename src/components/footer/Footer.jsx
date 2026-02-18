import React from "react";

import { MdArrowForwardIos } from "react-icons/md";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import Logo from "../logo/Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1e1f25] text-gray-300 w-full pt-20 pb-10">
      <section className="w-[90%] mx-auto">
        <div className="grid md:grid-cols-3 gap-16">
          {/* LOGO + SOCIAL */}
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-[#1e1f25] ">
              <Logo />

              <div className="flex gap-6 mt-6 text-2xl text-white">
                {[FaFacebookSquare, FaInstagramSquare, FaTwitterSquare].map(
                  (Icon, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-[#1e1f25] shadow-[6px_6px_15px_#17181d,-6px_-6px_15px_#252730] hover:shadow-[inset_6px_6px_12px_#17181d,inset_-6px_-6px_12px_#252730] transition-all duration-300 cursor-pointer text-gray-400 hover:text-indigo-400"
                    >
                      <Icon />
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="p-8 rounded-3xl bg-[#1e1f25] shadow-[10px_10px_25px_#17181d,-10px_-10px_25px_#252730]">
            <h4 className="text-2xl font-semibold mb-6 text-white">
              Quick Links
            </h4>

            <ul className="space-y-4 text-white">
              {[
                { name: "About Us", link: "/about" },
                { name: "Contact Us", link: "/" },
                { name: "Projects", link: "/projects" },
                { name: "Find a Property", link: "/findProperty" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.link}
                    className="flex items-center gap-4 group transition-all duration-300 text-white"
                  >
                    <span className="p-2 rounded-lg bg-[#1e1f25] shadow-[4px_4px_10px_#17181d,-4px_-4px_10px_#252730] group-hover:shadow-[inset_4px_4px_8px_#17181d,inset_-4px_-4px_8px_#252730] transition-all duration-300">
                      <MdArrowForwardIos className="text-sm text-gray-400 group-hover:text-indigo-400" />
                    </span>

                    <span className="group-hover:text-indigo-400 transition-all duration-300">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* OFFICES */}
          <div className="p-8 rounded-3xl bg-[#1e1f25] shadow-[10px_10px_25px_#17181d,-10px_-10px_25px_#252730]">
            <h5 className="text-2xl font-semibold mb-6 text-white">
              Our Offices
            </h5>

            <div className="space-y-6 text-sm leading-relaxed text-gray-400 text-white">
              <p>
                <b className="text-white">Corporate Head Office:</b>
                <br />
                Block A5- Suite 75 New Sura Complex Simpson Street, Lagos
                <br />
                Tel: 08023034248
                <br />
                Email: admin@johnisangedighi.ng
              </p>

              <p>
                <b className="text-white">Regional Office:</b>
                <br />
                Abasiene Court: No. 65 Obio Imo Street, Uyo, Akwa Ibom State
                <br />
                Email: admin@johnisangedighi.ng
              </p>

              <p>
                <b className="text-white">Abuja Office:</b>
                <br />
                Suite 29, 2nd Floor, Shalom Plaza, Gudu Junction, Gudu District,
                Abuja, FCT.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-16 pt-8 border-t text-white border-gray-700 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} John Isangedighi & Associates. All rights
          reserved.
        </div>
      </section>
    </footer>
  );
}
