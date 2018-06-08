import React, {Component} from 'react';
import { Text, View, ScrollView, TouchableOpacity, Alert} from 'react-native';
//import { StackNavigator } from 'react-navigation';
import StyleSheet from './styles';

export default class PrzedmiotyScreen extends React.Component {
	constructor(props)
	{
		super(props)
		this.state = {
			pytania: [],
			ok: true
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

  render() {
	  const { params } = this.props.navigation.state;
	  const przedmioty = params ? params.przedmioty : null;
	  const przedmiotyList = this.state.ok ? przedmioty.map((przedmiot,index) => <TouchableOpacity key={index} style={StyleSheet.buttonStyle} onPress={() => {this.props.navigation.navigate('Quiz',{pytania: this.state.pytania[index]})}}><Text style={StyleSheet.textButton}>{przedmiot}</Text></TouchableOpacity>) : przedmioty.map((przedmiot,index) => <TouchableOpacity key={index} style={StyleSheet.buttonStyle} onPress={() => this.alertFunction()}><Text style={StyleSheet.textButton}>{przedmiot}</Text></TouchableOpacity>);
      return (
      <View style={StyleSheet.appPanel}>
		<View>
			<ScrollView>
				{przedmiotyList}
			</ScrollView>
		</View>
      </View>
    );
  }
}

