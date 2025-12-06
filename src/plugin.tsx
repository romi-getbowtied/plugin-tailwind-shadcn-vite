import { createRoot } from "react-dom/client";
import { Button } from "@/components/ui/button";
import "./plugin.css";

function App() {
	return (
		<div className="p-6 space-y-4">
			<h1 className="text-2xl font-bold">Tailwind Scoped Plugin</h1>
			<p className="text-muted-foreground">shadcn/ui is now available!</p>
			<div className="flex gap-2">
				<Button>Default Button</Button>
				<Button variant="secondary">Secondary</Button>
				<Button variant="outline">Outline</Button>
			</div>
		</div>
	);
}

const container = document.getElementById("tw-plugin-app");
if (container) {
	const root = createRoot(container);
	root.render(<App />);
}
