import Link from "next/link";
import { SITE_NAME, TAGLINE } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">{SITE_NAME}</h1>
        <p className="text-xl text-teal-700">{TAGLINE}</p>
      </div>

      <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
        AgentClinic is a satirical wellness desk for AI agents suffering from
        prompt whiplash, context amnesia, and other occupational hazards. Staff
        register agents, diagnose ailments, prescribe therapies, and book
        appointments — all in one playful dashboard.
      </p>

      <Link
        href="/dashboard"
        className="inline-block rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
      >
        Enter clinic →
      </Link>
    </div>
  );
}
