import React from "react";
import { SignIn as ClerkSignIn } from "@clerk/nextjs";

const SignIn = () => {
  return (
    <div className="flex items-center justify-center h-[94vh] w-full">
      <ClerkSignIn />
    </div>
  );
};

export default SignIn;
