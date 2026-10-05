import { useState } from "react";
import { useFadeUp } from "../hooks/useFadeUp";
import SectionHeader from "./SectionHeader";
import { projects, minorProjects } from "../data/data";
import SkillBadge from "./SkillBadge";

function TeamAvatar({ member }) {
  const content = member.ph ? (
    <div className="w-[28px] h-[28px] rounded-full border-2 border-surface bg-surface2 overflow-hidden transition-all duration-[400ms] flex items-center justify-center text-[9px] font-bold text-accent shadow-sm">
      {member.ph}
    </div>
  ) : (
    <div className="w-[28px] h-[28px] rounded-full border-2 border-surface bg-surface2 overflow-hidden transition-all duration-[400ms] flex items-center justify-center text-[9px] font-bold text-accent shadow-sm">
      <img
        src={member.src}
        alt={member.alt}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.style.display = "none";
          e.target.parentElement.textContent = member.alt;
        }}
      />
    </div>
  );

  return (
    <div className="relative group/avatar -ml-[8px] first:ml-0 hover:z-10 hover:scale-[1.15] transition-all duration-[400ms]">
      {member.github || member.linkedin ? (
        <a
          href={member.github || member.linkedin}
          target="_blank"
          rel="noreferrer"
          className="block"
        >
          {content}
        </a>
      ) : (
        content
      )}
      {member.name && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-[8px] px-[10px] py-[5px] bg-text border border-border text-[11px] font-medium text-bg rounded-[6px] opacity-0 pointer-events-none group-hover/avatar:opacity-100 group-hover/avatar:-translate-y-[2px] transition-all duration-300 whitespace-nowrap z-20 shadow-xl">
          {member.name}
          {/* Tooltip caret */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-[4px] border-transparent border-t-text"></div>
        </div>
      )}
    </div>
  );
}

function ProjectCarousel({ images, placeholder }) {
  const [currentImg, setCurrentImg] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="text-[40px] text-muted opacity-50">{placeholder}</div>
    );
  }

  const nextImg = () => setCurrentImg((p) => (p + 1) % images.length);
  const prevImg = () =>
    setCurrentImg((p) => (p - 1 + images.length) % images.length);

  return (
    <div className="w-full h-full relative group/carousel flex items-center justify-center z-10">
      <img
        src={images[currentImg]}
        alt="Project mock"
        className="w-[92%] h-[92%] max-h-[190px] object-contain rounded-[6px] shadow-[0_4px_20px_rgb(0,0,0,0.08)] transition-opacity duration-300"
      />

      {images.length > 1 && (
        <>
          <button
            onClick={prevImg}
            className="absolute left-[8px] sm:left-[14px] top-1/2 -translate-y-1/2 w-[28px] h-[28px] sm:w-[34px] sm:h-[34px] rounded-full bg-surface/80 backdrop-blur-md border border-border flex items-center justify-center text-text opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-surface hover:text-accent hover:scale-110 shadow-lg z-20"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={nextImg}
            className="absolute right-[8px] sm:right-[14px] top-1/2 -translate-y-1/2 w-[28px] h-[28px] sm:w-[34px] sm:h-[34px] rounded-full bg-surface/80 backdrop-blur-md border border-border flex items-center justify-center text-text opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-surface hover:text-accent hover:scale-110 shadow-lg z-20"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
          <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 flex gap-[6px] items-center bg-surface/80 backdrop-blur-md px-[10px] py-[4px] rounded-full border border-border z-20 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImg(i)}
                className={`h-[6px] rounded-full transition-all duration-300 ${
                  i === currentImg
                    ? "w-[14px] bg-accent"
                    : "w-[6px] bg-text opacity-30 hover:opacity-60"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function ProjectCard({ project }) {
  const ref = useFadeUp();

  const LangStats = () =>
    project.lang ? (
      <div className="flex items-center gap-[12px] mb-[10px] text-[11px] font-medium text-muted">
        <span className="flex items-center gap-[5px]">
          <span
            className="w-[8px] h-[8px] rounded-full"
            style={{ background: project.langColor }}
          />
          {project.lang}
        </span>
      </div>
    ) : null;

  return (
    <div
      className="group bg-surface relative rounded-xl border border-border overflow-hidden transition-all duration-300 hover:border-accent/40 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 flex flex-col md:flex-row opacity-0 translate-y-[28px] items-stretch"
      ref={ref}
    >
      {/* Left: Stage */}
      <div className="w-full md:w-[42%] lg:w-[38%] h-[160px] sm:h-[180px] md:h-auto min-h-[160px] md:min-h-[190px] bg-gradient-to-br from-surface2 to-surface border-b md:border-b-0 md:border-r border-border relative overflow-hidden flex items-center justify-center p-[10px]">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#fff_1px,transparent_1px)]" />
        <ProjectCarousel
          images={project.images}
          placeholder={project.placeholder}
        />
      </div>

      {/* Right: Content */}
      <div className="flex flex-col flex-1 w-full md:w-[58%] lg:w-[62%] p-[16px] sm:p-[20px] relative z-10 justify-between">
        <div>
          <div className="flex items-center justify-between mb-[8px]">
            <div className="font-syne text-[26px] sm:text-[30px] font-extrabold text-num-ghost leading-none transition-colors duration-300">
              {project.num}
            </div>
            <span className="inline-flex items-center gap-[5px] text-[8px] tracking-[0.08em] uppercase text-text bg-surface2 border border-border px-[8px] py-[3px] rounded-full transition-colors duration-[400ms]">
              {project.badge}
            </span>
          </div>
          <h3 className="font-syne text-[17px] sm:text-[19px] font-extrabold mb-[6px] tracking-[-0.02em] leading-[1.2] text-text transition-colors duration-[400ms]">
            {project.title}
          </h3>
          <p className="text-[12px] text-muted2 leading-[1.5] mb-[10px] flex-1 transition-colors duration-[400ms]">
            {project.desc}
          </p>
          <LangStats />
          <div className="flex flex-wrap gap-[5px] mb-[14px]">
            {project.tools.map((t) => (
              <SkillBadge key={t} name={t} size="sm" />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-[12px] border-t border-border mt-auto transition-colors duration-[400ms]">
          <div className="flex gap-[8px]">
            {project.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-[5px] text-[10px] tracking-[0.05em] font-medium uppercase text-text bg-surface2 px-[9px] py-[4px] rounded-[6px] border border-border transition-all duration-200 hover:bg-accent hover:text-bg hover:border-accent hover:scale-105 [&>span>svg]:w-[12px] [&>span>svg]:h-[12px]"
              >
                <span dangerouslySetInnerHTML={{ __html: l.icon }} />
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex">
            {project.team.map((m, i) => (
              <TeamAvatar key={i} member={m} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-bg px-[20px] py-[50px] md:px-[40px] md:py-[70px] lg:px-[80px] lg:py-[80px] transition-colors duration-[400ms]"
    >
      <SectionHeader label="03 — Work" title="Projects" count="03" />
      <div
        className={`grid gap-[20px] xl:gap-[24px] ${
          projects.length === 1
            ? "grid-cols-1 max-w-3xl mx-auto"
            : "grid-cols-1 lg:grid-cols-2"
        }`}
      >
        {projects.map((p) => (
          <ProjectCard key={p.num} project={p} />
        ))}
      </div>

      {/* View all on GitHub button */}
      <div className="mt-[36px] flex justify-center">
        <a
          href="https://github.com/shivangranjann"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-[8px] px-[22px] py-[10px] bg-surface border border-border rounded-full text-[11px] font-semibold tracking-[0.05em] uppercase text-text hover:bg-accent hover:text-bg hover:border-accent transition-all duration-300 shadow-sm hover:scale-105"
        >
          <span>View all on GitHub</span>
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* Minor Projects Section (renders when items exist) */}
      {minorProjects && minorProjects.length > 0 && (
        <div className="mt-[50px] lg:mt-[70px] pt-[36px] border-t border-border flex flex-col items-center">
          <h3 className="font-syne text-[22px] sm:text-[24px] font-bold text-text mb-[28px] text-center">
            Other Explorations & Mini-Projects
          </h3>
          <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-[16px] lg:gap-[24px] mb-[40px]">
            {minorProjects.map((mp, i) => (
              <div
                key={i}
                className="group flex flex-col p-[20px] bg-surface border border-border rounded-[12px] hover:border-accent hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-[10px]">
                  <h4 className="font-syne text-[17px] font-bold text-text group-hover:text-accent transition-colors">
                    {mp.title}
                  </h4>
                  <div className="flex gap-[12px]">
                    {Array.isArray(mp.github) ? (
                      mp.github.map((g, idx) => (
                        <a
                          key={idx}
                          href={g.url}
                          target="_blank"
                          rel="noreferrer"
                          title={g.label}
                          className="flex items-center gap-[4px] text-text transition-colors"
                        >
                          <svg
                            viewBox="0 0 16 16"
                            width="16"
                            height="16"
                            fill="currentColor"
                          >
                            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                          </svg>
                          <span className="text-[9px] uppercase tracking-[0.05em] font-medium">
                            {g.label}
                          </span>
                        </a>
                      ))
                    ) : (
                      <a
                        href={mp.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-text transition-colors"
                      >
                        <svg
                          viewBox="0 0 16 16"
                          width="16"
                          height="16"
                          fill="currentColor"
                        >
                          <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-[12px] text-muted2 leading-[1.5]">
                  {mp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
