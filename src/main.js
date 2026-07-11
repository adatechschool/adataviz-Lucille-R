// fetch + manipulation du DOM (pas testé)

// Je récupère ma section cards-hotels :
const cardsHotels = document.querySelector(".cards-hotels");

// -------- Chargement des données, qui retourne les donneesApi -------- 
// Je déclare ma fonction async :
const donneesChargees = async () => {
	try {
		// Je récupère les données de l'API grâce à fetch :
		const response = await fetch("https://data.tours-metropole.fr/api/explore/v2.1/catalog/datasets/hotels-en-region-centre-val-de-loire/records?limit=20");

		// Je transforme les données récupérées en JSON :
		const donneesApi = await response.json();
		console.log(donneesApi); // => Pour vérifier que l'on récupère les données

		// Je return les données pour pouvoir les utiliser après :
		return donneesApi;
		
	} catch (erreur) {
		console.error(`Impossible de récupérer les données : ${erreur.message}`);
	}
}

// -------- Utilisation des données de l'API pour création des cards d'hôtels -------- 
const afficherHotels = (donneesHotels) => {
	// Je parcours l'objet donneesHotels :
	donneesHotels.results.forEach((hotel) => {
		console.log(hotel.nom_offre);
	})
}

// J'itère sur l'array :
/* donnees.results.forEach((hotel) => {
	console.log(hotel.nom_offre)
}) */
 const main = async () => {
	let donneesHotels = await donneesChargees();
	afficherHotels(donneesHotels);
 };
 main();