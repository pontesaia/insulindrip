import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
//import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import { HomeStyles } from "./HomeStyles";
//import Login from "./Login";
//import Register from "./Register";
import { Link } from "react-router-dom";


export default function Home() {
	
	const classes = HomeStyles();

	return (
		<React.Fragment>
			<div className={classes.root}>
				<Grid
				container
				direction="column"
				spacing={0}
				>
					<Grid item>
						<img
						src="../images/insulindrip-logo-sml.svg"
						className={classes.logo}
						alt=""
						/>
						<Typography className={classes.secondaryHeading}>
						Insulin Drip Calculator
						</Typography>

						<Grid
						container
						item
						direction="row"
						spacing={0}
						className={classes.btnrow}	
						>
							<Grid container item direction="row" className={classes.btnWrap}	>
								<Grid item>
								<Link to="/Login">
									<Button
									variant="contained"
									color="primary"
									component="span"
									className={classes.loginButton}	
									>
									LOGIN
									</Button>
								</Link>
							</Grid>

							<Grid item>
								<Link to="/Register">
									<Button
									variant="contained"
									color="primary"
									component="span"
									className={classes.registerButton}
									>
									REGISTER
									</Button>
								</Link>
							</Grid>
							</Grid>
						</Grid>	
					</Grid>	
				</Grid>
			</div>
		</React.Fragment>
	);
}
