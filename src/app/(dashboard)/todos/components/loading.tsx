import React from "react";

const loading = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 p-4">
      <div className="max-w-4xl mx-auto space-y-5 ">
        <div className="flex flex-col gap-1.5 px-3 py-3 bg-white border bottom-2">
          <div className="flex items-center gap-2">
            <div className="w-full h-12 bg-slate-200 rounded animate-pulse"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-full h-12 bg-slate-200 rounded animate-pulse"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-full h-12 bg-slate-200 rounded animate-pulse"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-full h-12 bg-slate-200 rounded animate-pulse"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-full h-12 bg-slate-200 rounded animate-pulse"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-full h-12 bg-slate-200 rounded animate-pulse"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-full h-12 bg-slate-200 rounded animate-pulse"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-full h-12 bg-slate-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;
