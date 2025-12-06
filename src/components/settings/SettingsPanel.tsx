import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
