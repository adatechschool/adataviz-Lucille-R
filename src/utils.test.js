// tests Vitest
import { describe, it, expect } from "vitest";
import { recupererSiteWeb } from "./utils.js";

// TTEST de la Fonction de récupération du site web de l'hôtel :
describe("recupererSiteWeb", () => {
	it("retourne une seule url si présence de plusieurs", () => {
		expect(recupererSiteWeb("https/premier_site ; https/deuxieme_site")).toBe("https/premier_site")
	})
	it("retourne null si aucune url (null)", () => {
		expect(recupererSiteWeb(null)).toBe(null)
	})
})