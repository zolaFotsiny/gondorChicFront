import axios from 'axios';
const BASE_URL = "https://gondorchicback-1.onrender.com";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});


export const rechercherProduitDuJour = async () => {
    try {
        let response = '';
        console.log(`HUHU_Call_GET:${BASE_URL}/api/v1/produits/produitsDuJour`);
        response = await axiosInstance.get(`${BASE_URL}/api/v1/produits/produitsDuJour`);
        return response;
    } catch (error) {
        console.error('HUHU_ERROR lors de l\'envoi des données à l\'API :', error);
        throw error;
    }
};
