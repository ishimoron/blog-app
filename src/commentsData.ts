import { CommentI } from './interfaces/comment-i'

const commentsData: CommentI[] = [
	{
		id: 1,
		name: 'Emily Fray',
		text: 'Really cool! ✌ I love it!🌏 ',
		likes: 2,
		avatar: '/avatars/comment-avatar-1.png',
		// simulate comment date publication 1 day ago
		timestamp: Date.now() - (1 * 24 * 60 * 60 * 1000),
		replies: [
			{
				id: 11,
				name: 'John Doe',
				text: 'I agree with you!',
				likes: 1,
				avatar: '/avatars/comment-avatar-2.png',
				timestamp: Date.now(),
				replies: [],
			},
		],
	},
	{
		id: 2,
		name: 'Esther Howard',
		text: 'I would also love to visit there! The best place for me. Will definitely go back there again with my family ☘💕',
		likes: 0,
		avatar: '/avatars/comment-avatar-2.png',
		timestamp: Date.now() - (2 * 24 * 60 * 60 * 1000),
		replies: [
			{
				id: 12,
				name: 'Jane Smith',
				text: 'Same here, had a great time there!',
				likes: 2,
				avatar: '/avatars/comment-avatar-1.png',
				timestamp: Date.now() - (1 * 24 * 60 * 60 * 1000),
				replies: [],
			},
		],
	},
];

export default commentsData;
