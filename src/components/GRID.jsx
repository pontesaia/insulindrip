import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { calcStyles } from "./CalculatorStyles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

export default function GRID() {
	return (
		<React.Fragment>
			<Grid container>
				<Grid container item direction="column" alignItems="center">
					<Grid item>
						<h1>TOPNAV</h1>
					</Grid>
					<Grid container item direction="row" spacing={10}>
						<Grid item>
							<h1>pic1</h1>
						</Grid>
                        <Grid item>
							<h1>pic2</h1>
						</Grid>
						<Grid item>
							<h1>pic3</h1>
						</Grid>
					</Grid>
					<Grid item>
						<h1>FOOTER</h1>
					</Grid>
				</Grid>
				{/* <Container>
                    <Row>
                        <Col xs="12">
                        </Col>
                    </Row>
                </Container> */}
			</Grid>
		</React.Fragment>
	);
}
