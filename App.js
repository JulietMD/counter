import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 10
    }

  }

  HandleReset = () => {
    this.setState({
      count: 0
    })
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

        <Button title = {'Reset'}
         onPress={this.HandleReset}
        />   

        <Button title = {'+'}
          onPress={()=>{
            this.setState({
              count: count + 1
            })
          }}
        />

        <Button title = {'-'}
          onPress = {()=>{
            this.setState({
              count: count - 1
            })
          }}
        />

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
