// fetch + manipulation du DOM (pas testé)
// Je récupère ma div cards :
const cardsHotels = document.querySelector(".cards-hotels");

// Je déclare ma fonction async :
const chargerDonnees = async () => {
	try {
		// Je récupère les données de l'API grâce à fetch :
		const response = await fetch("https://data.tours-metropole.fr/api/explore/v2.1/catalog/datasets/hotels-en-region-centre-val-de-loire/records?limit=10");

		// Je transforme les données récupérées en JSON :
		const donnees = await response.json();
		console.log(donnees) // => Pour vérifier que l'on récupère les données

		// J'itère sur l'array :
		donnees.results.forEach((hotel) => {
			console.log(hotel.nom_offre)
		})
	
	} catch (erreur) {
		console.error(erreur.message)
	}
}

chargerDonnees()