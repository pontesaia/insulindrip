import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { FormGroup } from "@material-ui/core";
import { HomeStyles } from "./HomeStyles";
import Header from"./Header";
import Footer from"./Footer";

export default function Login() {
     const classes = HomeStyles();

		return (
			<React.Fragment>
				<div className={classes.root}>
					<Grid container>
						<Grid container direction="column" spacing={0}>
							<Header/>
							<Grid item>
								<Link to="/Home">
									<Button
										className={classes.backLink}
									>
										↩
									</Button>
								</Link>
							</Grid>
							<Grid item>
								<Typography className={classes.secondaryHeading}>
									Login to Save Your <br/>Insulin Drip Records
								</Typography>
							
							</Grid>
							<FormGroup>
							<Grid item>
								<input
									type="text"
									name="email"
									className="inputControl"
									placeholder="Enter your email"
									id="email"
								/>

							</Grid>
							<Grid item>
								<input
									type="password"
									name="password"
									className="inputControl"
									placeholder="Enter your password"
									id="password"
								/>

							</Grid>
							<Grid item>
								<Link to="/Calculator">
								<Button
									type="submit"
									value="Submit"
								    className={classes.sendBtn}
								>
									LOGIN
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

