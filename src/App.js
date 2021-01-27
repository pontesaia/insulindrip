
import "./App.css";
import Calculator from "./components/Calculator";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import AboutReference from "./components/AboutReference";
import BolusReference from "./components/BolusReference";
import BasalReference from "./components/BasalReference";
import GRID from "./components/GRID"

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" render={() => <Calculator />} />
				<Route exact path="/calculator" render={() => <Calculator />} />
				<Route
					exact
					path="/BolusReference"
					render={() => <BolusReference />}
				/>
				<Route
					exact
					path="/BasalReference"
					render={() => <BasalReference />}
				/>
				<Route
					exact
					path="/AboutReference"
					render={() => <AboutReference />}
				/>
				<Route
					exact
					path="/GRID"
					render={() => <GRID />}
				/>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
