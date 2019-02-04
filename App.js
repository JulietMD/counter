import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const VISIBLE_STYLE = {
  borderColor: '#000',
  borderWidth: 1,
}

const BUTTON_FONT_SIZE = 150
const INITIAL_COUNT = 10

const ON_ZERO_COLOR = '#FF0000'
const DEFAULT_COLOR = '#00FF00'

// TODO disable the minus button
// TODO reset should not be active if the value is alreay the initail one
// TODO I want from 10 to 0 lower I go, more close to ON_ZERO_COLOR the number should be over 9 if should be DEFAULT_COLOR

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: INITIAL_COUNT
    }
  }

  HandleReset = () => {
    this.setState({
      count: INITIAL_COUNT
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
            width: '70%',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: BUTTON_FONT_SIZE * 2/3,
              aspectRatio: 1,
            }}
            onPress={()=>{
              this.setState({
                count: count + 1
              })
            }}
          >
            <Text
              style={{
                fontSize: BUTTON_FONT_SIZE,
                color: '#3FE80C',
                marginTop: BUTTON_FONT_SIZE * - 1/3,
              }}
            >
              {'+'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: BUTTON_FONT_SIZE * 2/3,
              aspectRatio: 1,
              display: count <= 0 ? 'none' : 'flex',
            }}
            onPress = {()=>{
              this.setState({
                count: count - 1
              })
            }}
          >
            <Text
              style={[
                styles.plusMinusButtonText, 
                styles.minusButtonText,
              ]}
            >
              {'-'}
            </Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity
          onPress={this.HandleReset}
          style={{
            marginTop: 50,
          }}
        >
          <Text
            style={{
              fontSize: 50,
            }}
          >
            {'Reset'}
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  counter: {

  },
  plusMinusWrapper: {

  },
  plusButtonText: {
  },
  minusButtonText: {
    color: '#E82C0C',
  },
  plusMinusButtonText: {
    fontSize: BUTTON_FONT_SIZE,
    marginTop: BUTTON_FONT_SIZE * - 1/3,
  },
  plusMinusButton: {

  },
  resetButton: {

  },
  resetButtonText: {

  },
})