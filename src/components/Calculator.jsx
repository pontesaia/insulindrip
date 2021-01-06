import React, { Component } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from '@material-ui/core/styles';

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
	width: '35%',
	margin: '0 auto',
  },
  heading: {
    fontSize: theme.typography.pxToRem(22),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function Calculator() {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);

		const handleChange = (panel) => (event, isExpanded) => {
			setExpanded(isExpanded ? panel : false);
		};
		return (
			<React.Fragment>
				<h4>
					<a href="google.com">
						<span className="linkCalc"> CALCULATOR </span>
					</a>
					|
					<a href="google.com">
						<span className="linkCalc"> BOLUS </span>
					</a>
					|
					<a href="google.com">
						<span className="linkCalc"> BASAL </span>
					</a>
				</h4>
				<div className={classes.root}>
				<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.heading}>
							BOLUS
						</Typography>
					</AccordionSummary>
					<FormControl
						variant="filled"
						className={styles.formControl}
					>
						<div>
							<Select
								labelId="demo-simple-select-filled-label0"
								id="demo-simple-select-filled0"
								value=" "
							>
								<MenuItem value=" ">
									<em>Desired dose</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
							<Select
								className="short"
								labelId="demo-simple-select-filled-label0"
								id="demo-simple-select-filled0"
								value=" "
							>
								<MenuItem value=" ">
									<em>mg/lb</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</div>
					</FormControl>
					<br></br>
					{/* next row*/}
					<FormControl
						variant="filled"
						className={styles.formControl}
					>
						<div>
							<Select
								labelId="demo-simple-select-filled-label1"
								id="demo-simple-select-filled1"
								value=" "
							>
								<MenuItem value=" ">
									<em>Body weight</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
							<Select
								className="short"
								labelId="demo-simple-select-filled-label2"
								id="demo-simple-select-filled2"
								value=" "
							>
								<MenuItem value=" ">
									<em>mg/lb</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</div>
					</FormControl>
					<br></br>
					{/* next row*/}
					<FormControl
						variant="filled"
						className={styles.formControl}
					>
						<div>
							<Select
								labelId="demo-simple-select-filled-label3"
								id="demo-simple-select-filled3"
								value=" "
							>
								<MenuItem value=" ">
									<em>Concentration</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
							<Select
								className="short"
								labelId="demo-simple-select-filled-label4"
								id="demo-simple-select-filled4"
								value=" "
							>
								<MenuItem value=" ">
									<em>mg/L</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</div>
					</FormControl>
					<br></br>
					{/* next row*/}
					<FormControl
						variant="filled"
						className={styles.formControl}
					>
						<div>
							<Select
								labelId="demo-simple-select-filled-label5"
								id="demo-simple-select-filled5"
								value=" "
							>
								<MenuItem value=" ">
									<em>Bag volume</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
							<Select
								className="short"
								labelId="demo-simple-select-filled-label6"
								id="demo-simple-select-filled6"
								value=" "
							>
								<MenuItem value=" ">
									<em>ml</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</div>
					</FormControl>
					<br></br>
					{/* next row*/}
					<FormControl
						variant="filled"
						className={styles.formControl}
					>
						<div>
							<Select
								labelId="demo-simple-select-filled-label7"
								id="demo-simple-select-filled7"
								value=" "
							>
								<MenuItem value=" ">
									<em>Drug in bag</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
							<Select
								className="short"
								labelId="demo-simple-select-filled-label8"
								id="demo-simple-select-filled8"
								value=" "
							>
								<MenuItem value=" ">
									<em>mg</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</div>
					</FormControl>
					<br></br>
					{/* next row*/}
					<FormControl
						variant="filled"
						className={styles.formControl}
					>
						<div>
							<Select
								labelId="demo-simple-select-filled-label9"
								id="demo-simple-select-filled9"
								value=" "
							>
								<MenuItem value=" ">
									<em>Drip rate</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
							<Select
								className="short"
								labelId="demo-simple-select-filled-label10"
								id="demo-simple-select-filled10"
								value=" "
							>
								<MenuItem value=" ">
									<em>mg</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</div>
					</FormControl>
					<br></br>
					{/* next row*/}
					<FormControl
						variant="filled"
						className={styles.formControl}
					>
						<div>
							<Select
								labelId="demo-simple-select-filled-label9"
								id="demo-simple-select-filled9"
								value=" "
							>
								<MenuItem value=" ">
									<em>Drop factor</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
							<Select
								className="short"
								labelId="demo-simple-select-filled-label10"
								id="demo-simple-select-filled10"
								value=" "
							>
								<MenuItem value=" ">
									<em>gtts</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</div>
					</FormControl>
					<br></br>
					{/* next row*/}
					<FormControl
						variant="filled"
						className={styles.formControl}
					>
						<div>
							<Select
								labelId="demo-simple-select-filled-label9"
								id="demo-simple-select-filled9"
								value=" "
							>
								<MenuItem value=" ">
									<em>Flow rate</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
							<Select
								className="short"
								labelId="demo-simple-select-filled-label10"
								id="demo-simple-select-filled10"
								value=" "
							>
								<MenuItem value=" ">
									<em>gtts</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</div>
					</FormControl>
				</Accordion>
				<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.heading}>
							BASAL
						</Typography>
					</AccordionSummary>
					<FormControl
						variant="filled"
						className={styles.formControl}
					>
						<div>
							<Select
								labelId="demo-simple-select-filled-label0"
								id="demo-simple-select-filled0"
								value=" "
							>
								<MenuItem value=" ">
									<em>Desired dose</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
							<Select
								className="short"
								labelId="demo-simple-select-filled-label0"
								id="demo-simple-select-filled0"
								value=" "
							>
								<MenuItem value=" ">
									<em>mg/lb</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</div>
					</FormControl>
					<br></br>
					{/* next row*/}
					<FormControl
						variant="filled"
						className={styles.formControl}
					>
						<div>
							<Select
								labelId="demo-simple-select-filled-label1"
								id="demo-simple-select-filled1"
								value=" "
							>
								<MenuItem value=" ">
									<em>Body weight</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
							<Select
								className="short"
								labelId="demo-simple-select-filled-label2"
								id="demo-simple-select-filled2"
								value=" "
							>
								<MenuItem value=" ">
									<em>mg/lb</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</div>
					</FormControl>
					<br></br>
					{/* next row*/}
					<FormControl
						variant="filled"
						className={styles.formControl}
					>
						<div>
							<Select
								labelId="demo-simple-select-filled-label3"
								id="demo-simple-select-filled3"
								value=" "
							>
								<MenuItem value=" ">
									<em>Concentration</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
							<Select
								className="short"
								labelId="demo-simple-select-filled-label4"
								id="demo-simple-select-filled4"
								value=" "
							>
								<MenuItem value=" ">
									<em>mg/L</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</div>
					</FormControl>
					<br></br>
					{/* next row*/}
					<FormControl
						variant="filled"
						className={styles.formControl}
					>
						<div>
							<Select
								labelId="demo-simple-select-filled-label5"
								id="demo-simple-select-filled5"
								value=" "
							>
								<MenuItem value=" ">
									<em>Bag volume</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
							<Select
								className="short"
								labelId="demo-simple-select-filled-label6"
								id="demo-simple-select-filled6"
								value=" "
							>
								<MenuItem value=" ">
									<em>ml</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</div>
					</FormControl>
					<br></br>
					{/* next row*/}
					<FormControl
						variant="filled"
						className={styles.formControl}
					>
						<div>
							<Select
								labelId="demo-simple-select-filled-label7"
								id="demo-simple-select-filled7"
								value=" "
							>
								<MenuItem value=" ">
									<em>Drug in bag</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
							<Select
								className="short"
								labelId="demo-simple-select-filled-label8"
								id="demo-simple-select-filled8"
								value=" "
							>
								<MenuItem value=" ">
									<em>mg</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</div>
					</FormControl>
					<br></br>
					{/* next row*/}
					<FormControl
						variant="filled"
						className={styles.formControl}
					>
						<div>
							<Select
								labelId="demo-simple-select-filled-label9"
								id="demo-simple-select-filled9"
								value=" "
							>
								<MenuItem value=" ">
									<em>Drip rate</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
							<Select
								className="short"
								labelId="demo-simple-select-filled-label10"
								id="demo-simple-select-filled10"
								value=" "
							>
								<MenuItem value=" ">
									<em>mg</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</div>
					</FormControl>
					<br></br>
					{/* next row*/}
					<FormControl
						variant="filled"
						className={styles.formControl}
					>
						<div>
							<Select
								labelId="demo-simple-select-filled-label9"
								id="demo-simple-select-filled9"
								value=" "
							>
								<MenuItem value=" ">
									<em>Drop factor</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
							<Select
								className="short"
								labelId="demo-simple-select-filled-label10"
								id="demo-simple-select-filled10"
								value=" "
							>
								<MenuItem value=" ">
									<em>gtts</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</div>
					</FormControl>
					<br></br>
					{/* next row*/}
					<FormControl
						variant="filled"
						className={styles.formControl}
					>
						<div>
							<Select
								labelId="demo-simple-select-filled-label9"
								id="demo-simple-select-filled9"
								value=" "
							>
								<MenuItem value=" ">
									<em>Flow rate</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
							<Select
								className="short"
								labelId="demo-simple-select-filled-label10"
								id="demo-simple-select-filled10"
								value=" "
							>
								<MenuItem value=" ">
									<em>gtts</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</div>
					</FormControl>
					</Accordion>
					</div>
			</React.Fragment>
		);
	
}

const styles = {
	formControl: {
		width: "50rem",
	},
	formRow: {},
};

