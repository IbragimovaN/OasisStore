import { useDispatch, useSelector } from "react-redux";
import { Input } from "../input/Input";
import styles from "./Search.module.css";
import { useMemo } from "react";
import { debounce } from "lodash";
import {
	searchPhraseSelector,
	shouldSearchSelector,
} from "../../redux/selectors";
import {
	setSearchPhraseAction,
	setShouidSearchAction,
} from "../../redux/actions";

export const Search = () => {
	const shouldSearch = useSelector(shouldSearchSelector);
	const searchPhrase = useSelector(searchPhraseSelector);
	const dispatch = useDispatch();
	const startDelayedSearch = useMemo(
		() => debounce(() => dispatch(setShouidSearchAction(!shouldSearch)), 2000),
		[],
	);

	const onChangeInput = (value) => {
		dispatch(setSearchPhraseAction(value));
		startDelayedSearch();
	};

	return (
		<form className={styles.search}>
			<Input
				type="text"
				placeholder="поиск..."
				onChange={({ target }) => onChangeInput(target.value)}
				value={searchPhrase}
			></Input>

			<div className={styles.icon_wrapper}>
				<i className="fa fa-search" aria-hidden="true"></i>
			</div>
		</form>
	);
};
