import { IMenu } from "../models/IMenu";
import { useRouter } from "vue-router";
import { computed } from "vue";
import routesConfig from "../../../router/routesConfig";

export const menuSidebar = (): IMenu[] => {
  const iconsArray = Object.values(routesConfig).map((route: any) => route);

  const adminRoutes: IMenu[] = [];

  Object.values(iconsArray).forEach((route) => {
    if (route.meta?.isAdmin) {
      const sidebar: IMenu = {
        name: route.name as string,
        path: route.path as string,
        icon: route.icon as string,
      };
      adminRoutes.push(sidebar);
    }
  });
  return adminRoutes;
};

// const router = useRouter();

// const iconsOnly: string[] = [];

// for (const key in iconsArray) {
//   if (iconsArray.hasOwnProperty(key) && "icon" in iconsArray[key]) {
//     iconsOnly.push(iconsArray[key].icon);
//     // console.log("iconsArray:::**** ", iconsArray[key].icon);
//   }
// }

// console.log("iconsArray------- ", iconsOnly);

// router.getRoutes().forEach((route) => {
//   if (route.meta?.isAdmin) {
//     const sidebar: IMenu = {
//       name: route.name as string,
//       path: route.path as string,
//       icon: iconsOnly,
//     };

//     adminRoutes.push(sidebar);
//   }
// });

// import {
//   mdiAccountCircle,
//   mdiMonitor,
//   mdiGithub,
//   mdiLock,
//   mdiAlertCircle,
//   mdiSquareEditOutline,
//   mdiTable,
//   mdiViewList,
//   mdiTelevisionGuide,
//   mdiResponsive,
//   mdiPalette,
//   mdiFamilyTree,
//   mdiNaturePeople,
//   mdiReproduction,
//   mdiCartOutline,
//   mdiCart,
//   mdiAccountGroupOutline,
// } from "@mdi/js";

// export default [
//   {
//     // is_admin:true,
//     to: "/dashboard",
//     label: "Dashboard",
//     icon: mdiMonitor,
//   },
//   {
//     // is_admin:true,
//     to: "/client",
//     label: "Cliente",
//     icon: mdiAccountGroupOutline,
//   },

//   {
//     // is_admin:true,
//     to: "/profile",
//     label: "Profile",
//     icon: mdiAccountCircle,
//   },

//   // {
//   //   to: "/product",
//   //   label: "Product",
//   //   icon: mdiCartOutline ,
//   // },

//   // {
//   //   to: "/expense",
//   //   label: "Gastos",
//   //   icon: mdiCart ,
//   // },

//   // {
//   //   to: "/order",
//   //   label: "Orden",
//   //   icon: mdiReproduction ,
//   // },

//   // {
//   //   to: "/detail",
//   //   label: "Detalle",
//   //   icon: mdiPalette ,
//   // },

//   // {
//   //   to: "/tables",
//   //   label: "Tables",
//   //   icon: mdiTable,
//   // },

//   // {
//   //   to: "/forms",
//   //   label: "Forms",
//   //   icon: mdiSquareEditOutline,
//   // },
//   // {
//   //   to: "/ui",
//   //   label: "UI",
//   //   icon: mdiTelevisionGuide,
//   // },
//   // {
//   //   to: "/responsive",
//   //   label: "Responsive",
//   //   icon: mdiResponsive,
//   // },
//   // {
//   //   to: "/",
//   //   label: "Styles",
//   //   icon: mdiPalette,
//   // },
//   // {
//   //   to: "/profile",
//   //   label: "Profile",
//   //   icon: mdiAccountCircle,
//   // },
//   // {
//   //   to: "/login",
//   //   label: "Login",
//   //   icon: mdiLock,
//   // },
//   // {
//   //   to: "/error",
//   //   label: "Error",
//   //   icon: mdiAlertCircle,
//   // },
//   // {
//   //   label: "Dropdown",
//   //   icon: mdiViewList,
//   //   menu: [
//   //     {
//   //       label: "Item One",
//   //     },
//   //     {
//   //       label: "Item Two",
//   //     },
//   //   ],
//   // },
//   // {
//   //   href: "https://github.com/justboil/admin-one-vue-tailwind",
//   //   label: "GitHub",
//   //   icon: mdiGithub,
//   //   target: "_blank",
//   // },
// ];
