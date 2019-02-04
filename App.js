import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 10
    }

    // fabien is great !!!, no he is AMAZING !!!
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
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',

          backgroundColor: '#fff',
        }}
      >

        <Text
          style={{
            fontSize: 200,
          }}
        >
          {count}
        </Text>

        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity
            onPress={()=>{
              this.setState({
                count: count + 1
              })
            }}
          >
            <Text
              style={{
                fontSize: 100
              }}
            >
              {'+'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress = {()=>{
              this.setState({
                count: count - 1
              })
            }}
          >
            <Text>
              {'-'}
            </Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity
          onPress={this.HandleReset}
        >
          <Text>
            {'Reset'}
          </Text>
        </TouchableOpacity>

      </View>

    );
  }
}
