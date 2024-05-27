import menu from '@assets/icons/menu-icon.svg';
import logo from '@assets/logo.svg';
import styles from './styles.module.css';
import userAvatar from '/avatars/user-avatar.png';

const Header: React.FC = () => {
	return (
		<header className={styles.headerContainer}>
			<nav className={styles.nav}>
				<img
					src={logo}
					alt='logo'
					className={styles.logo}
				/>
				<div className={styles.navContainer}>
					<img
						src={userAvatar}
						alt='user avatar'
						className={styles.userAvatar}
					/>
					<img
						src={menu}
						alt='menu'
					/>
				</div>
			</nav>
		</header>
	);
};

export default Header;
