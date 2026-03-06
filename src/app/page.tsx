"use client";

import { useUser, useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import CTA from "@/components/home/CTA";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Testimonial from "@/components/home/Testimonial";
import Pricing from "@/components/home/pricing";

const HomePage = () => {
  const { isSignedIn } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();

  const handleSignIn = () => router.push("/sign-in");
  const handleSignUp = () => router.push("/sign-up");
  const handleSignOut = () => signOut({ redirectUrl: "/" });
  const handleDashboard = () => router.push("/overview");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header
        isSignedIn={isSignedIn}
        handleSignIn={handleSignIn}
        handleSignUp={handleSignUp}
        handleSignOut={handleSignOut}
        handleDashboard={handleDashboard}
      />

      <main>
        <Hero isSignedIn={isSignedIn} handleSignUp={handleSignUp} />
        <Testimonial/>
        <Features />
        <Pricing />
        <CTA  />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
