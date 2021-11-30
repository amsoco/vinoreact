// créer une url avec le nom du cellier: /celliers/la-cave-de-papa
export const slugify = (str) => str.toLowerCase().replace(/ /g, "-");