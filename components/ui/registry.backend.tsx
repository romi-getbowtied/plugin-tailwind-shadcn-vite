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
import { StackDemo } from "@/components/app/client-side/stack-demo/component";

// Server-side component enhancers for admin
import { navigationMenu } from "@/components/app/server-side/navigation-menu/scripts";
import { expandableCardDemo } from "@/components/app/server-side/expandable-card-demo/scripts";

// ============================================================================
// EXPORTS
// ============================================================================

/**
 * React Islands - Use in PHP:
 * <?php UI_Tools::render_island('theme-toggle'); ?>
 * <?php UI_Tools::render_island('dropdown-menu'); ?>
 * <?php UI_Tools::render_island('sonner-button'); ?>
 * <?php UI_Tools::render_island('switch'); ?>
 * <?php UI_Tools::render_island('floating-dock', ['items' => $dock_items]); ?>
 * <?php UI_Tools::render_island('radial-menu-demo', ['menuItems' => $menu_items]); ?>
 * <?php UI_Tools::render_island('stack-demo', ['images' => $images, 'width' => 250]); ?>
 * <div data-island="toaster"></div>
 */
export const clientComponents = {
	"theme-toggle": ThemeToggle,
	"dropdown-menu": DropdownMenuIsland,
	"sonner-button": SonnerButtonIsland,
	"switch": SwitchIsland,
	"floating-dock": FloatingDockDemo,
	"radial-menu-demo": RadialMenuDemo,
	"stack-demo": StackDemo,
	"toaster": () => <Toaster position="top-center" />,
} as const;

/**
 * Server Enhancers - Use in PHP:
 * <?php GBT_Component_Nav_Menu::render('primary'); ?>
 * <?php GBT_Component_Expandable_Card_Demo::render($cards); ?>
 */
export const serverComponents = {
	"navigation-menu": navigationMenu,
	"expandable-card-demo": expandableCardDemo,
} as const;
