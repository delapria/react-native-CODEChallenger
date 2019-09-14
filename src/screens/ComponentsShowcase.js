import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import imgPaisagem from '../assets/teste.jpg';

const MeuTouchable =
  Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

const styles = StyleSheet.create({
  redBox: {
    backgroundColor: 'red',
    height: 50,
    width: 50,
    borderWidth: 1,
    borderColor: 'black',
  },
  button: {
    padding: 8,
    margin: 4,
    backgroundColor: '#1155ff',
    borderRadius: 4,
    elevation: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default class ComponentsShowcase extends Component {
  state = {
    inputValue: '',
  };

  renderFlexbox = () => {
    return (
      <View
        style={{
          backgroundColor: 'yellow',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
        <View style={styles.redBox}></View>
        <View
          style={{
            backgroundColor: 'red',
            height: 50,
            width: 50,
            borderWidth: 1,
            borderColor: 'black',
          }}></View>
        <View
          style={{
            backgroundColor: 'red',
            height: 50,
            width: 50,
            borderWidth: 1,
            borderColor: 'black',
          }}></View>
        <View
          style={{
            backgroundColor: 'red',
            height: 50,
            width: 50,
            borderWidth: 1,
            borderColor: 'black',
          }}></View>
        <View
          style={{
            backgroundColor: 'red',
            height: 50,
            width: 50,
            borderWidth: 1,
            borderColor: 'black',
          }}></View>
        <View
          style={{
            backgroundColor: 'red',
            height: 50,
            width: 50,
            borderWidth: 1,
            borderColor: 'black',
          }}></View>
        <View
          style={{
            backgroundColor: 'red',
            height: 50,
            width: 50,
            borderWidth: 1,
            borderColor: 'black',
          }}></View>
        <View
          style={{
            backgroundColor: 'red',
            height: 50,
            width: 50,
            borderWidth: 1,
            borderColor: 'black',
          }}></View>
      </View>
    );
  };

  renderText = () => {
    return (
      <View>
        <Text style={{ fontSize: 30, color: 'green' }}>
          While the included VoiceTest app works without explicit permissions
          checks and requests,{' '}
          <Text style={{ fontWeight: 'bold', backgroundColor: 'blue' }}>
            React-Native
          </Text>
        </Text>
      </View>
    );
  };

  renderImages = () => {
    return (
      <View>
        <Image
          source={{
            uri:
              'https://i1.wp.com/emotioncard.com.br/wp-content/uploads/2019/05/paisagem36.jpg',
          }}
          style={{
            width: 360,
            height: 200,
            borderColor: 'red',
            borderWidth: 1,
          }}
          resizeMode="contain"
        />
        <Image
          source={imgPaisagem}
          style={{
            width: 360,
            height: 200,
            borderColor: 'blue',
            borderWidth: 1,
          }}
          resizeMode="contain"
        />
      </View>
    );
  };

  onChangeText = text => {
    this.setState({ inputValue: text });
  };

  renderInput = () => {
    return (
      <View style={{ padding: 8 }}>
        <TextInput
          style={{ borderColor: 'black', borderWidth: 1 }}
          onChangeText={this.onChangeText}
        />
        <Text>{this.state.inputValue}</Text>
      </View>
    );
  };

  //{/*keyboardShouldPersistTaps={}*/} propriedade do ScrollView
  render() {
    return (
      <View>
        <ScrollView>
          {this.renderInput()}
          {this.renderFlexbox()}
          {this.renderText()}
          {this.renderImages()}
          <View>
            <MeuTouchable onPress={() => {}}>
              <View style={styles.button}>
                <Text pointerEvents="none" style={styles.TextInput}>
                  Pressione
                </Text>
              </View>
            </MeuTouchable>
          </View>
        </ScrollView>
      </View>
    );
  }
}
