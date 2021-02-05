import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
	linkHeading: {
		fontSize: theme.typography.pxToRem(14),
		color: "#0F75BC",
		fontFamily: "Roboto",
		margin: "5rem 0 2rem 0",
	},
	linkCalc: {
		color: "#0F75BC !important",
		fontWeight: "bold",
		fontSize: "2.5rem"
	},
}));

export default function Footer() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Typography className={classes.linkHeading}>
				<Grid
					container
					direction="row"
					justify="space-evenly"
					alignItems="center"
				>
					<Grid item>
						<a href="/Calculator">
							<span className={classes.linkCalc}>
								<Tooltip title="Home">
									<HomeIcon fontSize="inherit" />
								</Tooltip>
							</span>
						</a>
					</Grid>
					<Grid item>
						<a href="/About">
							<span className={classes.linkCalc}>
								<Tooltip title="About">
									<LocalLibraryIcon fontSize="inherit" />
								</Tooltip>
							</span>
						</a>
					</Grid>
					<Grid item>
						<a href="/Home">
							<span className={classes.linkCalc}>
								<Tooltip title="Logout">
									<ExitToAppIcon fontSize="inherit" />
								</Tooltip>
							</span>
						</a>
					</Grid>
					<Grid item>
						<a href="/Home">
							<span className={classes.linkCalc}>
								<Tooltip title="Account">
									<AccountCircleIcon fontSize="inherit" />
								</Tooltip>
							</span>
						</a>
					</Grid>
				</Grid>
			</Typography>
		</React.Fragment>
	);
}
