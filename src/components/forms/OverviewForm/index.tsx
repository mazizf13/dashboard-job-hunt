"use client";

import TitleForm from "@/components/atoms/TitleForm";
import { Separator } from "@/components/ui/separator";
import { overvierFormSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface OverviewFormProps {}

const OverviewForm: FC<OverviewFormProps> = ({}) => {
  const form = useForm<z.infer<typeof overvierFormSchema>>({
    resolver: zodResolver(overvierFormSchema),
  });

  const onSubmit = (val: z.infer<typeof overvierFormSchema>) =>
    console.log(val as Record<string, any>);

  return (
    <div>
      <div className="my-5">
        <TitleForm
          title="Basic Information"
          subtitle="This is company information that you can update anytime"
        />
      </div>

      <Separator className="" />
    </div>
  );
};

export default OverviewForm;
