import { Search } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const HeaderSearch: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "flex rounded-2xl flex-1 max-w-xl justify-between relative h-12 z-30",
        className
      )}
    >
      <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
      <input
        className="rounded-2xl outline-none w-full  bg-gray-50 pl-11 "
        type="text"
        placeholder="Search for products..."
      />
    </div>
  );
};
