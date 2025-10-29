import React from "react";
import { Github, Instagram, Linkedin, Send } from "lucide-react";
import ProfilePicture from "../assets/images/foto_profil.jpg";

function ProfileCard() {
  const socialIcons = [
    { Icon: Instagram, href: "https://www.instagram.com/evns._?igsh=MW94NjB1cWpsMnlydA%3D%3D&utm_source=qr" },
    { Icon: Github, href: "https://github.com/Bauk006" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/evanmarhian?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  ];

  return (
    <section id="profile" className="bg-hero-gradient pt-48 pb-32 px-16">
      <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Div Kiri (Text & Buttons) */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left space-y-6">
          <p className="text-sm font-bold text-primary-green uppercase tracking-widest">
            Hello, I'm
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-[48px] font-extrabold text-dark-blue leading-tight">
            Muhammad Evan Althafy Marhian
            <br />
            UI/UX Designer & <br /> Fullstack Web Developer
          </h1>

          <p
            className="text-lg font-normal text-grayish-blue mt-4"
            style={{ maxWidth: "446px" }}
          >
           Passionate about designing intuitive and engaging user interfaces while building seamless, high-performance web applications.
          </p>

          {/* Buttons */}
          <div className="flex space-x-4 mt-8">
            <a
              href="#portfolio"
              className="py-3 px-6 text-base font-semibold text-white rounded-xl bg-btn-gradient hover:opacity-90 transition-opacity"
              style={{
                boxShadow:
                  "0 4px 6px 0 rgba(0, 0, 0, 0.10), 0 10px 15px 0 rgba(0, 0, 0, 0.10)",
              }}
            >
              See My Work
            </a>
            <a
              href="#contact"
              className="py-3 px-6 text-base font-semibold rounded-xl border border-primary-green text-primary-green hover:bg-primary-green hover:text-white transition-colors"
            >
              Contact Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-12 pt-4">
            {socialIcons.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-grayish-blue hover:text-dark-blue transition-colors"
              >
                <item.Icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Div Kanan (Image) */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative p-12 lg:p-0">
          {/* Background Shape */}
          <div
            className="absolute rounded-full w-64 h-64 lg:w-80 lg:h-80 opacity-20 bg-gradient-to-br from-primary-cream via-primary-green to-[#FFE978]"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
            }}
          ></div>

          {/* Frame Image Container */}
          <div
            className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-4 border-white"
            style={{
              boxShadow: "0 25px 50px 0 rgba(0, 0, 0, 0.25)",
              zIndex: 2,
            }}
          >
    
            <img
              src={ProfilePicture}
              alt="Profile Muhammad Evan ALthafy Marhian"
              className="w-full h-full object-cover rounded-full"
            />

            {/* Working Experience Tag */}
            <div
              className="absolute bottom-4 right-0 bg-white rounded-xl shadow-md px-4 py-2 flex items-center space-x-2 whitespace-nowrap"
              style={{ transform: "translate(25%, 25%)", zIndex: 3 }}
            >
              <Send className="w-4 h-4 text-primary-green" fill="#AED581" />
              <span className="text-sm font-semibold text-dark-blue">
                2+ Years Exp
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileCard;
