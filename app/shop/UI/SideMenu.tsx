"use client";
import React from "react";

interface SideMenuProps {
  children: React.ReactNode;
}

export default function SideMenu({ children }: SideMenuProps) {
  return (
    <div className="sticky top-4 bg-white rounded-lg shadow-md p-6 border border-gray-100">
      {children}
    </div>
  );
}
