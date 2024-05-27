import devider from '@assets/devider.svg';
import commentIcon from '@assets/icons/comment-icon.svg';
import repostIcon from '@assets/icons/repost-icon.svg';
import { useState } from 'react';
import commentsData from '../../commentsData';
import { CommentI } from '../../interfaces/comment-i';
import { countAllComments } from '../../utils/countAllComments';
import Comment from '../Comment/Comment';
import CommentField from '../CommentField/CommentField';
import styles from './styles.module.css';
import commentAvatar from '/avatars/user-comment-avatar.png';

const CommentSection: React.FC = () => {
	const [postCounter, setPostCounter] = useState<number>(45);
	const [newComment, setNewComment] = useState<string>('');
	const [isPostLike, setIsPostLike] = useState<boolean>(false);
	const [isFieldFocus, setIsFieldFocus] = useState<boolean>(false);
	const [comments, setComments] = useState<CommentI[]>(commentsData);
	const totalCommentsCount = countAllComments(comments);

	const handlePostLike = (): void => {
		if (isPostLike) {
			setPostCounter(postCounter - 1);
		} else {
			setPostCounter(postCounter + 1);
		}
		setIsPostLike(!isPostLike);
	};

	const handleSubmitComment = (
		parentId: number | null = null,
		commentText?: string,
		changeCommentText?: (text: string) => void,
	): void => {
		const commentCondition = commentText
			? commentText.trim() !== ''
			: newComment.trim() !== '';

		if (commentCondition) {
			// id and user credentials must return from server mocked data is used instead
			const date = Date.now();
			const text = commentText ? commentText : newComment;
			const newCommentData: CommentI = {
				id: date,
				name: 'John Burg',
				text,
				avatar: commentAvatar,
				likes: 0,
				timestamp: date,
				replies: [],
			};

			if (parentId !== null) {
				const addReplyToComment = (commentsList: CommentI[]): CommentI[] => {
					return commentsList.map(comment => {
						if (comment.id === parentId) {
							return {
								...comment,
								replies: [...comment.replies, newCommentData],
							};
						} else if (comment.replies.length > 0) {
							return {
								...comment,
								replies: addReplyToComment(comment.replies),
							};
						}
						return comment;
					});
				};

				setComments(addReplyToComment(comments));
			} else {
				setComments([...comments, newCommentData]);
			}

			setNewComment('');
			changeCommentText && changeCommentText('');
		}
	};

	return (
		<div>
			<div className={styles.actionButtons}>
				<button
					className={styles.likeBtn}
					onClick={handlePostLike}
				>
					<svg
						width='17'
						height='14'
						viewBox='0 0 17 14'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className={styles.icon}
					>
						<path
							d='M8.50487 13.9711L1.48812 7.54851C-2.32534 3.6949 3.28044 -3.704 8.50487 2.28192C13.7293 -3.704 19.3097 3.7206 15.5217 7.54851L8.50487 13.9711Z'
							fill={isPostLike ? '#E92929' : '#A9A9A9'}
						/>
					</svg>
					<span className={styles.buttonText}>{postCounter}</span>
				</button>
				<button
					className={styles.commentBtn}
					onClick={() => setIsFieldFocus(true)}
				>
					<img
						src={commentIcon}
						alt='comment icon'
						className={styles.icon}
					/>
					<span className={styles.buttonText}>{totalCommentsCount}</span>
				</button>
				<button className={styles.repostBtn}>
					<img
						src={repostIcon}
						alt='repost icon'
						className={styles.icon}
					/>
				</button>
			</div>
			<img
				src={devider}
				className={styles.divider}
			></img>

			<div>
				{comments.map(comment => (
					<Comment
						key={comment.id}
						comment={comment}
						comments={comments}
						handleSubmitComment={handleSubmitComment}
					/>
				))}
			</div>

			<CommentField
				value={newComment}
				onChange={setNewComment}
				onSubmit={handleSubmitComment}
				onFocus={isFieldFocus}
				setFocus={setIsFieldFocus}
			/>
		</div>
	);
};

export default CommentSection;
