import * as React from "react";
import "../assets/css/page_acceuil.css";
import { useEffect, useState } from "react";
import { rechercherProduitDuJour } from "../service/product/product-svc";

export default function PageAcceuil() {
  const [produitsDuJour, setProduitsDuJour] = useState(null);
  useEffect(() => {
    rechercherProduitDuJour().then((data) => {
      setProduitsDuJour(data);
    });
  }, []);

  return (
    <div className="body0">
      <div className="container">
        <div className="product-of-the-day">
          <h1>{produitsDuJour?.reference}</h1>
          <p>Le produit du jour est {produitsDuJour?.libelle}</p>
        </div>
        <div className="login-box">
          <form>
            <div className="input-group">
              <label htmlFor="username">Pseudo</label>
              <input type="text" id="username" name="username" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Mot de passe</label>
              <input type="password" id="password" name="password" />
            </div>
            <button type="submit">S'identifier</button>
          </form>
        </div>
      </div>
    </div>
  );
}
