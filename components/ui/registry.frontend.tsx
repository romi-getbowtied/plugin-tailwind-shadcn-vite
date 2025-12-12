// ============================================================================
// FRONTEND (PUBLIC) COMPONENT REGISTRY
// ============================================================================
// Components loaded only on public-facing WordPress pages

// Client-side components for frontend
import { ThemeToggle } from "@/components/app/client-side/theme-toggle/component";
import { Toaster } from "@/components/ui/sonner";
import { StackDemo } from "@/components/app/client-side/stack-demo/component";

// Server-side component enhancers for frontend

// ============================================================================
// EXPORTS
// ============================================================================

/**
 * React Islands - Use in PHP:
 * <?php UI_Tools::render_island('theme-toggle'); ?>
 * <?php UI_Tools::render_island('stack-demo', ['images' => $images, 'width' => 250]); ?>
 * <div data-island="toaster"></div>
 */
export const clientComponents = {
	"theme-toggle": ThemeToggle,
	"stack-demo": StackDemo,
	"toaster": () => <Toaster position="top-center" />,
} as const;

/**
 * Server Enhancers - Use in PHP:
 */
export const serverComponents = {
} as const;
