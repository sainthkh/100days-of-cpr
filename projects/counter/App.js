/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useReducer} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-elements';

export default function App() {
  let [state, dispatch] = useReducer(function (state, action) {
    switch(action.type) {
      case 'increment': return { count: state.count + 1 };
      case 'decrement': return { count: state.count - 1 };
      default: throw new Error();
    }
  }, { count: 0 });

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Simple Counter</Text>
      <Text style={styles.instructions}>{state.count}</Text>
      <View style={styles.buttonsWrap}>
        <View style={styles.buttons}>
          <Button onPress={() => dispatch({ type: 'increment'})} title="Inc" buttonStyle={{ marginRight: 10, }}/>
          <Button onPress={() => dispatch({ type: 'decrement'})} title="Dec" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonsWrap: {
    height: 35,
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
  },
});
