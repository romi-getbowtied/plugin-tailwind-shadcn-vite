import { Card } from "../UI/card";

const React = wp.element;

export default function SettingsPanel() {
  return (
    <Card>
      <h2 className="text-xl font-semibold mb-2">Settings Panel</h2>
      <p>Site URL: {MyPluginData?.site_url || "Loading..."}</p>
    </Card>
  );
}
