// fetch + manipulation du DOM (pas testé)

// Je récupère ma section cards-hotels :
const cardsHotels = document.querySelector(".cards-hotels");

// Chargement des données : Je déclare ma fonction async :
const donneesChargees = async () => {
	try {
		// Je récupère les données de l'API grâce à fetch :
		const response = await fetch("https://data.tours-metropole.fr/api/explore/v2.1/catalog/datasets/hotels-en-region-centre-val-de-loire/records?limit=20");

		// Je transforme les données récupérées en JSON :
		const donnees = await response.json();
		console.log(donnees) // => Pour vérifier que l'on récupère les données
		
	} catch (erreur) {
		console.error(`Impossible de récupérer les données : ${erreur.message}`)
	}
}

donneesChargees()
// J'itère sur l'array :
/* donnees.results.forEach((hotel) => {
	console.log(hotel.nom_offre)
}) */