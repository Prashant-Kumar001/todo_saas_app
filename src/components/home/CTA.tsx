import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const CTA = ({ handleSignUp }: { handleSignUp: () => void }) => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
          Ready to get more done?
        </h2>

        <p className="text-lg text-gray-600 mb-12">
          Join teams and individuals who rely on TaskFlow to stay organized and
          productive every day.
        </p>

        <Card className="border border-gray-200 shadow-none">
          <CardContent className="p-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Start your free trial
                </h3>
                <p className="text-sm text-gray-600">
                  No credit card required · 7-day free trial · Cancel anytime
                </p>
              </div>

             
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTA;
