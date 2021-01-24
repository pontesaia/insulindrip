import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {calcStyles} from "./CalculatorStyles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const items = [
	{
		name: "Desired dose",
		quantity: "mg/lb",
	},
	{
		name: "Body weight",
		quantity: "mg/lb",
	},
	{
		name: "Concentration",
		quantity: "mg/L",
	},
	{
		name: "Bag volume",
		quantity: "ml",
	},
	{
		name: "Drug in bag",
		quantity: "mg",
	},
	{
		name: "Drip rate",
		quantity: "mg",
	},
	{
		name: "Drop factor",
		quantity: "gtts",
	},
	{
		name: "Flow rate",
		quantity: "gtts",
	},
];

export default function BasalCalcDropdown() {
	const classes = calcStyles();
	const calcField = items.map((i) => (
		<FormControl variant="filled" className={classes.formControl}>
			<Grid item>
				<Select
					labelId="demo-simple-select-filled-label0"
					id="demo-simple-select-filled0"
					value=" "
				>
					<MenuItem value=" ">
						<em>{i.name}</em>
					</MenuItem>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
				<Select
					className="short"
					labelId="demo-simple-select-filled-label0"
					id="demo-simple-select-filled0"
					value=" "
				>
					<MenuItem value=" ">
						<em>{i.quantity}</em>
					</MenuItem>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
			</Grid>
		</FormControl>
	));

	return (
		<React.Fragment>
			<Grid container>
				<Grid container direction="column" spacing={0}>
					{calcField}
					<FormControl>
						<Grid item>
							<Button
								variant="contained"
								color="primary"
								component="span"
								className={classes.calcButton}
							>
								Calc
							</Button>
						</Grid>
					</FormControl>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}