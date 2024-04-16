import styles from "./Modal.module.css";
import { Button } from "../button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
	currentIdSelector,
	isOpenModalSelector,
	isUpdatedProductsSelector,
	modalTextSelector,
	setIsUpdatedProducts,
} from "../../redux";
import { setIsOpenModal } from "../../redux/actions/set-is-open-modal-action";
import { setModalText } from "../../redux/actions/set-modal-text";
import { request } from "../../utils.js/request";

export const Modal = () => {
	const dispatch = useDispatch();
	const currentId = useSelector(currentIdSelector);
	const isUpdatedPruducts = useSelector(isUpdatedProductsSelector);
	const isOpenModal = useSelector(isOpenModalSelector);
	const modalText = useSelector(modalTextSelector);
	// const onConfirm = useSelector(selectModalOnConfirm);
	// const onCancel = useSelector(selectModalOnCancel);

	if (!isOpenModal) {
		return null;
	}

	const onClickSend = () => {
		request(`/products/${currentId}`, "DELETE").then(() =>
			dispatch(setIsUpdatedProducts(!isUpdatedPruducts)),
		);
		dispatch(setIsOpenModal(false));
	};

	const onClickCancel = () => {
		dispatch(setIsOpenModal(false));
		dispatch(setModalText(""));
	};

	return (
		<div className={styles.modal_container}>
			<div className={styles.overlay}></div>
			<div className={styles.box}>
				<h3>{modalText} </h3>
				<div className={styles.buttons}>
					<Button onClick={() => onClickSend(currentId)} width="80px">
						Да
					</Button>
					<Button onClick={onClickCancel} width="80px">
						Отмена
					</Button>
				</div>
			</div>
		</div>
	);
};
