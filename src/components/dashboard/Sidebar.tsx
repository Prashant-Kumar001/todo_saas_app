"use client";

import { useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { RootState } from "@/lib/store";
import { nav } from "@/lib/navbar";

export default function Sidebar({ pathname }: { pathname: string }) {
  const loading = useSelector((state: RootState) => state.dashboard.loading);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setOpen(true)}
          className="p-2 rounded-md border bg-white shadow-sm"
        >
          <Menu size={20} />
        </button>
      </div>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed md:sticky top-0 left-0 z-50 h-screen w-64 bg-white border-r
        transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <div>
            <h2 className="text-lg font-semibold text-slate-800">Dashboard</h2>
            <p className="text-xs text-slate-500">Manage tasks & account</p>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="md:hidden text-slate-600"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="p-3 space-y-1">
          {nav.map((item) => {
            const active = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                <Button
                  variant="ghost"
                  disabled={loading}
                  className={`w-full justify-start gap-3 text-sm
                    ${
                      active
                        ? "bg-slate-900 text-white hover:bg-slate-800 hover:text-white"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                >
                  <Icon size={18} />
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto p-4 border-t">
          <div className="rounded-md bg-slate-50 p-3 text-xs text-slate-600">
            Tip: Use <span className="font-medium">Overview</span> to quickly
            see your account status and tasks.
          </div>
        </div>
      </aside>
    </>
  );
}
