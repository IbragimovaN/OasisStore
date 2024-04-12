export const transformProduct = (dbProduct) => ({
	id: dbProduct.id,
	title: dbProduct.title,
	brand: dbProduct.brand,
	category: dbProduct.category,
	age: dbProduct.age,
	price: dbProduct.price,
	rating: dbProduct.rating,
	imageUrl: dbProduct.image_url,
	description: dbProduct.description,
	hairType: dbProduct.hair_type,
});
