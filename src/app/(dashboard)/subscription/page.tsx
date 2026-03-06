"use client";

import {
  SubscriptionDetailsButton,
  useSubscription,
} from "@clerk/nextjs/experimental";

export default function OverviewPage() {
  const { data, isLoading } = useSubscription();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 p-6">
        <div className="max-w-3xl mx-auto bg-white border rounded-xl p-6 space-y-4">
          <div className="h-8 w-40 bg-slate-200 rounded animate-pulse"></div>
          <div className="h-6 w-full bg-slate-200 rounded animate-pulse"></div>
          <div className="h-6 w-3/4 bg-slate-200 rounded animate-pulse"></div>
          <div className="h-10 w-40 bg-slate-200 rounded animate-pulse"></div>
        </div>
      </div>
    );
  }


  console.log(data)

  const subscription = data?.subscriptionItems?.[0];

  const planName = subscription?.plan?.name ?? "Free Plan";
  const status = subscription?.status ?? "inactive";

  const price = subscription?.plan?.fee?.amountFormatted
  const currency = subscription?.plan?.fee?.currencySymbol

  const planPeriod = subscription?.planPeriod ?? "—";

  const nextPayment = data?.nextPayment
    ? new Date(data.nextPayment?.date).toLocaleDateString()
    : "—";

  const periodStart = subscription?.periodStart
    ? new Date(subscription.periodStart).toLocaleDateString()
    : "—";

  const periodEnd = subscription?.periodEnd
    ? new Date(subscription.periodEnd).toLocaleDateString()
    : "—";

  const features = subscription?.plan?.features ?? [];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-3xl mx-auto bg-white border rounded-xl p-8 space-y-6 shadow-sm">
        <h1 className="text-2xl font-semibold">Subscription Overview</h1>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-slate-500">Plan</p>
            <p className="text-lg font-medium">{planName}</p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Status</p>
            <p className="text-lg font-medium capitalize">{status}</p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Price</p>
            <p className="text-lg font-medium">
              {currency} {price} / {planPeriod}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Next Payment</p>
            <p className="text-lg font-medium">{nextPayment}</p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Period Start</p>
            <p className="text-lg font-medium">{periodStart}</p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Period End</p>
            <p className="text-lg font-medium">{periodEnd}</p>
          </div>
        </div>

        {features.length > 0 && (
          <div className="pt-4 border-t">
            <p className="text-sm text-slate-500 mb-2">Plan Features</p>

            <ul className="list-disc list-inside text-sm space-y-1">
              {features.map((feature, i: number) => (
                <li key={i}>{feature.name}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="pt-4 border-t flex justify-between items-center">
          <p className="text-sm text-slate-500">
            Manage or update your subscription
          </p>

          <SubscriptionDetailsButton>
            <button className="text-sm font-medium text-slate-900 hover:text-slate-700">
              Manage Subscription
            </button>
          </SubscriptionDetailsButton>
        </div>
      </div>
    </div>
  );
}
