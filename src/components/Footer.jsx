import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
	linkHeading: {
		fontSize: theme.typography.pxToRem(14),
		color: "#0F75BC",
        fontFamily: "Roboto",
        margin: "5rem 0 2rem 0"
	},
	linkCalc: {
        color: "#0F75BC !important",
        fontWeight: "bold",
        fontSize: ".8rem"
	}
}));

export default function Footer() {
	const classes = useStyles();

	return (
		<React.Fragment>
	
			<Typography className={classes.linkHeading}>
				<a href="/calculator">
					<span className={classes.linkCalc}>HOME</span>
				</a>
				|<a href="/AboutReference">
					<span className={classes.linkCalc}>ABOUT</span>
				</a>
				|
				<a href="/calculator">
					<span className={classes.linkCalc}>LOGOUT</span>
				</a>
				|
				<a href="/calculator">
					<span className={classes.linkCalc}>ACCOUNT</span>
				</a>
			</Typography>
		</React.Fragment>
	);
}
