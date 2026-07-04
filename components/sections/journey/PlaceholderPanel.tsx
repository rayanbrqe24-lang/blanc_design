import RoomIcon, { RoomIconName } from "./RoomIcon";

// A tasteful stand-in for scenes we don't have real photography for yet —
// a soft tonal gradient, a fine blueprint grid, and a single line-art mark,
// so the journey never shows a broken or generic-looking gap.
export default function PlaceholderPanel({
  icon,
  tone = "ink",
}: {
  icon: RoomIconName;
  tone?: "ink" | "void" | "ember";
}) {
  const gradients: Record<string, string> = {
    ink: "from-[#4b5140] via-[#3a3f30] to-[#2a2e22]",
    void: "from-[#3a4030] via-[#2b3024] to-[#1e2119]",
    ember: "from-[#5d6250] via-[#454a38] to-[#2a2e22]",
  };

  return (
    <div className={`relative h-full w-full bg-gradient-to-br ${gradients[tone]}`}>
      {/* fine blueprint grid */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.08]" preserveAspectRatio="none">
        <defs>
          <pattern id={`grid-${icon}`} width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#E9E2D2" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${icon})`} />
      </svg>

      {/* corner registration marks, echoes architectural drawings */}
      <div className="absolute left-6 top-6 h-6 w-6 border-l border-t border-cloud/20" />
      <div className="absolute bottom-6 right-6 h-6 w-6 border-b border-r border-cloud/20" />

      <div className="absolute inset-0 flex items-center justify-center">
        <RoomIcon name={icon} className="h-40 w-40 text-cloud/25 md:h-56 md:w-56" />
      </div>
    </div>
  );
}
