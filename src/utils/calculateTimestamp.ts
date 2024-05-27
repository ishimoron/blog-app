export const calculateTimestamp = (timestamp: number): string => {
	const now = new Date();
	const diff = now.getTime() - timestamp;
	const days = Math.floor(diff / (1000 * 60 * 60 * 24));

	if (days > 0) {
		return `${days}d`;
	} else {
		return 'today';
	}
};
