import React from 'react'
import { StyleSheet, View } from 'react-native'

export default class PlusMinusWrapper extends React.Component {
  render() {
    const {
      children
    } = this.props

    return (
      <View
        style={[                              
          styles.plusMinusWrapper,
        ]}
      >
        {children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  plusMinusWrapper: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
})