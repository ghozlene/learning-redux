import Counter from './Components/Counter';
import Header from './Components/Header';
import Auth from './Components/Auth';
import UserProfile from './Components/UserProfile';
import { useSelector } from 'react-redux';
function App() {
	const auth = useSelector((state) => state.auth.isAuth);
	return (
		<>
			<Header />
			{!auth && <Auth />}
			{auth && <UserProfile />}
			<Counter />
		</>
	);
}

export default App;
