import { uuidv4 } from "./utils";

export const SITE_NAME = "The Brand";
export const SITE_LOGO = "peace";

export const NAV_MENU_ITEMS = [
  {
    key: uuidv4(),
    link: "home",
    label: "Home",
    subItems: [],
  },
  {
    key: uuidv4(),
    link: "categories",
    label: "Categories",
    subItems: [
      {
        key: uuidv4(),
        link: "categories/men",
        label: "Men",
        subItems: [],
      },
      {
        key: uuidv4(),
        link: "categories/women",
        label: "women",
        subItems: [],
      },
      {
        key: uuidv4(),
        link: "categories/kids",
        label: "Kids",
        subItems: [],
      },
    ],
  },
  {
    key: uuidv4(),
    link: "onSale",
    label: "On Sale",

    icon: "fire",
    iconColor: "red",

    subItems: [],
  },
  {
    key: uuidv4(),
    link: "myAccount",
    label: "My Account",

    icon: "user-circle",
    iconColor: "grey",

    subItems: [],
  },
  {
    key: uuidv4(),
    link: "cart",
    label: "Cart",

    icon: "shopping-cart",
    iconColor: "green",

    subItems: [],
  },
];

export const SOCIAL_MEDIA_PROFILES = {
  facebook: "https://www.facebook.com",
  twitter: "https://twitter.com",
  instagram: "https://www.instagram.com",
  pinterest: "https://www.pinterest.com",
};

export const PARTNERS = [
  {
    key: uuidv4(),
    icon: "adobe",
  },
  {
    key: uuidv4(),
    icon: "airbnb",
  },
  {
    key: uuidv4(),
    icon: "angular",
  },
  {
    key: uuidv4(),
    icon: "angrycreative",
  },
  {
    key: uuidv4(),
    icon: "aviato",
  },
  {
    key: uuidv4(),
    icon: "autoprefixer",
  },
  {
    key: uuidv4(),
    icon: "dhl",
  },
  {
    key: uuidv4(),
    icon: "ember",
  },
  {
    key: uuidv4(),
    icon: "fedex",
  },
  {
    key: uuidv4(),
    icon: "git",
  },
  {
    key: uuidv4(),
    icon: "html5",
  },
  {
    key: uuidv4(),
    icon: "js-square",
  },
];

export const FOOTER = {
  ADDRESS: {
    address: ["12, 34, XYZ"],
    phone: "+91 9123456789",
    email: "support@thebrand.com",
  },
  INFORMATION: [
    {
      key: uuidv4(),
      label: "About Us",
      link: "#",
    },
    {
      key: uuidv4(),
      label: "Contact Us",
      link: "#",
    },
    {
      key: uuidv4(),
      label: "Service Policy",
      link: "#",
    },
  ],
  MY_ACCOUNT: [
    {
      key: uuidv4(),
      label: "My Account",
      link: "#",
    },
    {
      key: uuidv4(),
      label: "Shopping Cart",
      link: "#",
    },
    {
      key: uuidv4(),
      label: "My Addresses",
      link: "#",
    },
  ],
};
