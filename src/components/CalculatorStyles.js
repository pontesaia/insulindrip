import { makeStyles } from "@material-ui/core/styles";



export const calcStyles = makeStyles((theme) => ({

	root: {
		maxWidth: "350px",
		minWidth: "350px",
		margin: "2rem auto",
		backgroundColor: "transparent",
		fontFamily: "Roboto",
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
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
		textAlign:"left",
		marginTop:"1rem",
		marginBottom:".5rem",
		fontWeight: "bold",
	},
	formControl: {
		//width: "50rem",
	},
	formRow: {	 minWidth: "600px"},
	calcButton: {
		borderRadius: "25px",
		backgroundColor: "#35AEE3",
		// padding: "12px, 32px, 12px, 32px",
		width: "100px", 
		height: "48px",
		marginTop: "25px",
		marginBottom: "10px",
		marginLeft:"2rem",
		marginRight:"2rem",
	},
}));

