import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { CheckCircle2, Clock, Shield, Target, Users, Zap } from "lucide-react";

const Features = () => {
  return (
    <section className="py-24 px-6 bg-gray-50 border-b">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Everything you need to stay organized
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple, reliable tools to help you manage tasks efficiently and
            collaborate with your team.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border border-gray-200 shadow-none hover:border-gray-300 transition-colors">
            <CardHeader>
              <Target className="w-6 h-6 text-gray-800 mb-4" />
              <CardTitle className="text-lg">Smart Organization</CardTitle>
              <CardDescription>
                Categorize and prioritize tasks effortlessly with intelligent
                suggestions.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border border-gray-200 shadow-none hover:border-gray-300 transition-colors">
            <CardHeader>
              <Users className="w-6 h-6 text-gray-800 mb-4" />
              <CardTitle className="text-lg">Team Collaboration</CardTitle>
              <CardDescription>
                Assign tasks, share updates, and track progress in real-time.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border border-gray-200 shadow-none hover:border-gray-300 transition-colors">
            <CardHeader>
              <Zap className="w-6 h-6 text-gray-800 mb-4" />
              <CardTitle className="text-lg">Fast Performance</CardTitle>
              <CardDescription>
                Instant updates and smooth experience across all devices.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border border-gray-200 shadow-none hover:border-gray-300 transition-colors">
            <CardHeader>
              <Clock className="w-6 h-6 text-gray-800 mb-4" />
              <CardTitle className="text-lg">Time Tracking</CardTitle>
              <CardDescription>
                Monitor how you spend your time and improve productivity.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border border-gray-200 shadow-none hover:border-gray-300 transition-colors">
            <CardHeader>
              <Shield className="w-6 h-6 text-gray-800 mb-4" />
              <CardTitle className="text-lg">Secure & Private</CardTitle>
              <CardDescription>
                Your data is protected with enterprise-level security.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border border-gray-200 shadow-none hover:border-gray-300 transition-colors">
            <CardHeader>
              <CheckCircle2 className="w-6 h-6 text-gray-800 mb-4" />
              <CardTitle className="text-lg">Smart Reminders</CardTitle>
              <CardDescription>
                Stay on track with intelligent alerts and reminders.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;
