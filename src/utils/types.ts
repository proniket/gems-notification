export type Deployments = {
  [contractName: string]: {
    address: string;
    abi: any[];
  };
};

export type ConfigurationType = {
  chainId: number;
  networkName: string;
  deployments: Deployments;
};

export type ClientConfigType = {
  [client: string]: ClientType;
};

export type ClientType = {
  brandName: string;
  description: string;
  headerNavItems: LinkType[];
  footerNavItems: FooterNavItemsType[];
};

export type LinkType = {
  text: string;
  link: string;
};

export type FooterNavItemsType = {
  text: string;
  links: LinkType[];
};
