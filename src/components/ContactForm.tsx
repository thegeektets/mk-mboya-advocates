"use client";

import { useState } from "react";
import {
  Briefcase,
  Building2,
  Mail,
  MessageSquare,
  Send,
  User,
} from "lucide-react";
import { practiceAreas, firm } from "@/content/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [mailto, setMailto] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });
      const json = (await res.json()) as { ok?: boolean; mailto?: string };
      if (!res.ok || !json.ok) throw new Error("Failed");
      setMailto(json.mailto ?? null);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <label className="grid gap-1.5 text-sm">
        <span className="inline-flex items-center gap-2 font-medium text-ink">
          <User size={14} className="text-turquoise" aria-hidden />
          Name
        </span>
        <input
          required
          name="name"
          autoComplete="name"
          className="rounded-lg border border-[var(--line)] bg-white px-3 py-2.5 text-ink outline-none ring-turquoise/40 focus:ring-2"
        />
      </label>
      <label className="grid gap-1.5 text-sm">
        <span className="inline-flex items-center gap-2 font-medium text-ink">
          <Mail size={14} className="text-turquoise" aria-hidden />
          Email
        </span>
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          className="rounded-lg border border-[var(--line)] bg-white px-3 py-2.5 text-ink outline-none ring-turquoise/40 focus:ring-2"
        />
      </label>
      <label className="grid gap-1.5 text-sm">
        <span className="inline-flex items-center gap-2 font-medium text-ink">
          <Building2 size={14} className="text-turquoise" aria-hidden />
          Organisation
        </span>
        <input
          name="organisation"
          autoComplete="organization"
          className="rounded-lg border border-[var(--line)] bg-white px-3 py-2.5 text-ink outline-none ring-turquoise/40 focus:ring-2"
        />
      </label>
      <label className="grid gap-1.5 text-sm">
        <span className="inline-flex items-center gap-2 font-medium text-ink">
          <Briefcase size={14} className="text-turquoise" aria-hidden />
          Matter
        </span>
        <select
          name="matter"
          className="rounded-lg border border-[var(--line)] bg-white px-3 py-2.5 text-ink outline-none ring-turquoise/40 focus:ring-2"
          defaultValue=""
        >
          <option value="" disabled>
            Select a practice area
          </option>
          {practiceAreas.map((p) => (
            <option key={p.slug} value={p.title}>
              {p.title}
            </option>
          ))}
          <option value="Other / not sure">Other / not sure</option>
        </select>
      </label>
      <label className="grid gap-1.5 text-sm">
        <span className="inline-flex items-center gap-2 font-medium text-ink">
          <MessageSquare size={14} className="text-turquoise" aria-hidden />
          Message
        </span>
        <textarea
          required
          name="message"
          rows={5}
          className="rounded-lg border border-[var(--line)] bg-white px-3 py-2.5 text-ink outline-none ring-turquoise/40 focus:ring-2"
        />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary inline-flex items-center justify-center gap-2 px-5 py-3 text-sm disabled:opacity-60"
      >
        <Send size={16} aria-hidden />
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      {status === "sent" && (
        <p className="text-sm text-canopy">
          Thank you. This demo stores nothing on a server —{" "}
          {mailto ? (
            <a className="underline hover:text-turquoise" href={mailto}>
              open the prepared email
            </a>
          ) : (
            `write to ${firm.email}`
          )}{" "}
          to complete the instruction.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-700">
          Something went wrong. Email {firm.email} directly.
        </p>
      )}
    </form>
  );
}
