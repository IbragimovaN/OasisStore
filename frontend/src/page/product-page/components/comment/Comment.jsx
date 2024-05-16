import { useDispatch, useSelector } from "react-redux";
import { deleteCommentAsync, userSelector } from "../../../../redux";
import { ROLE } from "../../../../constants";
import styles from "./Comment.module.css";

export const Comment = ({ content, publishedAt, author, id, productId }) => {
	const dispatch = useDispatch();
	const user = useSelector(userSelector);

	const onCommentDelete = (productId, commentId) => {
		dispatch(deleteCommentAsync(productId, commentId));
	};

	const isAdminOrModerator = [ROLE.ADMIN, ROLE.MODERATOR].includes(user.roleId);
	return (
		<div className={styles.comment}>
			<div className={styles.comment_wrapper}>
				<div className={styles.information_panel}>
					<div className={styles.author}>
						<div className={styles.icon_wrapper}>
							<i className={`fa fa-user-circle-o`} aria-hidden="true"></i>
						</div>

						<div>{author}</div>
					</div>
					<div className={styles.publishedAt}>
						<div>{publishedAt}</div>
						<div className={styles.icon_wrapper}>
							<i className={`fa fa-calendar-o`} aria-hidden="true"></i>
						</div>
					</div>
				</div>
				<div>{content}</div>
			</div>
			{isAdminOrModerator && (
				<div
					className={styles.icon_wrapper}
					onClick={() => onCommentDelete(productId, id)}
				>
					<i className={`fa fa-trash-o`} aria-hidden="true"></i>
				</div>
			)}
		</div>
	);
};
