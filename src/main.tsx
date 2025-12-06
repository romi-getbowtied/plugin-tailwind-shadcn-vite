import React from "react";
import SettingsPanel from "./components/settings/SettingsPanel";
import "./index.css";

function App() {
  return (
    <div className='p-6 space-y-4'>
      <h1 className='text-2xl font-bold'>My Modern Plugin</h1>
      <SettingsPanel />
    </div>
  );
}

wp.element.render(React.createElement(App), document.getElementById("my-plugin-app")!);
