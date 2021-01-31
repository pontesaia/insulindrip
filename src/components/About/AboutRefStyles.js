import { makeStyles } from "@material-ui/core/styles";

export const AboutRefStyles = makeStyles((theme) => ({

	root: {
		maxWidth: "70%",
		margin: "4rem auto",
        backgroundColor: "transparent",
        textAlign: "center",
	},
	heading: {
		fontSize: theme.typography.pxToRem(18),
		textAlign:"left",
		fontWeight: "bold",
		marginBottom:"1rem"
		
	},
	contentBody:{
		fontSize: theme.typography.pxToRem(14),
		textAlign:"left",
		marginBottom:"1rem"
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(16),
		color: theme.palette.text.primary,
		textAlign:"left",
		marginTop:"1rem",
		marginBottom:".5rem",
		fontWeight: "bold",
	},
	formControl: {
	},
	formRow: {},
	calcButton: {
		borderRadius: "25px",
		backgroundColor: "#35AEE3",
		width: "100px", 
		height: "48px",
		marginTop: "25px",
		marginBottom: "10px",
		marginLeft:"2rem",
		marginRight:"2rem",
	},
}));