import { environment } from "../../environment/environment";
import { apiCall } from "../common/common-svc";

const BASE_URL = environment.URL_API + "api/v1/clients/";

// Signs in a user with the provided login and password
export const signIn = async (login, pwd) => {
  const dataToSend = JSON.stringify({
    pseudo: login,
    motDePasse: pwd,
  });

  // use request params instead of dataToSend
  const urlWithRequestParams = `${BASE_URL}connexion?pseudo=${login}&motDePasse=${pwd}`;
  const data = await apiCall(urlWithRequestParams, "POST", null, dataToSend);

  return data;
};

// Signs out the user and clears AsyncStorage
export const signOut = async () => {
  try {
    await localStorage.clear();
    console.log("All data cleared from AsyncStorage");
  } catch (error) {
    console.error("Error clearing AsyncStorage:", error);
  }
};
