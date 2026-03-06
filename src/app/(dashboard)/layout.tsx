"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { userClient } from "@/lib/userClient";
import { useUser } from "@clerk/nextjs";
import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  setDashboardData,
  setLoading,
  setError,
  setHas_db,
} from "@/lib/store/slices/meSlice";
import { AppDispatch, RootState } from "@/lib/store";
import { toast } from "sonner";
import { nav } from "@/lib/navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { user, isLoaded } = useUser();
  const [syncing, setSyncing] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const { Has_db, loading } = useSelector(
    (state: RootState) => state.dashboard,
  );

  const fetchAll = async () => {
    if (!user?.id) return;
    dispatch(setError(""));
    try {
      const result = await userClient.me();
      if (result.success && result.data) {
        dispatch(setHas_db(true));
        dispatch(setDashboardData(result.data));
      } else {
        dispatch(setHas_db(false));
        dispatch(setError(result.error || "Failed to fetch"));
      }
      if (result.error) dispatch(setError(result.error || "Failed to fetch"));
    } catch (e) {
      const error = e as Error;
      dispatch(setHas_db(false));
      dispatch(setError(error.message || "Failed to fetch"));
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    fetchAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);

  const syncNow = async () => {
    try {
      setSyncing(true);
      const result = await userClient.syncUser();
      
      

      if (result.success && result.data) {
        dispatch(setDashboardData(result.data));
        dispatch(setHas_db(true));
        dispatch(setError(""));
        toast.success("Sync successful");
      }

      if (result.error) {
        throw new Error(result.error ?? "Failed to upgrade plan");
      }
    } catch (e) {
      const error = e as Error;
      dispatch(setHas_db(false));
      dispatch(setError(error.message || "Failed to fetch"));
      toast.error(error.message || "Failed to sync");
    } finally {
      setSyncing(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
        <Sidebar pathname={pathname} />

      <div className="flex flex-1 flex-col">
        <Header
          pathname={pathname}
          nav={nav}
          syncing={syncing}
          syncNow={syncNow}
          isLoaded={isLoaded}
          has_db={Has_db}
          loading={loading}
        />

        <main className="flex-1 overflow-y-auto p-4 ">{children}</main>
      </div>
    </div>
  );
}
