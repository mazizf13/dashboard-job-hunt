import { Metadata } from "next";
import React, { FC } from "react";

interface SignInPageProps {}

export const metadata: Metadata = {
  title: "Sign In",
  description: "JobHun",
};

const SignInPage: FC<SignInPageProps> = ({}) => {
  return <div>SignInPage</div>;
};

export default SignInPage;
