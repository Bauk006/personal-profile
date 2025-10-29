import React from "react";
import { Code, Palette, Smartphone, Zap } from "lucide-react";

const skillsData = [
  {
    title: "UI/UX Design",
    description: "Figma, Sketch, Prototyping, Usability Testing.",
    Icon: Palette,
    color: "text-grayish-blue",
    bg: "bg-[#AED581]",
  },
  {
    title: "Front-End Development",
    description: "React, Next.js, JavaScript, HTML, CSS, Tailwind.",
    Icon: Code,
    color: "text-grayish-blue",
    bg: "bg-[#E3DCCC]",
  },
  {
    title: "Mobile Development",
    description: "React Native, Flutter, Basic iOS/Android principles.",
    Icon: Smartphone,
    color: "text-grayish-blue",
    bg: "bg-[#AED581]",
  },
  {
    title: "Optimization & Performance",
    description: "SEO, Core Web Vitals, performance monitoring.",
    Icon: Zap,
    color: "text-grayish-blue",
    bg: "bg-[#E3DCCC]",
  },
];

function SkillCard({ title, description, Icon, color, bg }) {
  return (
    <div
      className={`p-8 rounded-2xl shadow-lg border border-border-gray ${bg} hover:shadow-xl transition-shadow duration-300`}
    >
      <div
        className={`p-4 rounded-xl ${color} bg-white shadow-md inline-block mb-4`}
      >
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-bold text-dark-blue mb-2">{title}</h3>
      <p className="text-base text-grayish-blue">{description}</p>
    </div>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-white px-16">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[30px] font-bold text-dark-blue mb-4">
            My Skills
          </h2>
          <p className="text-lg text-grayish-blue max-w-2xl mx-auto">
            These are the technologies and tools I use to bring ideas to life.
          </p>
        </div>

        {/* Skill Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
