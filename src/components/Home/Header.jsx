import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
	linkHeading: {
		fontSize: theme.typography.pxToRem(14),
		color: "#0F75BC",
        fontFamily: "Roboto",
        margin: ".5rem 0 5rem 0"
	},
	linkCalc: {
        color: "#0F75BC !important",
        fontWeight: "bold",
        fontSize: "1rem"
	},
	calcTitle: {
		color: "#0F75BC",
	},
}));


const getTitle =()=>{
   const url = window.location.href;
   console.log(url);
  

   const path = url.split('/');
    console.log(path);
   return path[3];

}







export default function Header() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Typography variant="h5" className={classes.calcTitle} gutterBottom>
				{getTitle()}
			</Typography>
			<a href="/">
				<img
					src="images/insulindrip-logo-sml.svg"
					style={{ width: "150px" }}
					id="brandLogo"
					alt="brandLogo"
				/>
			</a>
			<Typography className={classes.linkHeading}>
				<a href="/Calculator">
					<span className={classes.linkCalc}>CALCULATOR</span>
				</a>
				
				<a href="/Bolus">
					<span className={classes.linkCalc}>BOLUS</span>
				</a>
				
				<a href="/Basal">
					<span className={classes.linkCalc}>BASAL</span>
				</a>
			</Typography>
		</React.Fragment>
	);
}
