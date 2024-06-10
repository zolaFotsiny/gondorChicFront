import * as React from "react";
import "../assets/css/page_acceuil.css";

export default function PageAcceuil() {
  return (
    <div className="container">
      <div className="product-of-the-day">
        <h1>Gondor Chic</h1>
        <p>Le produit du jour est le "pantalon zouk" au prix de 50€</p>
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
  );
}
