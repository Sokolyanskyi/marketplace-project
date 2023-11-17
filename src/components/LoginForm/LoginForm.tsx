import styles from './LoginForm.module.css'
import HomeButton from "../HomeButton/HomeButton.tsx";

const LoginForm = () => {
	return (
		<div className={styles['home-block']}>
			<div className={styles['home-button']}>
				<HomeButton/>
			</div>
			<div className={styles['login-form']}>
				Hi i`m LoginForm
			</div>

		</div>)
}
export default LoginForm