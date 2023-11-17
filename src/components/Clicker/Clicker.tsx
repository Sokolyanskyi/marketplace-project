import styles from './Clicker.module.css'
import {useState} from "react";
const Clicker = () => {
	const [count, setCount] = useState(0)
	const increase = () => {
		return setCount(count + 1)
	}
	const reset = () => {
		return setCount(0)
	}
	return (<div className={styles['clicker']}>
			<div className={styles['count-block']}>
			<h1>You clicked {count} times!</h1>
			<button onClick={increase}>Click me</button>
			<div></div>
			<button onClick={reset}>Reset</button>
		</div>
	</div>

	)
}
export default Clicker