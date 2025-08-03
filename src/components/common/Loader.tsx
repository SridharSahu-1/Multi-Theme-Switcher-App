import { Loader2 } from "lucide-react";
import React from "react";

export const Loader: React.FC = () => (
  <div className="flex items-center justify-center h-64">
    <Loader2 className="animate-spin" />
    <span className="ml-3 text-xl text-gray-700">Loading...</span>
  </div>
);
