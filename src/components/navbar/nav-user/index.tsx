"use client";
import User from "@/components/global/user";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import React from "react";

const NavUser = () => {
  const { user } = useUser();
  const { theme } = useTheme();

  return (
    <Button
      variant={theme === "dark" ? "secondary" : "outline"}
      className={cn(
        "w-fit !rounded-full",
        user ? "!px-1 !py-4 sm:!px-2.5 sm:!py-6" : "sm:!px-2 sm:!py-6 !px-0 !py-0"
      )}
    >
      <User />
    </Button>
  );
};

export default NavUser;
