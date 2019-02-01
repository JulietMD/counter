import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  render() {
    const {
      count,
    } = this.state

    return (
      <View style={styles.container}>
        <Text>
          {count}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
