export function formatRating(rating) {
  return rating ? Number(rating).toPrecision(3) : "n/a"
}

export function normalizeLandlord(landlord) {
  return {
    id: landlord.id,
    name: landlord.attributes.name,
    rating: formatRating(landlord.attributes.rating),
    image: landlord.attributes.image_url,
    properties: landlord.relationships.properties.data.map(property => property.id),
    reviews: landlord.relationships.reviews.data.map(review => review)
  }
}