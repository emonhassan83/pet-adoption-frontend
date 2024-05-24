import { authKey } from "@/constant/authKey";
import { setToLocalStorage } from "@/utils/localStorege";

//* set token in local storage
export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
    //   console.log(accessToken);
    return setToLocalStorage(authKey, accessToken);
  };