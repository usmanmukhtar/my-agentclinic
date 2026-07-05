import Link from "next/link";

export function Nav() {
  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-4xl items-center gap-6 px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-slate-900">
          AgentClinic
        </Link>
        <div className="flex gap-4 text-sm">
          <Link
            href="/"
            className="text-slate-600 transition hover:text-slate-900"
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className="text-slate-600 transition hover:text-slate-900"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}
