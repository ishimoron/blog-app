import backIcon from '@assets/icons/back-icon.svg';
import lockIcon from '@assets/icons/lock-icon.svg';
import mainPost from '@assets/posts/mainPost.png';
import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import styles from './styles.module.css';

const BlogSection: React.FC = () => {
	return (
		<section className={styles.blogWrapper}>
			<div className={styles.blogContainer}>
				<div className={styles.backToPosts}>
					<img
						src={backIcon}
						alt='back icon'
					/>
					<a href='#'>Back to posts</a>
				</div>

				<div className={styles.onlyMembers}>
					<img
						src={lockIcon}
						alt='lock icon'
					/>
					<a href='#'>Only members</a>
				</div>

				<article>
					<div className={styles.blogInfo}>
						<h1 className={styles.blogTitle}>
							Why travel should be considered an essential human activity
						</h1>
						<p className={styles.blogDate}>12 Jan 2024</p>
					</div>

					<div className={styles.blogBody}>
						<div className={styles.textBox}>
							<p>
								I’ve been putting my passport to good use lately. I use it as a coaster
								and to level wobbly table legs. It makes an excellent cat toy.
							</p>

							<p>
								Welcome to the pandemic of disappointments. Canceled trips, or ones never
								planned lest they be canceled. Family reunions, study-abroad years, lazy
								beach vacations. Poof. Gone. Obliterated by a tiny virus, and the long
								list of countries where United States passports are not welcome.
							</p>

							<p>
								What if we can’t move, though? What if we’re unable to hunt or gather?
								What’s a traveler to do? There are many ways to answer that question.
								“Despair,” though, is not one of them.
							</p>
						</div>

						<img
							src={mainPost}
							alt='main post image'
							className={styles.mainPostBackground}
						/>

						<div className={styles.textBox}>
							<p>
								I’ve been putting my passport to good use lately. I use it as a coaster
								and to level wobbly table legs. It makes an excellent cat toy.
							</p>

							<p>
								Welcome to the pandemic of disappointments. Canceled trips, or ones never
								planned lest they be canceled. Family reunions, study-abroad years, lazy
								beach vacations. Poof. Gone. Obliterated by a tiny virus, and the long
								list of countries where United States passports are not welcome.
							</p>

							<p>
								What if we can’t move, though? What if we’re unable to hunt or gather?
								What’s a traveler to do? There are many ways to answer that question.
								“Despair,” though, is not one of them.
							</p>
						</div>
					</div>
				</article>
				<CommentSection />
			</div>
		</section>
	);
};

export default BlogSection;
