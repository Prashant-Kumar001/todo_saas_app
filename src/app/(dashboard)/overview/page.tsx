"use client";

import { useUser } from "@clerk/nextjs";
import {
  LuCalendar,
  LuIdCard,
  LuMail,
  LuUser,
} from "react-icons/lu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { formatDistanceToNow } from "date-fns";
import { StatCard } from "@/components/dashboard/StatCard";
import { InfoRow } from "@/components/dashboard/infoRow";

import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import Loading from "@/components/dashboard/Loading.overView";
import { SubscriptionDetailsButton } from "@clerk/nextjs/experimental";
import { Button } from "@/components/ui/button";

export default function OverviewPage() {
  const { user, isLoaded } = useUser();
 

  const {
    user: User,
    loading: Global_loading,
    error: EError,
    Has_db,
  } = useSelector((state: RootState) => state.dashboard);

  if (Global_loading) {
    return <Loading />;
  }

  return (
    <div className="space-y-6 min-h-screen">
      <div className={`grid gap-4 md:grid-cols-${Has_db ? "2" : "1"}`}>
        {Has_db && (
          <StatCard
            title="user"
            value={User?.email || ""}
            hint={User?.name || ""}
            icon={<LuIdCard className="text-slate-500" />}
            variant="bordered"
          />
        )}

        <StatCard
          title="authenticated by Clerk"
          value={user?.firstName ? `${user.firstName}` : "—"}
          hint={
            user?.createdAt
              ? `Joined ${formatDistanceToNow(new Date(user.createdAt), {
                  addSuffix: true,
                })}`
              : undefined
          }
          icon={<LuUser className="text-slate-500" />}
          variant="bordered"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="rounded-2xl border border-slate-200 shadow-sm bg-white">
          <CardHeader>
            <CardTitle className="text-slate-800 text-base md:text-lg">
              Clerk info
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            {!isLoaded ? (
              <div className="space-y-4 animate-pulse motion-reduce:animate-none">
                <div className="h-6 w-40 rounded bg-slate-200" />
                <div className="h-4 w-full rounded bg-slate-200" />
                <div className="h-4 w-5/6 rounded bg-slate-200" />
              </div>
            ) : (
              <>
                <InfoRow
                  icon={<LuMail aria-hidden="true" />}
                  label="Email"
                  value={user?.primaryEmailAddress?.emailAddress ?? "—"}
                />
                <InfoRow
                  icon={<LuUser aria-hidden="true" />}
                  label="Name"
                  value={
                    `${user?.firstName ?? ""} ${user?.lastName ?? ""}`.trim() ||
                    "—"
                  }
                />
                <InfoRow
                  icon={<LuCalendar aria-hidden="true" />}
                  label="Created"
                  value={
                    user?.createdAt
                      ? formatDistanceToNow(new Date(user.createdAt), {
                          addSuffix: true,
                        })
                      : "—"
                  }
                />
              </>
            )}
          </CardContent>
        </Card>

        <Card className="rounded-2xl border border-slate-200 shadow-sm bg-white">
          <CardHeader>
            <CardTitle className="text-slate-800 text-base md:text-lg">
              DB info
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            {Global_loading ? (
              <div className="space-y-4 animate-pulse motion-reduce:animate-none">
                <div className="h-6 w-40 rounded bg-slate-200" />
                <div className="h-4 w-full rounded bg-slate-200" />
                <div className="h-4 w-5/6 rounded bg-slate-200" />
                <div className="h-48 w-full rounded bg-slate-200" />
              </div>
            ) : User ? (
              <>
                <InfoRow
                  icon={<LuMail aria-hidden="true" />}
                  label="Email"
                  value={User?.email || "—"}
                />
                <InfoRow
                  icon={<LuUser aria-hidden="true" />}
                  label="Name"
                  value={User?.name || "—"}
                />
              </>
            ) : null}

            {EError ? (
              <Alert variant="destructive" role="alert" aria-live="assertive">
                <AlertDescription>{EError}</AlertDescription>
              </Alert>
            ) : null}
          </CardContent>
        </Card>
      </div>

      <Button asChild size="sm" variant="outline">
        <SubscriptionDetailsButton  >
          Subscription 
        </SubscriptionDetailsButton>
      </Button>
    </div>
  );
}
