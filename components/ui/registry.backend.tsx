// ============================================================================
// BACKEND (ADMIN) COMPONENT REGISTRY
// ============================================================================
// Components loaded only in WordPress admin area

// Client-side components for admin
import { ThemeToggle } from "@/components/app/client-side/theme-toggle/component";
import { Toaster } from "@/components/ui/sonner";
import { DropdownMenuIsland } from "@/components/app/client-side/dropdown-menu-island/component";
import { SonnerButtonIsland } from "@/components/app/client-side/sonner-button-island/component";
import { SwitchIsland } from "@/components/app/client-side/switch-island/component";
import { FloatingDockDemo } from "@/components/app/client-side/floating-dock-demo/component";
import { RadialMenuDemo } from "@/components/app/client-side/radial-menu-demo/component";

// Server-side component enhancers for admin
import { navigationMenu } from "@/components/app/server-side/navigation-menu/scripts";

// ============================================================================
// EXPORTS
// ============================================================================

/**
 * React Islands - Use in PHP:
 * <div data-island="theme-toggle"></div>
 * <div data-island="dropdown-menu"></div>
 * <div data-island="sonner-button"></div>
 * <div data-island="switch"></div>
 * <div data-island="floating-dock"></div>
 * <div data-island="radial-menu-demo"></div>
 * <div data-island="toaster"></div>
 */
export const clientComponents = {
	"theme-toggle": ThemeToggle,
	"dropdown-menu": DropdownMenuIsland,
	"sonner-button": SonnerButtonIsland,
	"switch": SwitchIsland,
	"floating-dock": FloatingDockDemo,
	"radial-menu-demo": RadialMenuDemo,
	"toaster": () => <Toaster position="top-center" />,
} as const;

/**
 * Server Enhancers - Use in PHP:
 * <?php GBT_Component_Nav_Menu::render('primary'); ?>
 */
export const serverComponents = {
	"navigation-menu": navigationMenu,
} as const;
