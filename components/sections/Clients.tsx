const CLIENTS = ["Nokan Group", "Sami Holdings", "Rezan Estates", "Duhok Hospitality", "Erbil Development Co."];

export default function Clients() {
  return (
    <section className="overflow-hidden border-y border-ink/10 bg-paper py-10">
      <div className="flex animate-[marquee_28s_linear_infinite] gap-16 whitespace-nowrap">
        {[...CLIENTS, ...CLIENTS].map((c, i) => (
          <span key={i} className="eyebrow text-ink/40">
            {c}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
