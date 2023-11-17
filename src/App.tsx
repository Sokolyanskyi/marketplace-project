import './App.module.css'
import Clicker from "./components/Clicker/Clicker.tsx";
import Footer from "./components/Footer/Footer.tsx";
import styles from './App.module.css'
import Header from "./components/Header/Header.tsx";
function App() {

	return (<div className={styles['body']}>
			<Header/>
			<Clicker/>
			<Footer/>
		</div>
	)
}

export default App
