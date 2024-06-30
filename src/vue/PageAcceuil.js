import * as React from "react";
import "../assets/css/page_acceuil.css";
import { useEffect, useState, useRef } from "react";
import { rechercherProduitDuJour } from "../service/product/product-svc";
import { signIn } from "../service/user/user-svc";

export default function PageAcceuil() {
  const [produitsDuJour, setProduitsDuJour] = useState(null);
  const login = useRef();
  const password = useRef();

  useEffect(() => {
    rechercherProduitDuJour().then((data) => {
      setProduitsDuJour(data.leProduitCourant);
    });
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = await signIn(login.current.value, password.current.value);
    if (data) {
      localStorage.setItem('user', data.leClientIdentifie.pseudo);
      window.location.href = "/pageAcceuilClient";
    }
  };

  return (
    <div className="body0">
      <div className="container">
        <div className="product-of-the-day">
        <img src={"/"+produitsDuJour?.id+".png"} alt="Description de l'image" width={300} height={300}/>
          <h3>Le Produit du Jours est : </h3>
          <p> {produitsDuJour?.libelle} ({produitsDuJour?.reference}) au prix de <strong>{produitsDuJour?.prix}€</strong></p>
        </div>
        <div className="login-box">
          <h1>GONDOR CHIC</h1>
        
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label htmlFor="username">Pseudo</label>
              <input type="text" ref={login} id="username" name="username" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                ref={password}
                id="password"
                name="password"
              />
            </div>
            <button type="submit">S'identifier</button>
          </form>
        </div>
      </div>
    </div>
  );
}
