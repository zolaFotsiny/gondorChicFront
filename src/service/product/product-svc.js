import { environment } from "../../environment/environment";
import { apiCall } from "../common/common-svc";

const BASE_URL = environment.URL_API + "api/v1/produits/";

export const rechercherProduitDuJour = async (navigation = null) => {
  const data = await apiCall(
    `${BASE_URL}produitsDuJour`,
    "GET",
    null,
    null,
    navigation
  );
  return data;
};
