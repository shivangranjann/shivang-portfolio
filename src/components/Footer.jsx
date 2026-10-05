import { bio } from "../data/data";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-bg border-t border-border px-[24px] py-[24px] lg:px-[80px] lg:py-[24px] flex flex-col md:flex-row items-center justify-between gap-[16px] md:gap-0 transition-colors duration-[400ms]">
      <div className="flex items-center gap-[12px]">
        <a
          href="#hero"
          className="relative inline-flex items-center justify-center no-underline group"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          aria-label="Shivang Ranjan - Back to top"
        >
          <div className="w-[32px] h-[32px] rounded-xl overflow-hidden border border-border bg-surface2 shadow-xs transition-all duration-300 group-hover:scale-105 group-hover:border-accent/60 relative">
            <img
              src={bio.avatar}
              alt="Shivang Ranjan"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <span className="absolute -top-[1px] -right-[1px] w-[7px] h-[7px] rounded-full bg-accent border-[1.5px] border-bg transition-colors duration-[400ms]" />
        </a>
        <div className="w-[1px] h-[12px] bg-border transition-colors duration-[400ms]" />
        <div className="text-[11px] text-muted transition-colors duration-[400ms] font-mono tracking-wider uppercase pt-[1px]">
          Shivang Ranjan
        </div>
      </div>
      <button
        className="flex items-center gap-[8px] text-[11px] text-muted2 no-underline tracking-[0.05em] uppercase transition-colors duration-200 bg-transparent border-none cursor-pointer font-mono hover:text-accent"
        onClick={scrollToTop}
      >
        ↑ Back to top
      </button>
    </footer>
  );
}
