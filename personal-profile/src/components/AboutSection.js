import React from "react";
import { Check, Send } from "lucide-react";
import AboutPicture from "../assets/images/foto_profil.jpg";

function Tag({ text }) {
  // Styling Tag Skills
  return (
    <div className="flex items-center space-x-2 py-2 px-3 bg-[#E3DCCC] rounded-lg">
      <Check className="w-3 h-3 text-primary-dark" />
      <span className="text-sm font-semibold text-primary-dark">{text}</span>
    </div>
  );
}

function AboutSection() {
  const skills = [
    "UI/UX Design",
    "Web Development",
  ];

  return (
    <section id="about" className="py-24 px-16">
      <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-12">
        {/* Div Kiri (Image Container) */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div
            className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl border-4 border-[#E3DCCC]" // Hapus bg-gray-300
            style={{
              boxShadow:
                "0 8px 10px 0 rgba(0, 0, 0, 0.10), 0 20px 25px 0 rgba(0, 0, 0, 0.10)",
            }}
          >
            <img
              src={AboutPicture}
              alt="Muhammad Evan Althafy Marhian About"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col space-y-6">
          <h2 className="text-[30px] font-bold text-black leading-none">
            About Me
          </h2>

          <p className="text-lg font-normal text-grayish-blue">
            I am Muhammad Evan Althafy Marhian, a passionate UI/UX Designer and Full-Stack Web Developer. 
            I love creating beautiful and functional digital experiences by combining my design expertise with strong coding skills. 
            I specialize in crafting user-centric websites and applications, ensuring they are not only visually appealing but also intuitive and efficient for users.
          </p>

          {/* Multiple Tags */}
          <div className="flex flex-wrap gap-4 pt-4">
            {skills.map((skill) => (
              <Tag key={skill} text={skill} />
            ))}
          </div>

          {/* Button: Let's Connect */}
          <a
            href="#contact"
            className="flex items-center space-x-3 py-3 px-6 text-base font-semibold text-white rounded-xl bg-btn-gradient hover:opacity-90 transition-opacity mt-8 justify-center lg:justify-start"
            style={{
              boxShadow:
                "0 2px 4px 0 rgba(0, 0, 0, 0.10), 0 4px 6px 0 rgba(0, 0, 0, 0.10)",
              maxWidth: "200px",
            }}
          >
            <Send className="w-4 h-4" />
            <span>Let's Connect</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
