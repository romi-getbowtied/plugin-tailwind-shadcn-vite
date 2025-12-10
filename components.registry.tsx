// ============================================================================
// IMPORTS
// ============================================================================

// Client-side components
import { ThemeToggle } from "@/components/app/client-side/theme-toggle/component";
import { Toaster } from "@/components/ui/sonner";
import { DropdownMenuIsland } from "@/components/app/client-side/dropdown-menu-island/component";
import { SonnerButtonIsland } from "@/components/app/client-side/sonner-button-island/component";
import { SwitchIsland } from "@/components/app/client-side/switch-island/component";
import { AnimatedTestimonialsDemo } from "@/components/app/client-side/animated-testimonials-demo/component";
import { FloatingDockDemo } from "@/components/app/client-side/floating-dock-demo/component";
import { ThreeDCardDemo } from "@/components/app/client-side/three-d-card-demo/component";

// Server-side components
import { navigationMenu } from "@/components/app/server-side/navigation-menu/scripts";
import { heroParallax } from "@/components/app/server-side/hero-parallax/scripts";
import { bentoGrid } from "@/components/app/server-side/bento-grid/scripts";
import { appleCardsCarousel } from "@/components/app/server-side/apple-cards-carousel/scripts";

// ============================================================================
// EXPORTS
// ============================================================================

// Client-side components (React Islands)
// Use these island names in your HTML: <div data-island="island-name"></div>
export const clientComponents = {
	"theme-toggle": ThemeToggle,
	"dropdown-menu": DropdownMenuIsland,
	"sonner-button": SonnerButtonIsland,
	"switch": SwitchIsland,
	"animated-testimonials": AnimatedTestimonialsDemo,
	"floating-dock": FloatingDockDemo,
	"three-d-card": ThreeDCardDemo,
	"toaster": () => <Toaster position="top-center" />,
} as const;

// Server-side components (Enhancement Functions)
// Example usage in PHP templates:
//   <?php TW_Hero_Parallax::render(); ?>
//   <?php TW_Nav_Menu::render('primary'); ?>
//   <?php TW_Bento_Grid::render(); ?>
//   <?php TW_Apple_Cards_Carousel::render(); ?>
export const serverComponents = {
	"navigation-menu": navigationMenu,
	"hero-parallax": heroParallax,
	"bento-grid": bentoGrid,
	"apple-cards-carousel": appleCardsCarousel,
} as const;

