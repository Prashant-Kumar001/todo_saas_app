import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

const Hero = ({ handleSignUp, isSignedIn }: { handleSignUp: () => void, isSignedIn: boolean | null | undefined }) => {
  return (
    <section className="py-24 px-6 bg-white border-b">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
          Organize your tasks.
          <br />
          Work with clarity and focus.
        </h1>

        <p className="text-lg text-gray-600 mb-10">
          A simple and reliable task management system designed to help you stay
          organized, collaborate efficiently, and get more done.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
        {
          isSignedIn ? (
            <Button
              size="lg"
              onClick={() => {}}
              className="bg-black text-white hover:bg-gray-800 px-8"
            >
              Dashboard <ArrowRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              size="lg"
              onClick={handleSignUp}
              className="bg-black text-white hover:bg-gray-800 px-8"
            >
              Start for free <ArrowRight className="w-4 h-4" />
            </Button>
          )
        }
        </div>

        <div className="flex justify-center items-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-gray-700" />
            <span>4.9/5 rating</span>
          </div>
          <p>Trusted by 50K+ users</p>
          <p>99.9% uptime</p>
          <Link href={'/pricing'}>
            <p>Pricing</p></Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
