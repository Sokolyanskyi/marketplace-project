import styles from './Header.module.css'
import {Link} from "react-router-dom";
const Header = () => {
	return (
		<div className={styles['header']}>
			<div>Marketplace</div>
			<Link className={styles['login-link']} to='/login'>Login</Link>

		</div>
	)
}
export default Header