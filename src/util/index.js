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

export function normalizeProperty(property) {
  return {
    id: property.id,
    address: property.attributes.address,
    hasImage: property.attributes.has_image,
    image: property.attributes.image_url,
    landlordId: property.attributes.landlord_id,
    reviews: property.relationships.reviews.data.map(review => review.id),
    rating: formatRating(property.attributes.rating)
  }
}

export function normalizeReview(review) {
  return {
    id: review.id,
    content: review.attributes.content,
    rating: review.attributes.rating,
    propertyId: review.attributes.property_id,
    landlordId: review.attributes.landlord_id,
    address: review.attributes.address,
    landlordRating: formatRating(review.attributes.landlord_rating),
    propertyRating: formatRating(review.attributes.property_rating)
  }
}