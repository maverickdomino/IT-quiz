import React, {Component} from 'react';
import { Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import PrzedmiotyScreen from './app/PrzedmiotyScreen';
import InfoScreen from './app/InfoScreen';
import UstawieniaScreen from './app/UstawieniaScreen';
import QuizScreen from './app/QuizScreen';
import StyleSheet from './app/styles';
import './app/global.js';
import KolorystykaScreen from './app/KolorystykaScreen';

class HomeScreen extends Component {
	constructor(props)
	{
		super(props);
		this.handleAnswer = this.handleAnswer.bind(this);
		this.state = {
		przedmioty: [],
		ok: true,
		bgColor: buttonColor,
		};
	}
	
	static navigationOptions = {
		title: 'IT Quiz',
	};
	
	componentDidMount() {
		fetch('http://v-ie.uek.krakow.pl/~s193140/przedmioty.json')
		.then((response) => response.json())
		.then((responseJson) => {
			this.setState({
				przedmioty: responseJson
			})
	  })
	  .catch((error) => {
		  this.setState({
			  ok: false
		  })
	  }); 
    }
	
	handleAnswer()
	{
		this.props.navigation.navigate('Przedmioty',{przedmioty: this.state.przedmioty})
	}
	render() {
		return (
		  <View style={StyleSheet.appPanel}>
				<View style={StyleSheet.buttonContainer}>
					<ScrollView>
						
						<PlayButton onAnswerClick={() => this.handleAnswer()} ok={this.state.ok}/>
						<TouchableOpacity style={[StyleSheet.buttonStyle,{backgroundColor:buttonColor}]} onPress={() => this.props.navigation.navigate('Ustawienia')}><Text style={StyleSheet.textButton}>Ustawienia</Text></TouchableOpacity>
						<TouchableOpacity style={StyleSheet.buttonStyle} onPress={() => this.props.navigation.navigate('Info')}><Text style={StyleSheet.textButton}>O aplikacji</Text></TouchableOpacity>
					</ScrollView>
				</View>
		  </View>
		);
	}
}
//<TouchableOpacity style={StyleSheet.buttonStyle} onPress={() => this.props.navigation.navigate('Przedmioty',{przedmioty: this.state.przedmioty})}><Text style={StyleSheet.textButton}>Graj</Text></TouchableOpacity>
class PlayButton extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		
	}
	
	alertFunction() {
		Alert.alert(
			'Niestety nie udało się wczytać listy przedmiotów.',
			'Sprawdź swoje połączenie z internetem.',
			[
				{text: 'OK', onPress: () => {}},
			],
			{ cancelable: false }
		)
	}
	handleClick() {
		this.props.onAnswerClick();
	}
	
	render() {
		if(this.props.ok)
		{	
			return(
				<TouchableOpacity style={StyleSheet.buttonStyle} onPress={() => this.handleClick()}><Text style={StyleSheet.textButton}>Graj</Text></TouchableOpacity>
			);
		}
		else
		{
			return(
				<TouchableOpacity style={StyleSheet.buttonStyle} onPress={() => this.alertFunction()}><Text style={StyleSheet.textButton}>Graj</Text></TouchableOpacity>
			);
		}
	}
}

const RootStack = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Przedmioty: {
      screen: PrzedmiotyScreen,
    },
	Info: {
		screen: InfoScreen,
	},
	Ustawienia: {
		screen: UstawieniaScreen,
	},
	Quiz: {
		screen: QuizScreen,
	},
	Kolorystyka: {
		screen: KolorystykaScreen,
	}
  },
  {
    initialRouteName: 'Home',
	 navigationOptions: {
      headerStyle: {
        backgroundColor: mainTabBgColor,
      },
      headerTintColor: mainTabFontColor,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}


