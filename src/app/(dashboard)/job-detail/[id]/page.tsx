import React, { FC } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Applicants from "@/components/organisms/Applicants";
import JobDetail from "@/components/organisms/JobDetail";
import prisma from "../../../../../lib/prisma";

type paramsType = {
  id: string;
};
interface JobDetailPageProps {
  params: paramsType;
}

async function getDetailJob(id: string) {
  const job = await prisma.job.findFirst({
    where: {
      id: id,
    },
    include: {
      applicant: {
        include: {
          user: true,
        },
      },
      CategoryJob: true,
    },
  });

  return job;
}

const JobDetailPage: FC<JobDetailPageProps> = async ({ params }) => {
  const job = await getDetailJob(params.id);

  return (
    <div>
      <div className="inline-flex items-center gap-5 mb-5">
        <div>
          <Link href="/job-listings">
            <ArrowLeft className="h-9 w-9" />
          </Link>
        </div>
        <div>
          <div className="text-2xl font-semibold mb-1">{job?.roles}</div>
          <div className="">
            {job?.CategoryJob?.name} | {job?.jobType} | {job?.applicants}/
            {job?.needs} Hired
          </div>
        </div>
      </div>
      <Tabs defaultValue="applicants">
        <TabsList className="mb-4">
          <TabsTrigger value="applicants">Applicants</TabsTrigger>
          <TabsTrigger value="jobDetails">Job Details</TabsTrigger>
        </TabsList>
        <TabsContent value="applicants">
          <Applicants applicants={job?.applicant} />
        </TabsContent>
        <TabsContent value="jobDetails">
          <JobDetail detail={job} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default JobDetailPage;
