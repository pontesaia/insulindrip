import { makeStyles } from "@material-ui/core/styles";

export const HomeStyles = makeStyles((theme) => ({
	root: {
		maxWidth: "350px",
		margin: "4rem auto",
		backgroundColor: "transparent",
		textAlign: "center",

	},
	logo:{
		height: theme.typography.pxToRem(148),
		textAlign:"center"
	},
	heading: {
		fontSize: theme.typography.pxToRem(18),
		textAlign: "left",
		fontWeight: "bold",
		marginBottom: "1rem",
	},
	
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(22),
		color: theme.palette.text.primary,
		textAlign: "center",
		marginTop: "1rem",
		marginBottom: ".5rem",
		fontWeight: "400",
	},
	inputControl: {
		paddingTop: "1rem"
	},
	formRow: {},
	btnrow:{
		margin:"0 auto",
		justifyContent:"Center"
	},

	loginButton: {
		borderRadius: "8px",
		backgroundColor: "#35AEE3",
		width: "100px",
		height: "48px",
		marginTop: "25px",
		marginBottom: "10px",
		marginLeft: "2.5rem",
	},
	registerButton: {
		borderRadius: "8px",
		backgroundColor: "black",
		width: "100px",
		height: "48px",
		marginTop: "25px",
		marginBottom: "10px",
		marginRight: "1rem",
		color: "ffffff"
	},
	header: {
		color: "black",
		fontSize: "2rem",
		fontFamily: "Comfortaa",
	},
	form1: {
		margin: "0 auto",
	},
	sendBtn: {
		borderRadius: "8px",
		width: "100px",
		marginTop: "25px",
		backgroundColor: "#35AEE3",
		fontSize: "1rem",
		color: "white",
	},
	backLink: {
		textDecoration: "none",
		color: "black",
		backgroundColor: "transparent",
		borderColor: "transparent",
	},
}));
