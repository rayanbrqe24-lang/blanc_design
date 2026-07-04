// Minimal line-art icons used inside placeholder scenes (rooms without real
// photography yet). Drawn as thin architectural strokes so they read as
// "blueprint" marks rather than illustrations.

export type RoomIconName =
  | "exterior"
  | "entrance"
  | "dining"
  | "bathroom"
  | "office"
  | "garden"
  | "pool"
  | "night";

export default function RoomIcon({ name, className }: { name: RoomIconName; className?: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 0.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "exterior":
      return (
        <svg viewBox="0 0 120 120" className={className} {...common}>
          <path d="M10 60 L60 20 L110 60" />
          <path d="M22 52 V100 H98 V52" />
          <path d="M50 100 V72 H70 V100" />
          <path d="M34 66 H42 V78 H34 Z" />
          <path d="M78 66 H86 V78 H78 Z" />
        </svg>
      );
    case "entrance":
      return (
        <svg viewBox="0 0 120 120" className={className} {...common}>
          <rect x="34" y="16" width="52" height="92" rx="2" />
          <path d="M34 108 H86" />
          <circle cx="76" cy="62" r="2.4" fill="currentColor" stroke="none" />
          <path d="M34 16 C 40 40, 40 84, 34 108" opacity="0.5" />
        </svg>
      );
    case "dining":
      return (
        <svg viewBox="0 0 120 120" className={className} {...common}>
          <ellipse cx="60" cy="70" rx="38" ry="14" />
          <path d="M60 20 V44" />
          <path d="M40 30 L60 44 L80 30" />
          <path d="M46 24 L60 44 L74 24" />
          <path d="M30 84 V96 M90 84 V96 M46 90 V102 M74 90 V102" />
        </svg>
      );
    case "bathroom":
      return (
        <svg viewBox="0 0 120 120" className={className} {...common}>
          <path d="M18 66 H96 C 96 84, 84 96, 66 96 H48 C 30 96, 18 84, 18 66 Z" />
          <path d="M18 66 V52 C 18 46, 23 42, 28 44" />
          <path d="M24 96 V104 M90 96 V104" />
          <path d="M70 30 C 74 30, 76 33, 76 37" opacity="0.6" />
        </svg>
      );
    case "office":
      return (
        <svg viewBox="0 0 120 120" className={className} {...common}>
          <rect x="18" y="70" width="84" height="6" />
          <path d="M26 76 V100 M94 76 V100" />
          <rect x="34" y="34" width="52" height="34" rx="1" />
          <path d="M40 42 H80 M40 50 H80 M40 58 H68" opacity="0.6" />
        </svg>
      );
    case "garden":
      return (
        <svg viewBox="0 0 120 120" className={className} {...common}>
          <path d="M60 104 V56" />
          <path d="M60 56 C 40 56, 30 44, 32 26 C 50 26, 60 38, 60 56 Z" />
          <path d="M60 68 C 78 68, 88 58, 88 42 C 70 42, 60 52, 60 68 Z" />
          <path d="M40 104 H80" />
        </svg>
      );
    case "pool":
      return (
        <svg viewBox="0 0 120 120" className={className} {...common}>
          <path d="M14 50 Q 26 40, 38 50 T 62 50 T 86 50 T 108 50" />
          <path d="M14 66 Q 26 56, 38 66 T 62 66 T 86 66 T 108 66" />
          <path d="M14 82 Q 26 72, 38 82 T 62 82 T 86 82 T 108 82" />
        </svg>
      );
    case "night":
      return (
        <svg viewBox="0 0 120 120" className={className} {...common}>
          <path d="M74 22 A 34 34 0 1 0 96 78 A 26 26 0 0 1 74 22 Z" />
          <path d="M92 34 L94 40 L100 42 L94 44 L92 50 L90 44 L84 42 L90 40 Z" fill="currentColor" stroke="none" />
        </svg>
      );
    default:
      return null;
  }
}
