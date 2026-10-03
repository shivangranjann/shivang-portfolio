import { skills } from "../data/data";

// Flatten all skills into a lookup dictionary for O(1) icon retrieval
const skillIcons = skills.reduce((acc, cat) => {
  cat.skills.forEach((skill) => {
    acc[skill.name.toLowerCase()] = skill.image;
  });
  return acc;
}, {});

export default function SkillBadge({ name, size = "md" }) {
  let image = skillIcons[name.toLowerCase()];

  if (!image) {
    const fallbackKey = Object.keys(skillIcons).find(
      (k) =>
        k.replace(/\s+/g, "").replace(".", "") ===
        name.toLowerCase().replace(/\s+/g, "").replace(".", ""),
    );
    if (fallbackKey) {
      image = skillIcons[fallbackKey];
    }
  }

  if (!image && name.toLowerCase().includes("git")) {
    image = skillIcons["git"] || skillIcons["github"];
  }

  const sizeClasses = {
    sm: "px-[10px] py-[5px] gap-[6px] rounded-[6px]",
    md: "px-[14px] py-[8px] gap-[10px] rounded-[8px]",
  };

  const imgSizeClasses = {
    sm: "w-[12px] h-[12px]",
    md: "w-[18px] h-[18px]",
  };

  const textSizeClasses = {
    sm: "text-[10.5px]",
    md: "text-[12px]",
  };

  return (
    <div
      className={`flex items-center bg-surface border border-border transition-all duration-200 hover:bg-surface2 hover:border-accent hover:-translate-y-[2px] cursor-default group ${sizeClasses[size]}`}
    >
      {image &&
        (image.startsWith("<svg") ? (
          <div
            className={`${imgSizeClasses[size]} text-text group-hover:text-accent transition-colors duration-200 flex items-center justify-center shrink-0 [&>svg]:w-full [&>svg]:h-full`}
            dangerouslySetInnerHTML={{ __html: image }}
          />
        ) : (
          <img
            src={image}
            alt={name}
            className={`${imgSizeClasses[size]} object-contain shrink-0 group-hover:scale-110 transition-transform duration-200`}
          />
        ))}
      <span
        className={`${textSizeClasses[size]} text-muted tracking-[0.02em] font-medium transition-colors duration-200 group-hover:text-text`}
      >
        {name}
      </span>
    </div>
  );
}
