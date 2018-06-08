import React, {Component} from 'react';
import { Text, View, ScrollView} from 'react-native';
//import { StackNavigator } from 'react-navigation';
import StyleSheet from './styles';

export default class InfoScreen extends React.Component {
	static navigationOptions = {
		title: 'Informacje o aplikacji',
	};
  
  render() {
      return (
      <View style={StyleSheet.appPanel}>
			<ScrollView>
				<Text style={StyleSheet.textStyle}>Gra IT Quiz powstała w ramach przedmiotu Programowanie Systemów Mobilnych na uniwersytecie Ekonomicznym w Krakowie.</Text>
				<Text style={StyleSheet.textStyle}>IT Quiz, jak sama nazwa wskazuje, jest grą typu quiz. Po wybraniu kategorii, gracz ma szansę popisać się swoją wiedzą informatyczną.</Text>
				<Text style={StyleSheet.textStyle}>Gra przeznaczona jest zarówno dla studentów kierunków informatycznych, jak i dla wszystkich zainteresowanych tematyką informatyczną.</Text>
				<Text style={StyleSheet.textStyle}>Gra wymaga dostępu do internetu!</Text>
				<Text style={StyleSheet.textStyle}>Autor: Dominik Jaskólski, Karolina Dylewska, rok: 2018</Text>
			</ScrollView>
      </View>
    );
  }
}

