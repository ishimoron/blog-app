import replyIcon from '@assets/icons/reply-icon.svg';
import React, { useState } from 'react';
import { CommentI } from '../../interfaces/comment-i';
import { calculateTimestamp } from '../../utils/calculateTimestamp';
import CommentField from '../CommentField/CommentField';
import styles from './styles.module.css';

interface CommentProps {
	comment: CommentI;
	comments?: CommentI[];
	handleSubmitComment?: (
		parentId: number,
		commentText?: string,
		changeCommentText?: (text: string) => void,
	) => void;
}

const Comment: React.FC<CommentProps> = ({ comment, comments, handleSubmitComment }) => {
	const [newComment, setNewComment] = useState<string>('');
	const [isReply, setIsReply] = useState<boolean>(false);
	const [isCommentLike, setIsCommentLike] = useState<boolean>(false);
	const timeAgo = calculateTimestamp(comment.timestamp);

	const handleReply = (): void => {
		setIsReply(true);
	};

	const handleLikeComment = (id: number): void => {
		const updateLikes = (commentsList: CommentI[]): boolean => {
			for (const comment of commentsList) {
				if (comment.id === id) {
					if (isCommentLike) {
						comment.likes -= 1;
					} else {
						comment.likes += 1;
					}
					setIsCommentLike(!isCommentLike);
					return true;
				}
				if (comment.replies && comment.replies.length > 0) {
					const found = updateLikes(comment.replies);
					if (found) return true;
				}
			}
			return false;
		};

		if (comments) {
			updateLikes(comments);
		}
	};

	return (
		<div className={styles.commentWrapper}>
			<img
				src={comment.avatar}
				alt={`Avatar ${comment.name}`}
				className={styles.avatar}
			/>
			<div className={styles.commentContainer}>
				<div className={styles.commentText}>
					<div>
						<h3>{comment.name}</h3>
						<p>{comment.text}</p>
					</div>
					<span className={styles.timestamp}>{timeAgo}</span>
				</div>
				<div className={styles.actionButtons}>
					<button
						className={styles.likeBtn}
						onClick={() => handleLikeComment(comment.id)}
					>
						<svg
							width='17'
							height='14'
							viewBox='0 0 17 14'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M8.50487 13.9711L1.48812 7.54851C-2.32534 3.6949 3.28044 -3.704 8.50487 2.28192C13.7293 -3.704 19.3097 3.7206 15.5217 7.54851L8.50487 13.9711Z'
								fill={isCommentLike ? '#E92929' : '#A9A9A9'}
							/>
						</svg>
						{/* hide comment like number if equal 0 */}
						<span className={styles.buttonText}>
							{comment.likes ? comment.likes : null}
						</span>
					</button>
					<button
						className={styles.replyBtn}
						onClick={() => handleReply()}
					>
						<img
							src={replyIcon}
							alt='reply icon'
						/>
					</button>
				</div>
				{comment.replies && comment.replies.length > 0 && (
					<div className={styles.repliesContainer}>
						{comment.replies.map(reply => (
							<Comment
								key={reply.id}
								comment={reply}
								comments={comments}
								handleSubmitComment={handleSubmitComment}
							/>
						))}
					</div>
				)}
				{isReply && (
					<CommentField
						value={newComment}
						onChange={setNewComment}
						onSubmit={() => handleSubmitComment!(comment.id, newComment, setNewComment)}
					/>
				)}
			</div>
		</div>
	);
};

export default Comment;
