import "./App.css";
import Home from "./components/Home/Home";
import Calculator from "./components/Home/Calculator";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import AboutReference from "./components/About/AboutReference";
import BolusReference from "./components/Bolus/BolusReference";
import BasalReference from "./components/Basal/BasalReference";
import Login from "./components/Home/Login";
import Register from "./components/Home/Register";
import GRID from "./components/GRID";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" render={() => <Home />} />
				<Route exact path="/Calculator" render={() => <Calculator />} />
				<Route exact path="/Home" render={() => <Home />} />
				<Route exact path="/Bolus" render={() => <BolusReference />} />
				<Route exact path="/Basal" render={() => <BasalReference />} />
				<Route exact path="/About" render={() => <AboutReference />} />
				<Route exact path="/Login" render={() => <Login />} />
				<Route exact path="/Register" render={() => <Register />} />
				<Route exact path="/GRID" render={() => <GRID />} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
