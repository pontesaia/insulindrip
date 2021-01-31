import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import { BasalRefStyles } from "./BasalRefStyles";
import Header from"../Home/Header";
import Footer from"../Home/Footer";


export default function BasalReference(){
	
	const classes = BasalRefStyles();
	const [index, setIndex] = useState(0);

	const previous = () => {
		index !== 0 ? setIndex((prev) => prev - 1) : setIndex(0);
	};
	const next = () => {
		index === textPages.length - 1
			? setIndex(index)
			: setIndex((prev) => prev + 1);
	};

	const textPages = [
		<>
				<Typography className={classes.heading}>
					Basal/background insulin dose
				</Typography>
				<Typography className={classes.contentBody}>
				Basal/background insulin dose
				= 50% of TDI (40 units) = 20 units
				of either long acting insulin,(such as glargine or detemir) or rapid acting insulin if you are using an insulin pump (continuous subcutaneous insulin infusion device).
				
				</Typography>
				<Typography className={classes.secondaryHeading}>
					The carbohydate coverage ratio:
				</Typography>
				<Typography className={classes.contentBody}>
				500 ÷ Total Daily Insulin Dose
				= 1 unit insulin covers so many grams of carbohydrate
				This can be calculated using the Rule of “500”: Carbohydrate Bolus Calculation
               	</Typography>

				<Typography className={classes.secondaryHeading}>
					Example:
				</Typography>
				
				<Typography className={classes.contentBody}>
					Assume your total daily insulin dose (TDI)
				= 160 lbs ÷ 4 = 40 units
				</Typography>
				
				<Typography className={classes.contentBody}>
				In this example:
				Carbohydrate coverage ratio
				= 500 ÷ TDI (40 units)
				= 1unit insulin/ 12 g CHO
				</Typography>
				
				<Typography className={classes.contentBody}>
				This example above assumes that you have a constant response to insulin throughout the day. In reality, individual insulin sensitivity varies. Someone who is resistant in the morning, but sensitive at mid-day, will need to adjust the insulin-to-carbohydrate ratio at different meal times. 
				
				</Typography>
			    <Typography className={classes.contentBody}>
				In such a case, the background insulin dose would still be approximately 20 units; however, the breakfast insulin-to-carbohydrate ratio might be breakfast 1:8 grams, lunch 1:15 grams and dinner 1:12 grams.
				The insulin to carbohydrate ratio may vary during the day.
				</Typography>
				
				<Typography className={classes.contentBody}>
				The high blood sugar correction factor:
				Correction Factor = 1800 ÷Total Daily Insulin Dose = 1 unit of insulin will reduce the blood sugar so many mg/dl
				This can be calculated using the Rule of “1800”.
				</Typography>
				
				<Typography className={classes.secondaryHeading}>
					Example:
				</Typography>
				
				<Typography className={classes.contentBody}>
				Assume your total daily insulin dose(TDI) = 160 lbs ÷ 4 = 40 units
				In this example:
				Correction Factor
				= 1800 ÷ TDI(40 units)
				= 1 unit insulin will drop reduce the blood sugar level by 45 mg/dl
				</Typography>
				
				<Typography className={classes.contentBody}>
				While the calculation is 1 unit will drop the blood sugar 45 mg/dl, to make it easier most people will round up or round down the number so the suggested correction factor may be 1 unit of rapid acting insulin will drop the blood sugar 40-50 mg/dl.
					</Typography>
				
				<Typography className={classes.contentBody}>
				Please keep in mind, the estimated insulin regimen is an initial “best guess” and the dose may need to be modified to keep your blood sugar on target.
				</Typography>
				<Typography className={classes.contentBody}>
					Also, there are many variations of insulin therapy. You will need to work out your specific insulin requirements and dose regimen with your medical provider and diabetes team.
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
							{textPages[index]}
							<Grid item>
								<Button
									variant="contained"
									color="primary"
									component="span"
									className={classes.calcButton}
									onClick={previous}
									disabled={
										index === 0
											? true
											: false
									}
								>
									Prev
								</Button>
								<Button
									variant="contained"
									color="primary"
									component="span"
									className={classes.calcButton}
									onClick={next}
									disabled={
										index === textPages.length - 1
											? true
											: false
									}
								>
									Next
								</Button>
							</Grid>
						</FormControl>
					</Grid>
				</Grid>
				<Footer />
			</div>
		</React.Fragment>
	);
}
