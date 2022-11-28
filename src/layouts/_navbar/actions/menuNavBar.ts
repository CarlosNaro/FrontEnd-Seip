import {
  mdiMenu,
  mdiClockOutline,
  mdiCloud,
  mdiCrop,
  mdiAccount,
  mdiCogOutline,
  mdiEmail,
  mdiLogout,
  mdiThemeLightDark,
  mdiGithub,
} from "@mdi/js";

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
    label: "Log out",
    isDesktopNoLabel: true,
    isLogout: true,
  },


];
