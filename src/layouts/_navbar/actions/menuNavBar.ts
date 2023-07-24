import { mdiAccount, mdiCogOutline, mdiEmail, mdiLogout } from "@mdi/js";

export default [
  {
    isCurrentUser: true,
    menu: [
      {
        icon: mdiAccount,
        label: "My Profile",
        to: "#",
      },
      {
        icon: mdiCogOutline,
        label: "Settings",
      },
      {
        icon: mdiEmail,
        label: "Messages",
      },
    ],
  },

  {
    icon: mdiLogout,
    label: "Logout",
    isDesktopNoLabel: true,
    isLogout: true,
  },
];
