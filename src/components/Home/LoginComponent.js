import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import { HomeStyles } from "./HomeStyles";

// import {
// 	Container,
// 	Row,
// 	Col,
// 	Button,
// } from "reactstrap";

//class Login extends Component {

export default function Login() {
     const classes = HomeStyles();

	// constructor(props) {
	// 	// super(props);
	// 	// this.state = {
	// 	// 	input: {},
	// 	// 	errors: {},
	// 	// };

	// 	// this.handleChange = this.handleChange.bind(this);
	// 	// this.handleSubmit = this.handleSubmit.bind(this);
	// }

	// handleChange(event) {
	// 	// let input = this.state.input;
	// 	// input[event.target.name] = event.target.value;

	// 	// this.setState({
	// 	// 	input,
	// 	// });
	// }

	// handleSubmit(event) {
	// 	event.preventDefault();
	// 	//window.location = "/Feed";
	// 	// if (this.validate()) {
	// 	// 	console.log(this.state);

	// 	// 	let input = {};

	// 	// 	input["email"] = "";
	// 	// 	input["password"] = "";

	// 	// 	this.setState({ input: input });

	// 	// 	alert("Login Form is submitted");
	// 	// }
	// }

	// validate() {
	// 	let input = this.state.input;
	// 	let errors = {};
	// 	let isValid = true;

	// 	if (!input["email"]) {
	// 		isValid = false;
	// 		errors["email"] = "Please enter your email address.";
	// 	}

	// 	if (typeof input["email"] !== "undefined") {
	// 		var pattern = new RegExp(
	// 			/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
	// 		);
	// 		if (!pattern.test(input["email"])) {
	// 			isValid = false;
	// 			errors["email"] = "Please enter valid email address.";
	// 		}
	// 	}

	// 	if (!input["password"]) {
	// 		isValid = false;
	// 		errors["password"] = "Please enter your password.";
	// 	}

	// 	if (typeof input["password"] !== "undefined") {
	// 		if (input["password"].length < 6) {
	// 			isValid = false;
	// 			errors["password"] = "Please add at least 6 characters.";
	// 		}
	// 	}

	// 	this.setState({
	// 		errors: errors,
	// 	});

	// 	return isValid;
	// }
	//render() {
		return (
			<React.Fragment>
				<div className={classes.root}>
				    <Grid container>
					    <Grid container direction="column" spacing={0}>
                               <Grid item>
										<h1>
											<Button
												style={classes.backLink}
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

										{/* <div className="text-danger">
											{this.state.errors.email}
										</div>
								 */}
                                </Grid>
								<Grid item>
									
										<input
											type="password"
											name="password"
											className="form-control"
											placeholder="Enter your password"
											id="password"
										/>
										{/* <div className="text-danger">
										 {/* {this.state.errors.password} 
										</div>	 */}
									
                                </Grid>
								<Grid item>

									<Button
										type="submit"
										value="Submit"
										style={classes.sendBtn}
									>
										SEND
									</Button>
                                </Grid>	
							{/* </form> */}
                        </Grid>
					</Grid> 
                </div>
			</React.Fragment>
	);
}

