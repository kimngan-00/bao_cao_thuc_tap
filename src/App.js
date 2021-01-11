import logo from './logo.svg';
import './App.scss';
import ContainLogin from './pages/containLogin/containLogin.jsx';
import HomePage from './pages/home/home';
import { Redirect, Route, Switch, BrowserRouter as Router } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/home">
					<HomePage />
				</Route>

				<Route path="/">
					<ContainLogin />
				</Route>
			</Switch>
		</Router>
	);
}


export default App;
