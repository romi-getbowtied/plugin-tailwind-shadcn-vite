import * as React from "react";
import { createRoot } from "react-dom/client";
import "@/lib/portal-patch"; // Apply global portal patch
import { Button } from "@repo/shadcn-ui/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from "@repo/shadcn-ui/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { Toaster } from "@repo/shadcn-ui/components/ui/sonner";
import { toast } from "sonner";
import { Switch } from "@repo/shadcn-ui/components/ui/switch";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@repo/shadcn-ui/components/ui/navigation-menu";
import { Circle, CircleCheck, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import "./plugin.css";

// --- Components for Islands ---

function DropdownMenuIsland() {
	return (
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
	);
}

function SonnerButtonIsland() {
	return (
		<div className="flex gap-2">
			<Button
				onClick={() => toast.success("Success!", { description: "Your action was completed successfully." })}
			>
				Success Toast
			</Button>
			<Button
				variant="destructive"
				onClick={() => toast.error("Error!", { description: "Something went wrong." })}
			>
				Error Toast
			</Button>
			<Button
				variant="outline"
				onClick={() => toast.info("Info", { description: "Here's some information." })}
			>
				Info Toast
			</Button>
		</div>
	);
}

function SwitchIsland() {
	const [enabled, setEnabled] = React.useState(false);
	
	return (
		<div className="flex items-center gap-4">
			<label htmlFor="switch-demo" className="text-sm font-medium">
				Enable notifications
			</label>
			<Switch
				id="switch-demo"
				checked={enabled}
				onCheckedChange={(checked) => {
					setEnabled(checked);
					toast.success(checked ? "Notifications enabled" : "Notifications disabled");
				}}
			/>
		</div>
	);
}

const components: { title: string; href: string; description: string }[] = [
	{
		title: "Alert Dialog",
		href: "/docs/primitives/alert-dialog",
		description:
			"A modal dialog that interrupts the user with important content and expects a response.",
	},
	{
		title: "Hover Card",
		href: "/docs/primitives/hover-card",
		description:
			"For sighted users to preview content available behind a link.",
	},
	{
		title: "Progress",
		href: "/docs/primitives/progress",
		description:
			"Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
	},
	{
		title: "Scroll-area",
		href: "/docs/primitives/scroll-area",
		description: "Visually or semantically separates content.",
	},
	{
		title: "Tabs",
		href: "/docs/primitives/tabs",
		description:
			"A set of layered sections of content—known as tab panels—that are displayed one at a time.",
	},
	{
		title: "Tooltip",
		href: "/docs/primitives/tooltip",
		description:
			"A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
	},
];

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a"> & { title: string; children?: React.ReactNode }
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					{children && (
						<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
							{children}
						</p>
					)}
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";

function NavigationMenuIsland() {
	return (
		<NavigationMenu>
			<NavigationMenuList className="flex-wrap">
				<NavigationMenuItem>
					<NavigationMenuTrigger>Home</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							<li className="row-span-3">
								<NavigationMenuLink asChild>
									<a
										className="flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-4 no-underline outline-none focus:shadow-md md:p-6"
										href="/"
									>
										<div className="mb-2 mt-4 text-lg font-medium sm:mt-0">
											shadcn/ui
										</div>
										<p className="text-sm leading-tight text-muted-foreground">
											Beautifully designed components built with Tailwind CSS.
										</p>
									</a>
								</NavigationMenuLink>
							</li>
							<ListItem href="/docs" title="Introduction">
								Re-usable components built using Radix UI and Tailwind CSS.
							</ListItem>
							<ListItem href="/docs/installation" title="Installation">
								How to install dependencies and structure your app.
							</ListItem>
							<ListItem href="/docs/primitives/typography" title="Typography">
								Styles for headings, paragraphs, lists...etc
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Components</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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
						<a href="/docs">Docs</a>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem className="hidden md:block">
					<NavigationMenuTrigger>List</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[300px] gap-4">
							<li>
								<NavigationMenuLink asChild>
									<a href="#">
										<div className="font-medium">Components</div>
										<div className="text-muted-foreground">
											Browse all components in the library.
										</div>
									</a>
								</NavigationMenuLink>
								<NavigationMenuLink asChild>
									<a href="#">
										<div className="font-medium">Documentation</div>
										<div className="text-muted-foreground">
											Learn how to use the library.
										</div>
									</a>
								</NavigationMenuLink>
								<NavigationMenuLink asChild>
									<a href="#">
										<div className="font-medium">Blog</div>
										<div className="text-muted-foreground">
											Read our latest blog posts.
										</div>
									</a>
								</NavigationMenuLink>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem className="hidden md:block">
					<NavigationMenuTrigger>Simple</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[200px] gap-4">
							<li>
								<NavigationMenuLink asChild>
									<a href="#">Components</a>
								</NavigationMenuLink>
								<NavigationMenuLink asChild>
									<a href="#">Documentation</a>
								</NavigationMenuLink>
								<NavigationMenuLink asChild>
									<a href="#">Blocks</a>
								</NavigationMenuLink>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem className="hidden md:block">
					<NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[200px] gap-4">
							<li>
								<NavigationMenuLink asChild>
									<a href="#" className="flex items-center gap-2">
										<HelpCircle className="h-4 w-4" />
										Backlog
									</a>
								</NavigationMenuLink>
								<NavigationMenuLink asChild>
									<a href="#" className="flex items-center gap-2">
										<Circle className="h-4 w-4" />
										To Do
									</a>
								</NavigationMenuLink>
								<NavigationMenuLink asChild>
									<a href="#" className="flex items-center gap-2">
										<CircleCheck className="h-4 w-4" />
										Done
									</a>
								</NavigationMenuLink>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

// --- Island Mounting Logic ---

const islands = {
	"theme-toggle": ThemeToggle,
	"dropdown-menu": DropdownMenuIsland,
	"sonner-button": SonnerButtonIsland,
	"switch": SwitchIsland,
	"navigation-menu": NavigationMenuIsland,
};

// Mount each island independently
Object.entries(islands).forEach(([key, Component]) => {
	const elements = document.querySelectorAll(`[data-island="${key}"]`);
	elements.forEach((el) => {
		createRoot(el).render(<Component />);
	});
});

// Mount Toaster globally (only once)
const appContainer = document.getElementById("tw-plugin-app");
if (appContainer && !appContainer.querySelector("[data-sonner-toaster]")) {
	const toasterContainer = document.createElement("div");
	toasterContainer.id = "sonner-toaster";
	appContainer.appendChild(toasterContainer);
	createRoot(toasterContainer).render(<Toaster position="top-center" />);
}
