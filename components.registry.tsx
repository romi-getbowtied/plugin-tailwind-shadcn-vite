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
import { enhanceNavigationMenu } from "@/components/app/server-side/navigation-menu-enhanced/scripts";
import { enhanceHeroParallax } from "@/components/app/server-side/hero-parallax-enhanced/scripts";
import { enhanceBentoGrid } from "@/components/app/server-side/bento-grid-enhanced/scripts";
import { enhanceAppleCardsCarousel } from "@/components/app/server-side/apple-cards-carousel-enhanced/scripts";

// ============================================================================
// EXPORTS
// ============================================================================

// Client-side components
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

// Server-side components
export const serverComponents = {
	"navigation-menu-enhanced": enhanceNavigationMenu,
	"hero-parallax-enhanced": enhanceHeroParallax,
	"bento-grid-enhanced": enhanceBentoGrid,
	"apple-cards-carousel-enhanced": enhanceAppleCardsCarousel,
} as const;

