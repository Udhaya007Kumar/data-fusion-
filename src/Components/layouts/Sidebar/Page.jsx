
import { AppSidebar } from "../../app-sidebar"

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../../ui/sidebar"

export function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
      <SidebarTrigger className="-ml-1 p-5" />
            {/* <Separator orientation="vertical" className="mr-2 h-4" /> */}
      </SidebarInset>
    </SidebarProvider>
  )
}
