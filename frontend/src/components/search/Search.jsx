import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { debounce } from "lodash";
import { Input } from "../input/Input";
import {
	searchPhraseSelector,
	shouldSearchSelector,
} from "../../redux/selectors";
import {
	setSearchPhraseAction,
	setShouidSearchAction,
} from "../../redux/actions";
import styles from "./Search.module.css";

export const Search = () => {
	const shouldSearch = useSelector(shouldSearchSelector);
	const searchPhrase = useSelector(searchPhraseSelector);
	const dispatch = useDispatch();

	// eslint-disable-next-line react-hooks/exhaustive-deps
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
