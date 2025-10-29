import React from "react";
import { Heart } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full h-[84px] border-t border-border-gray bg-white">
      <div className="container mx-auto max-w-[1440px] h-full px-16 flex items-center justify-between">
        {/* Copyright */}
        <p className="text-base text-grayish-blue font-normal">
          &copy; {new Date().getFullYear()} Muhammad Evan Althafy Marhian. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
