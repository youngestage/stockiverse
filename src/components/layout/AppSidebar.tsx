import {
  BarChart3,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const menuItems = [
  {
    title: "Dashboard",
    icon: BarChart3,
    path: "/",
  },
  {
    title: "Inventory",
    icon: Package,
    path: "/inventory",
  },
  {
    title: "Sales",
    icon: ShoppingCart,
    path: "/sales",
  },
  {
    title: "Users",
    icon: Users,
    path: "/users",
  },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar className="hidden md:block">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Store Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    isActive={location.pathname === item.path}
                  >
                    <Link to={item.path} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}