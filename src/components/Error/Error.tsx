import styles from './Error.module.css'
import HomeButton from "../HomeButton/HomeButton.tsx";

const Error = () => {
	return (<div className={styles['error-block']}>
			<div className={styles['home-button']}><HomeButton/></div>
			<div className={styles['error']}>
				Error 404 page not found!
			</div>
		</div>

	)
}
export default Error