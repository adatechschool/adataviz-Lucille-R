// fonctions pures : formater, filtrer, trier (testées)
// utils.js contient des fonctions pures — elles prennent des données, retournent des données, sans toucher au DOM ni à internet. Ce sont elles qu'on teste avec Vitest.

// Fonction de récupération du site web de l'hôtel :
export const recupererSiteWeb = (siteWeb) => {
	if (siteWeb === null) {
		return null;
	} else {
		return siteWeb.split(" ; ")[0];
	}
}