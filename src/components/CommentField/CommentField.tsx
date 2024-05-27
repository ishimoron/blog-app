import React, { useEffect, useRef } from 'react';
import styles from './styles.module.css';
import commentAvatar from '/avatars/user-comment-avatar.png';

interface CommentFieldProps {
	value: string;
	onFocus?: boolean;
	onChange: (value: string) => void;
	onSubmit: () => void;
	setFocus?: (focus: boolean) => void;
}

const CommentField: React.FC<CommentFieldProps> = ({
	value,
	onChange,
	onSubmit,
	onFocus = false,
	setFocus = () => {},
}) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleSubmit = (e: React.KeyboardEvent): void => {
		if (e.key === 'Enter') {
			onSubmit();
		}
	};

	useEffect(() => {
		if (onFocus && inputRef.current) {
			inputRef.current.focus();
		}
	}, [onFocus]);

	const handleBlur = () => {
		setFocus(false);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
	};

	return (
		<div className={styles.inputContainer}>
			<img
				src={commentAvatar}
				alt='comment avatar'
			/>
			<input
				ref={inputRef}
				type='text'
				value={value}
				placeholder='Comment here...'
				onChange={e => handleChange(e)}
				onKeyDown={handleSubmit}
				onBlur={handleBlur}
			/>
		</div>
	);
};

export default CommentField;
