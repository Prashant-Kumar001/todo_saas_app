"use client";

import {
  SubscriptionDetailsButton,
  useSubscription,
} from "@clerk/nextjs/experimental";

import { Calendar, CreditCard, BadgeCheck, Sparkles } from "lucide-react";

export default function OverviewPage() {
  const { data, isLoading } = useSubscription();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white p-6 rounded-xl border shadow-sm space-y-4">
          <div className="h-6 w-40 bg-slate-200 rounded animate-pulse"></div>
          <div className="h-4 w-full bg-slate-200 rounded animate-pulse"></div>
          <div className="h-4 w-3/4 bg-slate-200 rounded animate-pulse"></div>
        </div>
      </div>
    );
  }

  const subscription = data?.subscriptionItems?.[0];

  const planName = subscription?.plan?.name ?? "Free Plan";
  const status = subscription?.status ?? "inactive";

  const price = subscription?.plan?.fee?.amountFormatted ?? "0";
  const currency = subscription?.plan?.fee?.currencySymbol ?? "$";

  const planPeriod = subscription?.planPeriod ?? "month";

  const nextPayment = data?.nextPayment
    ? new Date(data.nextPayment?.date).toDateString()
    : "—";

  const periodStart = subscription?.periodStart
    ? new Date(subscription.periodStart).toDateString()
    : "—";

  const periodEnd = subscription?.periodEnd
    ? new Date(subscription.periodEnd).toDateString()
    : "—";

  const features = subscription?.plan?.features ?? [];

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold">Subscription</h1>
          <p className="text-slate-500 text-sm mt-1">
            Manage your current plan and billing details
          </p>
        </div>

        <div className="bg-white border rounded-xl p-6 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-slate-100">
                <Sparkles size={18} />
              </div>

              <div>
                <p className="text-sm text-slate-500">Current Plan</p>
                <p className="text-lg font-semibold">{planName}</p>
              </div>
            </div>

            <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 capitalize w-fit">
              {status}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CreditCard size={18} className="text-slate-500" />
            <p className="text-lg font-medium">
              {currency} {price}
              <span className="text-sm text-slate-500"> / {planPeriod}</span>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-slate-400" />
              <div>
                <p className="text-slate-500">Next Payment</p>
                <p className="font-medium">{nextPayment}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-slate-400" />
              <div>
                <p className="text-slate-500">Period Start</p>
                <p className="font-medium">{periodStart}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div>
                <Calendar size={16} className="text-slate-400" />
                <p className="text-slate-500">Period End</p>
                <p className="font-medium">{periodEnd}</p>
              </div>
            </div>
          </div>

          {features.length > 0 && (
            <div className="border-t pt-6 space-y-3">
              <p className="text-sm text-slate-500">Plan Features</p>

              <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                {features.map((feature, i: number) => (
                  <li key={i} className="flex items-center gap-2">
                    <BadgeCheck size={16} className="text-green-500" />
                    {feature.name}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-sm text-slate-500">
              Update your billing or change plan
            </p>

            <SubscriptionDetailsButton>
              <button className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-slate-800 transition">
                Manage Subscription
              </button>
            </SubscriptionDetailsButton>
          </div>
        </div>
      </div>
    </div>
  );
}
