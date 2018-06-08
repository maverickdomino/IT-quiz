import React, {Component} from 'react';
import { Text, View, ScrollView, TouchableOpacity} from 'react-native';
//import { StackNavigator } from 'react-navigation';
import StyleSheet from './styles';

export default class UstawieniaScreen extends React.Component {
	static navigationOptions = {
		title: 'Ustawienia',
	};
  render() {
      return (
      <View style={StyleSheet.appPanel}>
		<View>
			<ScrollView>
				<TouchableOpacity style={StyleSheet.buttonStyle} onPress={() => {this.props.navigation.navigate('Kolorystyka')}}><Text style={StyleSheet.textButton}>Kolorystyka</Text></TouchableOpacity>
			</ScrollView>
		</View>
      </View>
    );
  }
}
