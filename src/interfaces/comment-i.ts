export interface CommentI {
	id: number;
	name: string;
	text: string;
	likes: number;
	avatar: string;
	timestamp: number;
	replies: CommentI[];
}
