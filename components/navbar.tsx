"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { appSignInUrl, appSignUpUrl } from "@/lib/app-url";
import { cn } from "@/lib/utils";

const playersLinks = [
  { href: "#highlights", label: "Product highlights" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#skill", label: "Skill rating" },
  { href: "#pricing", label: "Pricing" },
] as const;

const ownersLinks = [
  { href: "#for-teams", label: "Who it's for" },
  { href: "#formats", label: "League formats" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
] as const;

type NavMenuKey = "players" | "owners";

function NavDropdown({
  menuKey,
  label,
  items,
  openMenu,
  setOpenMenu,
  menuId,
}: {
  menuKey: NavMenuKey;
  label: string;
  items: readonly { href: string; label: string }[];
  openMenu: NavMenuKey | null;
  setOpenMenu: (v: NavMenuKey | null) => void;
  menuId: string;
}) {
  const open = openMenu === menuKey;

  return (
    <div className="relative">
      <button
        type="button"
        id={`${menuId}-trigger-${menuKey}`}
        aria-expanded={open}
        aria-controls={`${menuId}-panel-${menuKey}`}
        aria-haspopup="true"
        className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#002d62]/85 transition hover:text-[#002d62]"
        onClick={() => setOpenMenu(open ? null : menuKey)}
        onKeyDown={(e) => {
          if (e.key === "Escape") setOpenMenu(null);
        }}
      >
        {label}
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 shrink-0 text-[#002d62]/75 transition-transform",
            open && "rotate-180",
          )}
          aria-hidden
        />
      </button>
      {open ? (
        <div
          id={`${menuId}-panel-${menuKey}`}
          role="menu"
          aria-labelledby={`${menuId}-trigger-${menuKey}`}
          className="absolute left-0 top-full z-50 mt-2 min-w-[15rem] rounded-xl border border-[#002d62]/12 bg-[var(--surface-page)] py-2 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)]"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              className="block px-4 py-2.5 text-sm font-medium text-[#002d62] transition hover:bg-[#002d62]/[0.06]"
              onClick={() => setOpenMenu(null)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<NavMenuKey | null>(null);
  const menuId = useId();
  const desktopNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (openMenu === null) return;
    function handlePointer(e: PointerEvent) {
      if (
        desktopNavRef.current &&
        !desktopNavRef.current.contains(e.target as Node)
      ) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("pointerdown", handlePointer);
    return () => document.removeEventListener("pointerdown", handlePointer);
  }, [openMenu]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenMenu(null);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#002d62]/10 bg-[var(--surface-page)] shadow-[0_1px_0_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.08)]">
      <div className="flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-2 px-4 py-3 md:gap-x-16 md:gap-y-2 md:px-8 lg:gap-x-24 lg:px-12">
        <Link
          href="/"
          className="group inline-flex shrink-0 items-center bg-transparent p-0 ring-0"
        >
          <Image
            src="/lobsmash-logo-removebg-preview.png"
            alt="LobSmash"
            width={180}
            height={50}
            className="h-10 w-auto bg-transparent object-contain object-left transition-opacity group-hover:opacity-90 md:h-11"
            priority
          />
        </Link>

        <div
          ref={desktopNavRef}
          className="hidden items-center gap-6 md:ml-28 md:flex lg:ml-40 lg:gap-8"
        >
          <NavDropdown
            menuKey="players"
            label="For players"
            items={playersLinks}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            menuId={menuId}
          />
          <NavDropdown
            menuKey="owners"
            label="For League owners"
            items={ownersLinks}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            menuId={menuId}
          />
        </div>

        <div className="flex shrink-0 items-center gap-2 md:ml-2 md:gap-2 lg:ml-4 lg:gap-3">
          <div className="hidden items-center gap-2 sm:flex">
            <Link
              href={appSignInUrl()}
              className="inline-flex rounded-full border border-[#002d62]/25 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#002d62] transition hover:border-[#002d62]/40 hover:bg-[#002d62]/[0.06]"
            >
              Sign in
            </Link>
            <Link
              href={appSignUpUrl()}
              className="inline-flex rounded-full bg-[#99e600] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#002d62] shadow-sm transition hover:bg-[#b3ff33]"
            >
              Sign up
            </Link>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#002d62]/20 bg-transparent text-[#002d62] transition hover:bg-[#002d62]/[0.06] md:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-[#002d62]/10 bg-[var(--surface-page)] px-3 py-3 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.08)] md:hidden">
          <div className="flex flex-col gap-5">
            <div>
              <p className="px-4 pb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#002d62]/50">
                For players
              </p>
              <div className="flex flex-col gap-0.5">
                {playersLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="rounded-xl px-4 py-2.5 text-sm font-medium text-[#002d62] hover:bg-[#002d62]/[0.06]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="px-4 pb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#002d62]/50">
                For League owners
              </p>
              <div className="flex flex-col gap-0.5">
                {ownersLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="rounded-xl px-4 py-2.5 text-sm font-medium text-[#002d62] hover:bg-[#002d62]/[0.06]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 px-1">
              <Link
                href={appSignInUrl()}
                className="rounded-xl border border-[#002d62]/25 px-4 py-3 text-center text-sm font-bold text-[#002d62] transition hover:bg-[#002d62]/[0.06]"
                onClick={() => setMobileOpen(false)}
              >
                Sign in
              </Link>
              <Link
                href={appSignUpUrl()}
                className="rounded-xl bg-[#99e600] px-4 py-3 text-center text-sm font-bold text-[#002d62] transition hover:bg-[#b3ff33]"
                onClick={() => setMobileOpen(false)}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
