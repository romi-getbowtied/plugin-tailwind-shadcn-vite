import React from "react";
import { createRoot } from "react-dom/client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import SettingsPanel from "@/components/settings/SettingsPanel";
import "@/index.css";

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { title: string; children: React.ReactNode; href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}

function App() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-4">My Modern Plugin</h1>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Settings</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 no-underline outline-none transition-all duration-200 focus:shadow-md md:p-6"
                      href="#"
                    >
                      <div className="mb-2 text-lg font-medium sm:mt-4">
                        Plugin Settings
                      </div>
                      <p className="text-muted-foreground text-sm leading-tight">
                        Manage your plugin configuration and preferences
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="#" title="General">
                  General plugin settings
                </ListItem>
                <ListItem href="#" title="Advanced">
                  Advanced configuration options
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <ListItem href="#" title="Plugin Tools">
                  Access plugin utilities and tools
                </ListItem>
                <ListItem href="#" title="Utilities">
                  Helper functions and utilities
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <SettingsPanel />
    </div>
  );
}

const container = document.getElementById("my-plugin-app");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
