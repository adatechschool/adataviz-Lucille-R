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

		// 1- Je crée le conteneur <div> pour l'insertion des card par hôtel, et je lui donne sa class "card" :
		const divCard = document.createElement("div");
		divCard.classList.add("card");
		// Le conteneur parent (section cards-hotels) est déjà sélectionné tout en haut, j'y insère mon div :
		cardsHotels.appendChild(divCard);

		// 2- Je crée le h2 pour y mettre le nom de l'hôtel :
		const nomHotel = document.createElement("h2");
		nomHotel.textContent = hotel.nom_offre;
		// Je l'insère dans le conteneur divCard :
		divCard.appendChild(nomHotel);

		// 3- Je crée un p pour y mettre l'adresse de l'hôtel :
		const pAdresse = document.createElement("p");
		pAdresse.textContent = hotel.adresse_1;
		// Je l'insère dans le conteneur divCard :
		divCard.appendChild(pAdresse);

		// 4- Je crée un p pour y mettre la commune de l'hôtel :
		const pCommune = document.createElement("p");
		pCommune.textContent = hotel.commune;
		// Je l'insère dans le conteneur divCard :
		divCard.appendChild(pCommune);

		// 5- Je crée un <a> pour y mettre le site de l'hôtel :
		const aSite = document.createElement("a");
		// Je lui affecte un attribut href car c'est un lien vers le site Internet de l'hôtel :
		aSite.setAttribute("href", "hotel.site_web");
		// ainsi que son texte :
		aSite.textContent = hotel.site_web;
		// Je l'insère dans le conteneur divCard :
		divCard.appendChild(aSite);

	})
}

// -------- Fonction main qui fait le lien entre donneesChargees et afficherHotel (sinon pbm de scope)  -------- 
 const main = async () => {
	let donneesHotels = await donneesChargees();
	afficherHotels(donneesHotels);
 };
 main();