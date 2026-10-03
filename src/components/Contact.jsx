import { useFadeUp } from "../hooks/useFadeUp";
import SectionHeader from "./SectionHeader";
import { bio } from "../data/data";

const contactLinks = [
  {
    label: "Email",
    value: "shivangranjan098@gmail.com",
    href: "mailto:shivangranjan098@gmail.com",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    hoverClass: "hover:border-[#EA4335]/40 hover:bg-[#EA4335]/5",
    hoverIconClass: "group-hover:text-[#EA4335]",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/shivangranjann",
    href: "https://www.linkedin.com/in/shivangranjann",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
    hoverClass: "hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/5",
    hoverIconClass: "group-hover:text-[#0A66C2]",
  },
  {
    label: "GitHub",
    value: "github.com/shivangranjann",
    href: "https://github.com/shivangranjann",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>`,
    hoverClass:
      "hover:border-[#24292F]/40 hover:bg-[#24292F]/5 dark:hover:border-white/40 dark:hover:bg-white/5",
    hoverIconClass: "group-hover:text-[#24292F] dark:group-hover:text-white",
  },
];

export default function Contact() {
  const leftRef = useFadeUp();
  const rightRef = useFadeUp();

  return (
    <section
      id="contact"
      className="bg-surface p-[clamp(60px,8vw,100px)_clamp(20px,8vw,80px)] relative overflow-hidden transition-colors duration-[400ms] before:content-['GET_IN_TOUCH'] before:absolute before:-bottom-[-10px] sm:before:-bottom-[-5px] md:before:-bottom-[10px] before:right-0 before:left-0 before:text-center before:font-syne before:text-[clamp(28px,7vw,120px)] before:font-extrabold before:text-num-ghost before:whitespace-nowrap before:pointer-events-none before:leading-none before:transition-colors before:duration-[400ms] before:overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[80px] relative z-[2]">
        <div
          className="transition-all duration-[600ms] ease-in-out opacity-0 translate-y-[28px]"
          ref={leftRef}
        >
          <h2 className="font-syne text-[clamp(32px,4.5vw,60px)] font-extrabold tracking-[-2px] leading-none mb-[24px] text-text transition-colors duration-[400ms]">
            Let's Work
            <br />
            <span className="text-accent block transition-colors duration-[400ms]">
              Together
            </span>
          </h2>
          <p className="text-[13px] text-muted2 leading-[1.8] mb-[40px] max-w-[380px] transition-colors duration-[400ms]">
            Open to full-stack & frontend roles, freelance projects, and collaborations.
            Based in Haldia, West Bengal — working globally.
          </p>
          <div className="flex flex-col gap-[12px]">
            {contactLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`group flex items-center gap-[16px] no-underline text-text p-[16px_20px] border border-border bg-bg rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgb(0,0,0,0.02)] ${l.hoverClass}`}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
              >
                <span
                  className={`w-[20px] h-[20px] text-muted shrink-0 transition-colors duration-200 flex items-center justify-center ${l.hoverIconClass} [&>svg]:w-[20px] [&>svg]:h-[20px]`}
                  dangerouslySetInnerHTML={{ __html: l.icon }}
                />
                <div className="flex-1">
                  <div className="text-[9px] text-muted tracking-[0.12em] uppercase transition-colors duration-[400ms]">
                    {l.label}
                  </div>
                  <div className="text-[13px] font-medium text-text mt-[1px] transition-colors duration-[400ms]">
                    {l.value}
                  </div>
                </div>
                <span
                  className={`text-muted text-[12px] transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${l.hoverIconClass}`}
                >
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        <div
          className="transition-all duration-[600ms] ease-in-out opacity-0 translate-y-[28px] flex flex-col gap-[20px] lg:gap-[24px] justify-center"
          ref={rightRef}
        >
          <div className="bg-bg border border-border rounded-2xl p-[32px_28px] transition-all duration-300 hover:border-accent/40 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1">
            <div className="font-syne text-[18px] font-extrabold mb-[4px] text-text transition-colors duration-[400ms]">
              Shivang Ranjan
            </div>
            <div className="text-[12px] text-accent mb-[20px] font-medium tracking-[0.02em] transition-colors duration-[400ms]">
              Computer Engineer · Frontend Developer
            </div>
            <div className="flex flex-wrap gap-[8px] mb-[24px]">
              {[
                "React.js",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Tailwind CSS",
              ].map((t) => (
                <span
                  className="text-[10px] tracking-[0.05em] uppercase font-semibold p-[6px_12px] bg-surface2 border border-border rounded-full text-accent transition-colors duration-[400ms]"
                  key={t}
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="border-t border-border pt-[20px] flex items-center gap-[8px] transition-colors duration-[400ms]">
              <div className="w-[8px] h-[8px] bg-accent rounded-full animate-pulse shrink-0 transition-colors duration-[400ms]" />
              <span className="text-[11px] text-muted2 transition-colors duration-[400ms]">
                Based in Haldia, West Bengal, India
              </span>
            </div>
          </div>
          <div className="group bg-bg border border-border rounded-2xl p-[20px_28px] flex items-center gap-[16px] transition-all duration-300 hover:border-accent/40 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1">
            <div className="w-[48px] h-[48px] bg-accent flex items-center justify-center font-syne font-extrabold text-[17px] text-black shrink-0 rounded-xl transition-all duration-300 group-hover:scale-110">
              SR
            </div>
            <div>
              <div className="text-[14px] font-bold font-syne text-text transition-colors duration-[400ms]">
                Haldia, West Bengal
              </div>
              <div className="text-[12px] text-muted mt-[2px] transition-colors duration-[400ms]">
                India 🇮🇳 · Working globally
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
