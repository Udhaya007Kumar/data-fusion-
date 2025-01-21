import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/Components/nav-main"
import { NavProjects } from "@/Components/nav-projects"
import { NavUser } from "@/Components/nav-user"
import { TeamSwitcher } from "@/Components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "../Components/ui/sidebar"
import { Link } from "react-router"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Quantum",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Worksspace",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title:"General",
          url: "/connectionmang",
        },
        {
          title: "Permissions",
          url: "/",
        },
        {
          title: "Storage",
          url: "/",
        },
        {
          title: "Data Sources",
          url: "/DataSourcemagement",
        },
        {
          title: "Integrations",
          url: "/DataSourcemagement",
        },
        {
          title: "Datasets",
          url: "/dataset",
        },
        {
          title: "Permission Groups",
          url: "/DataSourcemagement",
        },
        {
          title: "API Keys",
          url: "/DataSourcemagement",
        },
        {
          title: "Embedded Analytics",
          url: "/DataSourcemagement",
        },
        {
          title: "Billing",
          url: "/DataSourcemagement",
        },
        
      ],
    }   
  ],
  projects: [
    {
      name: "Profile",
      url: "#",
      icon: Frame,
    },
    {
      name: "Preferences",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Notification",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
         <NavProjects projects={data.projects} /> 
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
