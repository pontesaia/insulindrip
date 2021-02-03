import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import { HomeStyles } from "./HomeStyles";

export default function Login() {
     const classes = HomeStyles();

		return (
			<React.Fragment>
				<div className={classes.root}>
					<Grid container>
						<Grid container direction="column" spacing={0}>
							<Grid item>
								<h1>
									<Button
										className={classes.backLink}
									>
										↩
									</Button>
								</h1>
							</Grid>
							<Grid item>
								<h1>Login</h1>
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
									className="form-control"
									placeholder="Enter your password"
									id="password"
								/>

							</Grid>
							<Grid item>
								<Button
									type="submit"
									value="Submit"
									className={classes.sendBtn}
								>
									SEND
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</div>
			</React.Fragment>
		);
}

