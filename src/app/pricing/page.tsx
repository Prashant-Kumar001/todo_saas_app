import { PricingTable } from "@clerk/nextjs";

export default function PricingPage() {
  return (
    <div className="min-h-screen w-full  py-20 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">
          Simple, Transparent Pricing
        </h1>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Choose the plan that fits your needs. Upgrade anytime and scale as
          your product grows.
        </p>
      </div>

      <div className="mt-14 max-w-5xl mx-auto">
        <div className="rounded-2xl p-8 b">
          <PricingTable />
        </div>
      </div>
    </div>
  );
}
