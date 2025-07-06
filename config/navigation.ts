interface TabItem {
  id: string;
  label: string;
  path: string;
}

export const navigationTabs: TabItem[] = [
  {
    id: "halituzan",
    label: "Hakkımda",
    path: "/",
  },
  {
    id: "works",
    label: "Deneyim",
    path: "/works",
  },
  {
    id: "projects",
    label: "Projeler",
    path: "/projects",
  },
  {
    id: "skills",
    label: "Yetenekler",
    path: "/skills",
  },
  // {
  //   id: "contact",
  //   label: "İletişim",
  //   path: "/contact",
  // },
  {
    id: "toolkits",
    label: "Toolkits",
    path: "/toolkits",
  },
  {
    id: "tips-and-tricks",
    label: "Tips",
    path: "/tips-and-tricks",
  },

  // {
  //   id: "apps",
  //   label: "Apps",
  //   path: "/apps",
  // },
];
