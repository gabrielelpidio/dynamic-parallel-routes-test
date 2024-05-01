"use client";
import { useSelectedLayoutSegment } from "next/navigation";
import { useSelectedLayoutSegments } from "next/navigation";
import { usePathname } from "next/navigation";
import * as React from "react";

const Pathname = () => {
  const pathname = usePathname();
  const segment = useSelectedLayoutSegments();
  return (
    <span className="text-xl flex gap-1 items-baseline">
      Pathname: <pre>{pathname}</pre>
    </span>
  );
};

export default Pathname;
