import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
	root: {
		//maxWidth: '35%',
		//margin: '2rem auto',
	},
	heading: {
		fontSize: theme.typography.pxToRem(22),
		// flexBasis: '33.33%',
		// flexShrink: 0,
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
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
	},
}));

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

export default function BolusCalcDropdown() {
	const classes = useStyles();
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
