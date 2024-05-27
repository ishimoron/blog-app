import styles from './App.module.css';
import AuthorSection from './components/AuthorSection/AuthorSection';
import BlogSection from './components/BlogSection/BlogSection';
import Header from './components/Header/Header';
import RecentPosts from './components/RecentPosts/RecentPosts';

const App: React.FC = () => {
	return (
		<>
			<Header />
			<div className={styles.container}>
				<div className={styles.blogSection}>
					<BlogSection />
				</div>
				<div className={styles.authorSection}>
					<AuthorSection />
					<RecentPosts />
				</div>
			</div>
		</>
	);
};

export default App;
