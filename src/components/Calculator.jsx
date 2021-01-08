import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Bolus from "./Bolus";
import Basal from "./Basal";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "35%",
		margin: "0 auto",
	},
	heading: {
		fontSize: theme.typography.pxToRem(22),
		flexBasis: "33.33%",
		flexShrink: 0,
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
	},
}));

export default function Calculator() {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};
	return (
		<React.Fragment>
			<h4>
				<a href="google.com">
					<span className="linkCalc"> CALCULATOR </span>
				</a>
				|
				<a href="google.com">
					<span className="linkCalc"> BOLUS </span>
				</a>
				|
				<a href="google.com">
					<span className="linkCalc"> BASAL </span>
				</a>
			</h4>
			<div className={classes.root}>
				<Accordion
					expanded={expanded === "panel1"}
					onChange={handleChange("panel1")}
				>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.heading}>
							BOLUS
						</Typography>
					</AccordionSummary>
					<Bolus />
				</Accordion>
				<Accordion
					expanded={expanded === "panel2"}
					onChange={handleChange("panel2")}
				>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.heading}>
							BASAL
						</Typography>
					</AccordionSummary>
					<Basal />
				</Accordion>
			</div>
		</React.Fragment>
	);
}
