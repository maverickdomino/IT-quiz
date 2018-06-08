import React, {Component} from 'react';
import { Text, View, ScrollView, TouchableOpacity} from 'react-native';
//import { StackNavigator } from 'react-navigation';
import StyleSheet from './styles';
import './global.js';

export default class KolorystykaScreen extends React.Component {
	static navigationOptions = {
		title: 'Kolorystyka',
	};
	
	motyw1()
	{
		//buttonColor='black';	
	}
	
	motyw2()
	{
		
	}
	
  render() {
      return (
      <View style={StyleSheet.appPanel}>
		<View>
			<ScrollView>
				<TouchableOpacity style={StyleSheet.buttonStyle} onPress={() => this.motyw1()}><Text style={StyleSheet.textButton}>Motyw 1</Text></TouchableOpacity>
				<TouchableOpacity style={StyleSheet.buttonStyle} /*onPress={() => {this.props.navigation.navigate('Quiz',{pytania: this.state.pytania[index]})}}*/><Text style={StyleSheet.textButton}>Motyw 2</Text></TouchableOpacity>
			</ScrollView>
		</View>
      </View>
    );
  }
}