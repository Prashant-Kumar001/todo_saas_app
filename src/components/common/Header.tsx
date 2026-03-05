import { CheckCircle2 } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { UserButton } from "@clerk/nextjs";

interface Props {
  isSignedIn: boolean | null | undefined;
  handleSignIn: () => void;
  handleSignUp: () => void;
  handleSignOut: () => void;
  handleDashboard: () => void;
}

const Header = ({
  isSignedIn,
  handleSignIn,
  handleSignUp,
  handleSignOut,
  handleDashboard,
}: Props) => {
  return (
    <nav className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-6 h-6 text-gray-800" />
            <span className="text-lg font-semibold">TaskFlow</span>
          </div>
          <div className="flex items-center space-x-3">
            {isSignedIn ? (
              <>
                <UserButton afterSignOutUrl="/" />

                <Button
                  onClick={handleDashboard}
                  className="bg-black text-white hover:bg-gray-800"
                >
                  Dashboard
                </Button>

                <Button onClick={handleSignOut} variant="outline">
                  Log Out
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" onClick={handleSignIn}>
                  Sign In
                </Button>

                <Button
                  onClick={handleSignUp}
                  className="bg-black text-white hover:bg-gray-800"
                >
                  Get Started
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
