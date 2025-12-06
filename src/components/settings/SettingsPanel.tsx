import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { React } from "../../lib/react";

export default function SettingsPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Settings Panel</CardTitle>
        <CardDescription>Manage your plugin settings</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Site URL: {MyPluginData?.site_url || "Loading..."}</p>
      </CardContent>
    </Card>
  );
}
