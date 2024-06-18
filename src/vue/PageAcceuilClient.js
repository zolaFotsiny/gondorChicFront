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

      <div className="partie2">
        
        <div className="ivelany">
          <div className="ivelany-2">
            <div className="ivelany-3">
              <div className="column0">
                <div className="ivelany-4">
                  <div className="ivelany-5">
                    <div className="ivelany-6">Produit 1</div>
                    <img
                      loading="lazy"
                      src="Casque-du-roi-du-Seigneur-des-Anneaux-Elendil.png"
                      className="img"
                    />
                    <div className="ivelany-7">
                      <div className="ivelany-8">
                        <div className="ivelany-9">
                          <div className="ivelany-10">
                            <div className="ivelany-11">Commande</div>
                            <div className="ivelany-12">Stock</div>
                          </div>
                          <div className="ivelanStock">
                            <input type="text" className="ivelany-13" />
                            <div className="ivelany-14">100</div>
                          </div>
                        </div>
                        <img src={Caddy} alt="Caddy" className="img-2"/>
                      </div>
                    </div>
                    <div className="ivelany-15">Prix du produit: 20§</div>
                  </div>
                </div>
              </div>
              <div className="column0">
                <div className="ivelany-4">
                  <div className="ivelany-5">
                    <div className="ivelany-6">Produit 2</div>
                    <img
                      loading="lazy"
                      src="Casque-du-roi-du-Seigneur-des-Anneaux-Elendil.png"
                      className="img"
                    />
                    <div className="ivelany-7">
                      <div className="ivelany-8">
                        <div className="ivelany-9">
                          <div className="ivelany-10">
                            <div className="ivelany-11">Commande</div>
                            <div className="ivelany-12">Stock</div>
                          </div>
                          <div className="ivelanStock">
                            <input type="text" className="ivelany-13" />
                            <div className="ivelany-14">100</div>
                          </div>
                        </div>
                        <img src={Caddy} alt="Caddy" className="img-2"/>
                      </div>
                    </div>
                    <div className="ivelany-15">Prix du produit: 20§</div>
                  </div>
                </div>
              </div>
              <div className="column0">
                <div className="ivelany-4">
                  <div className="ivelany-5">
                    <div className="ivelany-6">Produit 3</div>
                    <img
                      loading="lazy"
                      src="Casque-du-roi-du-Seigneur-des-Anneaux-Elendil.png"
                      className="img"
                    />
                    <div className="ivelany-7">
                      <div className="ivelany-8">
                        <div className="ivelany-9">
                          <div className="ivelany-10">
                            <div className="ivelany-11">Commande</div>
                            <div className="ivelany-12">Stock</div>
                          </div>
                          <div className="ivelanStock">
                            <input type="text" className="ivelany-13" />
                            <div className="ivelany-14">100</div>
                          </div>
                        </div>
                        <img src={Caddy} alt="Caddy" className="img-2"/>
                      </div>
                    </div>
                    <div className="ivelany-15">Prix du produit: 20§</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
