import ReactDOM from "react-dom";
import { ReactNode } from "react";

const originalCreatePortal = ReactDOM.createPortal;

// Redirect portals targeting document.body to our scoped container
ReactDOM.createPortal = (
  children: ReactNode,
  container: Element | DocumentFragment,
  key?: string | null
) => {
  const pluginRoot = document.getElementById("tw-plugin-app");
  
  if (container === document.body && pluginRoot) {
    return originalCreatePortal(children, pluginRoot, key);
  }
  
  return originalCreatePortal(children, container, key);
};
