import React from "react";
import { Button } from "@/components/ui/button";
import { LuRefreshCcw } from "react-icons/lu";
import { NavItem } from "@/lib/navbar";




interface HeaderProps {
  pathname: string;
  nav: NavItem[];
  syncing: boolean;
  syncNow: () => void;
  isLoaded: boolean;
  has_db: boolean;
  loading: boolean;
};

const Header = ({
  pathname,
  nav,
  syncing,
  syncNow,
  isLoaded,
  has_db,
  loading,
}: HeaderProps) => {
  return (
    <header className="bg-white sticky top-0  ">
      <div className="flex h-14 items-center justify-between px-4 md:px-6">
        <h1 className="pl-10 md:pl-1 text-sm font-semibold text-slate-700 md:text-base">
          {nav.find((n) => n.href === pathname)?.label ?? "Overview"}
        </h1>
        <div className="flex items-center gap-2">
          {!has_db ? (
            <Button
              variant="outline"
              size="sm"
              onClick={syncNow}
              disabled={!isLoaded || syncing || loading}
              className="flex items-center gap-2"
            >
              <LuRefreshCcw
                className={syncing || loading ? "animate-spin" : ""}
                size={16}
              />
              {syncing || loading ? "Syncing..." : "Sync"}
            </Button>
          ) : (
            <span className="text-xs font-medium text-green-600 bg-green-50 px-3 py-1 rounded-md border border-green-200">
              Synced
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
