"use client";

import { useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { Menu, X } from "lucide-react";

import { Button } from "../ui/button";
import { RootState } from "@/lib/store";
import { nav } from "@/lib/navbar";

const Sidebar = ({ pathname }: { pathname: string }) => {
  const loader = useSelector((state: RootState) => state.dashboard.loading);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="md:hidden fixed top-[5.5px] left-0 z-50 px-4 py-3  ">
        <button onClick={() => setOpen(true)}>
          <Menu size={22} />
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed bg-white  md:sticky top-0 left-0 z-50 h-full w-64   transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="px-5 py-4  flex items-center justify-between">
          <div>
            <div className=" block md:hidden text-lg font-semibold text-slate-800">
              Dashboard
            </div>
            <div className="mt-1 text-xs text-slate-500">
              Manage account & tasks
            </div>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="md:hidden text-slate-600"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 p-2 space-y-1">
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
                  variant={active ? "default" : "ghost"}
                  disabled={loader}
                  className="w-full justify-start gap-3"
                >
                  <Icon size={18} />
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </nav>

        <div className="p-3 border-t border-slate-200">
          <div className="rounded-md bg-slate-50 p-3 text-xs text-slate-600">
            Tip: Use Overview to see a snapshot of account & tasks.
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
