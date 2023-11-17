import {Link} from "react-router-dom";
import styles from './HomeButton.module.css'

const HomeButton = () => {
	return (
		<div className={styles['home-button']}>
			<Link to={'/'}> ← Home</Link>
		</div>
	)
}
export default HomeButton