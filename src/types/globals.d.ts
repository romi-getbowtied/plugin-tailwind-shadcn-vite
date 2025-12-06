declare const MyPluginData: {
  ajax_url: string;
  nonce: string;
  site_url: string;
  admin_url: string;
};

declare const wp: {
  element: {
    createElement: any;
    render: (element: any, container: HTMLElement) => void;
  };
};

