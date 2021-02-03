//TESTING GIT STUFF
import React from "react";
import "../App.css";
// import { makeStyles } from "@material-ui/core/styles";
import {calcStyles} from "./CalculatorStyles";
import BolusCalcDropdown from "./BolusCalcDropdown";
import BasalCalcDropdown from "./BasalCalcDropdown";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Header from"./Header";
import Footer from"./Footer";


export default function Calculator() {
	const classes = calcStyles();
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<React.Fragment>

			<div className={classes.root}>
				<Header />
				<hr />
				<Accordion
					expanded={expanded === "panel1"}
					onChange={handleChange("panel1")}
					elevation={0}
				>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.heading}>
							BOLUS
						</Typography>
					</AccordionSummary>
					<BolusCalcDropdown />
				</Accordion>
				<hr />
				<Accordion
					expanded={expanded === "panel2"}
					onChange={handleChange("panel2")}
					elevation={0}
				>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.heading}>
							BASAL
						</Typography>
					</AccordionSummary>
					<BasalCalcDropdown />
				</Accordion>
				<hr />
				<Footer />
			
			</div>
		</React.Fragment>
	);
}
