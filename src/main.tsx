import SettingsPanel from "./components/settings/SettingsPanel";
import { React } from "./lib/react";
import "./index.css";

function App() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">My Modern Plugin</h1>
      <SettingsPanel />
    </div>
  );
}

const container = document.getElementById("my-plugin-app");
if (container) {
  wp.element.render(<App />, container);
}
