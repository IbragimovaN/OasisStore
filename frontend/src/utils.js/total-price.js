export const totalPrice = (arr) => {
	const total = arr.reduce((acc, item) => {
		let priceOneProduct = item.price * item.count;
		return (acc += priceOneProduct);
	}, 0);
	return total.toLocaleString();
};
