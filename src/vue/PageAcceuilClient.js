import * as React from "react";
import "../assets/css/styles.css";
import Caddy from "../assets/images/caddy.jpg";
import { useEffect, useState } from "react";
import { rechercherProduitDuJour } from "../service/product/product-svc";
import image1 from '../assets/images/1.png';
import image2 from '../assets/images/2.png';
import image3 from '../assets/images/3.png';

export default function PageAcceuilClient() {
  const user = localStorage.getItem('user');
  const [produitsDuJour, setProduitsDuJour] = useState(null);
  useEffect(() => {
    rechercherProduitDuJour().then((data) => {
      console.log(data);
      setProduitsDuJour(data);
    });
  }, []);
  return (
    <div className="div">
      <div className="div-2">
        <div className="div-3">Gondor Chic</div>
        <div className="div-4">
          <div className="div-5">Page</div>
          <div className="div-8">Se deconnecter</div>
        </div>
      </div>
      <div className="div-9">
        <div className="div-10">Bonjour, { user }</div>
        <div className="div-11">
          Le produit du jour est {produitsDuJour?.libelle} (
          {produitsDuJour?.reference}) au prix de {produitsDuJour?.prix}€.
        </div>
        <div className="div-12">
          <div className="div-13">
            <div className="column">
              <div className="div-14">
                <img className="img" src={"/10"+".png"} alt="Description de l'image" width={300} height={300}/>
                <img
                  className="img"
                  src="Casque-du-roi-du-Seigneur-des-Anneaux-Elendil.png"
                  alt="image du produit du jours"
                />
                <div className="div-15">
                  <div className="div-16">
                    <div className="div-17">
                      <div className="div-18">Commande</div>
                      <input type="text" className="div-19" />
                    </div>
                    <div className="div-20">
                      <div className="div-21">Stock</div>
                      <div className="div-22">100</div>
                    </div>
                    <img src={Caddy} alt="Caddy" className="img-2-0" />
                  </div>
                </div>
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
                    <div className="ivelany-6">Armure de Gondor</div>
                    <img
                      loading="lazy"
                      src={image1}
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
                        <img src={Caddy} alt="Caddy" className="img-2" />
                      </div>
                    </div>
                    <div className="ivelany-15">Prix du produit: 100€</div>
                  </div>
                </div>
              </div>
              <div className="column0">
                <div className="ivelany-4">
                  <div className="ivelany-5">
                    <div className="ivelany-6">Casque de Théoden</div>
                    <img
                      loading="lazy"
                      src={image2}
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
                        <img src={Caddy} alt="Caddy" className="img-2" />
                      </div>
                    </div>
                    <div className="ivelany-15">Prix du produit: 20€</div>
                  </div>
                </div>
              </div>
              <div className="column0">
                <div className="ivelany-4">
                  <div className="ivelany-5">
                    <div className="ivelany-6">Bracers de Boromir</div>
                    <img
                      loading="lazy"
                      src={image3}
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
                        <img src={Caddy} alt="Caddy" className="img-2" />
                      </div>
                    </div>
                    <div className="ivelany-15">Prix du produit: 50€</div>
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
