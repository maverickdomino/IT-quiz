import React, {Component} from 'react';
import { Text, View, ScrollView, TouchableOpacity} from 'react-native';
//import { StackNavigator } from 'react-navigation';
import StyleSheet from './styles';
import './global.js';
var clr;
var interval;

export default class QuizScreen extends React.Component {
	constructor(props) {
		super(props);
		this.handleAnswerA = this.handleAnswerA.bind(this);
		this.handleAnswerB = this.handleAnswerB.bind(this);
		this.handleAnswerC = this.handleAnswerC.bind(this);
		this.handleAnswerD = this.handleAnswerD.bind(this);
		this.zamienKolor = this.zamienKolor.bind(this);
		this.migaj = this.migaj.bind(this);
		this.zmienPytanie = this.zmienPytanie.bind(this);
		const { params } = this.props.navigation.state;
		const pytania = params ? params.pytania : null;
		const numberOfQuestions = pytania.length;
		let nr = Math.floor(Math.random() * (numberOfQuestions));
		this.state = {pytanie: pytania[nr].tresc,
						odpowiedzA: pytania[nr].a,
						odpowiedzB: pytania[nr].b,
						odpowiedzC: pytania[nr].c,
						odpowiedzD: pytania[nr].d,
						poprawna: pytania[nr].poprawna,
						backgroundColorA: buttonColor,
						backgroundColorB: buttonColor,
						backgroundColorC: buttonColor,
						backgroundColorD: buttonColor,
						disabledA: false,
						disabledB: false,
						disabledC: false,
						disabledD: false};
  }
  
	componentWillUnmount() {
		clearInterval(interval);
		clearTimeout(clr);
	}
	
	static navigationOptions = {
		title: 'Quiz',
	};
	
	zamienKolor()
	{
			if(this.state.poprawna == 'a')
			{
				let bgColorA = (this.state.backgroundColorA == buttonColor ? buttonColor : correctColor);
				if(bgColorA == buttonColor)
					this.setState({backgroundColorA: correctColor});
				else
					this.setState({backgroundColorA: buttonColor});
			}
			if(this.state.poprawna == 'b')
			{
				let bgColorB = (this.state.backgroundColorB == buttonColor ? buttonColor : correctColor);
				if(bgColorB == buttonColor)
					this.setState({backgroundColorB: correctColor});
				else
					this.setState({backgroundColorB: buttonColor});
			}
			if(this.state.poprawna == 'c')
			{
				let bgColorC = (this.state.backgroundColorC == buttonColor ? buttonColor : correctColor);
				if(bgColorC == buttonColor)
					this.setState({backgroundColorC: correctColor});
				else
					this.setState({backgroundColorC: buttonColor});
			}
			if(this.state.poprawna == 'd')
			{
				let bgColorD = (this.state.backgroundColorD == buttonColor ? buttonColor : correctColor);
				if(bgColorD == buttonColor)
					this.setState({backgroundColorD: correctColor});
				else
					this.setState({backgroundColorD: buttonColor});
			}	
		
	}
	zmienPytanie() {
			const { params } = this.props.navigation.state;
			const pytania = params ? params.pytania : null;
			const numberOfQuestions = pytania.length;
			let nr = Math.floor(Math.random() * (numberOfQuestions));

			if(this.state.backgroundColorA != buttonColor)
				this.setState({backgroundColorA: buttonColor});
			if(this.state.backgroundColorB != buttonColor)
				this.setState({backgroundColorB: buttonColor});
			if(this.state.backgroundColorC != buttonColor)
				this.setState({backgroundColorC: buttonColor});
			if(this.state.backgroundColorD != buttonColor)
				this.setState({backgroundColorD: buttonColor});
			
			this.setState({
				pytanie: pytania[nr].tresc,
							odpowiedzA: pytania[nr].a,
							odpowiedzB: pytania[nr].b,
							odpowiedzC: pytania[nr].c,
							odpowiedzD: pytania[nr].d,
							poprawna: pytania[nr].poprawna,
							disabledA: false,
							disabledB: false,
							disabledC: false,
							disabledD: false}
			);
		
	}
		
	migaj() 
	{
			interval = setInterval(
			this.zamienKolor,75);
			clr = setTimeout(() => {clearInterval(interval);
				this.zmienPytanie();},675);	
	}
	
	handleAnswerA()
	{
		this.setState({disabledA: true});
		this.setState({disabledB: true});
		this.setState({disabledC: true});
		this.setState({disabledD: true});
		
		if(this.state.poprawna=='a')
		{
				
			this.setState({backgroundColorA: correctColor});
			clr = setTimeout(() => {
				this.zmienPytanie();},675);
		}
		else
		{
			this.setState({backgroundColorA: wrongColor});
			this.migaj();
		}	
	}
	
	handleAnswerB()
	{
		this.setState({disabledA: true});
		this.setState({disabledB: true});
		this.setState({disabledC: true});
		this.setState({disabledD: true});
		
		if(this.state.poprawna=='b')
		{
				
			this.setState({backgroundColorB: correctColor});
			clr = setTimeout(() => {
				this.zmienPytanie();},675);
		}
		else
		{
			this.setState({backgroundColorB: wrongColor});
			this.migaj();
		}
	}
	
	handleAnswerC()
	{
		this.setState({disabledA: true});
		this.setState({disabledB: true});
		this.setState({disabledC: true});
		this.setState({disabledD: true});
		
		if(this.state.poprawna=='c')
		{
				
			this.setState({backgroundColorC: correctColor});
			clr = setTimeout(() => {
				this.zmienPytanie();},675);
		}
		else
		{
			this.setState({backgroundColorC: wrongColor});
			this.migaj();
		}
	}
	
	handleAnswerD()
	{
		this.setState({disabledA: true});
		this.setState({disabledB: true});
		this.setState({disabledC: true});
		this.setState({disabledD: true});
		
		if(this.state.poprawna=='d')
		{
				
			this.setState({backgroundColorD: correctColor});
			clr = setTimeout(() => {
				this.zmienPytanie();},675);
		}
		else
		{
			this.setState({backgroundColorD: wrongColor});
			this.migaj();
		}
	}
	//
	//
  render() {
      return (
      <View style={StyleSheet.appPanel}>
		<View style={StyleSheet.pytanieContainer}>
			<ScrollView>
			<Text style={StyleSheet.pytanie}>{this.state.pytanie}</Text>
			</ScrollView>
		</View>
		<View style={StyleSheet.odpowiedziContainer}>
			<View style={StyleSheet.odpowiedziRow}>
				<OknoA odp={this.state.odpowiedzA} disabled={this.state.disabledA} backgroundColor={this.state.backgroundColorA} poprawna={this.state.poprawna=='a' ? true : false} onAnswerClick={() => this.handleAnswerA()} flex={odpowiedziButtonFlex} margin={odpowiedziButtonMargin} alignItems={odpowiedziButtonAlignItems} justifyContent={odpowiedziButtonJustifyContent} borderRadius={globalBorderRadius} borderWidth={globalBorderWidth} borderColor={globalBorderColor} borderStyle={globalBorderStyle} />
				<OknoB odp={this.state.odpowiedzB} disabled={this.state.disabledB} backgroundColor={this.state.backgroundColorB} poprawna={this.state.poprawna=='b' ? true : false} onAnswerClick={() => this.handleAnswerB()} flex={odpowiedziButtonFlex} margin={odpowiedziButtonMargin} alignItems={odpowiedziButtonAlignItems} justifyContent={odpowiedziButtonJustifyContent} borderRadius={globalBorderRadius} borderWidth={globalBorderWidth} borderColor={globalBorderColor} borderStyle={globalBorderStyle} />
			</View>
			<View style={StyleSheet.odpowiedziRow}>
				<OknoC odp={this.state.odpowiedzC} disabled={this.state.disabledC} backgroundColor={this.state.backgroundColorC} poprawna={this.state.poprawna=='c' ? true : false} onAnswerClick={() => this.handleAnswerC()} flex={odpowiedziButtonFlex} margin={odpowiedziButtonMargin} alignItems={odpowiedziButtonAlignItems} justifyContent={odpowiedziButtonJustifyContent} borderRadius={globalBorderRadius} borderWidth={globalBorderWidth} borderColor={globalBorderColor} borderStyle={globalBorderStyle} />
				<OknoD odp={this.state.odpowiedzD} disabled={this.state.disabledD} backgroundColor={this.state.backgroundColorD} poprawna={this.state.poprawna=='d' ? true : false} onAnswerClick={() => this.handleAnswerD()} flex={odpowiedziButtonFlex} margin={odpowiedziButtonMargin} alignItems={odpowiedziButtonAlignItems} justifyContent={odpowiedziButtonJustifyContent} borderRadius={globalBorderRadius} borderWidth={globalBorderWidth} borderColor={globalBorderColor} borderStyle={globalBorderStyle} />
			</View>
		</View>
			
      </View>
    );
  }
}

class OknoA extends React.Component {
	constructor(props) {
		super(props);
		this.onPressA = this.onPressA.bind(this);	
	}
	
	onPressA() {
		this.props.onAnswerClick();
	}
	
	render() {
		const key = 'A';
		return (
			<TouchableOpacity style={{borderWidth: this.props.borderWidth, borderStyle: this.props.borderStyle, borderColor: this.props.borderColor, flex: this.props.flex, backgroundColor: this.props.backgroundColor, margin: this.props.margin, alignItems: this.props.alignItems, justifyContent: this.props.justifyContent, borderRadius: parseInt(this.props.borderRadius)}} disabled={this.props.disabled} onPress={() => this.onPressA()}><Text style={StyleSheet.textAnswerButton}>{this.props.odp}</Text></TouchableOpacity>
		);	
	}
}

class OknoB extends React.Component {
	constructor(props) {
		super(props);
		this.onPressB = this.onPressB.bind(this);		
	}
	
	onPressB() {
		this.props.onAnswerClick();
	}
	
	render() {
		const key = 'B';
		return (
			<TouchableOpacity style={{borderWidth: this.props.borderWidth, borderStyle: this.props.borderStyle, borderColor: this.props.borderColor, flex: this.props.flex, backgroundColor: this.props.backgroundColor, margin: this.props.margin, alignItems: this.props.alignItems, justifyContent: this.props.justifyContent, borderRadius: parseInt(this.props.borderRadius)}} disabled={this.props.disabled} onPress={() => this.onPressB()}><Text style={StyleSheet.textAnswerButton}>{this.props.odp}</Text></TouchableOpacity>
		);
	}
}

class OknoC extends React.Component {
	constructor(props) {
		super(props);
		this.onPressC = this.onPressC.bind(this);		
	}
	
	onPressC() {
		this.props.onAnswerClick();
	}
	
	render() {
		const key = 'C';
		return (
			<TouchableOpacity style={{borderWidth: this.props.borderWidth, borderStyle: this.props.borderStyle, borderColor: this.props.borderColor, flex: this.props.flex, backgroundColor: this.props.backgroundColor, margin: this.props.margin, alignItems: this.props.alignItems, justifyContent: this.props.justifyContent, borderRadius: parseInt(this.props.borderRadius)}} disabled={this.props.disabled} onPress={() => this.onPressC()}><Text style={StyleSheet.textAnswerButton}>{this.props.odp}</Text></TouchableOpacity>
		);
	}
}

class OknoD extends React.Component {
	constructor(props) {
		super(props);
		this.onPressD = this.onPressD.bind(this);
	}
	
	onPressD() {
		this.props.onAnswerClick();
	}
	
	render() {
		const key = 'D';
		return (
			<TouchableOpacity style={{borderWidth: this.props.borderWidth, borderStyle: this.props.borderStyle, borderColor: this.props.borderColor, flex: this.props.flex, backgroundColor: this.props.backgroundColor, margin: this.props.margin, alignItems: this.props.alignItems, justifyContent: this.props.justifyContent, borderRadius: parseInt(this.props.borderRadius)}} disabled={this.props.disabled} onPress={() => this.onPressD()}><Text style={StyleSheet.textAnswerButton}>{this.props.odp}</Text></TouchableOpacity>
		);
	}
}
