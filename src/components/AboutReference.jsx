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

export default function AboutReference() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Grid container className={classes.root} >
			  <Grid container direction="column" spacing={0}>
			
				
					<Typography className={classes.heading}>
						About Formulas that are commonly used by providers to create insulin dose recommendations
					</Typography>
					<Typography className={classes.secondaryHeading}>
						First, some basic things to know about insulin:
					</Typography>
					<Typography className={classes.contentBody}>
						Approximately 40-50% of the total daily insulin dose is to replace insulin overnight, when you are fasting and between meals. This is called background or basal insulin replacement. The basal or background insulin dose usually is constant from day to day.
					</Typography>
					<Typography className={classes.contentBody}>
						The other 50-60% of the total daily insulin dose is for carbohydrate coverage (food) and high blood sugar correction. This is called the bolus insulin replacement.
					</Typography>
					<FormControl>
							<Grid item>
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
