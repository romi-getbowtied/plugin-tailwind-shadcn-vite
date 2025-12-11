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

// Server-side component enhancers for admin
import { navigationMenu } from "@/components/app/server-side/navigation-menu/scripts";
import { bentoGrid } from "@/components/app/server-side/bento-grid/scripts";
import { appleCardsCarousel } from "@/components/app/server-side/apple-cards-carousel/scripts";

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
 * <div data-island="toaster"></div>
 */
export const clientComponents = {
	"theme-toggle": ThemeToggle,
	"dropdown-menu": DropdownMenuIsland,
	"sonner-button": SonnerButtonIsland,
	"switch": SwitchIsland,
	"floating-dock": FloatingDockDemo,
	"toaster": () => <Toaster position="top-center" />,
} as const;

/**
 * Server Enhancers - Use in PHP:
 * <?php GBT_Component_Nav_Menu::render('primary'); ?>
 * <?php GBT_Component_Bento_Grid::render(); ?>
 * <?php GBT_Component_Apple_Cards_Carousel::render(); ?>
 */
export const serverComponents = {
	"navigation-menu": navigationMenu,
	"bento-grid": bentoGrid,
	"apple-cards-carousel": appleCardsCarousel,
} as const;

