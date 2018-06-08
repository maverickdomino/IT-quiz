import {StyleSheet} from 'react-native';
import './global.js';
//import KolorystykaScreen from './KolorystykaScreen';

export default StyleSheet.create({
	appPanel: {
		backgroundColor: globalBackgroundColor,
		flex: 1,
	},
	buttonContainer: {
		flex: 1,
	},
	
	buttonStyle: {
		flex: 1,
		backgroundColor: buttonColor,
		margin: 5,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: globalBorderRadius,
		minHeight: 100,
		borderWidth: 2,
		borderStyle: 'solid',
		borderColor: globalBorderColor,
	},
	
	/*buttonQuizStyle: {
		flex: 1,
		margin: 5,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 30,
		borderWidth: 2,
		borderStyle: 'solid',
		borderColor: globalBorderColor,
	},*/
	
	textButton: {
		fontSize: globalButtonFontSize,
		fontWeight: 'bold',
		color: globalFontColor,
		
	},
	
	textAnswerButton: {
		fontSize: globalAnswerFontSize,
		color: globalFontColor,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	
	odpowiedziRow: {
		flex: 1,
		flexDirection: 'row',
	},
	
	pytanieeee: {
		padding: 5,
		fontSize: globalQuestionFontSize,
		color: globalFontColor,
		fontWeight: 'bold',
		//textAlign: 'center',
		//textAlignVertical: 'center',
		//alignItems: 'center',
		
	},
	
	pytanieContainer: {
		flex: 2,
		margin: 5,
		backgroundColor: buttonColor,
		borderRadius: globalBorderRadius,
		borderWidth: 2,
		borderStyle: 'solid',
		borderColor: globalBorderColor,
		alignItems: 'center',
		justifyContent: 'center',
	},
	
	pytanie: {
		padding: 5,
		fontSize: globalQuestionFontSize,
		color: globalFontColor,
		fontWeight: 'bold',
		textAlign: 'center',
		//textAlignVertical: 'center',
		//alignItems: 'center',
		
	},
	
	pytanieContainereee: {
		flex: 2,
		margin: 5,
		backgroundColor: buttonColor,
		borderRadius: globalBorderRadius,
		borderWidth: 2,
		borderStyle: 'solid',
		borderColor: globalBorderColor,
		//alignItems: 'center',
		//justifyContent: 'center',
	},
	
	odpowiedziContainer: {
		flex: 3,
	},
	
	textStyle: {
		fontSize: globalFontSize,
		padding: 10,
		color: globalFontColor,
		fontWeight: 'bold',
	}
});