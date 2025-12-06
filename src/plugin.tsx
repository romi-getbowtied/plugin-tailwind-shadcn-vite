import { createRoot } from "react-dom/client";
import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import "./plugin.css";

const components: { title: string; href: string; description: string }[] = [
	{
		title: "Settings",
		href: "#settings",
		description: "Configure plugin settings and preferences.",
	},
	{
		title: "Components",
		href: "#components",
		description: "Browse available UI components and examples.",
	},
	{
		title: "Documentation",
		href: "#docs",
		description: "Learn how to use and customize the plugin.",
	},
];

function ListItem({ title, children, href, ...props }: React.ComponentPropsWithoutRef<"li"> & { title: string; href: string }) {
	return (
		<li {...props}>
			<NavigationMenuLink asChild>
				<a
					href={href}
					className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
}

function App() {
	return (
		<div className="p-6 space-y-6">
			<div className="flex items-center justify-between">
				<div className="space-y-2">
					<h1 className="text-3xl font-bold text-foreground">Tailwind Scoped Plugin</h1>
					<p className="text-muted-foreground">shadcn/ui navigation menu example</p>
				</div>
				<ThemeToggle />
			</div>

			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid gap-2 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
								<li className="row-span-3">
									<NavigationMenuLink asChild>
										<a
											className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 no-underline outline-none transition-all duration-200 focus:shadow-md md:p-6"
											href="/"
										>
											<div className="mb-2 text-lg font-medium sm:mt-4">
												Plugin
											</div>
											<p className="text-sm leading-tight text-muted-foreground">
												Beautifully designed components built with Tailwind CSS and shadcn/ui.
											</p>
										</a>
									</NavigationMenuLink>
								</li>
								<ListItem href="#introduction" title="Introduction">
									Re-usable components built using Radix UI and Tailwind CSS.
								</ListItem>
								<ListItem href="#installation" title="Installation">
									How to install dependencies and structure your app.
								</ListItem>
								<ListItem href="#configuration" title="Configuration">
									Configure Tailwind CSS and component settings.
								</ListItem>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Components</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid gap-2 p-4 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
								{components.map((component) => (
									<ListItem
										key={component.title}
										title={component.title}
										href={component.href}
									>
										{component.description}
									</ListItem>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
							<a href="#docs">Documentation</a>
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>

			<div className="flex flex-wrap gap-4 pt-4">
				<div className="flex gap-2">
					<Button>Default Button</Button>
					<Button variant="secondary">Secondary</Button>
					<Button variant="outline">Outline</Button>
				</div>

				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="outline">Dropdown Menu</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-56" align="start">
						<DropdownMenuLabel>My Account</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem>
								Profile
								<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
							</DropdownMenuItem>
							<DropdownMenuItem>
								Billing
								<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
							</DropdownMenuItem>
							<DropdownMenuItem>
								Settings
								<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
							</DropdownMenuItem>
							<DropdownMenuItem>
								Keyboard shortcuts
								<DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Team</DropdownMenuItem>
						<DropdownMenuItem>GitHub</DropdownMenuItem>
						<DropdownMenuItem>Support</DropdownMenuItem>
						<DropdownMenuItem disabled>API</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							Log out
							<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
}

const container = document.getElementById("tw-plugin-app");
if (container) {
	const root = createRoot(container);
	root.render(<App />);
}
