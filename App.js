import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import {BUTTON_FONT_SIZE, INITIAL_COUNT} from './constant'
import PlusMinusWrapper from './plus-minus-wrapper'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: INITIAL_COUNT
    }
  }

  HandleReset = () => {       //Reset
    this.setState({
      count: INITIAL_COUNT
    })
  }

  HandlePlus = () => {      //Plus
    this.setState({
      count: this.state.count + 1
    })
  }

  HandleMinus = () => {       //Minus
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    const {
      count,
    } = this.state

 canGoDown = count > 0;
 canNotReset = count === INITIAL_COUNT;         

    return (
      <View
        style={[                                //The outer wrapper
          styles.outerWrapper,
        ]}
      >
        <Text                                   // The counter
          style={[
            styles.counter, 
          ]}
        >
          {count}
        </Text>

        <PlusMinusWrapper>
          <TouchableOpacity                     //Add '+' Button
            style={[
              styles.plusMinusButton,
            ]}
            onPress={this.HandlePlus}
          >
            <Text
              style={[
                styles.plusButtonText,
                styles.plusMinusButtonText,
              ]}
            >
              {'+'}
            </Text>  
          </TouchableOpacity>                  

          <TouchableOpacity                    //Minus '-' button
            style={[
              styles.plusMinusButton,
            ]}
            onPress = {canGoDown 
              ? (this.HandleMinus)
              : null
            }
          >
            <Text
              style={[
                styles.plusMinusButtonText, 
                styles.minusButtonText, 
                canGoDown ? null : [styles.disabled],
              ]}
            >
              {'-'}
            </Text>
          </TouchableOpacity>
        </PlusMinusWrapper>
        
        <TouchableOpacity                       // 'Reset' button
          onPress={canNotReset
            ? null
            : this.HandleReset
          }

          style={[
            styles.resetButton, 
          ]}
        >
          <Text
            style={[
              styles.resetButtonText,
              canNotReset ? [styles.disabled] : null,
            ]}
          >
            {'Reset'}
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  
  counter: {
    fontSize: 200,
  },

  plusMinusWrapper: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-around',

  },
  plusButtonText: {
    color: '#3FE80C',
  },

  minusButtonText: {
    color: '#E82C0C',
  },

  plusMinusButtonText: {
    fontSize: BUTTON_FONT_SIZE,
    marginTop: BUTTON_FONT_SIZE * - 1/3,
  },

  plusMinusButton: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: BUTTON_FONT_SIZE * 2/3,
    aspectRatio: 1,
  },

  resetButton: {
    marginTop: 50,
  },

  resetButtonText: {
    fontSize: 50,
    color: 'black',
  },

  disabled: {
    opacity: 0.5,
  }
})