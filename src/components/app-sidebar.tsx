"use client";

import * as React from "react";

import { NavDocuments } from "@/components/nav-documents";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  RiDashboardLine,
  RiListUnordered,
  RiBarChartLine,
  RiFolderLine,
  RiGroupLine,
  RiCameraLine,
  RiFileTextLine,
  RiSettingsLine,
  RiQuestionLine,
  RiSearchLine,
  RiDatabase2Line,
  RiFileChartLine,
  RiFileLine,
  RiCommandLine,
} from "@remixicon/react";
import Link from "next/link";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: <RiDashboardLine />,
    },
    {
      title: "My Courses",
      url: "/dashboard/my-courses",
      icon: <RiListUnordered />,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: <RiCameraLine />,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: <RiFileTextLine />,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: <RiFileTextLine />,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: <RiSettingsLine />,
    },
    {
      title: "Get Help",
      url: "#",
      icon: <RiQuestionLine />,
    },
    {
      title: "Search",
      url: "#",
      icon: <RiSearchLine />,
    },
  ],
  documents: [
    {
      name: "Data Library",
      url: "#",
      icon: <RiDatabase2Line />,
    },
    {
      name: "Reports",
      url: "#",
      icon: <RiFileChartLine />,
    },
    {
      name: "Word Assistant",
      url: "#",
      icon: <RiFileLine />,
    },
  ],
};
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="data-[slot=sidebar-menu-button]:p-1.5!"
              render={<Link href="/" />}
            >
              {/* <RiCommandLine className="size-5!" /> */}
              <span className="font-inter text-base font-semibold">
                Velocity Tech Academy
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
