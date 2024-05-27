import { CommentI } from '../interfaces/comment-i'

export const countAllComments = (comments: CommentI[]): number => {
	let count = 0;
	comments.forEach(comment => {
		count++;
		if (comment.replies && comment.replies.length > 0) {
			count += countAllComments(comment.replies);
		}
	});
	return count;
};
