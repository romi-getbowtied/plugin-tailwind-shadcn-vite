/**
 * Client Components Configuration
 * 
 * Activate/deactivate client-side React components by modifying this file.
 * Components listed here will be included in the bundle when you run `npm run build`.
 * 
 * To deactivate a component, comment it out or remove it from the array.
 */

import * as React from "react";
import { ThemeToggle } from "@/components/app/client-side/theme-toggle/component";
import { Toaster } from "@/components/ui/sonner";
import { DropdownMenuIsland } from "@/components/app/client-side/dropdown-menu-island/component";
import { SonnerButtonIsland } from "@/components/app/client-side/sonner-button-island/component";
import { SwitchIsland } from "@/components/app/client-side/switch-island/component";
// import { AnimatedTestimonialsDemo } from "@/components/app/client-side/animated-testimonials-demo/component";
// import { FloatingDockDemo } from "@/components/app/client-side/floating-dock-demo/component";
// import { ThreeDCardDemo } from "@/components/app/client-side/three-d-card-demo/component";

/**
 * Client-side components registry
 * 
 * Add or remove components from this object to control what gets bundled.
 * Only components listed here will be included in the build.
 */
export const clientComponents = {
	"theme-toggle": ThemeToggle,
	"dropdown-menu": DropdownMenuIsland,
	"sonner-button": SonnerButtonIsland,
	"switch": SwitchIsland,
	// "animated-testimonials": AnimatedTestimonialsDemo,
	// "floating-dock": FloatingDockDemo,
	// "three-d-card": ThreeDCardDemo,
	"toaster": () => <Toaster position="top-center" />,
} as const;

/**
 * Type for component slugs
 */
export type ClientComponentSlug = keyof typeof clientComponents;

