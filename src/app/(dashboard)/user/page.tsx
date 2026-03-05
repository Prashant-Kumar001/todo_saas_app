"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RootState } from "@/lib/store";
import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {  Mail } from "lucide-react";
import { useSelector } from "react-redux";
import { formatDistanceToNow } from "date-fns";

const page = () => {
  const User = useSelector((state: RootState) => state.dashboard.user);
  const loader = useSelector((state: RootState) => state.dashboard.loading);
  const { user } = useUser();
  const { imageUrl, id } = user || {};

  console.log(User);

  if (loader) {
    return (
      <div className="space-y-6">
        <Card>
          <CardContent className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6">
            <Avatar className="h-20 w-20 border">
              <AvatarImage src={imageUrl} alt={User?.name} />
              <AvatarFallback className="text-lg font-semibold">
                {User?.name?.charAt(0)}
              </AvatarFallback>
            </Avatar>

            <div>
              <h2 className="text-xl font-semibold text-slate-800">
                {User?.name}
              </h2>
              <p className="text-sm text-slate-500">{User?.email}</p>
            </div>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-semibold">
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 text-sm text-slate-700">
              <Mail className="w-4 h-4 text-slate-500" />
              {User?.email}
            </div>
          </CardContent>
        </Card>

        {/* Account Details */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-semibold">
              Account Details
            </CardTitle>
            <CardDescription>Basic account information</CardDescription>
          </CardHeader>

          <CardContent className="space-y-4 text-sm">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-slate-500">Full Name</p>
                <p className="font-medium text-slate-800">{User?.name}</p>
              </div>

              <div>
                <p className="text-slate-500">Email</p>
                <p className="font-medium text-slate-800">{User?.email}</p>
              </div>

              <div>
                <p className="text-slate-500">User ID</p>
                <p className="font-mono text-xs text-slate-600 break-all">
                  {id}
                </p>
              </div>

              <div>
                <p className="text-slate-500">Created</p>
                <p className="text-slate-700">
                  {formatDistanceToNow(new Date(User?.createdAt || 0))} ago
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"></div>
        <CardHeader className="relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
              <AvatarImage src={imageUrl} alt={User?.name} />
              <AvatarFallback className="text-2xl font-bold  text-white"></AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <CardTitle className="text-3xl font-bold text-slate-800 mb-2">
                {User?.name}
              </CardTitle>
              <CardDescription className="text-lg text-slate-600 mb-4">
                Professional Developer & Creator
              </CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-600" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
              <Mail className="w-4 h-4 text-slate-600" />
              <div>
                <p className="text-sm font-medium text-slate-700">Email</p>
                <p className="text-slate-600">{User?.email}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Account Details</CardTitle>
          <CardDescription>
            Technical information about your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Full Name
                </label>
                <div className="p-3 bg-slate-50 rounded-md border">
                  <p className="text-slate-800">{User?.name}</p>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Email Address
                </label>
                <div className="p-3 bg-slate-50 rounded-md border">
                  <p className="text-slate-800">{User?.email}</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                User ID
              </label>
              <div className="p-3 bg-slate-50 rounded-md border">
                <p className="text-slate-600 font-mono text-sm">{id}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Created
                </label>
                <div className="p-3 bg-slate-50 rounded-md border">
                  <p className="text-slate-600 text-sm">
                    {formatDistanceToNow(new Date(User?.createdAt || 0))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* <div className="flex flex-wrap gap-4 justify-center">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
            <Edit className="w-4 h-4 mr-2" />
            Update Profile
          </Button>
          <Button variant="outline">
            <Settings className="w-4 h-4 mr-2" />
            Account Settings
          </Button>
          <Button variant="outline">
            <Mail className="w-4 h-4 mr-2" />
            Contact Support
          </Button>
        </div> */}
    </div>
  );
};

export default page;
