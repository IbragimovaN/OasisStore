import { useDispatch } from "react-redux";
import { addProductToBag, setCountAction } from "../redux/actions";
import { bagProductsArrSelector } from "../redux";
import { useSelector } from "react-redux";

export const useAddToBag = (product) => {
	const dispatch = useDispatch();
	const bagProductsArr = useSelector(bagProductsArrSelector);

	const onClickAddToBag = () => {
		const dataIndex = bagProductsArr.findIndex(
			(item) => item.id === product.id,
		);

		dataIndex >= 0
			? dispatch(setCountAction(dataIndex))
			: dispatch(
					addProductToBag({
						id: product.id,
						title: product.title,
						price: product.price,
						imgUrl: product.imgUrl,
						count: 1,
					}),
				);
	};

	return { onClickAddToBag };
};
