// ============================================================================
// FRONTEND (PUBLIC) COMPONENT REGISTRY
// ============================================================================
// Components loaded only on public-facing WordPress pages

// Client-side components for frontend
import { ThemeToggle } from "@/components/app/client-side/theme-toggle/component";
import { Toaster } from "@/components/ui/sonner";

// Server-side component enhancers for frontend

// ============================================================================
// EXPORTS
// ============================================================================

/**
 * React Islands - Use in PHP:
 * <div data-island="theme-toggle"></div>
 * <div data-island="toaster"></div>
 */
export const clientComponents = {
	"theme-toggle": ThemeToggle,
	"toaster": () => <Toaster position="top-center" />,
} as const;

/**
 * Server Enhancers - Use in PHP:
 */
export const serverComponents = {
} as const;
