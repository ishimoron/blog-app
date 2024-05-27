import likeIcon from '@assets/icons/like-icon.svg';
import styles from './styles.module.css';
import authorAvatar from '/avatars/author-avatar.png';

const AuthorSection: React.FC = () => {
	return (
		<div className={styles.authorSection}>
			<div className={styles.authorWrapper}>
				<img
					src={authorAvatar}
					alt='author avatar'
					className={styles.authorAvatar}
				/>
				<h3 className={styles.authorName}>Brooklyn Simmons</h3>
				<span className={styles.authorSupporters}>
					<img
						src={likeIcon}
						alt='like icon'
					/>
					12 supporters
				</span>

				<button className={styles.joinBtn}>Join for more</button>
			</div>
		</div>
	);
};

export default AuthorSection;
