import React from "react";

import FormControl from "@material-ui/core/FormControl";
import { TextField } from '@material-ui/core';
import {calcStyles} from "../Home/CalculatorStyles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

export default function BasalCalcDropdown() {
	const classes = calcStyles()

	function insulinCalculate() {
	//let unit;
    let desiredDose = document.getElementById("desiredDose").value;
    let bodyWeight = document.getElementById("bodyWeight").value;
    let bagVolume = document.getElementById("bagVolume").value;
    let drugInBag = document.getElementById("drugInBag").value;
    let dripRate = document.getElementById("dripRate").value;

    dripRate = (60 * (desiredDose / 1000) * bodyWeight * bagVolume) / (1000 * drugInBag);
   
    document.getElementById('result').innerHTML = 
        "<p>BASAL: As calculated, the Insulin drip rate is <span class='hilite'>" + dripRate 
     + "</span> ml of rapid acting insulin per minute. <br/>.</p>"; 
}
    

	return (
	
		<React.Fragment>
			<Grid container>
				<Grid container direction="column" spacing={0}>
					<FormControl variant="filled" className={classes.formControl}>
						
						{/* Desired Dose*/}
						<Grid item className={classes.formRow}>
							<TextField 
								id="desiredDose" 
								label="Desired dose" 
								variant="outlined" 
							/>
							<span className={classes.formMeasure}>/ ml</span>
						</Grid>

                        {/* Body Weight*/}
						<Grid item className={classes.formRow}>
								<TextField 
								id="bodyWeight" 
								label="Body weight" 
								variant="outlined" 
							/>
							<span className={classes.formMeasure}>/ kg</span>
						</Grid>

						{/* Bag Volume*/}
						<Grid item className={classes.formRow}>
							<TextField 
								id="bagVolume" 
								label="Bag volume" 
								variant="outlined" 
							/>
							<span  className={classes.formMeasure}>/ ml</span>
						</Grid>

						{/* Bag Volume*/}
						<Grid item className={classes.formRow}>
							<TextField 
								id="drugInBag" 
								label="Drug in bag" 
								variant="outlined" 
							/>
							<span className={classes.formMeasure}>/ mg</span>
						</Grid>

						{/* Drip rate*/}
						<Grid item className={classes.formRowRate}>
							<TextField 
								id="dripRate" 
								label="Drip rate" 
								variant="outlined" 
							/>
							<span className={classes.formMeasure}>/ ml/min</span>
						</Grid>
	
						{/* button */}
						<Grid item>
							<Button
							    variant="contained"
								color="primary"
								component="span"
								className={classes.calcButton}
								onClick={insulinCalculate}
							>
							Calc
							</Button>
						</Grid>

						{/* results */}
						<Grid item>
							<div
							   id="result" 
							>
							</div>
						</Grid>
						
			  		</FormControl>
				</Grid>
		  	</Grid>
		</React.Fragment>
	);
}