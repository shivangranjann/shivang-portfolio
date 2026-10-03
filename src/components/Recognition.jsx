import { useFadeUp } from "../hooks/useFadeUp";
import SectionHeader from "./SectionHeader";
import { certifications, achievements } from "../data/data";

function RecognitionCard({ item, bgClass }) {
  const ref = useFadeUp();
  return (
    <div
      ref={ref}
      className={`group relative ${bgClass} rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:border-accent/40 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 p-[24px] sm:p-[32px] flex flex-col opacity-0 translate-y-[28px] h-full`}
    >
      <div className="flex flex-col mb-[16px]">
        <div className="flex items-start justify-between gap-[12px] mb-[12px] min-h-[26px]">
          {item.date ? (
            <div className="inline-flex items-center text-[10px] tracking-[0.1em] uppercase text-text bg-surface2 border border-border px-[10px] py-[4px] rounded-full">
              {item.date}
            </div>
          ) : (
            <div />
          )}
          {item.linkedin && (
            <a
              href={item.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-700 transition-all duration-300 hover:scale-110 shrink-0"
              title="Verify on LinkedIn"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          )}
        </div>
        <h3 className="font-syne text-[18px] sm:text-[20px] font-extrabold tracking-[-0.02em] leading-[1.2] text-text mb-[6px] group-hover:text-accent transition-colors duration-300 pr-[10px]">
          {item.title}
        </h3>
        <div className="text-[13px] text-accent font-medium">{item.org}</div>
      </div>
      <div className="text-[13px] text-muted2 leading-[1.7] pt-[16px] border-t border-border mt-auto">
        {item.desc}
      </div>
    </div>
  );
}

export function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-bg px-[20px] py-[60px] md:px-[40px] md:py-[80px] lg:px-[80px] lg:py-[100px] transition-colors duration-[400ms]"
    >
      <SectionHeader
        label="05 — Credentials"
        title="Certifications"
        count="05"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] xl:gap-[32px]">
        {certifications.map((c, i) => (
          <RecognitionCard key={i} item={c} bgClass="bg-surface" />
        ))}
      </div>
    </section>
  );
}

export function Achievements() {
  return (
    <section
      id="achievements"
      className="bg-surface px-[20px] py-[60px] md:px-[40px] md:py-[80px] lg:px-[80px] lg:py-[100px] transition-colors duration-[400ms]"
    >
      <SectionHeader label="06 — Recognition" title="Achievements" count="06" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] xl:gap-[32px]">
        {achievements.map((a, i) => (
          <RecognitionCard key={i} item={a} bgClass="bg-bg" />
        ))}
      </div>
    </section>
  );
}
