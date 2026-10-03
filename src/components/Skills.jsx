import { useFadeUp } from "../hooks/useFadeUp";
import SectionHeader from "./SectionHeader";
import { skills } from "../data/data";
import SkillBadge from "./SkillBadge";

export default function Skills() {
  const gridRef = useFadeUp();
  return (
    <section id="skills" className="bg-surface px-[20px] py-[60px] md:px-[40px] md:py-[80px] lg:px-[80px] lg:py-[100px] transition-colors duration-[400ms]">
      <SectionHeader label="02 – TOOLKIT" title="Skills" count="02" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] transition-all duration-[600ms] ease-in-out opacity-0 translate-y-[28px]" ref={gridRef}>
        {skills.map((cat) => (
          <div className="border border-border bg-bg p-[32px] rounded-[12px] transition-all duration-300 hover:border-accent-border hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)]" key={cat.title}>
            <div className="font-syne text-[18px] font-bold mb-[24px] tracking-[-0.3px] text-text transition-colors duration-[400ms] flex items-center gap-[10px]">
              <span className="w-[8px] h-[8px] rounded-full bg-accent"></span>
              {cat.title}
            </div>
            <div className="flex flex-wrap gap-[12px]">
              {cat.skills.map((skill) => (
                <SkillBadge key={skill.name} name={skill.name} size="md" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
