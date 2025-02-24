"use client";
import React, { useEffect } from "react";
import { useTheme } from "next-themes";

function Dashboard() {
  const { setTheme } = useTheme();

  useTheme(() => {
    setTheme("Light");
  }, []);
  return <div>page</div>;
}

export default Dashboard;
