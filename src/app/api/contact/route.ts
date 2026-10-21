import { NextResponse } from "next/server";
import { firm } from "@/content/site";

export async function POST(request: Request) {
  const form = await request.formData();
  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const organisation = String(form.get("organisation") ?? "").trim();
  const matter = String(form.get("matter") ?? "").trim();
  const message = String(form.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Name, email and message are required." },
      { status: 400 },
    );
  }

  const subject = encodeURIComponent(
    `Website enquiry${matter ? ` — ${matter}` : ""}`,
  );
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nOrganisation: ${organisation || "—"}\nMatter: ${matter || "—"}\n\n${message}`,
  );
  const mailto = `mailto:${firm.email}?subject=${subject}&body=${body}`;

  return NextResponse.json({ ok: true, mailto });
}
