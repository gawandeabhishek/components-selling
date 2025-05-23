"use client"

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

type Props = {
  login?: boolean;
};

const User = ({ login = true }: Props) => {

  const { user } = useUser();
  return (
    <>
      {user ? (
        <UserButton />
      ) : (
        <Link
          href={`/auth/${login ? "sign-in" : "sign-up"}`}
          className={cn(buttonVariants({ variant: "default" }))}
        >
          {login ? "sign in" : "sign up"}
        </Link>
      )}
    </>
  );
};

export default User;
