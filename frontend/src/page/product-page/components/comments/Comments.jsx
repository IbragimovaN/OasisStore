import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../../../redux/selectors";
import { useParams } from "react-router-dom";
import { ROLE } from "../../../../constants/roleId";
import { Comment } from "../comment/Comment";
import styles from "./Coomments.module.css";
import { addCommentAsync } from "../../../../redux";

export const Comments = ({ comments }) => {
	const [newComment, setNewComment] = useState("");
	const user = useSelector(userSelector);
	const dispatch = useDispatch();
	const params = useParams();
	const productId = params.productId;

	const onNewCommentAdd = (productId, content) => {
		dispatch(addCommentAsync(productId, content));
		setNewComment("");
	};

	return (
		<div className={styles.wrapper}>
			{user && (
				<div className={styles.newComment}>
					<textarea
						className={styles.textarea}
						name="comment"
						value={newComment}
						placeholder="Новый отзыв..."
						onChange={({ target }) => setNewComment(target.value)}
					></textarea>
					<div
						className={styles.icon_wrapper}
						onClick={() => {
							onNewCommentAdd(productId, newComment);
						}}
					>
						<i className={`fa fa-paper-plane-o`} aria-hidden="true"></i>
					</div>
				</div>
			)}
			<div className="comments">
				{comments?.map(({ id, author, content, publishedAt }) => (
					<Comment
						key={id}
						id={id}
						author={author}
						content={content}
						publishedAt={publishedAt}
						productId={productId}
					/>
				))}
			</div>
		</div>
	);
};
