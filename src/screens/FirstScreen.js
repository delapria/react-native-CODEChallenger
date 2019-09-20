import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Titulo from '../components/Titulo';
import DeviceInfo from 'react-native-device-info';
import Mathematic from '../utils/Math';
import { Button } from 'react-native-paper';

export default class FirstScreen extends Component {
  state = {
    bateryLevel: 0,
    sumResult: 0,
  };

  async componentDidMount() {
    // DeviceInfo.getBatteryLevel().then(Level => {
    //   this.setState({ bateryLevel: Level });
    // });
    // Mathematic.sum(1, 2).then(valor => {
    //   this.setState({ sumResult: valor });
    // }).catch(error => {});
    try {
      const sumResult = await Mathematic.sum(5, 5);
      const level = await DeviceInfo.getBatteryLevel();
      this.setState({ bateryLevel: level, sumResult });
    } catch (error) {
      console.log(error);
    }
  }

  onVoltarPress = () => {
    this.props.navigation.goBack();
  };

  render() {
    const { bateryLevel, sumResult } = this.state;
    const device = DeviceInfo.getDeviceCountry();
    const freeDiskStorage = DeviceInfo.getFreeDiskStorage();
    return (
      <View>
        <SafeAreaView>
          <Titulo textColor="blue">Titulo do meu App</Titulo>
          <Titulo textColor="red">Titulo vermelho</Titulo>
          <Text>País: {device}</Text>
          <Text>Espaço disco: {freeDiskStorage}</Text>
          <Text>Bateria: {bateryLevel}</Text>
          <Text>Soma feita no Java: {sumResult}</Text>
          <Button onPress={this.onVoltarPress}>Voltar</Button>
        </SafeAreaView>
      </View>
    );
  }
}
