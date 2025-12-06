import { React } from "../../lib/react";

export function Card({ children }: { children?: React.ReactNode }) {
  return (
    <div className="border rounded-lg p-4 shadow bg-white">
      {children}
    </div>
  );
}
