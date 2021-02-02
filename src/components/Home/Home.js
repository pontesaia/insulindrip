import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import { HomeStyles } from "./HomeStyles";
import Login from "./LoginComponent";
import Register from "./RegisterComponent";



export default function Home() {

        const classes = HomeStyles();
      
		return (
			<React.Fragment>
			<div className={classes.root}>
			<Grid container>
				<Grid container direction="row" spacing={0}>
					<FormControl>
				        <Grid item>
							<img
								src="../images/insulindrip-logo-sml.svg"
								id="logoImage"
								alt=""
							/>
							
                            <Typography className={classes.secondaryHeading}>
				                Insulin Drip Calculator
			                </Typography>
						</Grid>
					
						<Grid item>
							<Button
								variant="contained"
								color="primary"
								component="span"
								className={classes.loginButton}
							>
								LOGIN
							</Button>
						</Grid>
					
						 <Grid item>
								<Button
								variant="contained"
								color="primary"
								component="span"
								className={classes.registerButton}
							>
								REGISTER
							</Button>
						</Grid>
                        <Grid item>
                            <Login/>
                        </Grid>
                        <Grid item>
                            <Register/>
                        </Grid>

                    </FormControl>
                </Grid>
            </Grid>
                    
			</div>
		</React.Fragment>
		);
	}
