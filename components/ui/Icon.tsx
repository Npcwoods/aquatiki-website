type IconName =
  | "boat"
  | "sun"
  | "sparkle"
  | "palm"
  | "wave"
  | "anchor"
  | "compass"
  | "drink"
  | "star"
  | "heart"
  | "arrow-right"
  | "play";

interface IconProps {
  name: IconName;
  className?: string;
  strokeWidth?: number;
  fill?: string;
}

export function Icon({ name, className = "h-6 w-6", strokeWidth = 1.5, fill = "none" }: IconProps) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill,
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };
  switch (name) {
    case "boat":
      // tiki boat with mast & little flag
      return (
        <svg {...common}>
          <path d="M12 2v9" />
          <path d="M12 4l5 5h-5" />
          <path d="M3 13h18l-1.7 5.2a3 3 0 0 1-2.85 2.05H7.55A3 3 0 0 1 4.7 18.2L3 13Z" />
          <path d="M6 13v-2a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v2" />
        </svg>
      );
    case "sun":
      // half sunset over horizon
      return (
        <svg {...common}>
          <circle cx="12" cy="14" r="4" />
          <path d="M2 18h20" />
          <path d="M12 6v2" />
          <path d="M5.5 9.5l1.4 1.4" />
          <path d="M18.5 9.5l-1.4 1.4" />
          <path d="M3 14h1.5" />
          <path d="M19.5 14H21" />
        </svg>
      );
    case "sparkle":
      return (
        <svg {...common}>
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
        </svg>
      );
    case "palm":
      // palm tree silhouette
      return (
        <svg {...common}>
          <path d="M12 22V11" />
          <path d="M12 11C9 8 4 9 3 11c2-4 7-5 9-3 0-3 4-5 7-3-3-1-6 1-7 3 4-2 8 0 9 4-3-2-6-1-9 2" />
          <path d="M11 22h2" />
        </svg>
      );
    case "wave":
      return (
        <svg {...common}>
          <path d="M2 9c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2" />
          <path d="M2 15c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2" />
        </svg>
      );
    case "anchor":
      return (
        <svg {...common}>
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v15" />
          <path d="M5 13a7 7 0 0 0 14 0" />
          <path d="M8 11H4" />
          <path d="M20 11h-4" />
        </svg>
      );
    case "compass":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M16 8l-2 6-6 2 2-6 6-2Z" />
        </svg>
      );
    case "drink":
      // tiki cocktail
      return (
        <svg {...common}>
          <path d="M5 4h14l-2 6H7L5 4Z" />
          <path d="M12 10v8" />
          <path d="M8 21h8" />
          <path d="M8 4l2-2" />
          <path d="M14 2l2 2" />
        </svg>
      );
    case "star":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M12 2l2.6 6.4 6.9.5-5.3 4.6 1.7 6.8L12 16.9 6.1 20.3l1.7-6.8L2.5 8.9l6.9-.5L12 2Z" />
        </svg>
      );
    case "heart":
      return (
        <svg {...common}>
          <path d="M12 21s-7-4.5-9.5-9.3C.6 8.3 2.5 4 6.4 4c2 0 3.6 1 4.6 2.7C12.4 5 14 4 16 4c3.8 0 5.8 4.3 3.9 7.7C19 16.5 12 21 12 21Z" />
        </svg>
      );
    case "arrow-right":
      return (
        <svg {...common}>
          <path d="M5 12h14" />
          <path d="M13 6l6 6-6 6" />
        </svg>
      );
    case "play":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M7 4v16l13-8L7 4Z" />
        </svg>
      );
  }
}

export function HibiscusOrnament({ className = "h-3 w-3" }: { className?: string }) {
  // small ornament for marquee dividers — abstract bloom, not emoji
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2c2 3 5 4 8 4-3 1-5 4-5 7s2 6 5 7c-3 0-6 1-8 4-2-3-5-4-8-4 3-1 5-4 5-7s-2-6-5-7c3 0 6-1 8-4Z" opacity=".95" />
      <circle cx="12" cy="12" r="1.6" fill="#0E2A45" />
    </svg>
  );
}
