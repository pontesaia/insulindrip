
import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import { AboutRefStyles } from "./AboutRefStyles";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

export default function AboutReference() {
	const classes = AboutRefStyles();

	const textPages = [
		<>
			<Typography className={classes.heading}>
				About Formulas that are commonly used by providers to create
				insulin dose recommendations
			</Typography>
			<Typography className={classes.secondaryHeading}>
				First, some basic things to know about insulin:
			</Typography>
			<Typography className={classes.contentBody}>
				Approximately 40-50% of the total daily insulin dose is to
				replace insulin overnight, when you are fasting and between
				meals. This is called background or basal insulin replacement.
				The basal or background insulin dose usually is constant from
				day to day.
			</Typography>
			<Typography className={classes.contentBody}>
				The other 50-60% of the total daily insulin dose is for
				carbohydrate coverage (food) and high blood sugar correction.
				This is called the bolus insulin replacement.
			</Typography>
		</>,
	];

	return (
		<React.Fragment>
			<div className={classes.root}>
				<Header />
				<Grid container>
					<Grid container direction="column" spacing={0}>
						<FormControl>
							{textPages}
						</FormControl>
					</Grid>
				</Grid>
				<Footer />
			</div>
		</React.Fragment>
	);
}
