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
  {
    id: "contact",
    label: "İletişim",
    path: "/contact",
  },

  // {
  //   id: "cv",
  //   label: "Öz Geçmişim",
  //   path: "/cv",
  // },
];
