import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { bio } from "../data/data";

const navItems = [
  "experience",
  "skills",
  "projects",
  "education",
  "achievements",
];

export default function Navbar() {
  const { isDark, toggle } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let cur = "";
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 110) cur = s.id;
      });
      setActiveSection(cur);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[18px] py-[14px] md:px-6 md:py-4 lg:px-10 lg:py-[18px] bg-nav-bg backdrop-blur-[14px] border-b border-border transition-colors duration-[400ms]">
        <a
          href="#hero"
          className="relative inline-flex items-center justify-center no-underline group"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("hero");
          }}
          aria-label="Shivang Ranjan - Home"
        >
          <div className="w-[36px] h-[36px] rounded-xl overflow-hidden border border-border bg-surface2 shadow-xs transition-all duration-300 group-hover:scale-105 group-hover:border-accent/60 relative">
            <img
              src={bio.avatar}
              alt="Shivang Ranjan"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <span className="absolute -top-[1px] -right-[1px] w-[7px] h-[7px] rounded-full bg-accent border-[1.5px] border-nav-bg transition-colors duration-[400ms]" />
        </a>

        <ul className="hidden md:flex items-center gap-[28px] list-none">
          {navItems.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`no-underline text-[11px] tracking-[0.1em] uppercase transition-colors duration-200 hover:text-accent ${
                  activeSection === id ? "text-accent" : "text-muted2"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(id);
                }}
              >
                {id}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-[18px]">
          <label
            className="relative w-[52px] h-[28px] cursor-pointer shrink-0"
            title="Toggle theme"
            aria-label="Toggle dark/light theme"
          >
            <input
              type="checkbox"
              className="opacity-0 absolute w-0 h-0"
              checked={isDark}
              onChange={toggle}
            />
            <div className="absolute inset-0 bg-[var(--toggle-track)] border border-border2 transition-colors duration-[400ms]" />
            <div
              className={`absolute top-[4px] left-[4px] w-[18px] h-[18px] bg-[var(--toggle-knob)] flex items-center justify-center text-[10px] leading-none transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${isDark ? "translate-x-[24px]" : "translate-x-0"}`}
            >
              {isDark ? "🌙" : "☀️"}
            </div>
          </label>
          <a
            href="#contact"
            className="!bg-accent !text-black px-[18px] py-[8px] font-mono !text-[10px] !tracking-[0.12em] font-bold no-underline inline-block transition-all duration-[400ms] hover:!opacity-[0.82] rounded-xl"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("contact");
            }}
          >
            Hire Me
          </a>
          <button
            className="md:hidden flex flex-col gap-[5px] cursor-pointer p-1 bg-transparent border-none"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Menu"
          >
            <span className="block w-[24px] h-[2px] bg-text transition-all duration-300" />
            <span className="block w-[24px] h-[2px] bg-text transition-all duration-300" />
            <span className="block w-[24px] h-[2px] bg-text transition-all duration-300" />
          </button>
        </div>
      </nav>

      <div
        className={`fixed top-[61px] left-0 right-0 bg-surface border-b border-border p-5 z-[99] flex-col gap-1 transition-colors duration-[400ms] ${mobileOpen ? "flex" : "hidden"}`}
      >
        {navItems.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className="text-muted2 no-underline text-[12px] tracking-[0.1em] uppercase py-3 border-b border-border last:border-b-0 transition-colors duration-200 hover:text-accent"
            onClick={(e) => {
              e.preventDefault();
              scrollTo(id);
            }}
          >
            {id}
          </a>
        ))}
        <a
          href="#contact"
          className="text-muted2 no-underline text-[12px] tracking-[0.1em] uppercase py-3 border-b border-border last:border-b-0 transition-colors duration-200 hover:text-accent"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("contact");
          }}
        >
          Hire Me →
        </a>
        <div className="flex items-center justify-between py-[14px] pb-[2px] border-t border-border mt-1">
          <span className="text-[11px] tracking-[0.1em] uppercase text-muted2">
            Toggle Theme
          </span>
          <label
            className="relative w-[52px] h-[28px] cursor-pointer shrink-0"
            aria-label="Toggle theme"
          >
            <input
              type="checkbox"
              className="opacity-0 absolute w-0 h-0"
              checked={isDark}
              onChange={toggle}
            />
            <div className="absolute inset-0 bg-[var(--toggle-track)] border border-border2 transition-colors duration-[400ms]" />
            <div
              className={`absolute top-[4px] left-[4px] w-[18px] h-[18px] bg-[var(--toggle-knob)] flex items-center justify-center text-[10px] leading-none transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${isDark ? "translate-x-[24px]" : "translate-x-0"}`}
            >
              {isDark ? "🌙" : "☀️"}
            </div>
          </label>
        </div>
      </div>
    </>
  );
}
