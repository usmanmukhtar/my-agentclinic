import Link from "next/link";
import { NAV_LINKS, SITE_NAME } from "@/lib/site";

export function Nav() {
  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-4xl items-center gap-6 px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-slate-900">
          {SITE_NAME}
        </Link>
        <div className="flex gap-4 text-sm">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-600 transition hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
