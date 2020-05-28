import { StyleSheet } from "react-native";
import { SILVER_CHALICE, MARINER, ALTO } from "../../config/colors";
import { scale } from "../../helpers/scalesHelpers";

const styles = StyleSheet.create({
	logo: {
		alignItems: "center",
		paddingTop: 20,
		paddingBottom: 30,
	},
	fogotpass: {
		color: SILVER_CHALICE,
		marginTop: scale(20),
		marginBottom: scale(50),
	},
	screenTitle: {
		color: MARINER,
		textAlign: "center",
		fontSize: scale(17),
		marginTop: scale(10),
	},
	form: {
		marginTop: scale(30),
	},
	spinnerTextStyle: {
		color: "#FFF",
	},
	input: {
		height: 45,
		borderColor: ALTO,
		borderRadius: 10,
		borderWidth: 1,
		color: SILVER_CHALICE,
		paddingLeft: 10,
		marginBottom: 10,
	},
	text: {
		fontFamily: "NunitoBold",
    color: SILVER_CHALICE,
    marginBottom:5,
    marginTop:15
	},
	textError: {
		fontFamily: "NunitoBold",
    color: "#ff471a",
  },
  icon: {
    marginTop:scale(-17),
    width: 40,
}
});

export default styles;
