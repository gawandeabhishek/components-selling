import React from "react";
import { SignUp as ClerkSignUp } from "@clerk/nextjs";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center h-[94vh] w-full">
      <ClerkSignUp />
    </div>
  );
};

export default SignUp;
