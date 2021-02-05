import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { HomeStyles } from "./HomeStyles";
import { Link } from "react-router-dom";
import { FormGroup } from "@material-ui/core";
import Header from"./Header";
import Footer from"./Footer";



export default function Register() {
     const classes = HomeStyles();

		return (
			<React.Fragment>
				<div className={classes.root}>
					
					<Grid container>
						<Grid container direction="column" spacing={0}>
							<Header/>
							<Grid item>
								<Link to="/Home">
									<Button className={classes.backLink}>
										↩
									</Button>
								</Link>
							</Grid>
							<Grid item>
								<Typography className={classes.secondaryHeading}>
									Register Your <br/>Insulin Drip Account
								</Typography>
							</Grid>
							<FormGroup>
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
								<Link to="/Login">
								<Button
									type="submit"
									value="Submit"
									className={classes.sendBtn}
								>
									REGISTER
								</Button>
								</Link>
							</Grid>
							</FormGroup>
							<Footer/>
						</Grid>
						
					</Grid>
				</div>
			</React.Fragment>
		);
}

