'use client';

import { Play } from 'lucide-react';
import Link from 'next/link';
import { items } from '../data/sidebar';
import { NavMain } from './nav-main';
import {
  Sidebar,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from './ui/sidebar';

export const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="bg-gradient-brand text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-md">
                  <Play className="size-4" />
                </div>
                <div>
                  <span className="font-bold text-xl font-poppins">
                    Dashboard
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarGroup>
        <NavMain items={items} />
      </SidebarGroup>
    </Sidebar>
  );
};
