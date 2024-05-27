import divider from '@assets/devider.svg';
import postImgFirst from '@assets/posts/recent-post-1.png';
import postImgSecond from '@assets/posts/recent-post-2.png';
import styles from './styles.module.css';

const RecentPosts: React.FC = () => {
	return (
		<section className={styles.recentPosts}>
			<h1 className={styles.recentPostsTitle}>Recents post</h1>
			<div className={styles.postWithTitle}>
				<img
					src={postImgFirst}
					alt='post image'
				/>
				<div className={styles.postText}>
					<a href='#'>
						Climate change is hitting the heart of Cajun country — through its crawfish
					</a>
					<p>08 Jan 2024</p>
				</div>
			</div>
			<div className={styles.divider}>
				<img
					src={divider}
					alt='divider'
				/>
			</div>
			<div className={styles.postWithoutTitle}>
				<a href='#'>How global warming is disrupting life on Earth</a>
				<p>08 Jan 2024</p>
			</div>
			<div className={styles.divider}>
				<img
					src={divider}
					alt='divider'
				/>
			</div>
			<div className={styles.postWithTitle}>
				<img
					src={postImgSecond}
					alt='post image'
				/>
				<div className={styles.postText}>
					<a href='#'>
						Climate change is hitting the heart of Cajun country — through its crawfish
					</a>
					<p>08 Jan 2024</p>
				</div>
			</div>
			<div className={styles.divider}>
				<img
					src={divider}
					alt='divider'
				/>
			</div>
			<div className={styles.postWithTitle}>
				<img
					src={postImgFirst}
					alt='post image'
				/>
				<div className={styles.postText}>
					<a href='#'>
						Climate change is hitting the heart of Cajun country — through its crawfish
					</a>
					<p>08 Jan 2024</p>
				</div>
			</div>
			<div className={styles.divider}>
				<img
					src={divider}
					alt='divider'
				/>
			</div>
			<div className={styles.postWithoutTitle}>
				<a href='#'>How global warming is disrupting life on Earth</a>
				<p>08 Jan 2024</p>
			</div>
		</section>
	);
};

export default RecentPosts;
