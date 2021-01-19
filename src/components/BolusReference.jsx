import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({

		root: {
		maxWidth: "350px",
		minWidth: "350px",
		margin: "2rem auto",
		backgroundColor: "transparent"
	},
	heading: {
		fontSize: theme.typography.pxToRem(18),
		textAlign:"left",
		fontWeight: "bold",
		marginBottom:"1rem"
		
	},
	contentBody:{
		fontSize: theme.typography.pxToRem(14),
		textAlign:"left",
		marginBottom:"1rem"
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(16),
		color: theme.palette.text.primary,
		textAlign:"left",
		marginTop:"1rem",
		marginBottom:".5rem",
		fontWeight: "bold",
	},
	formControl: {
		//width: "50rem",
	},
	formRow: {},
	calcButton: {
		borderRadius: "25px",
		backgroundColor: "#35AEE3",
		// padding: "12px, 32px, 12px, 32px",
		width: "100px", 
		height: "48px",
		marginTop: "25px",
		marginBottom: "10px",
		marginLeft:"2rem",
		marginRight:"2rem",
	},
}));

export default function BolusReference() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Grid container className={classes.root} >
			  <Grid container direction="column" spacing={0}>
			

					<Typography className={classes.heading}>
						Bolus – Carbohydrate coverage
					</Typography>

					<Typography className={classes.contentBody}>
					The bolus dose for food coverage is prescribed as an insulin to carbohydrate ratio.The insulin to carbohydrate ratio represents how many grams of carbohydrate are covered or disposed of by 1 unit of insulin.
					</Typography>

					<Typography className={classes.contentBody}>
					Generally, one unit of rapid-acting insulin will dispose of 12-15 grams of carbohydrate. This range can vary from 4-30 grams or more of carbohydrate depending on an individual’s sensitivity to insulin. Insulin sensitivity can vary according to the time of day, from person to person, and is affected by physical activity and stress.
					</Typography>


						<FormControl>
						<Grid item>
							<Button
								variant="contained"
								color="primary"
								component="span"
								className={classes.calcButton}
							>
								Prev
							</Button>
							<Button
								variant="contained"
								color="primary"
								component="span"
								className={classes.calcButton}
							>
								Next
							</Button>
						</Grid>
					</FormControl>
					
					<Typography className={classes.secondaryHeading}>
					Examples:
					</Typography>
					
					<Typography className={classes.contentBody}>
					Read some examples and therapeutic principles on how to calculate the carbohydrate coverage dose, high blood sugar correction dose and the total mealtime insulin dose.
					</Typography>

					<Typography className={classes.secondaryHeading}>
					Example #1: Carbohydrate coverage at a meal
					</Typography>
					
					<Typography className={classes.contentBody}>
					First, you have to calculate the carbohydrate coverage insulin dose using this formula:
					</Typography>
					
					<Typography className={classes.contentBody}>
					CHO insulin dose =
					Total grams of CHO in the meal
					÷  grams of CHO disposed by     
					1 unit of insulin
					(the grams of CHO disposed of by     
					1 unit of insulin is the bottom number or         
					denominator of the Insulin:CHO ratio).
					</Typography>

					<Typography className={classes.secondaryHeading}>
					For Example #1, assume:
					</Typography>

					<Typography className={classes.contentBody}>
					You are going to eat 60 grams of carbohydrate for lunch
					Your Insulin: CHO ratio is 1:10
					To get the CHO insulin dose, plug the numbers into the formula:
					CHO insulin dose =
					Total grams of CHO in the meal (60 g)
					÷ grams of CHO disposed by 
					1 unit of insulin (10) = 6 units
					You will need 6 units of rapid acting insulin to cover the carbohydrate.
					</Typography>

					<Typography className={classes.secondaryHeading}>
					For Example #2, assume:
					</Typography>

					<Typography className={classes.contentBody}>
					1 unit will drop your blood sugar 50 points (mg/dl) and the high blood sugar correction factor is 50.
					Pre-meal blood sugar target is 120 mg/dl.
					Your actual blood sugar before lunch is 220 mg/dl.
					</Typography>

					<Typography className={classes.contentBody}>
					Now, calculate the difference between your actual blood sugar and target blood sugar:
					</Typography>

					<Typography className={classes.contentBody}>
					220 minus 120 mg/dl = 100 mg/dl
					To get the high blood sugar correction insulin dose, plug the numbers into this formula:
					</Typography>

					<Typography className={classes.contentBody}>
					Correction dose =
					Difference between actual and target blood glucose (100mg/dl)
					÷ correction factor (50) = 2 units of rapid acting insulin
					So, you will need an additional 2 units of rapid acting insulin to “correct” the blood sugar down to a target of 120 mg/dl.
					</Typography>
					
					<FormControl>
						<Grid item>
							<Button
								variant="contained"
								color="primary"
								component="span"
								className={classes.calcButton}
							>
								Prev
							</Button>
							<Button
								variant="contained"
								color="primary"
								component="span"
								className={classes.calcButton}
							>
								Next
							</Button>
						</Grid>
					</FormControl>

					<Typography className={classes.secondaryHeading}>
					Example #3:
					</Typography>

					<Typography className={classes.contentBody}>
					Total mealtime dose
					</Typography>

					<Typography className={classes.contentBody}>
					Finally, to get the total mealtime insulin dose, add the CHO insulin dose together with the high blood sugar correction insulin dose:
					</Typography>

					<Typography className={classes.contentBody}>
					CHO Insulin Dose
					+ High Blood Sugar Correction Dose
					= Total Meal Insulin Dose
					</Typography>

					<Typography className={classes.secondaryHeading}>
					For Example #3, assume:
					</Typography>

					<Typography className={classes.contentBody}>
					The carbohydrate coverage dose is 6 units of rapid acting insulin.
					The high blood sugar correction dose is 2 units of rapid acting insulin.
					Now, add the two doses together to calculate your total meal dose.
					</Typography>

					<Typography className={classes.contentBody}>
					Carbohydrate coverage dose (6 units)
					+ high sugar correction dose (2 units)
					= 8 units total meal dose!
					The total lunch insulin dose is 8 units of rapid acting insulin.
					</Typography>

					<FormControl>
						<Grid item>
							<Button
								variant="contained"
								color="primary"
								component="span"
								className={classes.calcButton}
							>
								Prev
							</Button>
							<Button
								variant="contained"
								color="primary"
								component="span"
								className={classes.calcButton}
							>
								Next
							</Button>
						</Grid>
					</FormControl>
					
					<Typography className={classes.secondaryHeading}>
					Example #4: Formulas commonly used to create insulin dose recommendations
					</Typography>

					<Typography className={classes.contentBody}>
					This example illustrates a method for calculating of your background/basal and bolus doses and estimated daily insulin dose when you need full insulin replacement. Bear in mind, this may be too much insulin if you are newly diagnosed or still making a lot of insulin on your own. And it may be too little if you are very resistant to the action of insulin. Talk to your provider about the best insulin dose for you as this is a general formula and may not meet your individual needs.
					</Typography>

					<Typography className={classes.contentBody}>
					The initial calculation of the basal/background and bolus doses requires estimating your total daily insulin dose:
					</Typography>

					<Typography className={classes.secondaryHeading}>
					Total Daily Insulin Requirement
					</Typography>

					<Typography className={classes.contentBody}>
					The general calculation for the body’s daily insulin requirement is:
					</Typography>
					
					<Typography className={classes.contentBody}>
					Total Daily Insulin Requirement(in units of insulin)
					= Weight in Pounds ÷ 4
					</Typography>
					
					<Typography className={classes.contentBody}>
					Alternatively, if you measure your body weight in kilograms:
					</Typography>
					
					<Typography className={classes.contentBody}>
					Total Daily Insulin Requirement (in units of insulin)
					= 0.55 X Total Weight in Kilograms
					</Typography>
					
					<FormControl>
						<Grid item>
							<Button
								variant="contained"
								color="primary"
								component="span"
								className={classes.calcButton}
							>
								Prev
							</Button>
							<Button
								variant="contained"
								color="primary"
								component="span"
								className={classes.calcButton}
							>
								Next
							</Button>
						</Grid>
					</FormControl>

					<Typography className={classes.secondaryHeading}>
					Example 1:
					</Typography>			

					<Typography className={classes.contentBody}>
					If you are measuring your body weight in pounds:
					Assume you weigh 160 lbs.
					In this example:
					TOTAL DAILY INSULIN DOSE = 160 lb ÷ 4 = 40 units of insulin/day
					</Typography>


					<Typography className={classes.secondaryHeading}>
					Example 2:
					</Typography>
					<Typography className={classes.contentBody}>
					If you are measuring your body weight in kilograms:
					Assume your weight is 70Kg
					</Typography>


					<Typography className={classes.secondaryHeading}>	
					In this example:
					TOTAL DAILY INSULIN DOSE
					= 0.55 x 70 Kg = 38.5 units of insulin/day
					</Typography>


					<Typography className={classes.contentBody}>
					If your body is very resistant to insulin, you may require a higher dose. If your body is sensitive to insulin, you may require a lower insulin dose.
					</Typography>
					
				

					<FormControl>
						<Grid item>
							<Button
								variant="contained"
								color="primary"
								component="span"
								className={classes.calcButton}
							>
								Prev
							</Button>
							<Button
								variant="contained"
								color="primary"
								component="span"
								className={classes.calcButton}
							>
								Next
							</Button>
						</Grid>
					</FormControl>
				</Grid>
			</Grid>

		</React.Fragment>
	);
}