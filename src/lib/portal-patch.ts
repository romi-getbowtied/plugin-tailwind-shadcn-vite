import ReactDOM from "react-dom";

// Store original createPortal
const originalCreatePortal = ReactDOM.createPortal;

// Monkey patch createPortal to redirect portals to our container
// if the target is document.body
// @ts-ignore
ReactDOM.createPortal = (child: React.ReactNode, container: Element | DocumentFragment, key?: string) => {
  const pluginContainer = document.getElementById("tw-plugin-app");
  
  // Only redirect if targeting body and our container exists
  if (container === document.body && pluginContainer) {
    return originalCreatePortal(child, pluginContainer, key);
  }
  
  return originalCreatePortal(child, container, key);
};

