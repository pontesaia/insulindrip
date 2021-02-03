import { makeStyles } from "@material-ui/core/styles";

export const HomeStyles = makeStyles((theme) => ({
	root: {
		maxWidth: "60%",
		margin: "4rem auto",
		backgroundColor: "transparent",
		textAlign: "center",
	},
	heading: {
		fontSize: theme.typography.pxToRem(18),
		textAlign: "left",
		fontWeight: "bold",
		marginBottom: "1rem",
	},
	contentBody: {
		fontSize: theme.typography.pxToRem(14),
		textAlign: "left",
		marginBottom: "1rem",
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(16),
		color: theme.palette.text.primary,
		textAlign: "left",
		marginTop: "1rem",
		marginBottom: ".5rem",
		fontWeight: "bold",
	},
	formControl: {
		//width: "50rem",
	},
	formRow: {},
	loginButton: {
		borderRadius: "25px",
		backgroundColor: "#35AEE3",
		// padding: "12px, 32px, 12px, 32px",
		width: "100px",
		height: "48px",
		marginTop: "25px",
		marginBottom: "10px",
		marginLeft: "2rem",
		marginRight: "2rem",
	},
	registerButton: {
		borderRadius: "25px",
		backgroundColor: "black",
		width: "100px",
		height: "48px",
		marginTop: "25px",
		marginBottom: "10px",
		marginLeft: "2rem",
		marginRight: "2rem",
	},
	header: {
		color: "black",
		fontSize: "2rem",
		// marginLeft: "1rem",
		fontFamily: "Comfortaa",
	},
	form1: {
		margin: "0 auto",
	},
	sendBtn: {
		float: "right",
		width: "100%",
		marginBottom: "80px",
		backgroundColor: "black",
		fontSize: "1.5rem",
		color: "white",
	},
	backLink: {
		textDecoration: "none",
		color: "black",
		backgroundColor: "transparent",
		borderColor: "transparent",
	},
}));
