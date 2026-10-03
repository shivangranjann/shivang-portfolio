import { useFadeUp } from "../hooks/useFadeUp";

export default function SectionHeader({ label, title, count }) {
  const ref = useFadeUp();
  return (
    <div className="flex flex-col items-start gap-[4px] mb-[64px] pb-[24px] border-b border-border transition-all duration-[600ms] ease-in-out opacity-0 translate-y-[28px] md:flex-row md:items-end md:justify-between md:gap-0" ref={ref}>
      <div>
        <div className="text-[11px] tracking-[0.2em] uppercase text-accent mb-[10px] transition-colors duration-[400ms]">{label}</div>
        <h2 className="font-syne text-[clamp(30px,4vw,50px)] font-extrabold leading-none tracking-[-1.5px] text-text transition-colors duration-[400ms]">{title}</h2>
      </div>
      <div className="font-syne text-[48px] md:text-[80px] font-extrabold text-num-ghost leading-none transition-colors duration-[400ms]">{count}</div>
    </div>
  );
}
