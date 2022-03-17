import { ConfigurationType, ClientConfigType } from "./types";

export const configurations: { [env: string]: ConfigurationType } = {
  development: {
    chainId: 42,
    networkName: "Kovan",
    deployments: require("../abis/kovan.abis.json"),
  },
  test: {
    chainId: 42,
    networkName: "Kovan",
    deployments: require("../abis/kovan.abis.json"),
  },
  production: {
    chainId: 42,
    networkName: "Kovan",
    deployments: require("../abis/kovan.abis.json"),
  },
};

export const clientConfig: ClientConfigType = {
  NextGem: {
    brandName: "NextGem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ligula risus sed lacus nec, pellentesque at maecenas. Nisi, odio risus nunc cras. Sollicitudin nulla orci vitae ut turpis vitae neque.",
    headerNavItems: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Marketplace",
        link: "/marketplace",
      },
      {
        text: "FAQ",
        link: "/faq",
      },
    ],
    footerNavItems: [
      {
        text: "Create",
        links: [
          {
            text: "NFT Staking Pools",
            link: "/create/attributedNft",
          },
          {
            text: "NFT Lootboxes",
            link: "/",
          },
          {
            text: "NFT Raffles",
            link: "/",
          },
        ],
      },
      {
        text: "My account",
        links: [
          {
            text: "My Profile",
            link: "/create/cardpack",
          },
          {
            text: "My Gem Pools",
            link: "/create/gempool",
          },
          {
            text: "My Lootboxes",
            link: "/create/lootbox",
          },
          {
            text: "My Raffles",
            link: "/create/raffle",
          },
        ],
      },
      {
        text: "Company",
        links: [
          {
            text: "About",
            link: "/about",
          },
        ],
      },
    ],
  },
};
