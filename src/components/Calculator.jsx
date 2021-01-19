import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BolusCalcDropdown from "./BolusCalcDropdown";
import BasalCalcDropdown from "./BasalCalcDropdown";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Header from"./Header";
// import BasalReference from"./BasalReference";
// import BolusReference from"./BolusReference";
// import AboutReference from"./AboutReference";

const useStyles = makeStyles((theme) => ({
		
	root: {
		maxWidth: "350px",
		minWidth: "350px",
		margin: "2rem auto",
		//backgroundColor: "transparent"
		fontFamily: "Roboto"

	},
	heading: {
		fontSize: theme.typography.pxToRem(18),
		paddingLeft: ".5rem",
			fontWeight: "bold",	
	
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
	},
	formControl: {
		//width: "50rem",
	},
	formRow: {},
}));

export default function Calculator() {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<React.Fragment >
			<Header/>
			{/* <BolusReference/>
			<BasalReference/>
			<AboutReference/> */}
			<div className={classes.root} >
				<hr/>
				<Accordion
					expanded={expanded === "panel1"}
					onChange={handleChange("panel1")}
					elevation={0}
				>
					<AccordionSummary 
					expandIcon={<ExpandMoreIcon />}
					>
						<Typography className={classes.heading} >
							BOLUS
						</Typography>
					</AccordionSummary>
					<BolusCalcDropdown />
				</Accordion>
				<hr/>
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
				<hr/>
			</div>
		</React.Fragment>
	);
}
