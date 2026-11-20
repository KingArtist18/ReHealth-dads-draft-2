"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { REBUILD } from "@/lib/content";

type Status = 0 | 1 | 2; // 0 = not rated, 1 = solid, 2 = needs work

const FILL: Record<Status, number> = { 0: 32, 1: 100, 2: 46 };
const FILL_COLOR: Record<Status, string> = {
  0: "bg-white/35",
  1: "bg-brand-green",
  2: "bg-brand-copper",
};
const STATUS_LABEL: Record<Status, string> = { 0: "Tap to rate", 1: "Solid", 2: "Needs work" };

function PillarIcon({ id }: { id: string }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" {...p}>
      {id === "health" && <path d="M12 20S4 15 4 9.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5C20 15 12 20 12 20Z" />}
      {id === "home" && <path d="M4 11l8-7 8 7M6 10v10h12V10M10 20v-5h4v5" />}
      {id === "relationships" && (<><circle cx="9" cy="12" r="5" /><circle cx="15" cy="12" r="5" /></>)}
      {id === "career" && <path d="M4 8h16v11H4zM9 8V5h6v3M4 13h16" />}
      {id === "finances" && (<><circle cx="12" cy="12" r="8" /><path d="M12 7v10M9.5 9.5c0-1 1-1.5 2.5-1.5s2.5.6 2.5 1.7c0 2.2-5 1.2-5 3.6 0 1.1 1.1 1.7 2.5 1.7s2.5-.6 2.5-1.5" /></>)}
      {id === "personal" && (<><circle cx="12" cy="12" r="8" /><path d="M15.5 8.5l-2 5-5 2 2-5 5-2Z" /></>)}
    </svg>
  );
}

export default function BridgeExplorer() {
  const pillars = REBUILD.bridge.pillars;
  const [state, setState] = useState<Record<string, Status>>(() =>
    Object.fromEntries(pillars.map((p) => [p.id, 0 as Status]))
  );

  const solid = pillars.filter((p) => state[p.id] === 1);
  const needs = pillars.filter((p) => state[p.id] === 2);
  const rated = solid.length + needs.length;
  const progress = solid.length / pillars.length;

  const cycle = (id: string) =>
    setState((s) => ({ ...s, [id]: (((s[id] + 1) % 3) as Status) }));
  const reset = () => setState(Object.fromEntries(pillars.map((p) => [p.id, 0 as Status])));

  let summary = "Tap each pillar to rate it: once for solid, twice for needs work.";
  if (rated > 0) {
    summary = `${solid.length} solid, ${needs.length} needing attention.`;
    if (needs.length > 0) {
      summary += ` We’d look at ${needs.map((p) => p.label).join(", ")} first, one small win at a time.`;
    } else if (rated === pillars.length) {
      summary += " A strong bridge. The conversation is about keeping it that way.";
    }
  }

  return (
    <div className="rounded-3xl bg-gradient-to-b from-brand-blue to-brand-blue-ink p-5 text-white shadow-lift sm:p-10">
      <div className="flex items-end justify-between gap-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/80 sm:text-sm">
        <span>{REBUILD.bridge.endpoints.start}</span>
        <span className="text-right">{REBUILD.bridge.endpoints.end}</span>
      </div>

      {/* Deck with walker */}
      <div className="relative mt-8 px-1">
        <div className="h-3 rounded-full bg-gradient-to-r from-brand-copper via-white/70 to-brand-green" />
        <motion.div
          aria-hidden="true"
          className="absolute -top-5 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full border-2 border-brand-copper bg-white text-brand-blue shadow-soft"
          initial={false}
          animate={{ left: `${Math.max(4, Math.min(96, progress * 100))}%` }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><circle cx="12" cy="6" r="3" /><path d="M7 20v-6a5 5 0 0 1 10 0v6H7Z" /></svg>
        </motion.div>
      </div>

      {/* Pillars */}
      <ul className="grid grid-cols-6 gap-1.5 sm:gap-4" aria-label="The six pillars of your bridge">
        {pillars.map((p) => {
          const s = state[p.id];
          return (
            <li key={p.id}>
              <button
                type="button"
                onClick={() => cycle(p.id)}
                aria-label={`${p.label}: ${STATUS_LABEL[s]}. Press to change.`}
                className="group relative block h-52 w-full overflow-hidden rounded-b-xl rounded-t-sm border border-white/30 bg-white/10 text-center transition hover:border-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-copper sm:h-60"
              >
                <motion.span
                  aria-hidden="true"
                  className={`absolute inset-x-0 bottom-0 ${FILL_COLOR[s]}`}
                  initial={false}
                  animate={{ height: `${FILL[s]}%` }}
                  transition={{ type: "spring", stiffness: 110, damping: 20 }}
                />
                <span className="relative z-10 flex h-full flex-col items-center justify-between px-0.5 py-3 sm:px-2 sm:py-4">
                  <span className="flex flex-col items-center gap-2">
                    <PillarIcon id={p.id} />
                    <span className="break-words text-[10px] font-semibold leading-tight sm:text-sm">{p.label}</span>
                  </span>
                  <span className="rounded-full bg-brand-blue-ink/70 px-1.5 py-0.5 text-[9px] font-medium sm:px-2.5 sm:text-xs">
                    {STATUS_LABEL[s]}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <div aria-hidden="true" className="h-4 rounded-b-3xl bg-gradient-to-r from-brand-blue via-white/20 to-brand-green opacity-80" />

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-sm text-white/90 sm:text-base" aria-live="polite">{summary}</p>
        {rated > 0 && (
          <button type="button" onClick={reset} className="w-fit text-sm text-white/70 underline underline-offset-4 hover:text-white">
            Reset
          </button>
        )}
      </div>
    </div>
  );
}
