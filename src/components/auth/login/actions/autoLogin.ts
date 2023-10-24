// import store from "../stores";

// import { getItem } from "../../../../core/actions/localStorage";

// const autoLogin = async (): Promise<void> => {
//   try {
//     const appName = import.meta.env.VITE_APP_APP_NAME;
//     const tokenLocal = getItem(`${appName}_token`);
//     const userLocal = getItem(`${appName}_user`);
//     //   const personLocal = localStorage.getItem(`${appName}_person`)
//     //   const groupsLocal = localStorage.getItem(`${appName}_groups`)

//     if (tokenLocal) store.token.set(tokenLocal);
//     if (userLocal) store.user.set(userLocal);
//     //   if (personLocal) store.person.set(JSON.parse(personLocal))
//     //   if (groupsLocal) store.groups.set(JSON.parse(groupsLocal))
//   } catch (error) {
//     console.log("error", error);
//   }
// };

// export default autoLogin;
