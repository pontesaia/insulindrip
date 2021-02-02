import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
//import Typography from "@material-ui/core/Typography";
import { HomeStyles } from "./HomeStyles";



export default function Register() {
     const classes = HomeStyles();

		return (
			<React.Fragment>
				<div className={classes.root}>
				    <Grid container>
					    <Grid container direction="column" spacing={0}>
                               <Grid item>
										<h1>
											<Button
												name="registerCollapsed"
											>
												↩
											</Button>
										</h1>
								</Grid>
								<Grid item>
										<h1>Register</h1>
								</Grid>
                                    <Grid item>
										<input
											type="text"
											name="username"
											placeholder="Enter your username"
											id="username"
										/> 
                                    </Grid>
								    <Grid item>
										<input
											type="text"
											name="email"
											placeholder="Enter your email"
											id="email"
										/>
                                    </Grid>
								    <Grid item>
										<input
											type="password"
											name="password"
											placeholder="Enter your password"
											id="password"
										/>
                                    </Grid>
								    <Grid item>
										<input
											type="password"
											name="confirm_password"
											placeholder="Enter confirm password"
											id="confirm_password"
										/>
                                    </Grid>
                                    <Grid item>
									<Button
										type="submit"
										value="Submit"	
									>
										SEND
									</Button>
                                    </Grid>
						</Grid>
                    </Grid>  
					<hr></hr>
				</div>
			</React.Fragment>
	);
}

