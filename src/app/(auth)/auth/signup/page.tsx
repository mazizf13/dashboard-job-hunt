import { Metadata } from "next";
import React, { FC } from "react";

interface SignUpPageProps {}

export const metadata: Metadata = {
  title: "Sign Up",
  description: "JobHun",
};

const SignUpPage: FC<SignUpPageProps> = ({}) => {
  return <div>SignUpPage</div>;
};

export default SignUpPage;
