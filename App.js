import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalendarPicker from './CalendarPicker';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CalendarPicker
          startFromMonday={false}
          allowRangeSelection={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100,
  },
});
