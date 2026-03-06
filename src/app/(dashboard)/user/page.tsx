"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { RootState } from "@/lib/store";
import { useUser } from "@clerk/nextjs";
import { Mail, Calendar } from "lucide-react";
import { useSelector } from "react-redux";
import { formatDistanceToNow } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ProfilePage() {
  const userData = useSelector((state: RootState) => state.dashboard.user);
  const loading = useSelector((state: RootState) => state.dashboard.loading);
  const { user } = useUser();

  const imageUrl = user?.imageUrl;
  const userId = user?.id;

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-4 space-y-6">
        <div className="h-32 bg-slate-200 animate-pulse rounded-xl" />
        <div className="h-48 bg-slate-200 animate-pulse rounded-xl" />
        <div className="h-48 bg-slate-200 animate-pulse rounded-xl" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      <Card>
        <CardContent className="flex flex-col sm:flex-row items-center gap-6 p-6">
          <Avatar className="h-20 w-20 border">
            <AvatarImage src={imageUrl} />
            <AvatarFallback className="text-lg font-semibold">
              {userData?.name?.charAt(0)}
            </AvatarFallback>
          </Avatar>

          <div className="text-center sm:text-left">
            <h2 className="text-xl font-semibold text-slate-800">
              {userData?.name}
            </h2>

            <p className="text-sm text-slate-500">{userData?.email}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Mail className="w-4 h-4 text-slate-500" />
            Contact Information
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex items-center gap-3 text-sm text-slate-700">
            <Mail className="w-4 h-4 text-slate-500" />
            {userData?.email}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Account Details</CardTitle>
          <CardDescription>
            Basic information about your account
          </CardDescription>
        </CardHeader>

        <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
          <div>
            <p className="text-slate-500">Full Name</p>
            <p className="font-medium text-slate-800">{userData?.name}</p>
          </div>

          <div>
            <p className="text-slate-500">Email</p>
            <p className="font-medium text-slate-800">{userData?.email}</p>
          </div>

          <div>
            <p className="text-slate-500">User ID</p>
            <p className="font-mono text-xs break-all text-slate-600">
              {userId}
            </p>
          </div>

          <div>
            <p className="text-slate-500">Account Created</p>
            <p className="text-slate-700 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-slate-400" />
              {formatDistanceToNow(new Date(userData?.createdAt || 0))} ago
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
