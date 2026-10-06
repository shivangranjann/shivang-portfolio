import { useState, useEffect } from "react";
import { useFadeUp } from "../hooks/useFadeUp";
import SectionHeader from "./SectionHeader";
import { certifications, achievements } from "../data/data";

function CertificateModal({ cert, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  if (!cert) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center p-[16px] sm:p-[28px] bg-black/80 backdrop-blur-md transition-all duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={cert.title}
    >
      <div
        className="relative bg-surface border border-border rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-[20px] py-[16px] sm:px-[26px] border-b border-border bg-surface2/60">
          <div>
            <div className="inline-flex items-center gap-[6px] text-[10px] tracking-[0.1em] uppercase text-accent font-semibold mb-[2px]">
              <span className="w-[6px] h-[6px] rounded-full bg-accent" />
              Verified Certificate
            </div>
            <h3 className="font-syne text-[18px] sm:text-[22px] font-extrabold text-text leading-tight">
              {cert.title}
            </h3>
            <p className="text-[12px] sm:text-[13px] text-muted2 font-medium">
              {cert.org}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-[36px] h-[36px] rounded-full bg-surface border border-border flex items-center justify-center text-text hover:text-accent hover:border-accent hover:scale-105 transition-all duration-200 shrink-0 ml-[12px]"
            aria-label="Close certificate modal"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="6" />
            </svg>
          </button>
        </div>

        {/* Certificate Display */}
        <div className="p-[16px] sm:p-[24px] flex items-center justify-center overflow-auto bg-black/25 max-h-[calc(92vh-140px)]">
          <img
            src={cert.image}
            alt={cert.title}
            className="max-h-[68vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-border/50"
          />
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-[12px] px-[20px] py-[14px] sm:px-[26px] border-t border-border bg-surface2/40 text-[12px]">
          <p className="text-muted2 leading-relaxed flex-1">
            {cert.desc}
          </p>
          <div className="flex items-center gap-[10px] shrink-0 self-end sm:self-auto">
            <a
              href={cert.image}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-[6px] px-[14px] py-[7px] rounded-lg bg-accent text-bg text-[11px] font-semibold uppercase tracking-[0.05em] hover:bg-accent-h hover:scale-105 transition-all duration-200 shadow-sm"
            >
              <span>Open Original</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function RecognitionCard({ item, bgClass, onOpenCert }) {
  const ref = useFadeUp();
  const hasImage = Boolean(item.image);

  return (
    <div
      ref={ref}
      onClick={() => {
        if (hasImage && onOpenCert) onOpenCert(item);
      }}
      className={`group relative ${bgClass} rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:border-accent/40 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 p-[24px] sm:p-[32px] flex flex-col opacity-0 translate-y-[28px] h-full ${
        hasImage ? "cursor-pointer" : ""
      }`}
    >
      <div className="flex flex-col mb-[16px]">
        <div className="flex items-start justify-between gap-[12px] mb-[12px] min-h-[26px]">
          {item.date ? (
            <div className="inline-flex items-center text-[10px] tracking-[0.1em] uppercase text-text bg-surface2 border border-border px-[10px] py-[4px] rounded-full">
              {item.date}
            </div>
          ) : hasImage ? (
            <div className="inline-flex items-center gap-[5px] text-[10px] tracking-[0.08em] uppercase text-accent bg-surface2 border border-border px-[10px] py-[4px] rounded-full">
              <span className="w-[5px] h-[5px] rounded-full bg-accent" />
              Certificate Available
            </div>
          ) : (
            <div />
          )}
          {item.linkedin && (
            <a
              href={item.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
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

      {/* Certificate Thumbnail Preview */}
      {hasImage && (
        <div className="relative mb-[16px] rounded-xl overflow-hidden border border-border group/thumb bg-surface2/60 aspect-[16/10] flex items-center justify-center">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
            <span className="inline-flex items-center gap-[6px] text-[11px] font-semibold text-white bg-black/75 px-[12px] py-[6px] rounded-full border border-white/20 shadow-lg transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              Click to View Certificate
            </span>
          </div>
        </div>
      )}

      <div className="text-[13px] text-muted2 leading-[1.7] pt-[16px] border-t border-border mt-auto flex items-center justify-between gap-[8px]">
        <span>{item.desc}</span>
        {hasImage && (
          <span className="inline-flex items-center gap-[4px] text-[11px] font-semibold text-accent shrink-0 group-hover:translate-x-1 transition-transform duration-200">
            <span>View</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </span>
        )}
      </div>
    </div>
  );
}

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

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
          <RecognitionCard
            key={i}
            item={c}
            bgClass="bg-surface"
            onOpenCert={setSelectedCert}
          />
        ))}
      </div>

      {selectedCert && (
        <CertificateModal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
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

