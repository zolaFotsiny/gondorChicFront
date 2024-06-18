import * as React from "react";
import "../assets/css/styles.css";
import Caddy from '../assets/images/caddy.jpg';

export default function PageAcceuilClient() {
  return (
    <div className="div">
      <div className="div-2">
        <div className="div-3">Gondor Chic</div>
        <div className="div-4">
          <div className="div-5">Page</div>
          <div className="div-6">Page</div>
          <div className="div-7">Page</div>
          <div className="div-8">Se deconnecter</div>
        </div>
      </div>
      <div className="div-9">
        <div className="div-10">Bonjour, Mr Client</div>
        <div className="div-11">
          Le produit du jour est le casque du roi de gondor prix de 100§.
        </div>
        <div className="div-12">
          <div className="div-13">
            <div className="column">
              <div className="div-14">
                <img className="img" src="Casque-du-roi-du-Seigneur-des-Anneaux-Elendil.png" alt="image du produit du jours"/>
                <div className="div-15">
                  <div className="div-16">
                    <div className="div-17">
                      <div className="div-18">Commande</div>
                      <input type="text" className="div-19"/>
                    </div>
                    <div className="div-20">
                      <div className="div-21">Stock</div>
                      <div className="div-22">100</div>
                    </div>
                    <img src={Caddy} alt="Caddy" className="img-2-0"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="column-2">
              <div className="div-23">
                <div className="div-24">Pseudo</div>
                <input type="text" className="div-25" />
                <div className="div-26">Mot de passe</div>
                <input type="text" className="div-27" />
                <div className="div-28">S’IDENTIFIER</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
