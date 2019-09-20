import React from 'react';

import { ScrollView, StyleSheet } from 'react-native';

import { Button } from 'react-native-paper';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 8,
  },
  button: {
    marginBottom: 4,
  },
});

const renderCanendarIcon = () => (
  <EvilIcons name="calendar" color="white" size={20} />
);

const PaperScreen = ({ navigation }) => (
  <ScrollView contentContainerStyle={styles.scrollContainer}>
    <Button
      style={styles.button}
      icon="camera"
      mode="contained"
      onPress={() => navigation.navigate('First')}>
      Botão de camera
    </Button>
    <Button
      icon={renderCanendarIcon}
      mode="contained"
      onPress={() => navigation.navigate('Tabs')}>
      Tab navigator
    </Button>
  </ScrollView>
);

export default PaperScreen;
