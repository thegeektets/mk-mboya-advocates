import { MkIcon } from "@/components/MkIcon";
import { valueVisuals } from "@/lib/visuals";

export function HowWeWork() {
  return (
    <>
      <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
        How we work
      </h2>
      <ul className="mt-8 grid items-stretch gap-4 md:grid-cols-2 lg:grid-cols-6">
        {valueVisuals.map((v, i) => (
          <li
            key={v.label}
            className={`flex h-full items-start gap-3 rounded-2xl border border-[var(--line)] bg-white px-4 py-4 sm:min-h-[10.25rem] sm:gap-4 sm:px-5 sm:py-5 ${
              i < 3 ? "lg:col-span-2" : "lg:col-span-3"
            } ${i === valueVisuals.length - 1 ? "md:col-span-2 lg:col-span-3" : ""}`}
          >
            <MkIcon icon={v.Icon} size="sm" tone="aqua" />
            <div className="min-w-0">
              <h3 className="font-semibold text-ink">{v.label}</h3>
              <p className="mt-1 text-sm leading-relaxed text-stone">
                {v.blurb}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
