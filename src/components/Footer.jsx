export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-bg border-t border-border px-[24px] py-[24px] lg:px-[80px] lg:py-[24px] flex flex-col md:flex-row items-center justify-between gap-[16px] md:gap-0 transition-colors duration-[400ms]">
      <div className="flex items-center gap-[12px]">
        <a
          href="#hero"
          className="font-syne font-extrabold text-[18px] tracking-[-0.5px] text-text no-underline transition-colors duration-[400ms] relative pr-[6px]"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
        >
          SR
          <span className="absolute top-[1px] right-0 w-[5px] h-[5px] rounded-full bg-accent transition-colors duration-[400ms]"></span>
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
