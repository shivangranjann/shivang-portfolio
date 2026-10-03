import { useFadeUp } from "../hooks/useFadeUp";
import SectionHeader from "./SectionHeader";
import { education } from "../data/data";

function EducationCard({ e }) {
  const ref = useFadeUp();
  return (
    <div
      ref={ref}
      className="group relative bg-bg rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:border-accent/40 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 p-[20px] sm:p-[26px] md:p-[30px] flex flex-col justify-between opacity-0 translate-y-[28px] h-full"
    >
      <div>
        <div className="flex items-start justify-between gap-3 sm:gap-4 mb-4 sm:mb-5">
          <div className="flex items-start gap-3 sm:gap-4 min-w-0 flex-1">
            {/* Logo / Icon Box */}
            <div className="shrink-0 flex items-center justify-center w-[50px] h-[50px] sm:w-[56px] sm:h-[56px] rounded-[12px] sm:rounded-[14px] bg-surface2 border border-border overflow-hidden p-1.5 sm:p-2 relative">
              {e.logo ? (
                <img
                  className="w-full h-full object-contain relative z-10"
                  src={e.logo}
                  alt={e.institution}
                  loading="lazy"
                />
              ) : (
                <div className="relative z-10 flex items-center justify-center w-full h-full">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-[26px] h-[26px] sm:w-[30px] sm:h-[30px] text-accent"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="13" width="4" height="8" rx="1" />
                    <rect x="10" y="8" width="4" height="13" rx="1" />
                    <rect x="17" y="3" width="4" height="18" rx="1" />
                  </svg>
                </div>
              )}
            </div>

            {/* Type badge, Degree title, and Institution */}
            <div className="min-w-0 flex-1">
              <span className="inline-block text-[9.5px] sm:text-[10px] font-mono tracking-[0.08em] uppercase text-text bg-surface2 border border-border px-2.5 py-0.5 rounded-[5px] mb-2 font-medium leading-none">
                {e.type}
              </span>
              <h3 className="font-syne text-[17px] sm:text-[19px] md:text-[20px] font-extrabold tracking-[-0.02em] leading-[1.25] text-text mb-1.5 group-hover:text-accent transition-colors duration-300 break-words">
                {e.degree}
              </h3>
              <div className="text-[12px] sm:text-[13px] text-accent font-mono font-medium leading-snug break-words">
                {e.institution}
              </div>
            </div>
          </div>

          {/* Period Badge */}
          {e.period && (
            <div className="shrink-0 text-[10px] sm:text-[11.5px] text-muted font-mono tracking-[0.03em] bg-bg px-2.5 py-1 sm:px-3 sm:py-1 rounded-[6px] border border-border whitespace-nowrap self-start">
              {e.period}
            </div>
          )}
        </div>
      </div>

      {/* Footer details with green separator dots */}
      <div className="border-t border-border mt-3 sm:mt-4 pt-3.5 sm:pt-4">
        <div className="flex flex-wrap items-center gap-y-1 text-[11.5px] sm:text-[12.5px] font-mono text-muted2">
          {e.meta?.map((item, idx) => (
            <span key={idx} className="inline-flex items-center">
              {idx > 0 && (
                <span className="text-accent mx-2 sm:mx-2.5 font-bold select-none">•</span>
              )}
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <section
      id="education"
      className="bg-surface px-[20px] py-[60px] md:px-[40px] md:py-[80px] lg:px-[80px] lg:py-[100px] transition-colors duration-[400ms]"
    >
      <SectionHeader label="04 — Learning" title="Education" count="04" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] sm:gap-[24px] xl:gap-[32px]">
        {education.map((e, i) => (
          <EducationCard key={i} e={e} />
        ))}
      </div>
    </section>
  );
}

