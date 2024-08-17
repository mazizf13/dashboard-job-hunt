import { Button } from "@/components/ui/button";
import {
  Building,
  Calendar,
  ClipboardPlus,
  House,
  LogOut,
  Mail,
  Settings,
  Users,
} from "lucide-react";
import React, { FC } from "react";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <div className="vb-12 min-h-screen">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-bold">Dashboard</h2>
          <div className="space-y-3">
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <House className="mr-2 text-lg" />
              Home
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <Mail className="mr-2 text-lg" />
              Messages
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <Building className="mr-2 text-lg" />
              Company Profile
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <Users className="mr-2 text-lg" />
              All Applicants
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <ClipboardPlus className="mr-2 text-lg" />
              Job Listing
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <Calendar className="mr-2 text-lg" />
              My Schedule
            </Button>
          </div>
        </div>
      </div>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-bold">Settings</h2>
          <div className="space-y-3">
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <Settings className="mr-2 text-lg" />
              Settings
            </Button>
            <Button
              variant={"ghost"}
              className="w-full text-red-500 hover:bg-red-200 hover:text-red-500 justify-start rounded-none"
            >
              <LogOut className="mr-2 text-lg" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
