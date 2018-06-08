import React, {Component} from 'react';
import { Text, View, ScrollView, TouchableOpacity, Alert} from 'react-native';
//import { StackNavigator } from 'react-navigation';
import StyleSheet from './styles';

export default class PrzedmiotyScreen extends React.Component {
	constructor(props)
	{
		super(props)
		//const { params } = this.props.navigation.state;
		//const przedmioty = params ? params.przedmioty : null;
		this.handleAnswer = this.handleAnswer.bind(this);
		this.state = {
			pytania: [],
			ok: true,
			index: 0
		};
	}
	static navigationOptions = {
		title: 'Graj',
	};
	
	componentDidMount() {
		fetch('http://v-ie.uek.krakow.pl/~s193140/pytania.json')
		.then((response) => response.json())
		.then((responseJson) => {
			this.setState({
				pytania: responseJson
			})
	  })
	  .catch((error) => {
		  this.setState({
			  ok: false
		  })
	  }); 
	}
	
	handleAnswer(ind)
	{
		if(ind==undefined)
		this.props.navigation.navigate('Quiz',{pytania: this.state.pytania[0]});
	}

  render() {
	  const { params } = this.props.navigation.state;
	  const przedmioty = params ? params.przedmioty : null;

	 
      return (
      <View style={StyleSheet.appPanel}>
		<View>
			<ScrollView>
				<QuizButton ok={this.state.ok} przedm={przedmioty} onAnswerClick={this.handleAnswer}/>
			</ScrollView>
		</View>
      </View>
    );
  }
}
//	  const przedmiotyList = przedmioty.map((przedmiot,index) => <TouchableOpacity key={index} style={StyleSheet.buttonStyle} onPress={() => this.props.navigation.navigate('Quiz',{pytania: this.state.pytania[index]})}><Text style={StyleSheet.textButton}>{przedmiot}</Text></TouchableOpacity>);
//{przedmiotyList}
class QuizButton extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		
	}
	
	alertFunction() {
		Alert.alert(
			'Niestety nie udało się pobrać listy pytań.',
			'Sprawdź swoje połączenie z internetem.',
			[
				{text: 'OK', onPress: () => {}},
			],
			{ cancelable: false }
		)
	}
	handleClick(e) {
		if(this.props.ok)
			//this.props.onAnswerClick(e.target.key);
			//this.alertFunction();
			console.log(e.target.key);
		else
			this.alertFunction();
	}
	
	render() {
		const przedm = this.props.przedm;
		const przedmiotyList = przedm.map((przedmiot,index) => <TouchableOpacity key={index} style={StyleSheet.buttonStyle} onPress={this.handleClick}><Text style={StyleSheet.textButton}>{przedmiot}</Text></TouchableOpacity>);
		return (
				przedmiotyList
			);
		}
		
		
	}