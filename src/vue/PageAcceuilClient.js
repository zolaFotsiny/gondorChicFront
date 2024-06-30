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
  const [scrollPosition, setScrollPosition] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [clickCount1, setClickCount1] = useState(0);
  const [clickCount2, setClickCount2] = useState(0);
  const [clickCount3, setClickCount3] = useState(0);

  const headerStyle = {
    backgroundColor: scrollPosition > 100 ? "#1e1e1d" : "white",
    boxShadow:'0px 2px 1px grey',
    padding: "10px 0",
    // margin : "10px 0",
    transition: "background-color 0.3s ease",
  };

  useEffect(() => {
    rechercherProduitDuJour().then((data) => {
      setProduitsDuJour(data.leProduitCourant);
    });
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  function handleClick() {
    setClickCount(clickCount + 1);
  }

  function handleClick1() {
    setClickCount1(clickCount1 + 1);
  }

  function handleClick2() {
    setClickCount2(clickCount2 + 1);
  }

  function handleClick3() {
    setClickCount3(clickCount3 + 1);
  }

  return (
    <div className="div">
     <div className="div-2" style={headerStyle}>
      <div className="div-3" style={{color: scrollPosition > 100 ? "white" : "black", marginInline:"30px"}}>
        Gondor Chic
      </div>
      <div className="div-4">
     
        <div className="div-5">Page</div>
        <div className="div-8">Se deconnecter</div>
      </div>
    </div>
      <div className="div-9">
        <div className="container">
          <div className="div-11">
            
            <img src={"/" + produitsDuJour?.id + ".png"} alt="Description de l'image" width={300} height={300} />
            <div className="ivelany-7">
              
              <div className="ivelany-8">
                <div className="ivelany-9">
                  <div className="ivelany-10">
                    <div className="ivelany-11">Commande</div>
                    <div className="ivelany-12">Stock</div>
                  </div>
                  <div className="ivelanStock">
                    <input type="text" className="ivelany-13" />
                    <div className="ivelany-14">{produitsDuJour?.quantiteEnStock}</div>
                  </div>
                </div>
                <div className="image-container">
                  <button onClick={handleClick} className="image-button">
                    <img src={Caddy} alt="Caddy" className="img-2" />
                    {clickCount > 0 && (
                      <div className="notification-bubble">{clickCount}</div>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="div-12">
          <div className="div-10">Bonjour, {user} ! </div>
            Le produit du jour est {produitsDuJour?.libelle} (
            {produitsDuJour?.reference}) au prix de {produitsDuJour?.prix}€.
<p>
            Quantite en stock :
            {produitsDuJour?.quantiteEnStock}</p>
          </div>
        </div>
      </div>

      <div className="partie2">

        <h2 className="tilteproduct">Liste des produits</h2>
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
                            <div className="ivelany-14">87</div>
                          </div>
                        </div>
                        <div className="image-container">
                          <button onClick={handleClick1} className="image-button">
                            <img src={Caddy} alt="Caddy" className="img-2" />
                            {clickCount1 > 0 && (
                              <div className="notification-bubble">{clickCount1}</div>
                            )}
                          </button>
                        </div>
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
                            <div className="ivelany-14">62</div>
                          </div>
                        </div>
                        <div className="image-container">
                          <button onClick={handleClick2} className="image-button">
                            <img src={Caddy} alt="Caddy" className="img-2" />
                            {clickCount2 > 0 && (
                              <div className="notification-bubble">{clickCount2}</div>
                            )}
                          </button>
                        </div>
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
                            <div className="ivelany-14">99</div>
                          </div>
                        </div>
                        <div className="image-container">
                          <button onClick={handleClick3} className="image-button">
                            <img src={Caddy} alt="Caddy" className="img-2" />
                            {clickCount3 > 0 && (
                              <div className="notification-bubble">{clickCount3}</div>
                            )}
                          </button>
                        </div>
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
