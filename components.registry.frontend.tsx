// ============================================================================
// FRONTEND (PUBLIC) COMPONENT REGISTRY
// ============================================================================
// Components loaded only on public-facing WordPress pages

// Client-side components for frontend
import { ThemeToggle } from "@/components/app/client-side/theme-toggle/component";
import { Toaster } from "@/components/ui/sonner";
import { ThreeDCardDemo } from "@/components/app/client-side/three-d-card-demo/component";

// Server-side component enhancers for frontend
import { heroParallax } from "@/components/app/server-side/hero-parallax/scripts";
import { appleCardsCarousel } from "@/components/app/server-side/apple-cards-carousel/scripts";

// ============================================================================
// EXPORTS
// ============================================================================

/**
 * Frontend client-side components (React Islands)
 * Use these island names in theme PHP templates:
 *
 * <div data-island="theme-toggle"></div>
 * <div data-island="three-d-card"></div>
 * <div data-island="toaster"></div>
 */
export const clientComponents = {
	"theme-toggle": ThemeToggle,
	"three-d-card": ThreeDCardDemo,
	"toaster": () => <Toaster position="top-center" />,
} as const;

/**
 * Frontend server-side component enhancers
 * These enhance PHP-rendered components with JS functionality
 */
export const serverComponents = {
	"hero-parallax": heroParallax,
	"apple-cards-carousel": appleCardsCarousel,
} as const;

