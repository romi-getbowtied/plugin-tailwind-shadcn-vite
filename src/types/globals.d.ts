declare const wp: {
  element: {
    createElement: (type: any, props?: any, ...children: any[]) => any;
    render: (element: any, container: HTMLElement | null) => void;
    Fragment: any;
    Component: any;
  };
};

declare namespace React {
  type ReactNode = any;
  type ReactElement = any;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare const MyPluginData: {
  ajax_url: string;
  nonce: string;
  site_url: string;
  admin_url: string;
};

declare module "react" {
  export = React;
}

