import { useEffect, useRef, useMemo } from "react";
import { useTypewriter } from "../hooks/useTypewriter";
import { bio, stats } from "../data/data";

export default function Hero() {
  const typed = useTypewriter(bio.roles);
  const glowRef = useRef(null);

  // Generate a static pattern once
  // const gridLevels = useMemo(() => {
  //   return Array.from({ length: 400 }, () =>
  //     Math.random() > 0.85 ? Math.floor(Math.random() * 4) + 1 : 0
  //   );
  // }, []);

  const levelClasses = {
    0: "",
    1: "bg-[#9be9a8] dark:bg-[#0e4429]",
    2: "bg-[#40c463] dark:bg-[#006d32]",
    3: "bg-[#30a14e] dark:bg-[#26a641]",
    4: "bg-[#216e39] dark:bg-[#39d353]",
  };

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;
    const move = (e) => {
      el.style.left = e.clientX + "px";
      el.style.top = e.clientY + "px";
    };
    document.addEventListener("mousemove", move);
    return () => document.removeEventListener("mousemove", move);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <div
        className="fixed w-[320px] h-[320px] rounded-full bg-[radial-gradient(circle,var(--accent-dim)_0%,transparent_70%)] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0 transition-[left,top] duration-[80ms]"
        ref={glowRef}
      />
      <section
        id="hero"
        className="grid grid-cols-1 lg:grid-cols-2 pt-[100px] pb-[40px] md:pt-[120px] md:pb-[60px] lg:pt-[160px] lg:pb-[60px] relative overflow-hidden px-[20px] md:px-[40px] lg:px-[80px]"
      >
        <div className="flex flex-col justify-center px-[20px] pt-[56px] md:px-[40px] md:pt-[80px] lg:pl-[80px] lg:pr-[40px] lg:pt-[80px] relative z-[2]">
          <h1 className="font-syne font-extrabold text-[clamp(44px,6vw,80px)] leading-[0.95] tracking-[-2px] mb-[10px] text-text transition-colors duration-[400ms]">
            Shivang
            <br />
            <span className="text-accent block transition-colors duration-[400ms]">
              Ranjan
            </span>
          </h1>

          <div className="flex items-center mb-[28px] min-h-[32px]">
            <span className="font-syne text-[clamp(14px,1.8vw,20px)] font-semibold text-muted2 transition-colors duration-[400ms] whitespace-nowrap">
              I'm a&nbsp;
            </span>
            <span className="font-syne text-[clamp(14px,1.8vw,20px)] font-bold text-accent transition-colors duration-[400ms] whitespace-nowrap">
              {typed}
            </span>
            <span className="inline-block w-[2px] h-[1.1em] bg-accent ml-[2px] align-middle animate-blink transition-colors duration-[400ms]" />
          </div>

          <p className="text-[13px] text-muted2 leading-[1.8] max-w-[420px] mb-[48px] transition-colors duration-[400ms]">
            {bio.description}
          </p>

          <div className="flex gap-[12px] flex-wrap">
            <a
              href="#projects"
              className="bg-accent text-black px-[24px] py-[12px] font-mono text-[11px] font-bold tracking-[0.08em] no-underline inline-flex items-center gap-[8px] uppercase transition-all duration-200 hover:bg-accent-h hover:-translate-y-[2px] rounded-xl"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("projects");
              }}
            >
              View Work →
            </a>
            <a
              href="#contact"
              className="border border-border2 text-muted2 px-[24px] py-[12px] font-mono text-[11px] tracking-[0.08em] no-underline inline-flex items-center gap-[8px] uppercase transition-all duration-200 hover:border-accent hover:text-accent hover:-translate-y-[2px] rounded-xl"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("contact");
              }}
            >
              Contact
            </a>
          </div>

          <div className="mt-[60px] flex gap-[32px] md:gap-[48px] flex-wrap">
            {stats.map((s) => (
              <div key={s.label} className="group cursor-default">
                <div className="font-syne text-[28px] md:text-[36px] font-extrabold text-text leading-none transition-colors duration-[400ms] group-hover:text-accent">
                  {s.num}
                  <span className="text-accent transition-colors duration-[400ms]">
                    {s.suffix}
                  </span>
                </div>
                <div className="text-[10px] text-muted tracking-[0.1em] uppercase mt-[4px] transition-colors duration-[400ms] group-hover:text-text">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden sm:flex items-center justify-center overflow-hidden bg-bg min-h-[260px] md:min-h-[340px] lg:min-h-0">
          <div className="absolute inset-0 grid grid-cols-[repeat(auto-fill,40px)] grid-rows-[repeat(auto-fill,40px)] gap-0 pointer-events-none opacity-15">
            {Array.from({ length: 400 }).map((_, i) => {
              const level =
                Math.random() > 0.8 ? Math.floor(Math.random() * 4) + 1 : 0;
              return (
                <div
                  key={i}
                  className={`w-[40px] h-[40px] border-r border-b border-accent-border transition-colors duration-[400ms] ${levelClasses[level]}`}
                />
              );
            })}
            {/* for the static green dot ui */}
            {/* {gridLevels.map((level, i) => (
              <div key={i} className={`w-[40px] h-[40px] border-r border-b border-accent-border transition-colors duration-[400ms] ${levelClasses[level]}`} />
            ))} */}
          </div>
          <div className="relative z-[2] bg-code-bg border border-border rounded-2xl px-[32px] py-[28px] w-[340px] text-[12px] leading-[2] shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-float transition-all duration-[400ms]">
            <div className="flex items-center justify-between mb-[20px] pb-[12px] border-b border-border/40">
              <div className="flex gap-[6px]">
                <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
                <div className="w-[10px] h-[10px] rounded-full bg-[#febc2e]" />
                <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
              </div>
              <span className="text-[10px] font-mono text-muted2 tracking-wide select-none">
                engineer.js
              </span>
            </div>
            <div className="flex gap-[6px] flex-wrap">
              <span className="text-[var(--c-key)] transition-colors duration-[400ms]">
                const
              </span>
              &nbsp;
              <span className="text-[var(--c-fn)] transition-colors duration-[400ms]">
                engineer
              </span>
              &nbsp;= {"{"}
            </div>
            <div className="flex gap-[6px] flex-wrap">
              &nbsp;&nbsp;
              <span className="text-[var(--c-key)] transition-colors duration-[400ms]">
                name
              </span>
              :&nbsp;
              <span className="text-accent transition-colors duration-[400ms]">
                "Shivang Ranjan"
              </span>
              ,
            </div>
            <div className="flex gap-[6px] flex-wrap">
              &nbsp;&nbsp;
              <span className="text-[var(--c-key)] transition-colors duration-[400ms]">
                role
              </span>
              :&nbsp;
              <span className="text-accent transition-colors duration-[400ms]">
                "Full-stack Developer"
              </span>
              ,
            </div>
            <div className="flex gap-[6px] flex-wrap">
              &nbsp;&nbsp;
              <span className="text-[var(--c-key)] transition-colors duration-[400ms]">
                degree
              </span>
              :&nbsp;
              <span className="text-accent transition-colors duration-[400ms]">
                "CSE-AIML"
              </span>
              ,
            </div>
            <div className="flex gap-[6px] flex-wrap">
              &nbsp;&nbsp;
              <span className="text-[var(--c-key)] transition-colors duration-[400ms]">
                exp
              </span>
              :&nbsp;
              <span className="text-accent transition-colors duration-[400ms]">
                "Sep 2025 - Present"
              </span>
              ,
            </div>
            <div className="flex gap-[6px] flex-wrap">
              &nbsp;&nbsp;
              <span className="text-[var(--c-key)] transition-colors duration-[400ms]">
                skills
              </span>
              : [
            </div>
            <div className="flex gap-[6px] flex-wrap">
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-accent transition-colors duration-[400ms]">
                "Python"
              </span>
              ,
            </div>
            <div className="flex gap-[6px] flex-wrap">
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-accent transition-colors duration-[400ms]">
                "JavaScript"
              </span>
              ,
            </div>
            <div className="flex gap-[6px] flex-wrap">
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-accent transition-colors duration-[400ms]">
                "HTML"
              </span>
              ,
            </div>
            <div className="flex gap-[6px] flex-wrap">
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-accent transition-colors duration-[400ms]">
                "CSS"
              </span>
              ,
            </div>
            <div className="flex gap-[6px] flex-wrap">
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-accent transition-colors duration-[400ms]">
                "React.js"
              </span>
            </div>
            <div className="flex gap-[6px] flex-wrap">&nbsp;&nbsp;],</div>
            <div className="flex gap-[6px] flex-wrap">
              &nbsp;&nbsp;
              <span className="text-[var(--c-fn)] transition-colors duration-[400ms]">
                location
              </span>
              :&nbsp;
              <span className="text-accent transition-colors duration-[400ms]">
                "Haldia, WB"
              </span>
            </div>
            <div className="flex gap-[6px] flex-wrap">{"}"};</div>
          </div>
        </div>
      </section>
    </>
  );
}
