
import "./App.css";
import Calculator from "./components/Home/Calculator";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import AboutReference from "./components/About/AboutReference";
import BolusReference from "./components/Bolus/BolusReference";
import BasalReference from "./components/Basal/BasalReference";
import GRID from "./components/GRID"

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" render={() => <Calculator />} />
				<Route exact path="/Calculator" render={() => <Calculator />} />
				<Route
					exact
					path="/Bolus"
					render={() => <BolusReference />}
				/>
				<Route
					exact
					path="/Basal"
					render={() => <BasalReference />}
				/>
				<Route
					exact
					path="/About"
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
