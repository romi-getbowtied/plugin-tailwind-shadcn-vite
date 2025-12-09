# Components Submodule

This folder contains all shared component code that will become a Git submodule. This submodule is a **component provider only** - it does not contain any activation or loading logic.

## Structure

```
components/
├── assets/                      # Built CSS/JS files (output from build)
├── inc/                        # Setup and loader classes
│   ├── class-theme-setup.php
│   └── class-component-loader.php
├── src/
│   ├── components/
│   │   ├── app/
│   │   │   ├── client-side/     # React components (islands)
│   │   │   └── server-side/     # PHP components with enhancement scripts
│   │   └── ui/                  # Reusable UI components
│   ├── lib/                     # Utility libraries
│   ├── hooks/                   # React hooks
│   ├── styles/                  # CSS styles
│   └── components.tsx          # Main entry point for React islands
└── README.md                   # This file
```

## Component Provider Only

**Important**: This submodule is a "dumb" component provider. It:
- ✅ Provides components (PHP files, React components, styles, etc.)
- ✅ Contains component logic and functionality
- ❌ Does NOT activate or load components
- ❌ Does NOT decide which components to use
- ❌ Does NOT contain theme/plugin-specific configuration

## Component Activation

Component activation is handled **exclusively** in the theme or plugin that includes this submodule, **NOT in the components folder**.

**By default, NO components are activated.** You must activate them in your theme/plugin using the filter.

### Where to Activate Components

**In your theme's `functions.php` or plugin's main file:**

```php
// After including components/index.php
add_filter('tw_component_loader_active_components', function($components) {
	// Server-side components (PHP files)
	// These can be activated/deactivated at runtime
	$components['server-side'] = array(
		'hero-parallax-enhanced',        // ✅ Active
		'navigation-menu-enhanced',      // ✅ Active
		'bento-grid-enhanced',           // ✅ Active
		// 'apple-cards-carousel-enhanced', // ❌ Deactivated (commented out)
	);
	
	return $components;
});
```

**Important**: 
- The components folder does NOT activate any components by default. Activation happens in your theme/plugin code.
- **Only server-side components can be activated/deactivated at runtime.**
- **Client-side components are bundled at build time** - they're always available if included in the bundle. To exclude them, remove the imports from `components.tsx` and rebuild.

## Usage in Theme/Plugin

### Single Entry Point

Include the components with just one line:

**In Theme (`functions.php`):**
```php
<?php
if (!defined('ABSPATH')) exit;

// Include components (single entry point - handles all initialization)
include_once( get_template_directory() . '/components/index.php' );
```

**In Plugin (main plugin file):**
```php
<?php
if (!defined('ABSPATH')) exit;

// Include components (single entry point - handles all initialization)
include_once( dirname( __FILE__ ) . '/components/index.php' );
```

That's it! The `components/index.php` file handles:
- Setup class initialization
- Component loader initialization
- Loading active components
- Making paths available globally

### Accessing Setup and Loader

After including `components/index.php`, you can access:

- `$tw_theme_setup` - Setup class instance (global)
- `$tw_component_loader` - Component loader instance (global)
- `$tw_base_paths` - Base paths array (global)
- `$tw_components_paths` - Components paths array (global)

### Server-Side Components

Server-side components are **NOT activated by default**. You must activate them in your theme/plugin using the `tw_component_loader_active_components` filter (see "Component Activation" section above). These can be activated/deactivated at runtime.

### Client-Side Components (React)

Client-side components are **bundled at build time** and are controlled via `client-components.config.tsx` in your theme/plugin root.

**To activate/deactivate client-side components:**

Edit `client-components.config.tsx` in your theme/plugin root:

```tsx
export const clientComponents = {
	"theme-toggle": ThemeToggle,           // ✅ Active
	"dropdown-menu": DropdownMenuIsland,   // ✅ Active
	"sonner-button": SonnerButtonIsland,   // ✅ Active
	"switch": SwitchIsland,                // ✅ Active
	"animated-testimonials": AnimatedTestimonialsDemo, // ✅ Active
	// "floating-dock": FloatingDockDemo,  // ❌ Deactivated (commented out)
	// "three-d-card": ThreeDCardDemo,     // ❌ Deactivated (commented out)
	"toaster": () => <Toaster position="top-center" />, // ✅ Active
} as const;
```

Then rebuild with `npm run build`. Only components listed in this config will be included in the bundle.

**Important**: 
- Components must be imported at the top of the config file
- Components listed in the `clientComponents` object will be bundled
- Commented out or removed components will be excluded from the bundle (tree-shaking)
- After modifying the config, you must rebuild: `npm run build`

## Building

The build process is handled by the parent theme/plugin:

- **Vite config**: Points to `components/src/components.tsx` as entry
- **TypeScript config**: Includes `components/src/**/*`
- **Output**: Built files go to `components/assets/` folder (CSS/JS)

## Adding New Components

1. Add component files to appropriate folder (`client-side/` or `server-side/`)
2. For server-side: Create `index.php` in component folder
3. For client-side: Register in `components.tsx` islands registry
4. Component activation is handled by theme/plugin loader (not here)

## Submodule Setup

When this becomes a Git submodule:

```bash
# In theme/plugin repository
git submodule add <repository-url> components
git submodule update --init --recursive
```

The theme/plugin will always reference a specific commit of this submodule, ensuring version control and stability.

