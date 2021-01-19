import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
	linkHeading: {
        fontSize: theme.typography.pxToRem(14),
        color:"#0F75BC",
		fontFamily: "Roboto"
    },
    linkCalc:{
        color: "#0F75BC!important"
    },
    calcTitle: {
        color: "#0F75BC"
    },

}));

export default function Header() {
	const classes = useStyles();

	return (
		<React.Fragment>
            <Typography variant="h5" className={classes.calcTitle} gutterBottom>
               Calculator
            </Typography>
            <img
                src="images/insulindrip-logo-sml.svg"
                style={{ width: "150px" }}
                id="brandLogo"
                alt="brandLogo"
            />
			<Typography className={classes.linkHeading}>
				<a href="./calculator">
					<span className="linkCalc"> CALCULATOR</span>
				</a>
                |
                <a href="./BolusReference">
					<span className="linkCalc"> BOLUS</span>
				</a>
                |
                <a href="./BasalReference">
					<span className="linkCalc"> BASAL</span>
				</a>
			</Typography>
        
			
        </React.Fragment>
    );
}
