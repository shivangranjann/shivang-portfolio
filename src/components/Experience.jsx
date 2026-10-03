import { useFadeUp } from "../hooks/useFadeUp";
import SectionHeader from "./SectionHeader";
import { experience } from "../data/data";
import SkillBadge from "./SkillBadge";

function ExpCard({ exp }) {
  const ref = useFadeUp();
  return (
    <div
      className="group grid grid-cols-1 md:grid-cols-[250px_1fr] gap-[14px] md:gap-[40px] py-[40px] pr-0 pl-[14px] border-b border-border relative transition-all duration-[600ms] ease-in-out opacity-0 translate-y-[28px] first-of-type:border-t before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-transparent before:transition-colors before:duration-300 hover:before:bg-accent"
      ref={ref}
    >
      <div className="exp-left">
        <div className="text-[11px] text-muted tracking-[0.08em] mb-[12px] transition-colors duration-[400ms]">
          {exp.period}
        </div>
        <div className="flex items-center gap-[12px]">
          {exp.logo && (
            <img
              src={exp.logo}
              alt={exp.company}
              className="w-[40px] h-[40px] rounded-[6px] object-cover border border-border transition-transform duration-[400ms] group-hover:scale-105"
            />
          )}
          <div className="flex flex-col justify-center">
            <div className="font-syne text-[16px] font-bold text-accent transition-colors duration-[400ms] flex items-center gap-[6px] leading-none">
              {exp.company}
              <svg
                className="w-[14px] h-[14px] text-accent"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
              </svg>
            </div>
            <div className="text-[11px] text-muted transition-colors duration-[400ms] mt-[6px] leading-none">
              {exp.location}
            </div>
          </div>
        </div>
      </div>
      <div className="exp-right">
        <div className="font-syne text-[22px] font-bold mb-[20px] tracking-[-0.5px] text-text transition-colors duration-[400ms]">
          {exp.role}
        </div>
        <ul className="list-none flex flex-col gap-[10px]">
          {exp.bullets.map((b, i) => (
            <li
              className="text-[13px] text-muted2 leading-[1.7] pl-[20px] relative transition-colors duration-[400ms] before:content-['→'] before:absolute before:left-0 before:text-accent before:text-[11px] before:transition-colors before:duration-[400ms]"
              key={i}
            >
              {b}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-[8px] mt-[16px]">
          {exp.tags.map((t) => (
            <SkillBadge key={t} name={t} size="sm" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-[20px] py-[60px] md:px-[40px] md:py-[80px] lg:px-[80px] lg:py-[100px] transition-colors duration-[400ms] bg-bg"
    >
      <SectionHeader label="01 — Career" title="Experience" count="01" />
      {experience.map((exp, i) => (
        <ExpCard key={i} exp={exp} />
      ))}
    </section>
  );
}
